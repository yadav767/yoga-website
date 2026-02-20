import { message } from "antd";
import axios from "axios";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Loader from "./Loader";

const ProtectedRoute = ({ children }) => {
    const [auth, setAuth] = useState(null); 

    useEffect(() => {
        axios.get("https://yoga-hq9u.onrender.com/api/auth/check-auth", { withCredentials: true })
            .then(res => setAuth(res.data.authenticated))
            .catch(() => {
                message.error("Authentication check failed. Please log in again.");
                setAuth(false)
            });
    }, []);

    if (auth === null) return <div><Loader/></div>; 
    if (!auth) return <Navigate to="/login" />;      
    return children;                                
}

export default ProtectedRoute