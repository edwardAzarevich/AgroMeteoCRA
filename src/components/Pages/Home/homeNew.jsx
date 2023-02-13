import * as Services from '../../services/services';
import Sensor from '../Senser/sensor';
import './home.css';
import { useState } from "react";


const HomeNew = (count, value) => {

    const sensors = [
        {
            name: 'Датчик скорости и направления ветра (SF-03)',
            params: [
                {
                    nameSensorParam: 'WS',
                    value: 15,
                    units: 'м/с'
                },
                {
                    nameSensorParam: 'WD',
                    value: 20,
                    units: '°'
                },
                {
                    nameSensorParam: 'TA',
                    value: 0,
                    units: '°C'
                },
                {
                    nameSensorParam: 'RH',
                    value: 0,
                    units: '%'
                },
                {
                    nameSensorParam: 'AP',
                    value: 0,
                    units: 'Pa'
                },
                {
                    nameSensorParam: 'P',
                    value: 0,
                    units: '°'
                },
                {
                    nameSensorParam: 'PACC',
                    value: 0,
                    units: 'mm'
                },
                {
                    nameSensorParam: 'PI',
                    value: 0,
                    units: 'mm/h'
                },
                {
                    nameSensorParam: 'PType',
                    value: 0,
                    units: 'code'
                },
                {
                    nameSensorParam: 'UVR',
                    value: 0,
                    units: 'm²'
                },
                {
                    nameSensorParam: 'TG',
                    value: 0,
                    units: '°C'
                },
                {
                    nameSensorParam: 'RHG',
                    value: 0,
                    units: '%'
                },
                {
                    nameSensorParam: 'TPH',
                    value: 0,
                    units: '°C'
                },
                {
                    nameSensorParam: 'TL',
                    value: 0,
                    units: '°C'
                },
                {
                    nameSensorParam: 'RHL',
                    value: 0,
                    units: '°C'
                },
                {
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
            sensorArrayParams.forEach(element => {
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
            <h1 className='Header'>Hi Gues</h1>

            <div className='area'>
                {element}
            </div>
            <button className='btnHome' onClick={sendRequest}>Start send massage</button>
            <a href='/StartPage'><button className='btnHome'>Sing In</button></a>
        </div>
    )

}

export default HomeNew;