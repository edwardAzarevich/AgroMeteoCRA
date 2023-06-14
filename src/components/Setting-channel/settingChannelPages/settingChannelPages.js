import { useEffect } from "react";
import { componentSelector, channelActions } from '../../store/slices/itemChannelSlices';
import { useSelector } from "react-redux";
import ItemChannelt from "../../jsx/itemChannel/ItemChannelt";
import axios from 'axios';
import './settingChannelPages.scss';
import { getSettingParams } from '../../services/serviceForSetting';
import { useAppDispatch } from '../../store/configStore/hooks';



const SettingChannelPages = () => {

    const postSave = (objForSend) => {
        axios({
            method: 'post',
            url: 'http://localhost:4000/',
            data: objForSend
        });
    }

    const idChannel = [1, 2, 3, 4, 5];
    const defvalue = useSelector(componentSelector.getComponent);
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
        postSave(mainObjectForSend);
    }
    const onUpdate = async () => {
        const config = await getSettingParams();
        if (config.block !== undefined && config.block.length > 0) {
            dispatch(channelActions.allParams((config.block[0].ch)));
        }
    }

    useEffect(() => { onUpdate() }, []);

    const objChannel = useSelector(componentSelector.getComponent);
    const channalList = idChannel.map((id) => {
        return <ItemChannelt channelName={'Канал'} id={id} key={id} defvalue={defvalue[id] ?? ''} />
    })
    return (
        <div>
            <h1>Конфигурация каналов</h1>
            <div className="d-flex align-content-start flex-wrap"  >
                {channalList}
            </div>
            <button className="for-button-save-send" onClick={() => onSendConfigCh(objChannel)}>Сохранить</button>
            <button className="for-button-save-send" onClick={() => onUpdate()}>Обновить с сервера</button>
        </div >
    )
}

export default SettingChannelPages;