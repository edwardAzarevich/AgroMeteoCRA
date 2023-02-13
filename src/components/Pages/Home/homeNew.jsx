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
                    value: 15,
                    units: 'м/с'
                },
                {
                    value: 20,
                    units: '°'
                }
            ]
        }
    ];

    const [sensorsValue, setSensorsValue] = useState([]);

    const sendRequest = () => {
        const promise = new Promise((resolve, reject) => {
            Services.updateSensorData(resolve);
        });

        promise.then(data => {
            console.log(data.data.types[0].value);
            const listParams = [],
                sensorArrayParams = data.data.types;


            let sensorObject = new Object;
            sensorArrayParams.forEach(element => {
                sensorObject[element.name] = element.value['5M'].INS.toFixed(2);
            });



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
            <Sensor sensor={item} value={sensorsValue} key={i} />
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