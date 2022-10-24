//import './header.css';
import './header.scss';
import { Component } from 'react';

class MainHeader extends Component {
    
    
    render() {
        return (
            <div className='Header' >
                <header>
                    <p className="logo">Peleng</p>
                    <nav>
                        <ul className="nav_links">
                            <li><a href="#">Telegram</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Channels Setting</a></li>
                        </ul>
                    </nav>
                    <a className="cta" href="#"><button>Log In</button></a>
                </header>
            </div >
        );
    }
};

/*function MainHeader() {
    return (
        <div className='Header' >
            <header>
                <p className="logo">Peleng</p>
                <nav>
                    <ul className="nav_links">
                        <li><a href="#">Telegram</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Channels Setting</a></li>
                    </ul>
                </nav>
                <a className="cta" href="#"><button>Log In</button></a>
            </header>
        </div >
    );
}*/

export default MainHeader;