import React,{useState} from 'react';
import axios from 'axios';
import dotenv from "dotenv";

dotenv.config();

const PaymentSuccess=()=>{
    const [userInfo, setUserInfo] = useState("");

    React.useEffect(()=>{
        const fetchData=async()=>{
            const user = localStorage.getItem("token");
            const {data}=await axios.get(`${process.env.REACT_APP_API_SERVER}/buyerDashboard`, {
            headers: { Authorization: `Bearer ${user}` },
          });
          console.log(data.buyer[0].id)
          axios.post('http://localhost:8080/paymentsuccess',{id:data.buyer[0].id})
            }
            fetchData() 

        },[])
    return(
        <div>
            <h1>Your Transaction was Succesful, thank you for your purchase </h1>
        </div>
    )
}

export default PaymentSuccess;