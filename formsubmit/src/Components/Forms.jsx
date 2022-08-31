import React from 'react'
import { useState } from 'react'

export const Forms = () => {
    const [formdata,setformdata]=useState({
        firstname:"",
        lastname:"",
        email:"",
        password:""
    })
    const [record,setrecord]=useState([])

    const handleChange=(e)=>{
       const name=e.target.name;
       const value=e.target.value;
        // console.log(name,"name")
        // console.log(value)
        setformdata({...formdata,[name]:value})
       
    }
    console.log(formdata)
    const handleSubmit=(e)=>{
        e.preventDefault();
        // const newrecords={...formdata,id:new Date().getTime().toString()}
               setrecord([...record,formdata])
               setformdata({
                firstname:"",
                lastname:"",
                email:"",
                password:""
               })
            //    console.log(record,"records")
    }
    // console.log(record,"records")
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">firstname</label><br />
            <input type="text" value={formdata.firstname} name='firstname' placeholder='enter your firstname' onChange={handleChange} /><br />
            <label htmlFor="">lastname</label><br />
            <input type="text" value={formdata.lastname} name='lastname' placeholder='enter your lastname' onChange={handleChange} /><br />
            <label htmlFor="">email</label><br />
            <input type="email" value={formdata.email} name='email' placeholder='enter your email'  onChange={handleChange}/><br />
            <label htmlFor="">password</label><br />
            <input type="password" value={formdata.password} name='password' placeholder='enter your password'  onChange={handleChange}/><br />
            <input type="submit" />
        </form>

        {record?.map((el)=>{
            return(
                <div>
                    <div><span>firstname:{el.firstname} </span>
                   <span> lastname:{el.lastname}</span>
                   <span> email:{el.email}</span>
                  <span>  password:{el.password}</span></div>
                </div>
            )
        })}
    </div>
  )
}
