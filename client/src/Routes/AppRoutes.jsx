import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Components/About'
import Experience from '../Components/Experience'
import Offerings from '../Components/Offerings'
import Blog from '../Components/Blog'
import Contact from '../Components/Contact'

const AppRoutes = () => {
  return (

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/experience' element={<Experience />} />
      <Route path='/offerings' element={<Offerings />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/contact' element={<Contact />} />


    </Routes>
  )
}

export default AppRoutes