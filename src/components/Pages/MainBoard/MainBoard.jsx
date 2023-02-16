import * as Services from '../../services/services';
import Sensor from '../Senser/Sensor';
import { useState } from "react";
import './MainBoard.scss';


const HomeNew = (count, value) => {

    const sensors = [
        {
            name: 'Метеопараетры платы №1',
            params: [
                {
                    sensorName: 'Cкорость ветра',
                    nameSensorParam: 'WS',
                    value: 15,
                    units: 'м/с'
                },
                {
                    sensorName: 'Направление ветра',
                    nameSensorParam: 'WD',
                    value: 20,
                    units: '°'
                },
                {
                    sensorName: 'Температура воздуха',
                    nameSensorParam: 'TA',
                    value: 0,
                    units: '°C'
                },
                {
                    sensorName: 'Влажности воздуха',
                    nameSensorParam: 'RH',
                    value: 0,
                    units: '%'
                },
                {
                    sensorName: 'Атмосферное давление воздуха',
                    nameSensorParam: 'AP',
                    value: 0,
                    units: 'hPa!!'
                },
                {
                    sensorName: 'Количество осадков',
                    nameSensorParam: 'P',
                    value: 0,
                    units: '°'
                },
                {
                    sensorName: 'Накопленное количество осадков',
                    nameSensorParam: 'PACC',
                    value: 0,
                    units: 'mm'
                },
                {
                    sensorName: 'Интенсивность осадков',
                    nameSensorParam: 'PI',
                    value: 0,
                    units: 'mm/h'
                },
                {
                    sensorName: 'Тип осадков (код WMO)',
                    nameSensorParam: 'Ptype',
                    value: 3,
                    units: 'code'
                },
                {
                    sensorName: 'Фотосинтетическая радиация',
                    nameSensorParam: 'UVR',
                    value: 0,
                    units: 'W/m²'
                },
                {
                    sensorName: 'Температура почвы',
                    nameSensorParam: 'TG',
                    value: 0,
                    units: '°C'
                },
                {
                    sensorName: 'Влажность почвы',
                    nameSensorParam: 'RHG',
                    value: 0,
                    units: '%'
                },
                {
                    sensorName: 'Кислотность почвы',
                    nameSensorParam: 'PHG',
                    value: 0,
                    //nullValue: '//',
                    units: '°C'
                },
                {
                    sensorName: 'Температура датчика кислотности почвы',
                    nameSensorParam: 'TPH',
                    value: 0,
                    units: '°C'
                },
                {
                    sensorName: 'Температура датчика влажности листа',
                    nameSensorParam: 'TL',
                    value: 0,
                    units: '°C'
                },
                {
                    sensorName: 'Влажность листа',
                    nameSensorParam: 'RHL',
                    value: 0,
                    units: '%'
                },
                {
                    sensorName: 'Заряд батареи',
                    nameSensorParam: 'ZBAT',
                    value: 0,
                    units: '%'
                }
            ]
        }
    ];

    const [sensorsValue, setSensorsValue] = useState([]),
        [objValue, setObjValue] = useState();

    const sendRequest = () => {
        const promise = new Promise((resolve, reject) => {
            Services.updateSensorData(resolve);
        });

        promise.then(data => {
            const sensorArrayParams = data.data.types;
            // object to send compotent Sensor
            let sensorObject = new Object;

            sensorArrayParams.forEach(element => {
                if (element.value['5M'].INS)
                    sensorObject[element.name] = element.value['5M'].INS.toFixed(2);
            });
            console.log(sensorObject);
            setObjValue(sensorObject);

        }).catch(error => {
            console.log(error);
        })

    }

    const startFlowSendRequest = () => {

        let timerForSend = setInterval(() => {
            sendRequest();
        }, 2000);

        setTimeout(() => { clearInterval(timerForSend); alert('stop'); }, 30000);

    }

    const element = sensors.map((item, i) => {
        return (
            <Sensor sensor={item} value={sensorsValue} valueobj={objValue} key={i} />
        )
    });

    return (
        <div className="Home" >
            <h1 className='Header'></h1>
            <div className='area'>
                {element}
            </div>
            <button className='button-start-send-message' onClick={startFlowSendRequest}>Начать прослушивание платы</button>
            <button className='button-start-send-message' onClick={sendRequest}>Отправить одно сообщение</button>
        </div>
    )

}

export default HomeNew;