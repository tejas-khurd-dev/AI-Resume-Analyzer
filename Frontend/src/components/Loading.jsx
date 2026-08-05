import React from 'react'
import {OrbitProgress} from "react-loading-indicators"

const Loading = () => {
  return (
    <div className='fixed inset-0 flex items-center justify-center'>
        <OrbitProgress color="#F5F5F7" size="medium" text="Loading" textColor="" />
    </div>
  )
}

export default Loading