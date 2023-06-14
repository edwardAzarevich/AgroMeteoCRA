const addInfoToUpdateSensorData = (arrayName) => {
    let arrayWithObj = [];
    arrayName.forEach(element => {
        arrayWithObj.push(objectForarray(element));
    });
    return arrayWithObj;
}

const objectForarray = (name) => {
    const obj = {
        name: name,
        sensors: [],
        time_spans: {
            '2M': [
                'INS'
            ]
        }
    }
    return obj;
}

export { addInfoToUpdateSensorData };