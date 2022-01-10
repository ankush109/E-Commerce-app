import React from 'react'
import "../about.css"

export default function About() {
    return (
        <div className='about'>
            <div className='title'>
            <h1>hello users,</h1>
            </div>
           <div className='body'>
            <h2>
            This is a potrayal of a E-commerce web app which can add products to your cart,and sign up and out in your respective account.
            But the payment method is just a trial version and its not the best that can be possible.
            Although the payment method has been integrated but as the payment method requires a seperate api for fethcing data from Razorpay servers(a payment gateway)
            so i will get it working once i learn backend a bit so for now thats it.
          </h2>
          
            
            <h3>
            IN THE FUTURE WILL UPDATE THE PAYMENT TO BE WORKING :)
            </h3>
            <h4>
           <strong> THANK YOU , </strong> 
            <br/>
            <br/>
          <strong> ANKUSH BANERJEE</strong>

            </h4>
            </div>
        </div>
    )
}
