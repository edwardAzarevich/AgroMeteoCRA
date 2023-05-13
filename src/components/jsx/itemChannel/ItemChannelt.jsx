import './itemChannel.scss';
import { dataList } from './listParamsForDataList/dataListForItemChannel';
import InputComponent from './inputComponent/InputComponent';

const ItemChannelt = ({ channelName, id}) => {
    const defTypeName = 'Тип',
        defbaudRate = 'Скорость',
        defSensorName = 'Имя';

    const optionElemInterfaceConnection =
        <InputComponent
            defPlaceholder={defTypeName}
            idDataList={`channel-list-interface${id}`}
            listParams={dataList.nameInterfaceConnect}
        />
    const optionElemNameSensor =
        <InputComponent
            defPlaceholder={defSensorName}
            idDataList={`channel-name-sensor${id}`}
            listParams={dataList.nameSensorList}
        />
    const optionElembaudRate =
        <InputComponent
            defPlaceholder={defbaudRate}
            idDataList={`channel-baud-rate${id}`}
            listParams={dataList.baudRate}
        />
    return (
        <div className='item-channel'>
            <label>{channelName} {id} 123</label>
            {optionElemInterfaceConnection}
            {optionElemNameSensor}
            {optionElembaudRate}
        </div>
    )
}

export default ItemChannelt;