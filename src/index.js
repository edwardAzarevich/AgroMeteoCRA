import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import './index.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';
import StartPage from './components/StartPage/StartPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route exact path='/startPage' element={<StartPage />} />
        </Routes>
        {/* <Headers /> */}
        {/* <SideBar /> */}
        {/* <SideBar /> */}
        <Routes>
            <Route exact path="/" element={<App />} />
        </Routes>
    </BrowserRouter>
);
//});

serviceWorker.unregister();


