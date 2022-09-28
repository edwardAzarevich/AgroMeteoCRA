import './SettingChannelitem.scss';

import ListChannelSpeed from './Setting-channel-list-item/SettingChannelListItemSpeed.js';

// Временное хранилиже данных
const deviceName = ['СФ-03', 'PTB210', 'БА-1'];

const speedList = [
    { speed: 1200 },
    { speed: 9600 },
    { speed: 19200 }
];

const interfaceForConnection = ['RS232', 'RS485', 'V.23'];

const itemChannel = () => {
    const elementSpeed = speedList.map(item => {
        return (
            <ListChannelSpeed {...item} />
        )
    })


    return (
        <li className="list-group-item d-flex justify-content-between">
            <div className="block-configuration">
                <table className="table-settring">
                    <thead>
                        <tr className="table-setting-name"><td>Ch<strong className="table-setting-number">0</strong></td></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input type="text" list="comboBox-1" id="cb1" className="csss setting-select-input"
                                    autoComplete="off" />
                                <datalist id="comboBox-1">
                                    <option value="item 1" />
                                    <option value="item 2" />
                                    <option value="item 3" />
                                    <option value="item 4" />
                                    <option value="item 5" />
                                    <option value="item 6" />
                                    <option value="item 7" />
                                    <option value="item 8" />
                                    <option value="item 9" />
                                    <option value="item 10" />
                                    <option value="item 11" />
                                    <option value="item 12" />
                                </datalist>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" list="comboBox-2" id="cb2" className="setting-select-input"
                                    autoComplete="off" />
                                <datalist id="comboBox-2">
                                    {elementSpeed}
                                </datalist>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" list="comboBox-3" id="cb3" className="setting-select-input setting-select-datalist"
                                    autoComplete="off" />
                                <datalist id="comboBox-3">
                                    <option value="item 1" />
                                    <option value="item 2" />
                                    <option value="item 3" />
                                    <option value="item 4" />
                                    <option value="item 5" />
                                    <option value="item 6" />
                                    <option value="item 7" />
                                    <option value="item 8" />
                                    <option value="item 9" />
                                    <option value="item 10" />
                                    <option value="item 11" />
                                    <option value="item 12" />
                                </datalist>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" className="setting-select-input text-empty-checker" />
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <input type="text" className="setting-select-input text-empty-checker" />
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <input type="text" className="setting-select-input text-empty-checker" />
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <input type="text" className="setting-select-input text-empty-checker" />
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <input type="text" className="setting-select-input text-empty-checker" />
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <input type="text" className="setting-select-input text-empty-checker" />
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <input type="text" className="setting-select-input text-empty-checker" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </li>

    )
}



export default itemChannel;
