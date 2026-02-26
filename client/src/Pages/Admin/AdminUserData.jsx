import { message } from 'antd';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { hideLoading, setLoading, setReloadData } from '../../redux/rootSclice';

const AdminUserData = () => {
  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.root)
  const users = data.forms

  const handleDone = async (user) => {
    try {
      dispatch(setLoading())
      const response = await axios.post("https://evolve-with-rahul.vercel.app/api/yoga/mark-done", {
        _id: user._id,
        isDone: !user.isDone
      })
      dispatch(hideLoading())
      if (response.data.success) {
        message.success(response.data.message)
        dispatch(setReloadData(true))
      } else {
        message.error(response.data.message)
      }
    } catch (error) {
      dispatch(hideLoading())
      message.error(error.message)
    }
  }

  const onDelete = async (user) => {
    try {
      dispatch(setLoading())
      const response = await axios.post("https://evolve-with-rahul.vercel.app/api/yoga/delete-user", { _id: user._id })
      dispatch(hideLoading())
      if (response.data.success) {
        message.success(response.data.message)
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
      <div className="mb-4">
        <h2 className="text-xl font-semibold">All Users</h2>
        <p className="text-gray-500 text-sm">{users.length} total submissions</p>
      </div>

      {/* ===== DESKTOP TABLE (md and above) ===== */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-green-600 text-white">
              <th className="border border-gray-300 px-4 py-3 text-left">#</th>
              <th className="border border-gray-300 px-4 py-3 text-left">Full Name</th>
              <th className="border border-gray-300 px-4 py-3 text-left">Email</th>
              <th className="border border-gray-300 px-4 py-3 text-left">Phone</th>
              <th className="border border-gray-300 px-4 py-3 text-left">Plan</th>
              <th className="border border-gray-300 px-4 py-3 text-left">Message</th>
              <th className="border border-gray-300 px-4 py-3 text-left">Date</th>
              <th className="border border-gray-300 px-4 py-3 text-center">Done</th>
              <th className="border border-gray-300 px-4 py-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr
                key={idx}
                className={`transition-all ${user.isDone ? 'bg-green-50' : 'bg-white'} hover:bg-gray-50`}
              >
                <td className="border border-gray-200 px-4 py-3 text-gray-500">{idx + 1}</td>
                <td className="border border-gray-200 px-4 py-3 font-medium">{user.fullName}</td>
                <td className="border border-gray-200 px-4 py-3 text-blue-600">
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </td>
                <td className="border border-gray-200 px-4 py-3">
                  <a href={`tel:${user.phoneNumber}`}>{user.phoneNumber}</a>
                </td>
                <td className="border border-gray-200 px-4 py-3">
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                    {user.plan || "Not Selected"}
                  </span>
                </td>
                <td className="border border-gray-200 px-4 py-3 max-w-xs truncate text-gray-600">
                  {user.message}
                </td>
                <td className="border border-gray-200 px-4 py-3 text-gray-500 text-sm">
                  {new Date(user.createdAt).toLocaleDateString('en-IN', {
                    day: '2-digit', month: 'short', year: 'numeric'
                  })}
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center">
                  <input
                    type="checkbox"
                    checked={user.isDone || false}
                    onChange={() => handleDone(user)}
                    className="w-5 h-5 accent-green-600 cursor-pointer"
                  />
                </td>
                <td className="border border-gray-200 px-4 py-3 text-center">
                  <button
                    onClick={() => onDelete(user)}
                    className="px-3 py-1 rounded active:scale-95 transition-all bg-red-500 text-white text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan={9} className="text-center py-10 text-gray-400">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* ===== MOBILE CARDS (below md) ===== */}
      <div className="flex flex-col gap-4 md:hidden">
        {users.length === 0 && (
          <p className="text-center text-gray-400 py-10">No users found</p>
        )}
        {users.map((user, idx) => (
          <div
            key={idx}
            className={`border rounded-lg p-4 shadow-sm flex flex-col gap-3 transition-all ${user.isDone ? 'bg-green-50 border-green-300' : 'bg-white border-gray-200'}`}
          >
            {/* Header row */}
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-xs">#{idx + 1}</span>
              <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                {user.plan || "Not Selected"}
              </span>
            </div>

            {/* Name */}
            <h3 className="font-semibold text-lg">{user.fullName}</h3>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <span className="text-xs text-gray-400 uppercase">Email</span>
              <a href={`mailto:${user.email}`} className="text-blue-600 text-sm">{user.email}</a>
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1">
              <span className="text-xs text-gray-400 uppercase">Phone</span>
              <a href={`tel:${user.phoneNumber}`} className="text-sm">{user.phoneNumber}</a>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1">
              <span className="text-xs text-gray-400 uppercase">Message</span>
              <p className="text-sm text-gray-600">{user.message}</p>
            </div>

            {/* Date */}
            <div className="flex flex-col gap-1">
              <span className="text-xs text-gray-400 uppercase">Date</span>
              <p className="text-sm text-gray-500">
                {new Date(user.createdAt).toLocaleDateString('en-IN', {
                  day: '2-digit', month: 'short', year: 'numeric'
                })}
              </p>
            </div>

            {/* Actions */}
            <div className="flex justify-between items-center pt-2 border-t border-gray-200">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={user.isDone || false}
                  onChange={() => handleDone(user)}
                  className="w-5 h-5 accent-green-600 cursor-pointer"
                />
                <span className="text-sm text-gray-600">
                  {user.isDone ? 'Contacted ✅' : 'Mark as Done'}
                </span>
              </label>

              <button
                onClick={() => onDelete(user)}
                className="px-3 py-1 rounded active:scale-95 transition-all bg-red-500 text-white text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default AdminUserData