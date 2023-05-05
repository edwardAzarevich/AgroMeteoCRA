import axios from "axios";

const getSettingParams = async () => {
    const data = await axios.get('http://10.0.25.10:4000/config')
    const configJSON = JSON.parse(JSON.stringify(data.data.config));
    return configJSON;
};

const getSensorParams = async () => {
    const data = await axios.get('http://localhost:4000/sensor-params');
    const sensorParams = JSON.parse(JSON.stringify(data));
    return sensorParams.data;
}

export { getSettingParams, getSensorParams };