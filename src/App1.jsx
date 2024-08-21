// import React from "react";
// import Child from "./Child"
// import "./global.css"
// import Demo1 from "./Module/Demo1"

// const App1 = ()=>{
//     let student = "Karan"
//     const Css = {
//       backgroundColor : "yellow",
//       width : "200px" , 
//       height : "150 px"
//     }

//   return(
//     <>
//       <h1>{student}</h1>
//       <p>how are you!!!!</p>
//       <label htmlFor="uname"></label>
//       <input id="uname" />
//       <button style={Css}>Color me</button>
//       <h2 id="demo">CSS File</h2>
//      <Child/>
//      <Demo1/>
//     </>
//   )
// }

// HOOKS Concept useState()

// import React, { useState } from "react"

// const App1=()=>
// {
//   let [name,setName]=useState("Karan")
//   let myName = "kanaga"

//   let updateValue=()=>
//   {
//     setName("Bhavi Sri")
//   }

//   return (
//     <>
//     <h1>state variable -{name}</h1>
//     <h1>normal variable -{myName}</h1>
//     <hr />

//     <button onClick={updateValue}>Click For change</button>
//     </>
//   );

// }


// export default App1

/* 
props Concept

import React from 'react'
import Child from './Child'

const App1 = () => {
  return (
    <>
    <Child student="karan" sid={10} bool={true}/>
    </>
  )
}

export default App1 */

//PROPS sending ARRAY as teh prop value

/* import React from 'react'
import Child from './Child';

const App1 = () => {

  let frame=["bootsrap","React","Spring"]
  
  return (
    <>
    <Child tech={["html","css","JavaScript"]} technology={frame}/>
    </>
  )
}

export default App1 */

//PROPS In Object

import React from 'react'
import Child from './Child';

const App1 = () => {

  let sibilings = {

        sister : "lavanya" ,
        brother : "Sundar"
 }
  return (
    <Child family={{father : "Iyappan", mother:"packiya Lakshmi"}} sib={sibilings}/>
  )
}

export default App1