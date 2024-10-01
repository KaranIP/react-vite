import React, { createContext } from 'react'
import Practise1 from './Practise1'

export let PractiseApi= createContext()

const Practise = () => {

    
  return (
    <PractiseApi.Provider value="hello I am karan practising now">
        
        <Practise1/>
    </PractiseApi.Provider>

  )
}

export default Practise