import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Login from './pages/Login'
import Register from './pages/Register'
import Protected from './components/Protected'


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Protected><Home/></Protected>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </>
  )
}

export default App