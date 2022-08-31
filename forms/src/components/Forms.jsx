import React from 'react'
import { useState } from 'react'
import './Form.css'

export const Forms = () => {
    const [First_Name,setFirst_Name]=useState('')
    const [items,setitems]=useState([])
    const handleSubmit=()=>{
   if(!First_Name){

   }else {
    
    setitems([...items,First_Name])
    setFirst_Name('')
   }

    }
    const handleRemove=()=>{
        setitems([])
    }
    // console.log(items)
    const handleDelete=(id)=>{
        const updateItems=items.filter((el,ind)=>id!==ind)
        setitems(updateItems)
    }
   
  return (
    <div>
        <div>
        <input type="text" value={First_Name} onChange={(e)=>setFirst_Name(e.target.value)} />
        <input type="submit" onClick={handleSubmit} />
        </div>
       
   <div>
   {items?.map((el,ind)=>{
       
        return(
            <div className='maindiv'>
                <p>{el}</p> <button onClick={()=>handleDelete(ind)}>delete</button>
               
            </div>
        )
     })}
   </div>
   <button onClick={handleRemove}>remove all</button>
    </div>
  )
}
