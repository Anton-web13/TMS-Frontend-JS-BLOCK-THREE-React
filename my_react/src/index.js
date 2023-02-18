import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootDiv = document.getElementById('root');

const root = ReactDOM.createRoot(rootDiv);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

console.log('srfsdrg');

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// import Sum from "./utils/someJs";

import sumFromMe from './utils/someJs';
// //
// // console.log(sum(1,2));
//
// // import {sum, division, multiply} from './utils';
//
console.log(sumFromMe(1, 2));
//
reportWebVitals();


//











