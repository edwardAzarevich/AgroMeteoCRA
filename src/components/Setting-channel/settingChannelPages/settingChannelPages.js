import { useState } from "react";
import { componentSelector } from '../../store/slices/itemChannelSlices';
import { useSelector } from "react-redux";
import ItemChannelt from "../../jsx/itemChannel/ItemChannelt";
import axios from 'axios';
import './settingChannelPages.scss';


const SettingChannelPages = () => {

    const onSaveButton1 = (objForSend) => {
        axios({
            method: 'post',
            url: 'http://10.0.25.10:4000/',
            data: objForSend
        });
    }

    const onSendConfigCh = (objChannel) => {
        const mainObjectForSend = {},
            item = {};

        item.block_number = 0;
        item.ch = [];
        const arrayChannel = Object.values(objChannel);
        item.ch = (arrayChannel);
        mainObjectForSend.block = [];
        mainObjectForSend.block.push(item);
        console.log(mainObjectForSend);
        onSaveButton1(mainObjectForSend);
    }

    const objChannel = useSelector(componentSelector.getComponent);
    return (
        <div>
            <h1>Конфигурация каналов</h1>
            <div className="d-flex align-content-start flex-wrap"  >
                <ItemChannelt channelName={'Канал'} id={1} />
                <ItemChannelt channelName={'Канал'} id={2} />
                <ItemChannelt channelName={'Канал'} id={3} />
                <ItemChannelt channelName={'Канал'} id={4} />
            </div>
            <button onClick={() => onSendConfigCh(objChannel)}>Отправить</button>
        </div >
    )
}

export default SettingChannelPages;