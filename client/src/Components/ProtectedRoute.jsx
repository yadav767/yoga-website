import { message } from "antd";
import axios from "axios";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Loader from "./Loader";

const ProtectedRoute = ({ children }) => {
    const [auth, setAuth] = useState(null); 

    useEffect(() => {
        axios.get("http://localhost:3000/api/auth/check-auth", { withCredentials: true })
            .then(res => setAuth(res.data.authenticated))
            .catch(() => {
                setAuth(false)
            });
    }, []);

    if (auth === null) return <div><Loader/></div>; 
    if (!auth) return <Navigate to="/login" />;      
    return children;                                
}

export default ProtectedRoute