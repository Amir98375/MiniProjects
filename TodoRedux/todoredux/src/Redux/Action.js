import* as types from './ActionType'
import axios from "axios"

const fetchdataRequest=(payload)=>{
   return{
     type:types.fetch_data_Request,
     payload
   }
}

const fetchdataSuccess=(payload)=>{
    return{
type:types.fetch_data_Success,
payload
    }
}

const fetchdataFailure=(payload)=>{
    return{
        type:types.fetch_data_Failure,
        payload
    }
}

export const fetchData=(payload)=>(dispatch)=>{
     dispatch(fetchdataRequest())
     axios.get(`http://localhost:8080/data`,{
        params:{
            ...payload
        }
     })
     .then((res)=>dispatch(fetchdataSuccess(res.data)))
     .catch((err)=>dispatch(fetchdataFailure(err.data)))
}

//delete request
const fetchdeleteRequest=(payload)=>{
    return{
      type:types.delete_data_Request,
      payload
    }
 }
 
 const fetchdeleteSuccess=(payload)=>{
     return{
 type:types.delete_data_Success,
 payload
     }
 }
 
 const fetchdeleteFailure=(payload)=>{
     return{
         type:types.delete_data_Failure,
         payload
     }
 }

 export const deleteData=(payload)=>(dispatch)=>{
    dispatch(fetchdataRequest())
    axios.delete(`http://localhost:8080/data/${payload}`)
    .then((res)=>{
        dispatch(fetchdeleteSuccess())
        dispatch(fetchData())
        // console.log(res)
    })
    .catch((err)=>dispatch(fetchdataFailure(err)))
}


//Add data
const AddDataRequest=(payload)=>{
    return{
      type:types.Add_data_Request,
      payload
    }
 }
 
 const AddDataSuccess=(payload)=>{
     return{
 type:types.Add_data_Success,
 payload
     }
 }
 
 const AddDataFailure=(payload)=>{
     return{
         type:types.Add_data_Failure,
         payload
     }
 }


 
 export const AddData=(payload)=>(dispatch)=>{
    dispatch(AddDataRequest())
    axios.post(`http://localhost:8080/data`,payload)
    .then((res)=>{
        dispatch(AddDataSuccess())
        dispatch(fetchData())
        // console.log(res)
    })
    .catch((err)=>dispatch(AddDataFailure(err)))
}