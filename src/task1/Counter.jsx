import React, { useState } from 'react'

const Counter = () => {
    let[value,setValue]=useState(0)

    let Increment =()=>{
        setValue(value+1)
    }
    let Decrement =()=>{
        setValue(value-1)
    }
  return (
    <>
    <h1>{value}</h1>
    <button onClick={Increment}>Increment</button>
    <button onClick={Decrement}>Decrement</button>
    </>
  )
}

export default Counter