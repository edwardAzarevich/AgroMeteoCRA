import axios from 'axios';

function updateSensorData(reslove) {
    const bodyForSend = {
        station: '26850',
        time: timeNow(),
        types: [
            {
                name: 'WS',
                sensors: [],
                time_spans: {
                    '5M': [
                        'INS'
                    ]
                }
            },
            {
                name: 'WD',
                sensors: [],
                time_spans: {
                    '5M': [
                        'INS'
                    ]
                }
            },
            {
                name: 'TA',
                sensors: [],
                time_spans: {
                    '5M': [
                        'INS'
                    ]
                }
            },
            {
                name: 'RH',
                sensors: [],
                time_spans: {
                    '5M': [
                        'INS'
                    ]
                }
            },
            {
                name: 'AP',
                sensors: [],
                time_spans: {
                    '5M': [
                        'INS'
                    ]
                }
            },
            {
                name: 'P',
                sensors: [],
                time_spans: {
                    '5M': [
                        'INS'
                    ]
                }
            },
            {
                name: 'PACC',
                sensors: [],
                time_spans: {
                    '5M': [
                        'INS'
                    ]
                }
            },
            {
                name: 'PI',
                sensors: [],
                time_spans: {
                    '5M': [
                        'INS'
                    ]
                }
            },
            {
                name: 'Ptype',
                sensors: [],
                time_spans: {
                    '5M': [
                        'INS'
                    ]
                }
            },
            {
                name: 'UVR',
                sensors: [],
                time_spans: {
                    '5M': [
                        'INS'
                    ]
                }
            },
            {
                name: 'TG',
                sensors: [],
                time_spans: {
                    '5M': [
                        'INS'
                    ]
                }
            },
            {
                name: 'RHG',
                sensors: [],
                time_spans: {
                    '5M': [
                        'INS'
                    ]
                }
            },
            {
                name: 'TPH',
                sensors: [],
                time_spans: {
                    '5M': [
                        'INS'
                    ]
                }
            },
            {
                name: 'TL',
                sensors: [],
                time_spans: {
                    '5M': [
                        'INS'
                    ]
                }
            },
            {
                name: 'RHL',
                sensors: [],
                time_spans: {
                    '5M': [
                        'INS'
                    ]
                }
            },
            {
                name: 'ZBAT',
                sensors: [],
                time_spans: {
                    '5M': [
                        'INS'
                    ]
                }
            },



        ]
    };
    // search for the right cookies
    const nameCookie = 'sessionid',
        indexCookie = document.cookie.indexOf(nameCookie) + nameCookie.length + 1,
        userCookie = document.cookie.slice(indexCookie),
        cookie = userCookie;
    axios({
        method: 'post',
        url: 'http://10.0.25.63:8000/api/stations/get/',
        data: bodyForSend,
        headers: { 'sessionid': cookie },
        withCredentials: true
    }
    ).then(res => {
        reslove(res);
    }).catch(error => {
        console.log(error)
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

function postReg(username, password, resolve) {
    axios.post('http://10.0.25.10:5000/auth/registration', {
        "username": username,
        "password": password
    }).then(res => {
        resolve(res)
    }).catch(error => {
        console.log(error)
    });
}

function postLog(username, password, resolve) {

    const body = new FormData();
    body.append("username", username);
    body.append("password", password);
    axios({
        method: 'post',
        url: 'http://10.0.25.63:8000/api/user/login/',
        data: body,
        headers: {
            'Content-Type': `multipart/form-data; boundary=${body._boundary}`,
        },
        withCredentials: true
    })
        .then(res => {
            resolve(res);
            document.cookie = `sessionid=${res.headers['sessionid']}`;
        }).catch(error => {
            console.log(error)
        });

}

export { updateSensorData, postReg, postLog };
