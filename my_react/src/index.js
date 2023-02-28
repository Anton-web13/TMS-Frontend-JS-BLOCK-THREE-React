import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import Router from "./routers/Router";

// import reportWebVitals from './reportWebVitals';

import './static/index.css';
import MainLayout from "./components/MainLayout/MainLayout";

const rootDiv = document.getElementById('root');

const root = ReactDOM.createRoot(rootDiv);
root.render(
    <BrowserRouter>
        <MainLayout>
            <Router />
        </MainLayout>
    </BrowserRouter>
);

// reportWebVitals();









