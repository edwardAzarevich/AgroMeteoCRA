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

class SettingChannel extends Component {
    saveButton = () => {
        let settingJson = [
            { name: "name1" },
            { speed: "speed1" },
            { interface: "interface" }
        ];
        const arrayForObject = new Array();
        // array for 
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
                    //settingJson.add(elementItem.value);

                }
            });
            // Determine the number of elements in an object
            const sizeParamsElementList = Object.keys(paramsElementList).length;

            // if at least one cell is empty, nothing will be sent
            if (sizeParamsElementList === 3) {
                paramsElementList[`${arrayForObjectList[0]}`] = numbChannel[nubmerChannel].textContent;
                arrayForObject.push(paramsElementList);
                console.log(arrayForObject);
            }
            nubmerChannel++;
        });



        //const valuuue = speedTest[1].querySelectorAll('.setting-select-input');
        //console.log(valuuue[0]);
        return settingJson;
    }

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
                {<button onClick={this.saveButton} className='Main save'>Сохранить</button>}
            </div >
        )
    }

}

export default SettingChannel;



