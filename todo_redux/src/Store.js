import {legacy_createStore ,applyMiddleware,combineReducers,compose} from 'redux'
import thunk from 'redux-thunk'
import { TodoReducer } from './Redux/Reducer'

const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose

const root=combineReducers({
     TODO:TodoReducer
})

export const store=legacy_createStore(root,composeEnhancer(applyMiddleware(thunk)))

console.log("state",store.getState())