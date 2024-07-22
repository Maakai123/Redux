const initialStateCustomer = {
    fullName:'',
    nationalID: '',
    createdAt: ''
}


//forr customers

export default  function customerReducer( state = initialStateCustomer, action) {
    switch( action.type) {
        case "customer/createCustomer":
            return {
                ...state,
                fullName: action.payload.fullName,
                nationalID: action.payload.nationalID,
                createdAt: action.payload.creaatedAt,

            }

            case "customer/updateName":
                return { ...state, fullName: action.payload} 
            default: return state
    }
}


//customer has name and nationalId 

 export function createCustomer(fullName, nationalId) {
    return {
        type: "customer/createCustomer",
        //new Date = current date
        payload: { fullName, nationalId, createAt: new Date().
            toISOString() },
        }
}


export function updateName(fullName){
    return { type: "customer/updateName", payload: fullName}
}

/*
store.dispatch(createCustomer("Maakai", "444444"))
console.log(store.getState())
*/

