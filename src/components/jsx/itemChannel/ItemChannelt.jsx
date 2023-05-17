import './itemChannel.scss';
import { dataList } from './listParamsForDataList/dataListForItemChannel';
import InputComponent from './inputComponent/InputComponent';
import { channelActions } from '../../store/slices/itemChannelSlices';

const ItemChannelt = ({ channelName, id }) => {
    const defTypeName = 'Тип',
        defbaudRate = 'Скорость',
        defSensorName = 'Имя';

    const optionElemInterfaceConnection =
        <InputComponent
            defPlaceholder={defTypeName}
            id={id}
            idDataList={`channel-list-interface${id}`}
            listParams={dataList.nameInterfaceConnect}
            updateValue={channelActions.typeChange}
        />
    const optionElemNameSensor =
        <InputComponent
            defPlaceholder={defSensorName}
            id={id}
            idDataList={`channel-name-sensor${id}`}
            listParams={dataList.nameSensorList}
            updateValue={channelActions.sensorChange}
        />
    const optionElembaudRate =
        <InputComponent
            defPlaceholder={defbaudRate}
            id={id}
            idDataList={`channel-baud-rate${id}`}
            listParams={dataList.baudRate}
            updateValue={channelActions.bautrateChange}
        />
    return (
        <div className='item-channel'>
            <label>{channelName} {id}</label>
            {optionElemInterfaceConnection}
            {optionElemNameSensor}
            {optionElembaudRate}
        </div>
    )
}

export default ItemChannelt;