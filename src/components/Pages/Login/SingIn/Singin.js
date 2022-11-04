import React from 'react';
import './Singin.scss';

class Singin extends React.Component {


    render() {
        return (
            <div className="popup-main popup-hidden">
                <div className="popup">
                    <div className="close-btn"><a href='/'>&times;</a></div>
                    <div className="form">
                        <h2>Sing in</h2>
                        <div className="form-element">
                            <label htmlFor="username">Username</label>
                            <input className="input-username-password" type="text" id="username" placeholder="Enter Username" />
                        </div>
                        <div className="form-element">
                            <label htmlFor="password">Password</label>
                            <input className="input-username-password" type="password" id="password" placeholder="Enter Password" />
                        </div>
                        <div className="form-element">
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <div className="form-element">
                            <button className="button-singIn">Sing in</button>
                        </div>
                        <div className="form-element">
                            <a href="/Singup">Registration accaunt</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Singin;
