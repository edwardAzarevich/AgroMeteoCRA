import React from 'react';
import '../style/SignInUp.scss';

class Signup extends React.Component {

    hidden = (obj) => {
        obj.classList.add('popup-hidden');
        obj.classList.remove('popup-show');
    };

    onClose = () => {
        const popup = document.querySelector('.popup-signup');
        if (popup.classList.contains('popup-show')) {
            this.hidden(popup);
        };
    }

    show = (obj) => {
        obj.classList.remove('popup-hidden');
        obj.classList.add('popup-show');
    };

    onSignIn = () => {
        this.onClose();
        const SignIn = document.querySelector('.popup-signin');
        if (SignIn.classList.contains('popup-hidden')) {
            this.show(SignIn);
        };
    }

    sendAccountInfo = () => {
        const login = document.querySelector('#username-signup'),
            password = document.querySelector('#password-signup'), // confirm-password-signup
            confirmPassword = document.querySelector('#confirm-password-signup'),
            status = document.querySelector('#error-match-password');

        let objForSend;
        //obj.textContent;
        // axios.post('https://10.0.25.5:5000', obj)
        //     .then(res => {
        //         console.log(obj);
        //     }).catch(error => {
        //         console.log(error);
        //     });
        if (password.value === confirmPassword.value) {
            console.log(login.value);
            console.log(password.value);
            console.log(confirmPassword.value);
        } else {
            status.textContent = "Password not match";
            console.log('Passwords do not match');
        }
        console.log('send account info');
    }

    render() {
        return (
            <div className="popup-main popup-hidden popup-signup">
                <div className="popup">
                    <div onClick={this.onClose} className="close-btn">&times;</div>
                    <div className="form">
                        <h2>Sign Up</h2>
                        <div className="form-element">
                            <label htmlFor="username">Username</label>
                            <input className="input-username-password" type="text" id="username-signup" placeholder="Enter Username" />
                        </div>
                        <div className="form-element">
                            <label htmlFor="password">Password</label>
                            <input className="input-username-password" type="password" id="password-signup" placeholder="Enter Password" />
                        </div>
                        <div className="form-element">
                            <label htmlFor="confirm-password">Confirm password</label>
                            <input className="input-username-password" type="password" id="confirm-password-signup" placeholder="Confirm Password" />
                        </div>
                        <div className="form-element">
                            <label id="error-match-password"></label>
                        </div>
                        <div className="form-element">
                            <button onClick={this.sendAccountInfo} className="button-signin">Register</button>
                        </div>
                        <div className="form-element">
                            <div onClick={this.onSignIn}>
                                <a>Sign In</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup;