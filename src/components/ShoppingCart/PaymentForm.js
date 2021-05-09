import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import React, { useState } from 'react'


const CARD_OPTIONS = {
  hidePostalCode: true,
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#676767",
			color: "#000",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#b9b9b9" },
			"::placeholder": { color: "#b9b9b9" }
		},
		invalid: {
			iconColor: "##28a745",
			color: "#b9b9b9"
		}
	}
}

export default function PaymentForm() {
    const [success, setSuccess ] = useState(false)
    const stripe = useStripe()
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const elements = useElements()


    const handleSubmit = async (e) => {
        e.preventDefault()

        // const {name} = await stripe.createPaymentMethod({
        //   type: "Text",
        // })

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
              // billing_details: {
              //   name: "Jane Doe",
              //   email: email,
              // },
            }
            )


    if(!error) {
        try {
            const {id} = paymentMethod
            const response = await axios.post("http://localhost:8080/cart", {
                amount: 1000,
                // name: name,
                // email: email,
                id
            })

            if(response.data.success) {
                console.log("Successful payment")
                setSuccess(true)
            }

        } catch (error) {
            console.log("Error", error)
        }
    } else {
        console.log(error.message)
    }
}

    return (
        <>
        {!success ? 
        <form onSubmit={handleSubmit}>
            <fieldset className="FormGroup">
                <div className="FormRow">
                    <CardElement options={CARD_OPTIONS}/>
                </div>
            </fieldset>
            <button className="btn btn-outline-dark">Pay</button>
        </form>
        :
       <div>
           <h2>Thank you for your payment</h2>
       </div> 
        }
            
        </>
    )
}