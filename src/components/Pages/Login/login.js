import React from 'react';
import './login.css';
class Login extends React.Component {
    state = {
        email: '',
        password: ''
    }

    handlChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.isLogin(true)
    }

    render() {
        return (
            <div className='div-login'>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input type='email' name='email' placeholder='email...' required onChange={this.handleChange} />
                        <input type='password' name='pwd' placeholder='password...' required onChange={this.handleChange} />
                        <button onSubmit={this.handleSubmit}>Log In</button>
                    </form>
                </div>
            </div>
        )
    }

}