import React, { useEffect } from 'react'
// import AppRoutes from './Routes/AppRoutes'
import Navigation from './Components/Navigation'
import { BrowserRouter, Routes, useNavigate, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Home from './Pages/Home'
import About from './Components/About'
import Experience from './Components/Experience'
import Offerings from './Components/Offerings'
import Blog from './Components/Blog'
import Contact from './Components/Contact'
import Loader from './Components/Loader'
import { hideLoading, setLoading, setReloadData, setYogaData } from './redux/rootSclice'
import axios from 'axios'
import Admin from './Pages/Admin/Admin'

const App = () => {
  const { loading, reloadData, data } = useSelector((state) => state.root)
  const dispatch = useDispatch()

  const hideNavbar = location.pathname === "/admin";
  const getYogaData = async () => {
    try {
      dispatch(setLoading())
      const response = await axios.get("http://localhost:3000/api/yoga/get-all-data")
      console.log(response.data);
      dispatch(setYogaData(response.data))
      dispatch(setReloadData())
      dispatch(hideLoading())
    } catch (error) {
      console.log(error);
      dispatch(hideLoading())
    }
  }

  useEffect(() => {
    if (!data) {
      getYogaData()
    }
  }, [data])

  useEffect(() => {
    if (reloadData) {
      getYogaData()
    }
  }, [reloadData])

  return (
    <>
      {loading ? <Loader /> : null}
      {data && (
        <div>
          {!hideNavbar && <Navigation />} 
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='/offerings' element={<Offerings />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/admin' element={<Admin />} />
          </Routes>
        </div>
      )}
    </>
  )
}

export default App