import React from 'react';
import '../style/SingInUp.scss';

class Singup extends React.Component {

    show = (obj) => {
        obj.classList.add('popup-show');
        obj.classList.remove('popup-hidden');
    };

    hidden = (obj) => {
        obj.classList.add('popup-hidden');
        obj.classList.remove('popup-show');
    };

    onClose = () => {
        const popup = document.querySelector('.popup-singup');
        console.log(popup);
        if (popup.classList.contains('popup-show')) {
            this.hidden(popup);
        };
    }

    onOpen = () => {
        const popup = document.querySelector('.popup-main');
        if (popup.classList.contains(this.props.children)) {
            this.show(popup);
        };
    }


    render() {
        return (
            <div className="popup-main popup-hidden popup-singup">
                <div className="popup">
                    <div onClick={this.onClose} className="close-btn">&times;</div>
                    <div className="form">
                        <h2>Sing Up</h2>
                        <div className="form-element">
                            <label htmlFor="username">Username</label>
                            <input className="input-username-password" type="text" id="username-singup" placeholder="Enter Username" />
                        </div>
                        <div className="form-element">
                            <label htmlFor="password">Password</label>
                            <input className="input-username-password" type="password" id="password-singup" placeholder="Enter Password" />
                        </div>
                        <div className="form-element">
                            <label htmlFor="confirm-password">Confirm password</label>
                            <input className="input-username-password" type="password" id="confirm-password-singup" placeholder="Confirm Password" />
                        </div>
                        <div className="form-element">
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <div className="form-element">
                            <button className="button-singIn">Register</button>
                        </div>
                        <div className="form-element">
                            <a href="/Singin">Sing In</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Singup;