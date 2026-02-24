import { message } from 'antd'
import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()

    const submitHandler = async (e) => {
        e.preventDefault()
        const username = e.target.username.value
        const password = e.target.password.value
        try {
            const response = await axios.post("http://localhost:3000/api/auth/login", { username, password }, {
                withCredentials: true // sends cookies
            });

            if (response.data.success === true) { // ✅ check this
                navigate("/admin");
                message.success("Logged in successfully");
            } else {
                message.error("Login failed. Please check your credentials.");
            }
        } catch (error) {
            message.error(error.response?.data?.message || "Something went wrong");
        }

    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-gray-800">Welcome back</h2>
                <p className="text-sm text-gray-500 mt-1 mb-6">Log in to admin panel</p>

                <form className="space-y-4" onSubmit={submitHandler}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
                        <input required
                            name="username"
                            type="text"
                            placeholder="Enter your username"
                            className="w-full px-4 py-2 border border-gray-200 rounded-md bg-white text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                        />
                    </div>

                    <div>
                
                        <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                        <input required
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border border-gray-200 rounded-md bg-white text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                        />
                    </div>


                    <button type="submit" className="w-full py-2 mt-2 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600 text-white rounded-md font-medium shadow">Log in</button>
                </form>

            </div>
        </div>
    )
}

export default Login