import * as Services from '../../services/services';
import Sensor from '../Senser/sensor';
import { useState } from "react";
import './MainBoard.scss';


//need review create new component
let timerForSend = null;


const HomeNew = (count, value) => {

    const sensors = [
        {
            name: 'Метеопараметры',
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
                    sensorName: 'Тип осадков',
                    nameSensorParam: 'Ptype',
                    value: '---',
                    units: ''
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
                    units: 'V'
                }
            ]
        }
    ];

    const [sensorsValue, setSensorsValue] = useState([]),
        [objValue, setObjValue] = useState(),
        nameButtonlistening = 'Начать прослушивание',
        [buttonText, setButtonText] = useState(nameButtonlistening),
        [timeArrival, setdataArrivalTime] = useState('---');

    const sendRequest = () => {
        const promise = new Promise((resolve, reject) => {
            Services.updateSensorData(resolve);
        });

        promise.then(obj => {
            const sensorArrayParams = obj.data.types,
                timeUpdate = obj.data.time.slice(11);
            console.log(timeUpdate);
            // object to send compotent Sensor
            let sensorObject = new Object;

            sensorArrayParams.forEach(element => {
                if (element.value['2M'].INS || element.value['2M'].INS === 0) {
                    if (element.name == "Ptype") {
                        sensorObject[element.name] = String(element.value['2M'].INS).padStart(2, "0");
                    } else
                        sensorObject[element.name] = element.value['2M'].INS.toFixed(2);
                }
            });
            setObjValue(sensorObject);
            setdataArrivalTime(timeUpdate);
        }).catch(error => {
            console.log(error);
        })

    }



    const startFlowSendRequest = () => {
        setButtonText('Идет прием данных...');
        if (timerForSend !== null) {
            clearInterval(timerForSend);
            timerForSend = null;
            setButtonText(nameButtonlistening);
            return;
        }
        timerForSend = setInterval(() => {
            sendRequest();
        }, 10000);
    }

    const element = sensors.map((item, i) => {
        return (
            <Sensor sensor={item} value={sensorsValue} valueobj={objValue} key={i} timeArrival={timeArrival} />
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
                    <button className='button-start-send-message' onClick={startFlowSendRequest}>{buttonText}</button>
                    <button className='button-start-send-message' onClick={sendRequest}>Отправить запрос</button>
                </div>
            </div>
        </div>
    )

}

export default HomeNew;
