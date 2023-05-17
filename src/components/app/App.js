import './App.css';
import Header from '../header/header';
import SideBar from '../SideBar/sideBar';
import { Component } from 'react';
import SettingChannel from '../Setting-channel/Setting-Channel-list/SettingChannel';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import { store } from '../store/configStore/configStore';
import { Provider } from 'react-redux';

class App extends Component {
    constructor(props) {
        super(props);
    };
    ons = () => { console.log(store); }
    render() {
        this.ons();
        return (
            <Provider store={store}>
                <div>
                    <Header />
                    <table>
                        <tbody>
                            <tr>
                                <td className='table-menu'>
                                    {/* <SideBar /> */}
                                </td>
                                <td className='table-setting-chennel'>
                                    <Routes>
                                        <Route exact path='/' element={<SettingChannel />} />
                                    </Routes>
                                </td>
                            </tr>
                        </tbody>


                    </table>
                </div>
            </Provider>
        )
    }
}

export default App;

