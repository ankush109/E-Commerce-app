import React from 'react'
import '../product.css'
import { useStateValue } from '../Stateprovider'
function Product({id,title,img,price,rating}) {
    const [{basket},dispatch]=useStateValue();
    console.log("this is the basket",basket);
    const addtobasket=()=>{
        //dispatch the item into the data layer:-
        dispatch({
            type:"add_to_basket",
            item:{
                id:id,
                img:img,
                title:title,
                price:price,
                rating:rating
            }
        })
    }
    return (
        <div className='product '>
            <div className='product-info'>
            <p>{title}</p>
            <p className='product-price'>
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            <div className='product-rating'>
                {Array(rating).fill().map((_, i)=>(
                    <p>⭐</p>
                ))}
           
            </div>
            </div>
            <img className='img' src={img}></img>
            <button onClick={addtobasket}> Add to Basket</button>
        </div>
    )
}

export default Product
