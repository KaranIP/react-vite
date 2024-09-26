import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {

  let navigate=useNavigate()

  let[emp,setEmp]=useState({
    username : "",
    useremail : ""
  })

  let{username,useremail}=emp

  let {id}=useParams()
  console.log("Slug", id);
  

  let fetchData=async()=>{
    let {data}=await axios.get("http://localhost:5000/employee/" +id)
   // console.log(data);
   setEmp(data)
    
  }

  useEffect(()=>{
    try
    {
        fetchData()
    }
    catch(e)
    {
        console.log(e);
        
    }
    finally
    {

    }
  })

  let handleSubmit=(event)=>{
    event.preventDefault()
    console.log("state Variable" , emp);
    try
    {
      let payLoad = {username,useremail}
      axios.put("http://localhost:5000/employee/"+id,payLoad)
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
      <h1>Welcome To Update Page</h1>

      <div>
        <label htmlFor="ename">Emp-Name : </label>
        <input type="text" id='ename' value={username} onChange={handleChange} name='username' required />
      </div>

      <div>
        <label htmlFor="eemail">Emp - Email :</label>
    <input type="email"  id='eemail' value={useremail} onChange={handleChange} name='useremail' required/>
      </div>

      <div>
        <button onClick={handleSubmit}>UPDATE</button>
      </div>
    </form>
    </>
  )
}

export default Update

// useParams() ---> Hook-->React route Dom library
//? we can access extra parameter which is coming on URL BY destructuring paticular Slug

//Slug