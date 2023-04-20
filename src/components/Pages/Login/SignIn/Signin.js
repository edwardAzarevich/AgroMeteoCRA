import React from 'react';
import '../style/SignInUp.scss';
import SignServices from '../../../services/SignServices';

import * as req from '../../../services/services';
import Spinner from '../../../Spinner/spinner';

class Signin extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        loading: false
    }

    SignInLoaded = (stateLoading) => {
        this.setState({ loading: stateLoading })
    }

    hidden = (obj) => {
        obj.classList.add('popup-hidden');
        obj.classList.remove('popup-show');
    };

    show = (obj) => {
        obj.classList.remove('popup-hidden');
        obj.classList.add('popup-show');
    };

    onClose = () => {
        const popup = document.querySelector('.popup-signin');
        if (popup.classList.contains('popup-show')) {
            this.hidden(popup);
        };
    }

    onSignUp = () => {
        this.onClose();
        const SignUp = document.querySelector('.popup-signup');
        if (SignUp.classList.contains('popup-hidden')) {
            this.show(SignUp);
        };
    }


    reqs = () => {
        const sere = new SignServices();
        this.SignInLoaded(true);
        sere.postLog('rr', 'rr').then(res => {
            console.log(res);
        }).catch(error => {
            console.log(error);
        })
        const login = document.querySelector('#username-signin'),
            password = document.querySelector('#password-signin'),
            resForCloseSignIn = false;
        req.postLog(login.value, password.value, resForCloseSignIn)
            .then(() => this.SignInLoaded(false));
    }

    render() {
        const { loading } = this.state,
            spinner = loading ? <Spinner /> : null;
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
                            <button onClick={this.reqs} className="button-signin">
                                {loading ? spinner : 'Sign in'}
                            </button>
                        </div>
                        <div className="form-element">
                            <div onClick={this.onSignUp}>
                                <a>Sign Up account</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Signin;
