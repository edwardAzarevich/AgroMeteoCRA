import React from 'react';
import './Registration.scss';

class Singup extends React.Component {


    render() {
        return (
            <div className="popup-main popup-hidden">
                <div className="popup">
                    <div className="close-btn">&times;</div>
                    <div className="form">
                        <h2>Registration</h2>
                        <div className="form-element">
                            <label htmlFor="username">Username</label>
                            <input className="input-username-password" type="text" id="username" placeholder="Enter Username" />
                        </div>
                        <div className="form-element">
                            <label htmlFor="password">Password</label>
                            <input className="input-username-password" type="password" id="password" placeholder="Enter Password" />
                        </div>
                        <div className="form-element">
                            <label htmlFor="confirm-password">Confirm password</label>
                            <input className="input-username-password" type="password" id="confirm-password" placeholder="Confirm Password" />
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