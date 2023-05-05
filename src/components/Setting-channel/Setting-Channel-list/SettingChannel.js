import './SettingChannel.scss';
import ItemChannel from '../Setting-Channel-item/SettingChannelItem.js';
import { Component } from 'react';
import axios from 'axios';
import { getSensorParams, getSettingParams } from '../../services/serviceForSetting';

// Количество настраиваемых каналов (в дальнейшем переделать)
const nameChannel = [
    { numberChannel: 1 },
    { numberChannel: 2 },
    { numberChannel: 3 },
    { numberChannel: 4 },
    { numberChannel: 5 },
    { numberChannel: 6 },
    { numberChannel: 7 },
    { numberChannel: 8 },
    { numberChannel: 9 },
    { numberChannel: 10 },
];

// need code review
class SettingChannel extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        settingParams: {},
        sensorParams: {},
        error: false,
        loading: true
    }

    onSaveButton = () => {
        let i = 0;
        axios({
            method: 'post',
            url: 'http://10.0.25.10:4000/',
            data: {
                block_number: `${i}`,
                ch: this.CreateParamsArray()
            }
        });
    }

    onReqForGetSaveParams = () => {
        getSensorParams()
            .then(this.onSensorParamsLeaded)
            .catch(this.error);

        getSettingParams()
            .then(this.onParamsLeaded)
            .catch(this.error);
    }
    componentDidMount() {
        this.onReqForGetSaveParams();
    }

    onParamsLeaded = (params) => {
        this.setState({ settingParams: params });
    }

    onSensorParamsLeaded = (params) => {
        this.setState({ sensorParams: params });
    }

    //Creating an array with channel settings objects
    CreateParamsArray = () => {

        const arrayForObject = [];
        const arrayForObjectList = ['ch_number', 'phy', 'baudrate', 'dev'];
        const settingListComponent = document.querySelectorAll('.block-configuration');
        const numbChannel = document.querySelectorAll('.table-setting-number');
        //
        let nubmerChannel = 0;
        settingListComponent.forEach(elementList => {
            // Not change
            let paramsElementList = new Object();
            let i = 1;
            let itemComponents = elementList.querySelectorAll('.setting-select-input');

            itemComponents.forEach(elementItem => {
                if (elementItem.value !== "") {
                    paramsElementList[`${arrayForObjectList[i]}`] = elementItem.value;
                    i++;
                }
            });
            // Determine the number of elements in an object
            const sizeParamsElementList = Object.keys(paramsElementList).length;

            // Sending elements from the page to JSON
            // if at least one cell is empty, nothing will be sent
            if (sizeParamsElementList === 3) {
                paramsElementList[`${arrayForObjectList[0]}`] = numbChannel[nubmerChannel].textContent;
                arrayForObject.push(paramsElementList);
            }
            nubmerChannel++;
        });
        return arrayForObject;
    };

    render() {
        let arrayConfigJSON = '';
        let objectForChannal = '';
        let testBlock = this.state.settingParams;
        let configJSON = testBlock ? testBlock : '';
        const errorMassage = configJSON.block ? '' : 'Необходимо включить сервер для приема и сохранения данных';
        // !!!!!!! review
        if (configJSON.block) {
            arrayConfigJSON = configJSON.block[0].ch;
        }
        const listChannelMap = nameChannel.map((item, i) => {
            for (const element of arrayConfigJSON) {
                if (element.ch_number == item.numberChannel) {
                    objectForChannal = element;
                    break;
                }
                else {
                    objectForChannal = '';
                }
            }
            return (
                <ItemChannel configJSON={objectForChannal} key={i} {...item} testItem={configJSON} sensorParams={this.state.sensorParams} />
            )
        });

        return (
            <div>
                <h1>Конфигурация каналов</h1>
                <ul className='test' >
                    {listChannelMap}
                </ul>
                {<button onClick={this.onSaveButton} className='Main save'>Сохранить</button>}
                <div className='status-server'>
                    {errorMassage}
                </div>
            </div >
        )
    }
}

export default SettingChannel;



