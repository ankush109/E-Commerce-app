
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';
import { useEffect } from 'react';
import React from 'react';
import { auth } from './firebase';

import About from './components/About';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { useStateValue } from './Stateprovider';
import Payments from './components/Payment';
function App() {
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    //will only run once:-

    auth.onAuthStateChanged(authuser => {
      console.log("the user is >>>>", authuser);
      if (authuser) {
        //the user loggined in
        dispatch({
          type: "set_user",
          user: authuser
        })

      } else {
        //the user is logged out:-
        dispatch({
          type: "set_user",
          user: null
        })
      }
    })

  }, [])
  return (

    <BrowserRouter>
      <div className='app'>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/payment" element={<Payments />} />
          <Route path="/about" element={<About/>}/>

          <Route path="/checkout" element={<Checkout />} />



        </Routes>
      </div>
    </BrowserRouter>
  );



}
export default App;
