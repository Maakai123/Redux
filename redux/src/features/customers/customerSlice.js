import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    fullName:'',
    nationalID: '',
    createdAt: ''
}


const customerSlice = createSlice({
    name: "customer",
    initialState,
     
    reducers: {
        //prepare a payload
        createCustomer:{
       prepare(fullName, nationalID) {
        return {
            //create payload
            payload: {
                fullName,
                nationalID,
                createdAt: new Date().toISOString(),
            },
        };
       },

       //reducer gets access to state and action
       reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalID = action.payload.nationalID;
        state.createdAt = action.payload.createdAt
       }
            
        },

       updateName(state, action) {
        state.fullName = action.payload
       } 
    }
})

 export const { createCustomer, updateName} = customerSlice.actions;

 export default customerSlice.reducer;