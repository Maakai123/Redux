//action.payload is the data passed into the reducer when the action is dispatched.
import { combineReducers, createStore } from "redux"
import accountReducer from "./features/accounts/accountSlice"
import customerReducer from "./features/customers/customerSlice"



//const store = createStore(accountReducer)

const rootReducer = combineReducers({
    account : accountReducer,
    customer: customerReducer, 
})

const store = createStore(rootReducer)

export default store









