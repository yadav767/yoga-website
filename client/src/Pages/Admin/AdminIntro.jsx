import { Button, Form, message, Upload } from 'antd';
import axios from 'axios';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { hideLoading, setLoading, setReloadData } from '../../redux/rootSclice';

const AdminIntro = () => {
  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.root)
  const intro = data.intros[0]
  const submitHandler = async (values) => {
    const image = values.image?.file || null
    try {
      dispatch(setLoading())
      const response = await axios.post("http://localhost:3000/api/yoga/update-intro", { ...values, image, _id: intro._id }, {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      })
      
      if (response.data.success) {
        message.success(response.data.message)
        dispatch(hideLoading())
        dispatch(setReloadData(true))
      } else {
        message.error("Failed to update Intro !")
        dispatch(hideLoading())
      }
    } catch (error) {
      dispatch(hideLoading())
      message.error("Failed to update Intro !")
    }
  }


  return (
    <div>
      <Form onFinish={submitHandler} layout='vertical'
        initialValues={data?.intros[0]}
      >
        <Form.Item name="image" label="Background Image:" >
          <Upload beforeUpload={() => false} maxCount={1}>
            <Button>Select Image</Button>
          </Upload>
        </Form.Item>
        <Form.Item name="thought1" label="Thought 1..." rules={[{ required: true, message: 'Please input your Thought!' }]}>
          <textarea placeholder='Thought...' />
        </Form.Item>
        <Form.Item name="thought2" label="Thought 2:" rules={[{ required: true, message: 'Please input your Thought' }]}>
          <textarea placeholder='Thought...' />
        </Form.Item>
        <div className='flex justify-end'>
          <button type='submit' className='px-10 py-2 bg-gray-800 rounded active:scale-95 transition-all text-white'>SAVE</button>
        </div>
      </Form>
    </div>
  )
}

export default AdminIntro