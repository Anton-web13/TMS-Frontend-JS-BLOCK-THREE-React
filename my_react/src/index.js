import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import Sum from "./utils/someJs";

import {sum, division, multiply} from "./utils/garbage";
import {sum as secondSum} from "./utils/log";

// import {sum as threeSum} from "./utils/sum";
// import {multiply as threeMultiply} from "./utils/multiply";
// import {division as threeDivision} from "./utils/division";

const rootDiv = document.getElementById('root');

const root = ReactDOM.createRoot(rootDiv);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// console.log(threeSum(2,5);
// console.log(threeMultiply(2,5);
// console.log(threeDivision(2,5);

// // console.log(Sum(15, 5));
console.log(sum(15, 5));
console.log(division(15, 5));
console.log(multiply(15, 5));
// // lolKek("Hi");
// console.log(secondSum(15, 5));


reportWebVitals();











