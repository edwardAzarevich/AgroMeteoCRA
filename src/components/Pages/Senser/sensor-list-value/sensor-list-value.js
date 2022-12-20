import React from "react";

export default function sensorList(listValue) {
    return (
        <div>
            <div className="container">
                <div>{listValue.value}</div>
                <div>{listValue.units}</div>
            </div>
            <hr />
        </div>
    )
};