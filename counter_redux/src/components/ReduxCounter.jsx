import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DecreaseValue, IncreaseValue } from '../Redux/Action'
import './ReduxCounter.css'

export const ReduxCounter = () => {
    const count=useSelector((state)=>state.counter.count)
   
    console.log(count)
    const dispatch=useDispatch()
    const handleIncrease=()=>{
        dispatch(IncreaseValue())
    }
    const handleDecrease=()=>{
        dispatch(DecreaseValue())
    }
  
  return (
    <div className='divclass'>
        <h1 className='heading'>Count:{count}</h1>
        <button className='increase' onClick={handleIncrease}>Add</button>
        <button className='decrease' onClick={handleDecrease}>Sub</button>
    </div>
  )
}
