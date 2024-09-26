import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  let navigate=useNavigate()

  let[emp,setEmp]=useState({
    username : "",
    useremail : ""
  })

  let{username,useremail}=emp

  let handleSubmit=(event)=>{
    event.preventDefault()
    console.log("state Variable" , emp);
    try
    {
      let payLoad = {username,useremail}
      axios.post("http://localhost:5000/employee",payLoad)
      toast.success("Successfully")
      navigate("/viewall")
    }
    catch(e)
    {
      console.log(e);
      
    }
    finally
    {
      setEmp({
        username : "" , 
        useremail : ""
      })
    }
  }

  let handleChange=(event)=>{
   let{name,value}=event.target
   setEmp({...emp,[name]:value})
  }
  
  
  return (
    <>
    <form>
      <h1>Welcome To Form</h1>
      <legend>ADD Employees</legend>

      <div>
        <label htmlFor="ename">Emp-Name : </label>
        <input type="text" id='ename' value={username} onChange={handleChange} name='username' required />
      </div>

      <div>
        <label htmlFor="eemail">Emp - Email :</label>
    <input type="email"  id='eemail' value={useremail} onChange={handleChange} name='useremail' required/>
      </div>

      <div>
        <button onClick={handleSubmit}>ADD</button>
      </div>
    </form>
    </>
  )
}

export default Home