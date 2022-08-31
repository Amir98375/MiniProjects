import {legacy_createStore as createStore,combineReducers,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import { CounterReducer } from './Redux/Reducer'


const composeEnhancer=window.REDUX_DEV_TOOLS_EXTENSION_COMPOSE||compose
const root=combineReducers({
    counter:CounterReducer
})

export const store= createStore(root,composeEnhancer(applyMiddleware(thunk)))

console.log("state",store.getState())