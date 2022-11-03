//import './header.css';
import './header.scss';
import { Component } from 'react';
import axios from 'axios';

class MainHeader extends Component {

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
                <header class="main">
                    <p class="logo">Peleng</p>
                    <nav class="nav">
                        <time class="text-inline">DataTime</time>
                        <div class="text-inline">About</div>
                    </nav>
                    <div class="login">
                        <a onClick={this.loginTest} class="text-inline">Sing in</a>
                        <a class="text-inline">Sing up</a>
                    </div>
                </header>
            </div >
        );
    }
};

export default MainHeader;