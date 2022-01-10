import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reducer,{initialState} from "./reducer"
import {Stateprovider} from "./Stateprovider"
 
ReactDOM.render(
  <React.StrictMode>
    <Stateprovider initialState ={initialState} reducer={reducer}>
    <App />
    </Stateprovider>
  </React.StrictMode>,
  document.getElementById('root')
  
);


