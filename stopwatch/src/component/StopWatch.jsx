import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export const StopWatch = () => {
    const [mili,setmili]=useState(0)
    const [sec,setsec]=useState(0)
    const [isStart,setIsstart]=useState(false)
    useEffect(()=>{
        let myinterval=null;
        if(isStart){
            myinterval=setInterval(() => {
                setmili((c)=>c+1)
            },10);

        }else {
            clearInterval(myinterval)
        }
        return(()=>{
            clearInterval(myinterval)
        })
    },[isStart])
    if(mili>59){
        setsec((c)=>c+1)
        setmili(0)
    }
  return (
    <div>
        <h1>
            {sec}:{mili}
        </h1>
        <button 
        onClick={()=>{
            isStart?setIsstart(false):setIsstart(true)
        }}>
            {isStart?"stop":"start"}
        </button>
        <button onClick={()=>{
            setmili(0)
            setsec(0)
            setIsstart(false)
        }}>
            reset
        </button>
    </div>
  )
}
