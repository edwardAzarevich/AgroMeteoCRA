import React from "react";
import './sideBar.css';
import IcoHome from './ico/home.ico';
import IcoGraph from './ico/graph.ico';
import IcoLogOut from './ico/logOut.ico';
import IcoNetUsers from './ico/netUsers.ico';
import IcoSensor from './ico/sensor.ico';
import IcoSettings from './ico/settings.ico';




function mainSideBar() {
    return (
        <div className="main-menu">
            <nav>
                <ul>
                    <li>
                        <a href="#" className="menu-item">
                            <img src={IcoHome} alt="home ico" className="menu-item-img" />
                            <span className="menu-item-name">Станции</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="menu-item">
                            <img src={IcoSensor} alt="sensor ico" className="menu-item-img" />
                            <span className="menu-item-name">Датчики станции</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="menu-item">
                            <img src={IcoGraph} alt="graph ico" className="menu-item-img" />
                            <span className="menu-item-name">Построение графиков</span>
                        </a>
                    </li>
                    <li>
                        <div href="#" className="menu-item">
                            <img src={IcoNetUsers} alt="netUser ico" className="menu-item-img" />
                            <details className="menu-item-name menu-item-2">
                                <summary>Подключенные пользователи</summary>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <a href="#" className="menu-item">
                                                    <span className="menu-item-name">Список пользователей</span>
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </details>
                        </div>
                    </li>
                    <li>
                        <div href="#" className="menu-item">
                            <img src={IcoSettings} alt="setting ico" className="menu-item-img" />
                            <details className="menu-item-name menu-item-2">
                                <summary>Настройки станции</summary>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <a href="#" className="menu-item">
                                                    <span className="menu-item-name">Удаленная настройка станции</span>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a href="#" className="menu-item">
                                                    <span className="menu-item-name">Настройка тревожных сообщений</span>
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </details>
                        </div>
                    </li>
                    <li>
                        <a href="#" className="menu-item menu-item-exit">
                            <img src={IcoLogOut} alt="setting ico" className="menu-item-img" />
                            <span className="menu-item-name">Выйти</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>

    )
}

export default mainSideBar;
