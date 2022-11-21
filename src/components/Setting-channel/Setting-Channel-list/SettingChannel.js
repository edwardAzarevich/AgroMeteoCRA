import './SettingChannel.scss';
import ItemSelectDevice from '../Setting-Channel-item/SettingChannelItem.js';
import { Component } from 'react';
import axios from 'axios';

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
            let itemComponetn = elementList.querySelectorAll('.setting-select-input');

            itemComponetn.forEach(elementItem => {
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
        let f = false;
        let objectForChannal = '';
        let { configJSON } = this.props;
        //console.log(configJSON);
        //configJSON = '';
        // !!!!!!! review
        if (configJSON !== '')
            arrayConfigJSON = configJSON.block[0].ch;
        const listChannelMap = nameChannel.map((item, i) => {
            //console.log(arrayConfigJSON);

            for (const element of arrayConfigJSON) {
                if (element.ch_number == item.numberChannel) {
                    objectForChannal = element;
                    console.log(objectForChannal);
                    break;
                }
                else {
                    objectForChannal = '';
                }
            }
            return (
                // test valueTest !!!!
                <ItemSelectDevice configJSON={objectForChannal} key={i} {...item} />
            )
        });

        return (
            <div>
                <h1 className='Main'>Конфигурация каналов</h1>
                <ul className='test' >
                    {listChannelMap}
                </ul>
                {<button onClick={this.onSaveButton} className='Main save'>Сохранить</button>}
            </div >
        )
    }
}

export default SettingChannel;



