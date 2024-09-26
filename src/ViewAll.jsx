import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import "./global.css"
import { NavLink } from 'react-router-dom';

const ViewAll = () => {

  let[emp,setEmp]=useState([])

  let getData=async()=>{
    let {data}=await axios.get("http://localhost:5000/employee")
    setEmp(data)
  }
console.log("ViewALL state" , emp);

let deleteItem=(id)=>{
  console.log("delete", id);
  
axios.delete("http://localhost:5000/employee/"+id)
window.location.assign("/viewall") // to reload same page
}

// fetch data from server so prevent the side effects
// we using useEffect ()
  useEffect(()=>{
    try 
    {
      getData()
    }
    catch(e)
    {
      console.log(e);
      
    }
  },[])
  return (
    <>
      <h1>Information of EMP</h1>

      <table>
        <thead>
          <tr>
          <th>Emp.id</th>
          <th>Emp Name</th>
          <th>Emp email</th>
          <th>Operations</th>
          </tr>
        </thead>
        <tbody>
        {emp.map((val)=>{
          return(
            <Fragment key={val.id}>
            <tr>
             
              <td>{val.id}</td>
              <td>{val.username}</td>
              <td>{val.useremail}</td>
              <td>
                <NavLink to={`/edit/${val.id}`}>
                <button>EDIT</button>
                </NavLink>
                <button onClick={()=>deleteItem(val.id)}>DELETE</button>
              </td>
              
            </tr>
            </Fragment>
          )
        })}
        </tbody>
      </table>
    </>
  )
}

export default ViewAll