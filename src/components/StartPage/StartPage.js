//import './header.css';
import Header from '../header/header';
import { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Singin from '../Pages/Login/SingIn/Singin';

class StartPage extends Component {

    render() {

        return (
            <div>
                <Header />
                <div className='singin-vision'>
                    {/* <Singin className='singin-vision' /> */}
                </div>
            </div>
        )
    }
}

export default StartPage;