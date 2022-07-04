import axios from "axios"
import { useEffect, useState } from "react"


export const Layout=()=>{
 var [data,setdata]=useState([])
    const [toggle,settoggle]=useState(false)
    const getData=()=>{
        axios.get(`http://localhost:8080/posts`)
        .then((res)=>setdata(res.data))
        .catch((err)=>console.log("error",err.message))
    }
    useEffect(()=>{
          getData()
    },[])

    const handletoglle=()=>{
        console.log(toggle)
        if(!toggle){
          settoggle(true)
        }else settoggle(false)
    }
    console.log(data)
    return(
        <div>
            
            {toggle?data?.map((el)=>
              <div>
                <p>{el.id}</p>
                <p>{el.title}</p>
                <p>{el.author}</p>
                
              </div>
            
            
           
            ):data=null}
 <button onClick={handletoglle}>Fetch data</button>
        </div>
       
    )
}