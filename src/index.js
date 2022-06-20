import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/app/App'
import Headers from './components/header/header'
//import Header from './components/header/header';
//import * as serviceWorker from './serviceWorker';
import * as serviceWorker from './serviceWorker';

const Footer = () => (
    <div className="footer">Created with love</div>
);


// ReactDOM.render(
//     <BrowserRouter basename='/MainWindow'>
//         <Footer />
//     </BrowserRouter>, document.getElementById('root')
// );



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Headers />
        <Footer />
    </BrowserRouter>
);

serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
