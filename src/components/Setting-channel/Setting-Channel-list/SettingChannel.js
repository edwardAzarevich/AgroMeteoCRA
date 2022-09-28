import './SettingChannel.scss';
import ItemSelectDevice from '../Setting-Channel-item/SettingChannelItem.js';

const SettingChannel = () => {
    return (
        <div>
            <h1>Конфигурация каналов</h1>
            <ul className='test' >
                { <ItemSelectDevice /> }
                {/* <ItemSelectDevice /> */}
                {/* <ItemSelectDevice /> */}
            </ul>
        </div>
    )
}

export default SettingChannel;

