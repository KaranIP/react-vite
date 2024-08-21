// import React from "react";

// const Child =  (props)=>{
//     console.log(props);
    
//     let {student,sid,bool}=props //Destruction the object

//     return(
//         <>
//         <h1>{student}</h1>
//         <h1>{sid}</h1>
//         <h1>{bool===false? "HII" : "BYEE"}</h1>
//         </>
//      ) ;
//     }

//     export default Child

// props without parameter

// import React from 'react'

// const Child = ({student,sid,bool}) => { //without ( props ) method
    
//   return (
//     <>
//     <h1>{student}</h1>
//     <h1>{sid}</h1>
//     <h1>{bool===true ? "hello" : "byeee"}</h1>
//     </>
//   )
// }

// export default Child

//PROPS SENDING ARRAY ELEMENTS

/* import React from 'react'

const Child = (props) => {
  return (
    <>
    <h1>{props.tech[0]}</h1>
    <h1>{props.tech[1]}</h1>
    <h1>{props.tech[2]}</h1>
    <h1>{props.technology[0]}</h1>
    <h1>{props.technology[1]}</h1>
    <h1>{props.technology[2]}</h1>
    </>
  )
}

export default Child */

// PROPS Sending object and nested objects

import React from 'react'

const Child = (props) => {

    let {family:{father,mother},sib:{sister,brother}}=props

  return (
    <>
    <h1>Father Name : {father}</h1>
    <h1>Mother name : {mother}</h1>
    <h1>Sister name : {sister}</h1>
    <h1>Brother name : {brother}</h1>
    </>
  )
}

export default Child
