//import './header.css';
import Header from '../header/header';
import { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Singin from '../Pages/Login/SingIn/Singin';
import Singup from '../Pages/Login/SingUp/Singup';

class StartPage extends Component {

    render() {
        const nameClass = 'popup-show';
        return (
            <div>
                <Header />
                <div className='singin-vision'>
                    <Singin className='singin-vision' >{nameClass}</Singin>
                    <Singup className='singin-vision' ></Singup>
                </div>
            </div>
        )
    }
}

export default StartPage;