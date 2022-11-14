//import './header.css';
import './App.css';
import Header from '../header/header';
import SideBar from '../SideBar/sideBar';
import { Component } from 'react';
import SettingChannel from '../Setting-channel/Setting-Channel-list/SettingChannel';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Singin from '../Pages/Login/SingIn/Singin';

class App extends Component {
    constructor(props) {
        super(props);
    };



    render() {
        //console.log(this.props.configJSON);
        return (
            <div>
                <Header />
                <table>
                    <tbody>
                        <tr>
                            <td className='table-menu'>
                                <SideBar />
                            </td>
                            <td className='table-setting-chennel'>
                                <Routes>
                                    <Route exact path='/' element={<SettingChannel configJSON={this.props.configJSON} />} />
                                </Routes>
                            </td>
                        </tr>
                    </tbody>


                </table>
            </div>
        )
    }
}

export default App;