import axios from "axios";

const getSettingParams = async () => {
    const data = await axios.get('http://localhost:4000/config');
    let configJSON;
    if (data.data.config === '') {
        configJSON = '';
    } else {
        configJSON = JSON.parse(data.data.config);
    }
    console.log(configJSON);
    return configJSON;
};

const getSensorParams = async () => {
    const data = await axios.get('http://localhost:4000/sensor-params');
    const sensorParams = JSON.parse(data);
    return sensorParams.data;
}

export { getSettingParams, getSensorParams };