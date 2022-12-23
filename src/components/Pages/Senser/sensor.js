import './Sensor.scss';
import SensorListValue from './sensor-list-value/sensor-list-value';
//
import React, { useState } from 'react';

const Sensor = ({ sensor, value }) => {

    sensor.params[0].value = value;
    console.log(sensor.params[0]);
    const sensors = sensor.params.map((item, i) => {
        return (
            <SensorListValue key={i} {...item} />
        )
    });
    return (
        <div className="Sensor" >
            <img className="icon" alt="icon" /*</div>src={`/static/images/${sensor.name}.png`}*/></img>
            <h3 className="title">{sensor.name}</h3>
            {sensors}
        </div>
    );
}

export default Sensor;