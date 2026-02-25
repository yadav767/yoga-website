import { Button, Form, message, Modal, Upload } from 'antd';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { hideLoading, setLoading, setReloadData } from '../../redux/rootSclice';
import "../../Pages/Admin.css"
import { useState } from 'react';

const AdminNutrition = () => {
  const [showAddEditModel, setShowAddEditModel] = useState(false)
  const [selectedItemForEdit, setSelectedItemForEdit] = useState(null)
  const [type, setType] = useState("add")
  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.root)
  const nutritions = data.nutritions
  const submitHandler = async (values) => {
    try {
      dispatch(setLoading())
      const response = await axios.post("http://localhost:3000/api/yoga/update-nutrition", { ...values, _id: selectedItemForEdit._id })
    if (response.data.success) {
      message.success(response.data.message)
      setShowAddEditModel(false);
      dispatch(setReloadData(true))
      dispatch(hideLoading())
      setSelectedItemForEdit(null)
    } else {
      message.error("Failed to update nutrition !")
    dispatch(hideLoading())

    }
  } catch (error) {
    dispatch(hideLoading())
    message.error("Failed to update nutrition !")
  }
}

return (
  <div>
    <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-5">
      {nutritions.map((nutrition, idx) => (
        <div key={idx} className='shadow border flex flex-col justify-between gap-4 p-5 border-gray-700'>

          <h1 className=' text-primary font-semibold text-xl'>{nutrition.heading}</h1>
          <hr />

          <h1>{nutrition.paragraph}</h1>
          <div className='flex justify-end gap-2'>

            <button onClick={() => {
              setSelectedItemForEdit(nutrition)
              setShowAddEditModel(true)
              setType("edit")
            }} className='px-6 cursor-pointer rounded active:scale-95 transition-all py-2 bg-green-600 text-black'>Edit</button>
          </div>
        </div>
      ))}
    </div>
    {
      (type == "add" || selectedItemForEdit) && (
        <Modal
          footer={null}
          open={showAddEditModel}
          title={selectedItemForEdit ? "Edit Nutrition" : "Add Nutrition"}
          onCancel={() => {
            setShowAddEditModel(false)
            setSelectedItemForEdit(null)
          }}

        >
          <Form initialValues={selectedItemForEdit} layout='vertical' onFinish={submitHandler}>

            <Form.Item name="heading" label="Heading" rules={[{ required: true, message: 'Please input heading!' }]}>
              <input type='text' placeholder='Heading...' />
            </Form.Item>
            <Form.Item name="paragraph" label="Paragraph" rules={[{ required: true, message: 'Please input Paragraph' }]}>
              <textarea placeholder='Paragraph...' />
            </Form.Item>

            <div className="flex justify-end gap-2">
              <button type='submit' className='px-6 rounded active:scale-95 transition-all py-2 bg-green-600 text-black'>Update</button>
            </div>
          </Form>
        </Modal>
      )
    }
  </div>
)
}

export default AdminNutrition