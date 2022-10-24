import './SettingChannel.scss';
import ItemSelectDevice from '../Setting-Channel-item/SettingChannelItem.js';
import { Component } from 'react';

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
        /*const arrayForObjectList = ['ch_number', 'phy', 'dev', 'baudrate'];
        const settingListComponent = document.querySelectorAll('.block-configuration');
        const numbChannel = document.querySelectorAll('.table-setting-number');*/
        const mainObjectForJSON = {
            block_number: 0,
            ch: this.CreateParamsArray()
        };

        console.log(mainObjectForJSON);
        return 0;
    }

    //Creating an array with channel settings objects
    CreateParamsArray = () => {

        const arrayForObject = new Array();
        const arrayForObjectList = ['ch_number', 'phy', 'dev', 'baudrate'];
        const settingListComponent = document.querySelectorAll('.block-configuration');
        const numbChannel = document.querySelectorAll('.table-setting-number');
        //
        let nubmerChannel = 0;
        settingListComponent.forEach(elementList => {

            let paramsElementList = new Object();
            let i = 1;
            let itemComponetn = elementList.querySelectorAll('.setting-select-input');

            itemComponetn.forEach(elementItem => {
                if (elementItem.value != "") {
                    paramsElementList[`${arrayForObjectList[i]}`] = elementItem.value;
                    i++;
                }
            });
            // Determine the number of elements in an object
            const sizeParamsElementList = Object.keys(paramsElementList).length;

            // if at least one cell is empty, nothing will be sent
            if (sizeParamsElementList === 3) {
                paramsElementList[`${arrayForObjectList[0]}`] = numbChannel[nubmerChannel].textContent;
                arrayForObject.push(paramsElementList);
                //console.log(arrayForObject);
            }
            nubmerChannel++;
        });

        return arrayForObject;
    };

    render() {
        const listChannelMap = nameChannel.map((item, i) => {
            return (
                <ItemSelectDevice key={i} {...item} />
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



