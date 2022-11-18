import './SettingChannelitem.scss';
import { Component } from 'react';

import ListChannelSpeed from './Setting-channel-list-item/SettingChannelListItem.js';

// Временное хранилиже данных

const deviceName = [
    { item: 'СФ-03' },
    { item: 'PTB210' },
    { item: 'БА-1' }
];

const speedList = [
    { item: 1200 },
    { item: 9600 },
    { item: 19200 }
];

const interfaceListConnection = [
    { item: 'RS232' },
    { item: 'RS485' },
    { item: 'V.23' }
];

class ItemChannel extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let saveValueBaudrate = '';
        let saveValueInterfaceConnection = '';
        let saveDeviceName = '';

        const { numberChannel, configJSON } = this.props;
        if (configJSON) {
            saveValueBaudrate = configJSON.baudrate;
            saveValueInterfaceConnection = configJSON.phy;
            saveDeviceName = configJSON.dev;
        };

        //console.log(configJSON.dev);
        const elementSpeed = speedList.map((item, i) => {
            return (
                <ListChannelSpeed key={i} {...item} />
            )
        });

        const elementNameDevice = deviceName.map((item, i) => {
            return (
                <ListChannelSpeed key={i} {...item} />
            )
        });

        const elementInterfaceConnection = interfaceListConnection.map((item, i) => {
            return (
                <ListChannelSpeed key={i} {...item} />
            )
        });

        return (
            <li className="list-group-item d-flex justify-content-between">
                <div className="block-configuration">
                    <table className="table-settring">
                        <thead>
                            <tr className="table-setting-name"><td>Ch<strong className="table-setting-number">{numberChannel}</strong></td></tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input type="text" list="comboBox-1" className="setting-select-input"
                                        autoComplete="off" placeholder="Тип" defaultValue={saveValueInterfaceConnection} />
                                    <datalist id="comboBox-1">
                                        {elementInterfaceConnection}
                                    </datalist>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="text" list="comboBox-2" className="setting-select-input"
                                        autoComplete="off" placeholder="Скорость" defaultValue={saveValueBaudrate} />
                                    <datalist id="comboBox-2">
                                        {elementSpeed}
                                    </datalist>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="text" list="comboBox-3" className="setting-select-input setting-select-datalist"
                                        autoComplete="off" placeholder="Имя" defaultValue={saveDeviceName} />
                                    <datalist id="comboBox-3">
                                        {elementNameDevice}
                                    </datalist>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="text" className="setting-select-input text-empty-checker" placeholder="Статус1" />
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="text" className="setting-select-input text-empty-checker" placeholder="Статус2" />
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="text" className="setting-select-input text-empty-checker" placeholder="Статус3" />
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="text" className="setting-select-input text-empty-checker" placeholder="Статус4" />
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="text" className="setting-select-input text-empty-checker" placeholder="Статус5" />
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="text" className="setting-select-input text-empty-checker" placeholder="Статус6" />
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <input type="text" className="setting-select-input text-empty-checker" placeholder="Статус7" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </li>

        )
    }
}

export default ItemChannel;
