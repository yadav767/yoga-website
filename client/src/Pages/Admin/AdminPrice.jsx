import { Form, message, Modal, Switch } from 'antd';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { hideLoading, setLoading, setReloadData } from '../../redux/rootSclice';
import { useState } from 'react';

const AdminPricing = () => {
  const [form] = Form.useForm()
  const [showAddEditModel, setShowAddEditModel] = useState(false)
  const [selectedItemForEdit, setSelectedItemForEdit] = useState(null)
  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.root)
  const pricings = data?.prices

  const submitHandler = async (values) => {
    
    const features = values.features.split(",").map(f => f.trim())
    const payload = { ...values, features, popular: values.popular || false, _id: selectedItemForEdit._id }

    try {
      dispatch(setLoading())
      const response = await axios.post("http://localhost:3000/api/yoga/update-price", payload)

      if (response.data.success) {
        message.success(response.data.message)
        setShowAddEditModel(false)
        setSelectedItemForEdit(null)
        form.resetFields()
        dispatch(setReloadData(true))
        dispatch(hideLoading())
      } else {
        message.error(response.data.message)
        dispatch(hideLoading())
      }
    } catch (error) {
      dispatch(hideLoading())
      message.error(error.message)
    }
  }

  return (
    <div>
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-5">
        {pricings.map((pricing, idx) => (
          <div key={idx} className='shadow border flex flex-col justify-between gap-4 p-5 border-gray-700 relative'>
            {pricing.popular && (
              <span className='absolute -top-3 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs px-3 py-1 rounded-full'>
                Most Popular
              </span>
            )}
            <h1 className='text-primary font-semibold text-xl'>{pricing.title}</h1>
            <p className='text-green-600 italic font-semibold'>{pricing.price}</p>
            <hr />
            <ul className='flex flex-col gap-2'>
              {pricing.features.map((feature, i) => (
                <li key={i} className='flex gap-2 items-start text-sm'>
                  <span className='text-green-600 mt-1'>›</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className='flex justify-end'>
              <button
                onClick={() => {
                  setSelectedItemForEdit(pricing)
                  setShowAddEditModel(true)
                  form.setFieldsValue({
                    ...pricing,
                    features: pricing.features.join(", ")
                  })
                }}
                className='px-4 rounded active:scale-95 transition-all py-2 bg-green-600 text-black'
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedItemForEdit && (
        <Modal
          footer={null}
          open={showAddEditModel}
          title="Edit Pricing"
          onCancel={() => {
            setShowAddEditModel(false)
            setSelectedItemForEdit(null)
            form.resetFields()
          }}
        >
          <Form form={form} layout='vertical' onFinish={submitHandler}>
            <Form.Item name="title" label="Title" rules={[{ required: true, message: 'Please input title!' }]}>
              <input type='text' placeholder='e.g. Group Classes' />
            </Form.Item>

            <Form.Item name="price" label="Price" rules={[{ required: true, message: 'Please input price!' }]}>
              <input type='text' placeholder='e.g. Starting from ₹3,000/month' />
            </Form.Item>

            <Form.Item
              name="features"
              label="Features (comma separated)"
              rules={[{ required: true, message: 'Please input features!' }]}
            >
              <textarea rows={4} placeholder='Feature 1, Feature 2, Feature 3...' />
            </Form.Item>

            <Form.Item name="popular" label="Most Popular?" valuePropName="checked">
              <Switch />
            </Form.Item>

            <div className="flex justify-end">
              <button
                type='submit'
                className='px-4 rounded active:scale-95 transition-all py-2 bg-green-600 text-black'
              >
                Update
              </button>
            </div>
          </Form>
        </Modal>
      )}
    </div>
  )
}

export default AdminPricing