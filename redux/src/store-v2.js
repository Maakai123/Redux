//action.payload is the data passed into the reducer when the action is dispatched.
import { applyMiddleware, combineReducers, createStore } from "redux"

import {thunk} from "redux-thunk";

import accountReducer from "./features/accounts/accountSlice"
import customerReducer from "./features/customers/customerSlice"

/*
//Add Thunk middleware ,  automatically combine our reducers raps around create store
import { configureStore } from "@reduxjs/toolkit"
*/
//const store = createStore(accountReducer)

const rootReducer = combineReducers({
    account : accountReducer,
    customer: customerReducer, 
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store









