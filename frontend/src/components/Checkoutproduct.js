import React from 'react'
import "../checkoutproduct.css"
import { useStateValue } from '../Stateprovider'
function Checkoutproduct({id,img,title,price,rating}) {
    const [{basket},dispatch]=useStateValue();
    const removefrombasket=()=>{
        dispatch({
            type:"remove_from_basket",
            id:id,
            
        })

    }
    return (
        
        <div className='checkout_product'>
            <img className='checkout_product_img' src={img} />

            <div className='checkout-product_info'>
                <p className='checkoutproduct_title'>{title}</p>
                <p className="checkoutproduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutproduct-rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>🌟</p>
                    ))}
                </div>
             
                    <button onClick={removefrombasket}>Remove from Basket</button>
                
            </div>
        </div>
    )
    //     <div className='checkout_product'>
    //         <img className='checkout_product_img' src={img} />
    //     </div>
    //     <div className='checkout-product_info'>
    //         <p className='checkoutproduct_title'>{title}</p>
    //         <p className='checkoutproduct_price'>
    //             <small>$</small>
    //             <strong>{price} </strong>
    //         </p>
    //         <div className='checkoutproduct-rating'>
    //             {Array(rating).fill().map((_, i)=>(
    //               <p>⭐</p>
    //             ))}

    //         </div>
    //         <button onClick={removefrombasket}>Remove from Basket</button>

    //         </div>
    
}

export default Checkoutproduct
