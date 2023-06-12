import { useState, useEffect } from "react";
import { componentSelector, channelActions } from '../../store/slices/itemChannelSlices';
import { useSelector } from "react-redux";
import ItemChannelt from "../../jsx/itemChannel/ItemChannelt";
import axios from 'axios';
import './settingChannelPages.scss';
import { getSettingParams } from '../../services/serviceForSetting';
import { useAppDispatch } from '../../store/configStore/hooks';


const SettingChannelPages = () => {

    const onSaveButton1 = (objForSend) => {
        axios({
            method: 'post',
            url: 'http://10.0.25.10:4000/',
            data: objForSend
        });
    }

    const defvalue = useSelector(componentSelector.getComponent);
    console.log(defvalue[1]);
    const dispatch = useAppDispatch();

    const onSendConfigCh = (objChannel) => {
        const mainObjectForSend = {},
            item = {},
            arrayChannel = Object.values(objChannel);

        item.block_number = 0;
        item.ch = [];
        item.ch = (arrayChannel);
        mainObjectForSend.block = [];
        mainObjectForSend.block.push(item);
        console.log(mainObjectForSend);
        onSaveButton1(mainObjectForSend);
    }
    const onUpdate = async () => {
        const configg = await getSettingParams();
        dispatch(channelActions.allParams(configg.block[0].ch))
    }

    useEffect(() => { onUpdate() }, []);

    const objChannel = useSelector(componentSelector.getComponent);
    return (
        <div>
            <h1>Конфигурация каналов</h1>
            <div className="d-flex align-content-start flex-wrap"  >
                <ItemChannelt channelName={'Канал'} id={1} defvalue={defvalue[1]} />
                {/* <ItemChannelt channelName={'Канал'} id={2} />
                <ItemChannelt channelName={'Канал'} id={3} />
                <ItemChannelt channelName={'Канал'} id={4} /> */}
            </div>
            <button onClick={() => onSendConfigCh(objChannel)}>Отправить</button>
            <button onClick={() => onUpdate()}>Принять</button>

        </div >
    )
}

export default SettingChannelPages;