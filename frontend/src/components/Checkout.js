import React from 'react'
import '../checkout.css'
import { useStateValue } from '../Stateprovider'
import Checkoutproduct from './Checkoutproduct';
import Subtotal from './Subtotal'


function Checkout() {
    const[{basket}]=useStateValue();

    return (
        <div className='checkout'>
          <div className='checkout_left'>
              <img className='checkout-ad'src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'/>
        <div>
            <h2 className='checkout-title'>
                Your Shopping Basket
            </h2>
            {basket.map(item=>(
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
          <div className='checkout-right'>
              <Subtotal/>

          </div>
            
        </div>
    )
}

export default Checkout
