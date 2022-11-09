//import './header.css';
import './header.scss';
import { Component } from 'react';
import axios from 'axios';

class MainHeader extends Component {

    show = (obj) => {
        obj.classList.add('popup-show');
        obj.classList.remove('popup-hidden');
    };

    onOpenSingin = () => {
        const popup = document.querySelector(`.popup-singin`);
        console.log(popup);
        if (popup.classList.contains('popup-hidden')) {
            this.show(popup);
        };
    }

    onOpenSingup = () => {
        const popup = document.querySelector(`.popup-singup`);
        console.log(popup);
        if (popup.classList.contains('popup-hidden')) {
            this.show(popup);
        };
    }

    loginTest = () => {
        const reg = {
            Username: 'ddd',
            Password: 'Qq123456!',
            ConfirmPassword: 'Qq123456!'
        };

        // this.fetch('https://10.0.25.5.5050/api/auth/register')
        //     .then(data => data.json())
        //     .then(res => console.log(res)); http://localhost:3000/menu


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
                <header className="main">
                    <p className="logo">Peleng</p>
                    <nav className="nav">
                        <time className="text-inline">DataTime</time>
                        <div className="text-inline">About</div>
                    </nav>
                    <div className="login">
                        <a onClick={this.onOpenSingin} className="text-inline">Sing in</a>
                        <a onClick={this.onOpenSingup} className="text-inline">Sing up</a>
                    </div>
                </header>
            </div >
        );
    }
};

export default MainHeader;