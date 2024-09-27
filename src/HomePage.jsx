import React from 'react'
import '/src/home.css'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  let navigate=useNavigate()
  return (
    <>
    <div className="background-container">
       <div>
        <button onClick={()=>{navigate('/events')}}>VIEW-OPENINGS</button>
       </div>
    </div>
    </>
  )
}

export default HomePage