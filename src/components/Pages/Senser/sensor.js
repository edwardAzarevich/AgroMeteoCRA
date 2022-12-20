import './Sensor.scss';
import SensorListValue from './sensor-list-value/sensor-list-value';
//
import React, { useState } from 'react';

const Sensor = ({ sensor, value }) => {

    sensor[0].params[0].value = value;
    console.log(sensor[0].params[0]);
    const element = sensor[0].params.map((item, i) => {
        return (
            <SensorListValue key={i} {...item} />
        )
    });
    return (
        <div className="Sensor">
            <img className="icon" alt="icon" /*</div>src={`/static/images/${sensor.name}.png`}*/></img>
            <h3 className="title">{sensor[0].name}</h3>
            {/* <SensorListValue value={25} units={'м/с'} /> */}
            {element}
        </div>
    );
}

export default Sensor;