//import './header.css';
import Header from '../header/header';
import { Component } from 'react';
import Singin from '../Pages/Login/SingIn/Singin';
import Singup from '../Pages/Login/SingUp/Singup';
import SideBar from '../SideBar/sideBar';
import './StartPage.scss';

class StartPage extends Component {

    render() {
        const nameClass = 'popup-show';
        return (
            <div>
                <Header />
                {/* <SideBar /> */}
                <div className='singin-vision'>
                    <Singin className='singin-vision' ></Singin>
                    <Singup className='singin-vision' ></Singup>
                </div>
                <a href='/'><button className='btnSensor'>Sensors</button></a>
            </div>
        )
    }
}

export default StartPage;