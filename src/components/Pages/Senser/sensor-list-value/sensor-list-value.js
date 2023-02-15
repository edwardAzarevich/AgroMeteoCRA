import React from "react";

export default function sensorList(listValue) {
    return (
        <div className="sensor-container">
            <header>{listValue.sensorName}</header>
            <div className="sensor-params">
                <div className="sensor-value">{listValue.value}</div>
                <div>{listValue.units}</div>
            </div>
        </div>
    )
};