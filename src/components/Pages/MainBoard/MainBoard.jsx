import * as Services from '../../services/services';
import Sensor from '../Senser/Sensor';
import { useState } from "react";
import './MainBoard.scss';


//need review create new component
let timerForSend = null;


const HomeNew = (count, value) => {

    const sensors = [
        {
            name: 'Метеопараетры платы №1',
            params: [
                {
                    sensorName: 'Cкорость ветра',
                    nameSensorParam: 'WS',
                    value: '---',
                    units: 'm/s'
                },
                {
                    sensorName: 'Направление ветра',
                    nameSensorParam: 'WD',
                    value: '---',
                    units: '°'
                },
                {
                    sensorName: 'Температура воздуха',
                    nameSensorParam: 'TA',
                    value: '---',
                    units: '°C'
                },
                {
                    sensorName: 'Влажности воздуха',
                    nameSensorParam: 'RH',
                    value: '---',
                    units: '%'
                },
                {
                    sensorName: 'Атмосферное давление воздуха',
                    nameSensorParam: 'AP',
                    value: '---',
                    units: 'hPa'
                },
                {
                    sensorName: 'Количество осадков',
                    nameSensorParam: 'P',
                    value: '---',
                    units: 'mm'
                },
                {
                    sensorName: 'Накопленное количество осадков',
                    nameSensorParam: 'PACC',
                    value: '---',
                    units: 'mm'
                },
                {
                    sensorName: 'Интенсивность осадков',
                    nameSensorParam: 'PI',
                    value: '---',
                    units: 'mm/h'
                },
                {
                    sensorName: 'Тип осадков (код WMO)',
                    nameSensorParam: 'Ptype',
                    value: '---',
                    units: 'code'
                },
                {
                    sensorName: 'Фотосинтетическая радиация',
                    nameSensorParam: 'UVR',
                    value: '---',
                    units: 'W/m²'
                },
                {
                    sensorName: 'Температура почвы',
                    nameSensorParam: 'TG',
                    value: '---',
                    units: '°C'
                },
                {
                    sensorName: 'Влажность почвы',
                    nameSensorParam: 'RHG',
                    value: '---',
                    units: '%'
                },
                {
                    sensorName: 'Кислотность почвы',
                    nameSensorParam: 'PHG',
                    value: '---',
                    units: 'PH'
                },
                {
                    sensorName: 'Температура датчика кислотности почвы',
                    nameSensorParam: 'TPH',
                    value: '---',
                    units: '°C'
                },
                {
                    sensorName: 'Температура датчика влажности листа',
                    nameSensorParam: 'TL',
                    value: '---',
                    units: '°C'
                },
                {
                    sensorName: 'Влажность листа',
                    nameSensorParam: 'RHL',
                    value: '---',
                    units: '%'
                },
                {
                    sensorName: 'Заряд батареи',
                    nameSensorParam: 'ZBAT',
                    value: '---',
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
        console.log(timerForSend);
        if (timerForSend !== null) {
            clearInterval(timerForSend);
            timerForSend = null;
            alert('stop');
            return;
        }
        timerForSend = setInterval(() => {
            sendRequest();
        }, 2000);

        //setTimeout(() => { clearInterval(timerForSend); alert('stop'); }, 30000);

    }

    const element = sensors.map((item, i) => {
        return (
            <Sensor sensor={item} value={sensorsValue} valueobj={objValue} key={i} />
        )
    });

    return (
        <div className="Home" >
            <h1 className='Header'></h1>
            
            <div className="fixed-container">
                <div className='area'>
                    {element}
                </div>
                <div className='for-button-click'>
                    <button className='button-start-send-message' onClick={startFlowSendRequest}>Начать прослушивание платы</button>
                    <button className='button-start-send-message' onClick={sendRequest}>Отправить одно сообщение</button>
                </div>
            </div>
        </div>
    )

}

export default HomeNew;
