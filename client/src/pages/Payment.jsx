import { useEffect, useState } from "react";
import {loadStripe} from "@stripe/stripe-js";


function Payment(props) {
    const [stripePromise, setStripePromise] = useState(null)

useEffect(() => {
    fetch("/config").then(async(r) => {
        const { publishableKey } = await r.json();
    })
},[])

    return (
        <>
        <h1>Give us your money!</h1>
        </>
    );
}

export default Payment;