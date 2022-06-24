import React from 'react';
import './index.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/app/App'
import * as serviceWorker from './serviceWorker';
import Headers from './components/header/header'

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
        <Routes>
            <Route exact path="/" element={<App />} />
            <Route exact path="/footer" element={<Footer />} />
        </Routes>
    </BrowserRouter>
);

/*ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('root'));*/

serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
