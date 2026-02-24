import { Button, Form, message, Modal, Upload } from 'antd';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { hideLoading, setLoading, setReloadData } from '../../redux/rootSclice';
import { useState } from 'react';


const AdminExperience = () => {
  const [showAddEditModel, setShowAddEditModel] = useState(false)
  const [selectedItemForEdit, setSelectedItemForEdit] = useState(null)
  const [type, setType] = useState("add")
  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.root)
  const experiences = data.experiences
  const submitHandler = async (values) => {
    setShowAddEditModel(false)
    const image = values.image?.file || null

    try {
      dispatch(setLoading())

      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("period", values.period);
      formData.append("description", values.description);
      formData.append("image", image);


      let response
      if (selectedItemForEdit) {
        formData.append("_id", selectedItemForEdit._id);
        response = await axios.post("http://localhost:3000/api/yoga/update-experience", formData, {
          headers: { "Content-Type": "multipart/form-data" }
        })
      } else {
        response = await axios.post("http://localhost:3000/api/yoga/add-experience", formData, {
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
      const response = await axios.post("http://localhost:3000/api/yoga/delete-experience", { _id: item._id })
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
          className='px-4 rounded active:scale-95 transition-all py-2 bg-green-600 text-black'>Add Experience</button>
      </div>
      <div className="grid grid-cols-4 max-sm:grid-cols-1 gap-5">
        {experiences.map((experience, idx) => (
          <div key={idx} className='shadow border flex flex-col justify-between gap-4 p-5 border-gray-700'>
            <div className=' h-40    flex items-center justify-center'>
              <img className='h-full w-full object-cover' src={experience.certificate} alt="" />
            </div>
            <h1 className=' font-semibold text-xl'>{experience.title}</h1>

            <h1 className='text-green-400 italic'>{experience.period}</h1>
            <p>{experience.description}</p>

            <div className='flex justify-end gap-2'>
              <button onClick={() => { onDelete(experience) }} className='px-4 rounded active:scale-95 transition-all py-2 bg-red-500 text-white'>Delete</button>
              <button onClick={() => {
                setSelectedItemForEdit(experience)
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
            title={selectedItemForEdit ? "Edit Experience" : "Add Experience"}
            onCancel={() => {
              setShowAddEditModel(false)
              setSelectedItemForEdit(null)
            }}

          >
            <Form initialValues={selectedItemForEdit} layout='vertical' onFinish={submitHandler}>

              <Form.Item name="image" label="Image" >
                <Upload beforeUpload={() => false} maxCount={1}>
                  <Button>Add certificate </Button>
                </Upload>
              </Form.Item>
              <Form.Item name="title" label="Title" rules={[{ required: true, message: 'Please input title!' }]}>
                <input type='text' placeholder='Title...' />
              </Form.Item>
              <Form.Item name="period" label="Period" rules={[{ required: true, message: 'Please input period!' }]}>
                <input type='text' placeholder='Period...' />
              </Form.Item>
              <Form.Item name="description" label="Description" rules={[{ required: true, message: 'Please input description...' }]}>
                <textarea placeholder='paragraph...' />
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

export default AdminExperience