//import './header.css';
import './App.css';
import Header from '../header/header';
import SideBar from '../SideBar/sideBar';
import { Component } from 'react';
import SettingChannel from '../Setting-channel/Setting-Channel-list/SettingChannel'

class App extends Component {

    render() {
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
                                <SettingChannel />
                            </td>
                        </tr>
                    </tbody>


                </table>
            </div>
        )
    }
}

export default App;