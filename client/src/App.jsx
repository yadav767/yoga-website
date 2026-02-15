import React, { useEffect } from 'react'
import AppRoutes from './Routes/AppRoutes'
import Navigation from './Components/Navigation'
import { useNavigate } from 'react-router-dom'

const App = () => {
  const navigate=useNavigate()
  useEffect(()=>{
    navigate('/')
  },[])

  return (
    <div>
      <Navigation/> 
      <AppRoutes/>
    </div>
  )
}

export default App