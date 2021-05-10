import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51IYufTH5HYrxAaNisiluPcgg6cYuouVxUoUvGabUWmaLPLJdvGcPdBR7A2JZOnM7GYiZ1hdrXN9g9HB4CBudwprY00rnmledej"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

// const stripePromise = loadStripe('pk_test_51IYufTH5HYrxAaNisiluPcgg6cYuouVxUoUvGabUWmaLPLJdvGcPdBR7A2JZOnM7GYiZ1hdrXN9g9HB4CBudwprY00rnmledej')

export default function StripeContainer() {
    return (
        // <div>Stripe container</div>
        <Elements stripe={stripeTestPromise}>
            <PaymentForm />
        </Elements>
    )
}