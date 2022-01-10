import React, { useState } from 'react'
import '../Login.css'
import { Link, useNavigate } from "react-router-dom";
import {auth,} from "../firebase"
import {signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth"

function Login() {
    const navigate =useNavigate();
    const [email,setemail] =useState('');
    const [password,setpassword]=useState('');
    const signin=e=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth)
        .then((auth)=>{
            
            navigate('/')
        })
        .catch(error=>alert(error.message))
        // auth
        // .signInWithEmailAndPassword(email,password)
        // .then((auth)=>{
        //     navigate('/');
        // })
        // .catch(error=>alert(error.message))
    }

    const register = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
        })
        //  auth
        //     .createUserWithEmailAndPassword(email, password)
        //     .then((auth) => {
        //         // it successfully created a new user with email and password
        //         console.log(auth);
        //         if(auth){
        //             navigate('/');
        //         }
        //     })
        //     .catch(error => alert(error.message))
    }
    return (
        <div className='login'>
            <Link to ="/">
            <img className='login_logo'  src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' ></img>
            </Link>
            <div className='login_container'>
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e=>setemail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e=>setpassword(e.target.value)}/>
                    <button type='submit' className='login-sign-in'onClick={signin}>Sign-in</button>
                    </form>  <p>
                By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
               see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
           </p>

        <button  onClick={register}className='login-register-button'>Create your amazon account</button>
            </div>
        </div>
    )
}

export default Login
// return (
//     <div className='login'>
//         <Link to='/'>
//             <img
//                 className="login__logo"
//                 src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
//             />
//         </Link>

//         <div className='login__container'>
//             <h1>Sign-in</h1>

//             <form>
//                 <h5>E-mail</h5>
//                 <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

//                 <h5>Password</h5>
//                 <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

//                 <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
//             </form>

//             <p>
//                 By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
//                 see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
//             </p>

//             <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
//         </div>
//     </div>