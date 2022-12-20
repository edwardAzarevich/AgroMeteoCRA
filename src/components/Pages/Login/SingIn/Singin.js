import React from 'react';
import '../style/SingInUp.scss';
import * as req from '../../../services/services';

class Singin extends React.Component {
    constructor(props) {
        super(props);
    }

    hidden = (obj) => {
        obj.classList.add('popup-hidden');
        obj.classList.remove('popup-show');
    };

    onClose = () => {
        const popup = document.querySelector('.popup-singin');
        if (popup.classList.contains('popup-show')) {
            this.hidden(popup);
        };
    }

    reqs = () => {
        const login = document.querySelector('#username-singin'),
            password = document.querySelector('#password-singin');

        const promise = new Promise((resolve, reject) => {
            req.postLog(login.value, password.value, resolve);
        });

        promise.then(data => {
            console.log(data.data.token)
            this.onClose();
        });
    }

    render() {

        //console.log(this.props);
        return (
            <div className="popup-main popup-hidden popup-singin">
                <div className="popup">
                    <div onClick={this.onClose} className="close-btn" >&times;</div>
                    <div className="form">
                        <h2>Sing in </h2>
                        <div className="form-element">
                            <label htmlFor="username">Username</label>
                            <input className="input-username-password" type="text" id="username-singin" placeholder="Enter Username" />
                        </div>
                        <div className="form-element">
                            <label htmlFor="password">Password</label>
                            <input className="input-username-password" type="password" id="password-singin" placeholder="Enter Password" />
                        </div>
                        <div className="form-element">
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <div className="form-element">
                            <button onClick={this.reqs} className="button-singIn">Sing in</button>
                        </div>
                        <div className="form-element">
                            <a>Sing Up accaunt</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Singin;
