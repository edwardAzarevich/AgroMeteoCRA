import './device-item.scss';

const DeviceItem = ({ nameDevice, value }) => {
    return (
        <div className='deviceItem'>
            {nameDevice}
        </div>
    )
}