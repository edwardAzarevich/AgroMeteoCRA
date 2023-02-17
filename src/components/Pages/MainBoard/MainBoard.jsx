import * as Services from '../../services/services';
import Sensor from '../Senser/Sensor';
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
                    units: '%'
                }
            ]
        }
    ];

    const [sensorsValue, setSensorsValue] = useState([]),
        [objValue, setObjValue] = useState(),
        nameButtonlistening = 'Начать прослушивание',
        [buttonText, setButtonText] = useState(nameButtonlistening);

    const sendRequest = () => {
        const promise = new Promise((resolve, reject) => {
            Services.updateSensorData(resolve);
        });

        promise.then(data => {
            const sensorArrayParams = data.data.types;
            // object to send compotent Sensor
            let sensorObject = new Object;

            sensorArrayParams.forEach(element => {
                if (element.value['5M'].INS || element.value['5M'].INS === 0) {
                    if (element.name == "Ptype") {
                        sensorObject[element.name] = String(element.value['5M'].INS).padStart(2, "0");
                    } else
                        sensorObject[element.name] = element.value['5M'].INS.toFixed(2);
                }
            });
            console.log(sensorObject);
            setObjValue(sensorObject);

        }).catch(error => {
            console.log(error);
        })

    }



    const startFlowSendRequest = () => {
        //console.log(timerForSend);
        setButtonText('Идет прием данных...');
        if (timerForSend !== null) {
            clearInterval(timerForSend);
            timerForSend = null;
            setButtonText(nameButtonlistening);
            return;
        }
        timerForSend = setInterval(() => {
            sendRequest();
        }, 2000);

        //setTimeout(() => { clearInterval(timerForSend); alert('stop'); }, 30000); cadetblue darkcyan darkred

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
                    <button className='button-start-send-message' onClick={startFlowSendRequest}>{buttonText}</button>
                    <button className='button-start-send-message' onClick={sendRequest}>Отправить запрос</button>
                </div>
            </div>
        </div>
    )

}

export default HomeNew;
