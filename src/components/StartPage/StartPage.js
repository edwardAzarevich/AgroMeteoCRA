//import './header.css';
import Header from '../header/header';
import { Component } from 'react';
import Signin from '../Pages/Login/SignIn/Signin';
import Signup from '../Pages/Login/SignUp/Signup';
import SideBar from '../SideBar/sideBar';
import './StartPage.scss';

class StartPage extends Component {

    render() {
        const nameClass = 'popup-show';
        return (
            <div>
                <Header />
                {/* <SideBar /> */}
                <div className='signin-vision'>
                    <Signin className='signin-vision' ></Signin>
                    <Signup className='signin-vision' ></Signup>
                </div>
                <a href='/'><button className='btnSensor'>Sensors</button></a>
            </div>
        )
    }
}

export default StartPage;