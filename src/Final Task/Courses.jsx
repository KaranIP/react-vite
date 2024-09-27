import React from 'react'
import '/src/Final Task/coursess.css'

const Courses = () => {
  const course = [
    { title: 'HTML', description: 'Learn the basics of HTML and structure your web pages.', img: 'src/photos/HTML5_badge.png' },
    { title: 'CSS', description: 'Master CSS and style your web pages beautifully.', img: 'src/photos/702306.png' },
    { title: 'JavaScript', description: 'Get hands-on with JavaScript and add interactivity to your sites.', img: 'src/photos/javascript-icon-png-favpng-ruDBDhxzVxWHgXXtH2Hi1XzJf.jpg' },
    { title: 'React.js', description: 'Dive into React.js and build dynamic web applications.', img: 'src/photos/react-1-logo-png-transparent.png' }
  ];
    
  
    return (
      <div className="courses-container">
        <h1 className="heading">Our Courses</h1>
        <div className="courses-grid">
        {course.map((course, index) => (
            <div className="course-card" key={index}>
            
              <img src={course.img} alt={course.title} className="course-image" />
              <h2 className="course-title">{course.title}</h2>
              <p className="course-description">{course.description}</p>
              <button className="course-button">Learn More</button>
            </div>
           ))}
        </div>
        
      </div>
    );
}

export default Courses