//action.payload is the data passed into the reducer when the action is dispatched.

import accountReducer from "./features/accounts/accountSlice"
import customerReducer from "./features/customers/customerSlice"

//Add Thunk middleware ,  automatically combine our reducers raps around create store
import { configureStore } from "@reduxjs/toolkit"

//const store = createStore(accountReducer)


const store = configureStore({
    reducer: {
        account: accountReducer,
        customer: customerReducer
    },
})


export default store









