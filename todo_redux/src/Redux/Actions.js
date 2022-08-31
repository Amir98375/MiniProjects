import* as types from './ActionType'
export const AddTodo=(payload)=>(dispatch)=>{
    console.log(payload,"inputvalue")
    return{
        type:types.ADD_TODO,
        payload:payload
    }
       
}
export const DeleteTodo=()=>{
      return{
        type:types.DELETE_TODO
      }
}
export const RemoveTodo=()=>{
    return{
      type:types.REMOVE_TODO
    }
}