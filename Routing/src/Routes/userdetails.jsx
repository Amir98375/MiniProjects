import axios from "axios"
import { useEffect, useState } from "react"



export const UserDetails =()=>{
    const [data,setdata] =useState([])
    const params =useParams()
    const getuser=()=>{
        return(
            axios.get(`https://reqres.in/api/users${params.user.id}`)
            .then((res)=>{
                    setdata(res.data.data)
            })
        )
    }
    useEffect(()=>{
        getuser()
    },[])
    return(
<div>
    
    <p>
        {data?.first_name} {" "}{data?.last_name}
    </p>
    <img src={data?.avatar}></img>
</div>
    )
}