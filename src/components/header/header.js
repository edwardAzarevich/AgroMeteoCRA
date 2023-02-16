import './header.scss';
import { Component } from 'react';
import axios from 'axios';
import Clock from '../Clock/Clock';

class MainHeader extends Component {


    show = (obj) => {
        obj.classList.add('popup-show');
        obj.classList.remove('popup-hidden');
    };

    hidden = (obj) => {
        obj.classList.add('popup-hidden');
        obj.classList.remove('popup-show');
    };

    onOpensignin = () => {
        const signup = document.querySelector('.popup-signup');
        const signin = document.querySelector('.popup-signin');
        if (signup.classList.contains('popup-show')) {
            this.hidden(signup);
        }

        if (signin.classList.contains('popup-hidden')) {
            this.show(signin);
        };
    }

    onOpensignup = () => {
        const signup = document.querySelector('.popup-signup');
        const signin = document.querySelector('.popup-signin');
        if (signin.classList.contains('popup-show')) {
            this.hidden(signin);
        }

        if (signup.classList.contains('popup-hidden')) {
            this.show(signup);
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
                        <time className="text-inline time-clock">
                            <Clock />
                        </time>
                        {/* <div className="text-inline">About</div> */}
                    </nav>
                    <div className="login">
                        <a onClick={this.onOpensignin} className="text-inline">Sign in</a>
                        <a onClick={this.onOpensignup} className="text-inline">Sign up</a>
                    </div>
                </header>
            </div >
        );
    }
};

export default MainHeader;