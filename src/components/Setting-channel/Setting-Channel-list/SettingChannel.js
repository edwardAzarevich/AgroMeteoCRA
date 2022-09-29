import './SettingChannel.scss';
import ItemSelectDevice from '../Setting-Channel-item/SettingChannelItem.js';

const nameChannel = [
    { numberChannel: 1 },
    { numberChannel: 2 },
    { numberChannel: 3 },
    { numberChannel: 4 }
];

const SettingChannel = () => {
    const listChannelMap = nameChannel.map(item => {
        return (
            <ItemSelectDevice {...item} />
        )
    })
    return (
        <div>
            <h1 className='MainName'>Конфигурация каналов</h1>
            <ul className='test' >
                {listChannelMap}
            </ul>
        </div>
    )
}

export default SettingChannel;

