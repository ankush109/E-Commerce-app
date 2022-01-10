import React from 'react'
import CurrencyFormat from 'react-currency-format';

import { useStateValue } from '../Stateprovider';
import { getbaskettotal } from '../reducer';
import '../subtotal.css'
import { useNavigate } from 'react-router-dom';
function Subtotal() {
    const history =useNavigate();
    const [{basket}]=useStateValue();
    return (

        <div className='subtotal'>
            <CurrencyFormat
            renderText={(value)=>(
                <>
                <p>
                    Subtotal({basket.length}items):
                    <strong>{value}</strong>
                </p>
                <small className='subtotal_gift'>
                    <input type="checkbox"/> this order contains a gift
                </small>
                </>
            )}
            decimalScale={2}
            value={getbaskettotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
            />
            <button onClick={e=>history('/payment')}>proceed to checkout</button>
        </div>
    )
}

export default Subtotal
