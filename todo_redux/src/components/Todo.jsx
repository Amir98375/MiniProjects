import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddTodo } from '../Redux/Actions'

export const Todo = () => {
    const [inputvalue,setinputvalue]=useState('')
    const dispatch=useDispatch()
    const AddTodoFun=()=>{
          dispatch(AddTodo(inputvalue))
    }
  return (
    <div>
        <input type="text"  placeholder='enter anything....'
       onChange={(e)=>setinputvalue(e.target.value)} /><button onClick={AddTodoFun}>Add</button>
    </div>
  )
}
