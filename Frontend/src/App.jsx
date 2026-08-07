import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Login from './pages/Login'
import Register from './pages/Register'
import Protected from './components/Protected'
import Dashboard from './pages/Dashboard.jsx'
import Settings from './pages/Settings.jsx'
import { Toaster } from 'react-hot-toast'
import VerifyOTP from './pages/VerifyOTP.jsx'
import Report from './pages/Report.jsx'
import PreviousAnalyzed from './pages/PreviousAnalyzed.jsx'
import Features from './pages/Features.jsx'


const App = () => {
  return (
    <>
      <Toaster
        position="top-center"
        containerStyle={{
          top: 88,
        }}
        toastOptions={{
          style: {
            background: "var(--color-card)",
            color: "var(--color-primary)",
            border: "1px solid var(--color-border)",
          }
        }}
      />
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/verify-otp' element={<VerifyOTP/>} />
        <Route path='/features' element={<Features/>} />

        <Route path='/dashboard' element={<Protected><Dashboard/></Protected>} />
        <Route path='/settings' element={<Protected><Settings/></Protected>} />
        <Route path='/dashboard/report/:reportID' element={<Protected><Report/></Protected>} />
        <Route path='/previous-analyzed' element={<Protected><PreviousAnalyzed/></Protected>} />
      </Routes>
    </>
  )
}

export default App
