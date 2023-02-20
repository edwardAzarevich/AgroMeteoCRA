import React from 'react';
import '../style/SignInUp.scss';
import * as req from '../../../services/services';

class Signin extends React.Component {
    constructor(props) {
        super(props);
    }

    hidden = (obj) => {
        obj.classList.add('popup-hidden');
        obj.classList.remove('popup-show');
    };

    onClose = () => {
        const popup = document.querySelector('.popup-signin');
        if (popup.classList.contains('popup-show')) {
            this.hidden(popup);
        };
    }

    reqs = () => {
        const login = document.querySelector('#username-signin'),
            password = document.querySelector('#password-signin');

        const promise = new Promise((resolve, reject) => {
            req.postLog(login.value, password.value, resolve);
        });

        promise.then(data => {
            this.onClose();
        });
    }

    render() {
        return (
            <div className="popup-main popup-hidden popup-signin">
                <div className="popup">
                    <div onClick={this.onClose} className="close-btn" >&times;</div>
                    <div className="form">
                        <h2>Sign in </h2>
                        <div className="form-element">
                            <label htmlFor="username">Username</label>
                            <input className="input-username-password" type="text" id="username-signin" placeholder="Enter Username" />
                        </div>
                        <div className="form-element">
                            <label htmlFor="password">Password</label>
                            <input className="input-username-password" type="password" id="password-signin" placeholder="Enter Password" />
                        </div>
                        <div className="form-element">
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <div className="form-element">
                            <button onClick={this.reqs} className="button-signin">Sign in</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Signin;
