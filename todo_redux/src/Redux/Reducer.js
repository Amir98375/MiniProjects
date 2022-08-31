import*as types from './ActionType'
const initialState={
    todo:[],
    loading:false
}

export const TodoReducer=(state=initialState,action)=>{
    const {type,payload}=action
  
  
       switch(type){
        case types.ADD_TODO:
            console.log(state,"reducer")
            return{
         
                ...state,
                todo:[{
                    ...state.todo,payload
                }]
            }
            case types.DELETE_TODO:
                return{
                   ...state
                }
                default:
                    return state
       }
}