//import './header.css';
import './header.scss';

function MainHeader() {
    return (
        <div >
            <header>

                <p class="logo">Peleng</p>
                <nav>
                    <ul class="nav_links">
                        <li><a href="#">Telegram</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                </nav>
                <a class="cta" href="#"><button>Log In</button></a>
            </header>
        </div>
    );
}

export default MainHeader;