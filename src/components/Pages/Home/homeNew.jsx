import * as Services from '../../services/services';
import Sensor from '../Senser/sensor';
import './home.css';
import { useState } from "react";


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
                    nameSensorParam: 'TPH',
                    value: 0,
                    //nullValue: '//',
                    units: '°C'
                },
                {
                    sensorName: 'Температура датчика кислотности почвы',
                    nameSensorParam: 'TL',
                    value: 0,
                    units: '°C'
                },
                {
                    sensorName: 'Температура датчика влажности листа',
                    nameSensorParam: 'RHL',
                    value: 0,
                    units: '°C'
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
            const listParams = [],
                sensorArrayParams = data.data.types;

            let sensorObject = new Object;
            console.log(sensorArrayParams);
            //console.log('okes');
            sensorArrayParams.forEach(element => {
                if (element.value['5M'].INS)
                    sensorObject[element.name] = element.value['5M'].INS.toFixed(2);
            });


            setObjValue(sensorObject);
            //sensorObject[`${data.data.types[0].name}`] = data.data.types[0].value['5M'].INS;
            console.log(sensorObject);
            listParams.push(Math.round(data.data.types[0].value['5M'].INS));
            listParams.push(Math.round(data.data.types[1].value['5M'].INS));
            setSensorsValue(listParams);

        }).catch(error => {
            console.log(error);
        })

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
            <button className='btnHome' onClick={sendRequest}>Start send massage</button>
            <a href='/StartPage'><button className='btnHome'>Sign In</button></a>
        </div>
    )

}

export default HomeNew;