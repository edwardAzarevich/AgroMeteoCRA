import './Sensor.scss';
import SensorListValue from './sensor-list-value/sensor-list-value';
//
import React, { useState } from 'react';

const Sensor = ({ sensor, value, valueobj }) => {

    /*sensor.params[0].value = value[0];
    sensor.params[1].value = value[1];*/

    /*valueobj.forEach(element => {
        if (element !== '') {
            sensor.params[`${valueobj}`]
        }
    });*/

    const nameSensor = sensor.params;
    console.log(valueobj);
    const sensors = sensor.params.map((item, i) => {
        if (valueobj && valueobj[`${item.nameSensorParam}`]) {
            item.value = valueobj[`${item.nameSensorParam}`];
        }

        //console.log(valueobj['WS']);
        return (
            <SensorListValue key={i} {...item} />
        )
    });
    return (
        <div className="Sensor" >
            <img className="icon" alt="icon" /*</div>src={`/static/images/${sensor.name}.png`}*/></img>
            <h3 className="title">{sensor.name}</h3>
            {sensors}
        </div >
    );
}

export default Sensor;