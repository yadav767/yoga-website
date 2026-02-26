import { Button, Form, message, Upload } from 'antd';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { hideLoading, setLoading, setReloadData } from '../../redux/rootSclice';

const AdminStory = () => {
  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.root)
  const story = data.stories[0]
  const submitHandler = async (values) => {
    const image = values.image?.file || null
    try {
      dispatch(setLoading())
      const response = await axios.post("https://evolve-with-rahul.vercel.app/api/yoga/update-story", { ...values, image, _id: story._id }, {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      })
      
      if (response.data.success) {
        dispatch(hideLoading())
        message.success(response.data.message)
        dispatch(setReloadData(true))
      } else {
        message.error("Failed to update Story !")
        dispatch(hideLoading())
      }
    } catch (error) {
      dispatch(hideLoading())
      message.error("Failed to update Story !")
    }
  }

  return (
    <div>
      <Form onFinish={submitHandler} layout='vertical'
        initialValues={data?.stories[0]}
      >
        <Form.Item name="image" label="Background Image:" >
          <Upload beforeUpload={() => false} maxCount={1}>
            <Button>Select Image</Button>
          </Upload>
        </Form.Item>
        <Form.Item name="challenge" label="Challenge" rules={[{ required: true, message: 'Please input your challenge!' }]}>
          <textarea placeholder='Challenge...' />
        </Form.Item>
        <Form.Item name="transformation" label="Transformation" rules={[{ required: true, message: 'Please input your transformation !' }]}>
          <textarea placeholder='Transformation...' />
        </Form.Item>
        <div className='flex justify-end'>
          <button type='submit' className='px-10 py-2 bg-gray-800 rounded active:scale-95 transition-all text-white'>SAVE</button>
        </div>
      </Form>
    </div>
  )
}

export default AdminStory