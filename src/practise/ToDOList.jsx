import React, { Fragment, useState } from 'react'

const ToDOList = () => {

    let[input,setInput]=useState("")
    let[items,setItems]=useState([])
    let[editItems,setEditItems]=useState(null)

    let addItems=()=>{
        if(input==="")
        {
            alert("Enter value")
            
        }
        else if (editItems!==null){
            items[editItems]=input
            setEditItems(null)
            setInput("")
        }
        else
        {
            setItems([...items,input])
            setInput("")
        }
    }

   let handleSubmit=(event)=>{  //SBE Event
    event.preventDefault()
   }

   // "id" parameter it holds the index number of item that we delete
   let deleteItem=(id)=>{
    console.log("index of item to be deleted " ,id ,  items[id]);
    let filteredValue=items.filter((val,index)=>{
        return id!=index
    })
     setItems(filteredValue);
   }

   // "id" parameter it holds the index number of item that we edit
   let editItem =(id)=>{
       console.log("index of item to be edited" ,id ,  items[id]);
       setInput(items[id])
       setEditItems(id)
      // setInput("")
   }

   let clearAll = () => {
    setItems([]) 
    setInput("")
    setEditItems(null)
}
    
  return (
    <>
    <section>
        <h1>Welcome to page</h1>
        <form onClick={handleSubmit} >
            <input type="text" placeholder='enter the details' value={input} 
            onChange={(event)=>setInput(event.target.value)} />
            <button onClick={addItems}>ADD</button>
        </form>
        <aside>

            {items.map((val,ind)=>{
                return(
                    <Fragment key={ind}>
                    <div>
                    <span>{val}</span>
                    <button onClick={()=>{editItem(ind)}}>EDIT</button>
                     <button onClick={()=>{deleteItem(ind)}}>DELETE</button>
                   </div>
                    </Fragment>
                )
            })}
            
        </aside>
        <aside>
            <button onClick={clearAll}>Clear ALL</button>
        </aside>
    </section>
    </>
  )
}

export default ToDOList