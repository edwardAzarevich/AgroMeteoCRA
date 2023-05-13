import './SettingChannelitem.scss';
import { Component } from 'react';

import ListChannelSpeed from './Setting-channel-list-item/SettingChannelListItem.js';

class ItemChannel extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        tett: {}
    }

    createElemDatails = (array = []) => {
        const datailsElem = array.map((datailItem, i) => {
            return (
                < ListChannelSpeed key={i} datailItem={datailItem} />
            )
        })
        return datailsElem;
    }



    render() {
        let saveValueBaudrate = '';
        let saveValueInterfaceConnection = '';
        let saveDeviceName = '';
        let { sensorParams } = this.props;
        const datalistParams = sensorParams.configSensorParams ? sensorParams.configSensorParams : '';

        const { numberChannel, configJSON } = this.props;
        if (configJSON) {
            saveValueBaudrate = configJSON.baudrate;
            saveValueInterfaceConnection = configJSON.phy;
            saveDeviceName = configJSON.dev;
        };
        const sensorName = this.createElemDatails(datalistParams.sensorName);
        const sensorSpeed = this.createElemDatails(datalistParams.sensorSpeed);
        const interfaceConnection = this.createElemDatails(datalistParams.interfaceConnection);

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
                                        {sensorName}
                                    </datalist>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="text" list="comboBox-2" className="setting-select-input"
                                        autoComplete="off" placeholder="Скорость" defaultValue={saveValueBaudrate} />
                                    <datalist id="comboBox-2">
                                        {sensorSpeed}
                                    </datalist>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="text" list="comboBox-3" className="setting-select-input setting-select-datalist"
                                        autoComplete="off" placeholder="Имя" defaultValue={saveDeviceName} />
                                    <datalist id="comboBox-3">
                                        {interfaceConnection}
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
