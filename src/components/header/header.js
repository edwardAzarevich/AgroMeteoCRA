import './header.scss';
import { Component } from 'react';
import axios from 'axios';

class MainHeader extends Component {


    show = (obj) => {
        obj.classList.add('popup-show');
        obj.classList.remove('popup-hidden');
    };

    hidden = (obj) => {
        obj.classList.add('popup-hidden');
        obj.classList.remove('popup-show');
    };

    onOpenSingin = () => {
        const singup = document.querySelector('.popup-singup');
        const singin = document.querySelector('.popup-singin');
        if (singup.classList.contains('popup-show')) {
            this.hidden(singup);
        }

        if (singin.classList.contains('popup-hidden')) {
            this.show(singin);
        };
    }

    onOpenSingup = () => {
        const singup = document.querySelector('.popup-singup');
        const singin = document.querySelector('.popup-singin');
        if (singin.classList.contains('popup-show')) {
            this.hidden(singin);
        }

        if (singup.classList.contains('popup-hidden')) {
            this.show(singup);
        };
    }

    loginTest = () => {
        const reg = {
            Username: 'ddd',
            Password: 'Qq123456!',
            ConfirmPassword: 'Qq123456!'
        };

        axios.post('https://10.0.25.5:5050/api/auth/register', {
            'Username': 'admins',
            'Password': 'Qq123456!',
            'ConfirmPassword': 'Qq123456!'
        }).then((res) => console.log(res))
            .catch(error => console.log(error));


        console.log(JSON.stringify(reg));
    }

    render() {
        return (
            <div className='Header' >
                <header id='main-header' className="main">
                    <a href='/settingChannel' className="logo">Peleng</a>
                    <nav className="nav">
                        <time className="text-inline">Время</time>
                        <div className="text-inline">О программе</div>
                    </nav>
                    <div className="login">
                        <a onClick={this.onOpenSingin} className="text-inline">Вход</a>
                        <a onClick={this.onOpenSingup} className="text-inline">Регистрация</a>
                    </div>
                </header>
            </div >
        );
    }
};

export default MainHeader;