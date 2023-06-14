import './itemChannel.scss';
import { dataList } from './listParamsForDataList/dataListForItemChannel';
import InputComponent from './inputComponent/InputComponent';
import { channelActions } from '../../store/slices/itemChannelSlices';

const ItemChannelt = ({ channelName, id, defvalue }) => {
    const defTypeName = 'Тип',
        defbaudRate = 'Скорость',
        defSensorName = 'Имя';

    const optionElemInterfaceConnection =
        <InputComponent
            defPlaceholder={defTypeName}
            id={id}
            defvalue={defvalue.phy}
            idDataList={`channel-list-interface${id}`}
            listParams={dataList.nameInterfaceConnect}
            updateValue={channelActions.typeChange}
        />
    const optionElemNameSensor =
        <InputComponent
            defPlaceholder={defSensorName}
            id={id}
            defvalue={defvalue.dev}
            idDataList={`channel-name-sensor${id}`}
            listParams={dataList.nameSensorList}
            updateValue={channelActions.sensorChange}
        />
    const optionElembaudRate =
        <InputComponent
            defPlaceholder={defbaudRate}
            id={id}
            defvalue={defvalue.baudrate}
            idDataList={`channel-baud-rate${id}`}
            listParams={dataList.baudRate}
            updateValue={channelActions.bautrateChange}
        />
    return (
        <div className='item-channel'>
            <label>{channelName} {id}</label>
            <div>
                {optionElemInterfaceConnection}
            </div>
            <div>
                {optionElemNameSensor}
            </div>
            {optionElembaudRate}
        </div>
    )
}

export default ItemChannelt;