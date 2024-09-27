import React from 'react'
import { useNavigate } from 'react-router-dom'
import '/src/event.css'

const EventsPage = () => {

   let navigate = useNavigate()
  return (
    <>
    <div className="gallery-container">
      <div className="image-row">
        <div className="image-item">
          <img src="src/photos/courses.png" alt="Image 1" />
          <button onClick={()=>{navigate('/course')}} className="image-button">Course</button>
        </div>
        <div className="image-item">
          <img src="src/photos/placement-services.png" alt="Image 2" />
          <button onClick={()=>{navigate('/placement')}} className="image-button">Placement</button>
        </div>
      </div>
      <div className="image-row">
        <div className="image-item centered">
          <img src="src/photos/Contact-Us-PNG.png" alt="Image 3" />
          <button onClick={()=>{navigate('/contact')}} className="image-button">Contact</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default EventsPage