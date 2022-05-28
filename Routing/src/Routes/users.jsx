import { useEffect, useState } from "react"
import axios from "axios"

export const Users =()=>{
    const [data,setdata] =useState([])

    const getdata=()=>{
        return(
            axios.get(`https://reqres.in/api/users`).then((res)=>{
                setdata(res.data.data)
            })
        )
    }
   
   useEffect(()=>{

    getdata()
   },[])
    console.log(data)
    return(
        <div>
            {data.map((el)=>{
              return(
                  <div>
                      <p>{el.id}</p>
                      <p>{el.email}</p>
                      <p>{el.first_name} { " "}{el.last_name}</p>
                  </div>
              )
               
            })}
        </div>
    )
}