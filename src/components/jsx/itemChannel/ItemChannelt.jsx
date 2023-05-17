import './itemChannel.scss';
import { dataList } from './listParamsForDataList/dataListForItemChannel';
import InputComponent from './inputComponent/InputComponent';
import { useAppSelector, useAppDispatch } from '../../store/configStore/hooks'
import { useDispatch, useSelector } from 'react-redux';
import { typeChange, bautrateChange, sensorChange, componentSelector } from '../../store/slices/itemChannelSlices';


const ItemChannelt = ({ channelName, id }) => {
    const defTypeName = 'Тип',
        defbaudRate = 'Скорость',
        defSensorName = 'Имя';

    const channel = useAppSelector(
        (state) => state.channel);

    const count = useSelector(componentSelector.getComponent);


    const optionElemInterfaceConnection =
        <InputComponent
            defPlaceholder={defTypeName}
            idDataList={`channel-list-interface${id}`}
            listParams={dataList.nameInterfaceConnect}
            updateValue={typeChange}
        />
    const optionElemNameSensor =
        <InputComponent
            defPlaceholder={defSensorName}
            idDataList={`channel-name-sensor${id}`}
            listParams={dataList.nameSensorList}
            updateValue={sensorChange}
        />
    const optionElembaudRate =
        <InputComponent
            defPlaceholder={defbaudRate}
            idDataList={`channel-baud-rate${id}`}
            listParams={dataList.baudRate}
            value={count}
            updateValue={bautrateChange}
        />
    return (
        <div className='item-channel'>
            <label>{channelName} {id}</label>
            {optionElemInterfaceConnection}
            {optionElemNameSensor}
            {optionElembaudRate}
            {count}
        </div>
    )
}

export default ItemChannelt;