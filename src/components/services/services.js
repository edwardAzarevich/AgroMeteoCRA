import axios from 'axios';
import * as addInfo from './addInfo';

function updateSensorData(reslove) {

    const nameSensor = ['WS', 'WD', 'TA', 'RH', 'AP', 'P', 'PACC', 'PI', 'Ptype', 'UVR', 'TG', 'RHG', 'PHG', 'TPH', 'TL', 'RHL', 'ZBAT'],
        arrayfortypes = addInfo.addInfoToUpdateSensorData(nameSensor),
        bodyForSend = {
            station: '26850',
            time: timeNow(),
            types: arrayfortypes
        };

    // search for the right cookies
    const nameCookie = 'sessionid',
        indexCookie = document.cookie.indexOf(nameCookie) + nameCookie.length + 1,
        userCookie = document.cookie.slice(indexCookie),
        cookie = userCookie;

    axios({
        method: 'post',
        url: 'http://10.0.25.10:8000/api/stations/get/',
        data: bodyForSend,
        headers: { 'sessionid': cookie },
        withCredentials: true
    }
    ).then(res => {
        reslove(res);
    }).catch(error => {
        if (error.response.status === 401)
            alert('Ошибка входа в аккаунт');
        console.log(error.response)
    });
}

// Method for updateSensorData (DateTime)

function timeNow() {
    let m = new Date(),
        dateString =
            m.getUTCFullYear() + "-" +
            ("0" + (m.getUTCMonth() + 1)).slice(-2) + "-" +
            ("0" + m.getUTCDate()).slice(-2) + "T" +
            ("0" + m.getUTCHours()).slice(-2) + ":" +
            ("0" + m.getUTCMinutes()).slice(-2) + ":" +
            ("0" + m.getUTCSeconds()).slice(-2) + "+0000";
    // for test to ivan server
    return '1970-01-01T00:01:00+0300';
    //main solution
    return dateString;
}
// for ivan server 10.0.25.63:8000
function postReg(username, password, resolve) {
    axios.post('http://10.0.25.10:8000/auth/registration', {
        "username": username,
        "password": password
    }).then(res => {
        resolve(res)
    }).catch(error => {
        console.log(error)
    });
}

export { updateSensorData, postReg };
