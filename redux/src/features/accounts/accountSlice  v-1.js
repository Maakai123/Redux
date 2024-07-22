


const initialStateAccount = {
    balance : 0,
    loan:0,
    loanPurpose: "",

    //loader
    isLoadding: false,
};


 export default function accountReducer(state = initialStateAccount, action ) {
    switch (action.type) {

        case "account/deposit":
            return {...state, balance: state.balance + action.payload, isLoading: false};

        case "account/withdraw" :
            return {...state, balance: state.balance - action.payload };

            case "account/requestLoan":
                if (state.loan > 0) return state;
            return {...state, loan:action.payload.amount,
                loanPurpose: action.payload.purpose,
                balance: state.balance + action.payload.amount,
            }

            case "account/payLoan":
                return { 
                    ...state, loan: 0, loanPurpose: "",
                     balance: state.balance - state.loan}
                     default:
                        return state;

                        case "account/convertingCurrency" :
                  return { ...state, isLoadin:true}
    };
    
}


//CONVERT USD TO OTHER CURRENCY

const host = 'api.frankfurter.app';

 export function deposit(amount,currency) {
  if(currency === "USD")  return { type: "account/deposit", 
    payload:amount}



    return async function (dispatch, getState) {
        
     const res =  await  fetch(`https://${host}/latest?amount=10&from=GBP&to=USD`)
    
     const data =  await res.json();
     const converted = data.rates.USD;

     dispatch( {type: "account/deposit", payload: converted})
    }
   
    

}


export function withdraw(amount) {
    return { type: "account/widthdraw", payload:amount}
}

export function requestLoan(amount,  purpose) {
    return { 
        type: "account/requestLoan",
        payload: {amount,purpose}
    }
}


export function payLoan() {
    return { type: "account/payLoan"}
}

/*
store.dispatch(deposit(500))
store.dispatch(withdraw(200))

console.log(store.getState())


store.dispatch(requestLoan(1000, "Buy a cheap car"))
console.log(store.getState())
store.dispatch(payLoan())
console.log(store.getState())
*/


