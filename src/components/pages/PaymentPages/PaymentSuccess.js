import React from 'react';
import axios from 'axios';

const PaymentSuccess=()=>{

    React.useEffect(()=>(
            axios.post('http://localhost:8080/paymentsuccess')

    ),[])
    return(
        <div>
            <h1>Your Transaction was Succesful, thank you for your purchase </h1>
        </div>
    )
}

export default PaymentSuccess;