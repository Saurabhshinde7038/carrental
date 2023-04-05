import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { Link } from "react-router-dom";

const Payment = () => {
const onToken=(tokan)=>{
console.log(tokan)
}

  return (
    
    <div className='pay'> 
    <Link className="xyz" to="/">Home</Link>
    <h1>Pyment mode Credit or Debit card</h1>
    <StripeCheckout
    token={onToken}
    name="Ovee cars Rental"
    currency='INR'
    stripeKey="pk_test_51MlWndSCNCrg9QT4UdkedL8XGKBZOq00kBDophgtkmmde0aEk2j2rqhJ1JnQ0VcqTHMn1lAhkbsScEyEisxT2lN700ncMv8fdi"
  />
    </div>
  )
}

export default Payment