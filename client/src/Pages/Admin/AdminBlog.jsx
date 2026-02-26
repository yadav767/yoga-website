import { Button, Form, message, Modal, Upload } from 'antd';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { hideLoading, setLoading, setReloadData } from '../../redux/rootSclice';
import { useState } from 'react';


const AdminBlog = () => {
  const [showAddEditModel, setShowAddEditModel] = useState(false)
  const [selectedItemForEdit, setSelectedItemForEdit] = useState(null)
  const [type, setType] = useState("add")
  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.root)
  const blogs = data.blogs
  const submitHandler = async (values) => {
    setShowAddEditModel(false)
    const image = values.image?.file || null
    try {
      dispatch(setLoading())
      let response
      if (selectedItemForEdit) {
        response = await axios.post("https://evolve-with-rahul.vercel.app/api/yoga/update-blog", { ...values, image, _id: selectedItemForEdit._id }, {
          headers: { "Content-Type": "multipart/form-data" }
        })
      } else {
        response = await axios.post("https://evolve-with-rahul.vercel.app/api/yoga/add-blog", { ...values, image }, {
          headers: { "Content-Type": "multipart/form-data" }
        })
      }
      
      if (response.data.success) {
        message.success(response.data.message)
        setShowAddEditModel(false);
        dispatch(setReloadData(true))
        dispatch(hideLoading())
        setSelectedItemForEdit(null)
      } else {
        message.error(response.data.message)
        dispatch(hideLoading())
      }
    } catch (error) {
      dispatch(hideLoading())
      message.error(error.message)

    }
  }

  const onDelete = async (item) => {
    try {
      dispatch(setLoading())
      const response = await axios.post("https://evolve-with-rahul.vercel.app/api/yoga/delete-blog", { _id: item._id })
      dispatch(hideLoading())
      if (response.data.success) {
        message.success(response.data.message)
        dispatch(hideLoading())
        dispatch(setReloadData(true))

      } else {
        message.error(response.data.message)
      }

    } catch (error) {
      dispatch(hideLoading())
      message.error(error.message)
    }
  }

  return (
    <div>
      <div className=" mb-2 flex justify-end">
        <button onClick={() => {
          setType("add")
          setSelectedItemForEdit(null)
          setShowAddEditModel(true)
        }}
          className='px-4 rounded active:scale-95 transition-all py-2 bg-green-600 text-black'>Add Blog</button>
      </div>
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-5">
        {blogs.map((blog, idx) => (
          <div key={idx} className='shadow border flex flex-col justify-between gap-4 p-5 border-gray-700'>
            <h1 className=' text-primary font-semibold text-xl'>{blog.heading}</h1>
            <div className=' h-60  flex items-center justify-center'>
              <img className='h-full w-full object-cover' src={blog.url} alt="" />
            </div>
            <hr />
            <h1>{blog.paragraph}</h1>
            <p>{blog.details}</p>

            <div className='flex justify-end gap-2'>
              <button onClick={() => { onDelete(blog) }} className='px-4 rounded active:scale-95 transition-all py-2 bg-red-500 text-white'>Delete</button>
              <button onClick={() => {
                setSelectedItemForEdit(blog)
                setShowAddEditModel(true)
                setType("edit")
              }} className='px-4 rounded active:scale-95 transition-all py-2 bg-green-600 text-green'>Edit</button>
            </div>
          </div>
        ))}
      </div>
      {
        (type == "add" || selectedItemForEdit) && (
          <Modal
            footer={null}
            open={showAddEditModel}
            title={selectedItemForEdit ? "Edit Blog" : "Add Blog"}
            onCancel={() => {
              setShowAddEditModel(false)
              setSelectedItemForEdit(null)
            }}

          >
            <Form initialValues={selectedItemForEdit} layout='vertical' onFinish={submitHandler}>
              <Form.Item name="image" label="Image">
                <Upload beforeUpload={() => false} maxCount={1}>
                  <Button>Select Image</Button>
                </Upload>
              </Form.Item>
              <Form.Item name="heading" label="Heading" rules={[{ required: true, message: 'Please input Heading!' }]}>
                <input type='text' placeholder='Description...' />
              </Form.Item>
              <Form.Item name="paragraph" label="Paragraph" rules={[{ required: true, message: 'Please input blog paragraph' }]}>
                <textarea placeholder='paragraph...' />
              </Form.Item>
              <Form.Item name="details" label="Details" rules={[{ required: true, message: 'Please input blog details' }]}>
                <input type='text' placeholder='Details...' />
              </Form.Item>
              <div className="flex justify-end gap-2">
                <button type='submit' className='px-4 rounded active:scale-95 transition-all py-2 bg-green-600 text-black'>{selectedItemForEdit ? "Update" : "Add"}</button>
              </div>
            </Form>
          </Modal>
        )
      }
    </div>
  )
}

export default AdminBlog