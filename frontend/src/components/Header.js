import React from 'react'
import '../header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import { useStateValue } from '../Stateprovider';
import {auth} from "../firebase"

function Header() {
    const [{basket,user}]=useStateValue();
    const handleauthsign = ()=>{
        if(user){
            auth.signOut();
        }
    }
    
    return (
        <div className='header'>
            <Link to='/'>
            <img className='header-logo'
                src='https://s3-img.pixpa.com/com/large/3571/3571-1590264104-whatsapp-image-2020-05-24-at-011805.jpeg 'width={60} height={60} />
            </Link>
           
            <div className='header-search'>
                <input className='header-search-input' type={Text}>

                </input>
                <SearchIcon className='header-search-icon' />
            </div>
            <div className='header-nav'>
                <Link to={!user && "/login"}>
                <div onClick={handleauthsign} className='header-option'>
                  
                    <span className='header-option-line2'>
                       {user ? 'sign out': 'sign in'}
                    </span>
                </div>
                </Link>
                <Link to="/about">
                <div className='header-option'>
                    <span className='header-option-line1'>
                        About 
                    </span>
                  
                </div>
                </Link>
                <div className='header-option'>
                    <span className='header-option-line1'>
                     
                    </span>
                    <span className='header-option-line2'>
                      
                    </span>
                    <div class="bg-modal">
	
</div>

                </div>
                <Link to="/checkout">
                <div className='header-basket'>
                <ShoppingCartIcon />
                <span className='header-option basketcount'>{basket?.length}</span>
                </div>
                </Link>
               
            </div>
        </div>
    )
}

export default Header;
