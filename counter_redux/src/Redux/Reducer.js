import* as types from './ActionType'
const initialState={
    count:0
}

export const CounterReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.INCREAMENT:
            return{
                ...state,
                count:state.count+1
            }
            case types.DECREAMENT:
                return{
                    ...state,
                    count:state.count-1
                }
                default:
                    return state
    }

}