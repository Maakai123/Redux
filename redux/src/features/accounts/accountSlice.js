
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    balance : 0,
    loan:0,
    loanPurpose: "",

    //loader
    isLoading: false,
};

const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        deposit(state, action) {
           state.balance += action.payload;
           state.isLoading = false;
        },

        withdraw(state, action) {
            state.balance -= action.payload;
        },

        /*
        requestLoan(state, action) {
            //if loan exist
            if( state.loan > 0) return;

            state.loan = action.payload.amount;
            state.loanPurpose = action.payload.purpose;
            state.balance = state.balance + action.payload.amount;
        },
*/

//How to use two argument
       requestLoan: {
        //prepare method
        prepare(amount,purpose) {
            return {
                payload: {amount,purpose}
            };
        },


        reducer(state, action) {
        if(state.loan > 0) return;
        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.purpose;
        state.balance = state.balance + action.payload.amount;

        }
       },
       //dont depend on action, no payload is involved
        payLoan(state) {
            state.balance -= state.loan;
            state.loan = 0;
            state.loanPurpose = "";
            
        },
     convertingCurrency(state) {
        state.isLoading = true;
     }
         

    }
})



export const { withdraw, requestLoan,payLoan} = accountSlice.actions

const host = 'api.frankfurter.app';

 export function deposit(amount,currency) {
    //action type
  if(currency === "USD")  return { type: "account/deposit", 
    payload:amount}



    return async function (dispatch, getState) {
        dispatch({ type: "account/convertingCurrency"})
        
     const res =  await  fetch(`https://${host}/latest?amount=10&from=GBP&to=USD`)
    
     const data =  await res.json();
     const converted = data.rates.USD;

     dispatch( {type: "account/deposit", payload: converted})
    }
   
    

}



export default accountSlice.reducer;


 