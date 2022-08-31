import* as types from './ActionType'


export const IncreaseValue=()=>{
    // console.log("inc",payload)
    return{
        type:types.INCREAMENT
    }
}

export const DecreaseValue=()=>{
    // console.log(dispatch)
    return{
        type:types.DECREAMENT
    }
}