import React, { useContext } from 'react'
import { PractiseApi } from './Practise';

const Practise1 = () => {
    let consumer = useContext(PractiseApi)
    console.log(consumer);
    
  return (
   
    <>
    <h1>Practise1--{consumer}</h1>
    </>
  )
}

export default Practise1