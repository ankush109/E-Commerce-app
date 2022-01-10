import React from 'react'
import { useStateValue } from '../Stateprovider'
import Checkoutproduct from './Checkoutproduct';
import { Link } from "react-router-dom"
import "../payment.css"
import { getbaskettotal } from '../reducer';
function Payments() {

    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement('script')
            script.src = src
            script.onload = () => {
                resolve(true)
            }
            script.onerror = () => {
                resolve(false)
            }
            document.body.appendChild(script)
        })
    }
    async function displayRazorpay() {
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}

		const data = await fetch('https://myank69.herokuapp.com', { method: 'POST' }).then((t) =>
			t.json()
		)

		console.log(data)

		const options = {
			key: "rzp_test_jh8Fz6uQP6Sgc4",
			currency: data.currency,
			amount:data.amount,
			order_id: data.id,
			name: 'Donation',
			description: 'Thank you for nothing. Please give us some money',
			image: 'https://scontent.fccu3-1.fna.fbcdn.net/v/t39.30808-6/p843x403/271050852_1278985169280137_3269965679538767339_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=hIic8FAWyvgAX_qZPkD&tn=WIUYp0kpe-qeyzMq&_nc_ht=scontent.fccu3-1.fna&oh=00_AT9qHfuePmUVaaO2kl0TjKIbuepNIcxko7Xf23nBzJ_Jaw&oe=61DD8AD4',
			handler: function (response) {
				alert("payment done ")
				
			},
			prefill: {
				
				email: 'sdfdsjfh2@ndsfdf.com',
				phone_number: '9899999999'
			}
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
	}

  

    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className='payment'>
            <div className='payment_container'>
                <h1>
                    checkout(
                    <Link to="/checkout">{basket?.length}</Link>
                    )

                </h1>
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>
                            Delivery Address
                        </h3>
                    </div>
                    <div className='payment_Address'>
                        <p>{user?.email}</p>
                        <p>1337 GONGOTRI APARTMENT,Near Ruby Hospital ,KASBA kolkata-700107</p>
                        <p>kolkata,West Bengal</p>
                    </div>
                </div>
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Rieview items and delivery</h3>
                    </div>
                    <div className='payment_items'>
                    {basket.map(item => (
                        <Checkoutproduct
                            id={item.id}
                            title={item.title}
                            img={item.img}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                    </div>

                </div>
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div >
                    <button className='but' onClick={displayRazorpay}>PAY NOW</button>
                    </div>
                </div>
                <div className='note'>
                    <h1>
                        Note:-
                        The payment method is not complete some backend api are to be made inorder to be complete 
                        "4111 1111 1111 1111" as card number and any exp date and any cvv
                    
                 </h1>
                </div>




            </div>



        </div>

    )
}

export default Payments
