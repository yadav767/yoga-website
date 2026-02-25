import { Button, Form, message, Modal, Upload } from 'antd';
import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { hideLoading, setLoading, setReloadData } from '../../redux/rootSclice';
import "../../Pages/Admin.css"


const AdminAbout = () => {
  const [showAddEditModel, setShowAddEditModel] = useState(false)
  const [selectedItemForEdit, setSelectedItemForEdit] = useState(null)
  const [type, setType] = useState("add")
  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.root)
  const abouts = data.abouts[0]
  const achievements = abouts.achievement

  //image+para update handler
  const submitHandler = async (values) => {
    const image = values.image?.file || null
    try {
      dispatch(setLoading())
      const formData = new FormData()
      formData.append("_id", abouts._id)
      formData.append("para", values.para)
      formData.append("achievement", JSON.stringify(achievements))
      if (image) {
        formData.append("image", image)
      }
      const response = await axios.post("http://localhost:3000/api/yoga/update-about", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      })
      
      if (response.data.success) {
        message.success(response.data.message)
        dispatch(hideLoading())
        dispatch(setReloadData(true))
      } else {
        message.error("Failed to update About !")
        dispatch(hideLoading())
      }
    } catch (error) {
      dispatch(hideLoading())
      message.error("Failed to update About !")
    }
  }


  //Modal form achieveents
  const onFinish = async (values) => {
    try {
      dispatch(setLoading())
      const updatedAchievements = achievements.map((a, idx) =>
        idx === selectedItemForEdit.idx ? { ...a, ...values } : a
      )
      const response = await axios.post("http://localhost:3000/api/yoga/update-about", {
        _id: abouts._id,
        para: abouts.para,
        achievement: updatedAchievements
      })
      dispatch(hideLoading())
      if (response.data.success) {
        message.success("Achievement updated successfully!")
        dispatch(setReloadData(true))
        setShowAddEditModel(false)
        setSelectedItemForEdit(null)
      } else {
        message.error("Failed to update achievement!")
      }
    } catch (error) {
      dispatch(hideLoading())
      message.error("Failed to update achievement!")
    }

  }



  return (
    <div>
      <Form onFinish={submitHandler} layout='vertical'
        initialValues={{
          para: abouts.para
        }}
      >
        <Form.Item name="image" label="Background Image:" >
          <Upload beforeUpload={() => false} maxCount={1}>
            <Button>Select Image</Button>
          </Upload>
        </Form.Item>
        <Form.Item name="para" label="Paragraph..." rules={[{ required: true, message: 'Please input your Thought!' }]}>
          <textarea placeholder='Paragraph...' />
        </Form.Item>
        <div className='flex justify-end'>
          <button type='submit' className='px-10 py-2 bg-gray-800 rounded active:scale-95 transition-all text-white'>SAVE</button>
        </div>
      </Form>
      <div className="grid mt-3 grid-cols-3 max-sm:grid-cols-1 gap-5">
        {achievements.map((achievement, idx) => (
          <div key={idx} className='shadow border flex flex-col justify-between gap-4 p-5 border-gray-700'>
            <h1 className=' text-primary font-semibold text-xl'>{achievement.title}</h1>


            <hr />

            <h1>{achievement.description}</h1>

            <div className='flex justify-end gap-2'>
              {/* <button onClick={() => { onDelete(achievement) }} className='px-4 rounded active:scale-95 transition-all py-2 bg-red-500 text-white'>Delete</button> */}
              <button onClick={() => {
                setSelectedItemForEdit({ ...achievement, idx: idx })
                setShowAddEditModel(true)
                setType("edit")
              }} className='px-4 bg-green-300 rounded active:scale-95 transition-all py-2 bg-primary text-black'>Edit</button>
            </div>
          </div>
        ))}
      </div>
      <div>
        {
          (type == "add" || selectedItemForEdit) && (
            <Modal
              footer={null}
              open={showAddEditModel}
              title="Edit Achievement"
              onCancel={() => {
                setShowAddEditModel(false)
                setSelectedItemForEdit(null)
              }}

            >
              <Form initialValues={selectedItemForEdit} onFinish={onFinish} layout='vertical'>
                <Form.Item name="title" label="Title" rules={[{ required: true, message: 'Please input the title of the project' }]}>
                  <input placeholder='Title...' />
                </Form.Item>
                <Form.Item name="description" label="Desciption" rules={[{ required: true, message: 'Please input project description!' }]}>
                  <textarea placeholder='Description...' />
                </Form.Item>
                <div className="flex justify-end gap-2">
                  <button type='submit' className='px-4 rounded active:scale-95 transition-all py-2 bg-yellow-500 text-black'>Update</button>
                </div>
              </Form>
            </Modal>
          )
        }
      </div>
    </div>
  )
}

export default AdminAbout