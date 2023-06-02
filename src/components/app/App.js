import './App.css';
import Header from '../header/header';
import SideBar from '../SideBar/sideBar';
import { Component } from 'react';
import SettingChannel from '../Setting-channel/Setting-Channel-list/SettingChannel';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import { store } from '../store/configStore/configStore';
import { Provider } from 'react-redux';
import SettingChannelPages from '../Setting-channel/settingChannelPages/settingChannelPages';

const App = () => {
    return (
        <div>
            <Header />
            <Provider store={store}>
                <Routes>
                    <Route exact path='/' element={<SettingChannel />} />
                </Routes>
            </Provider>
        </div>
    )
}

export default App;

