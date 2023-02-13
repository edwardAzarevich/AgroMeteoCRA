import axios from 'axios';

function updateSensorData(reslove) {
    const data = new Date();
    const Time = `${data.getFullYear()}-${data.getMonth()}`;
    const bodyForSend = {
        station: '12345',
        time: '2022-12-23T13:04:00+0300',
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
            }
        ]
    };

    const obj = JSON.stringify(bodyForSend);

    //console.log(JSON.stringify(bodyForSend));

    const cookie = document.cookie.split("=")[1];
    console.log(cookie);
    axios({
        method: 'post',
        url: 'http://10.0.25.63:8000/api/stations/get/',
        data: bodyForSend,
        headers: { 'sessionid': cookie },
        withCredentials: true
    }
    ).then(res => {
        //console.log(res.data);
        // console.log(res.headers);
        console.log(res);
        reslove(res);
    }).catch(error => {
        console.log(error)
    });
}

function postReg(username, password, resolve) {
    console.log(username, password);
    axios.post('http://10.0.25.10:5000/auth/registration', {
        "username": username,
        "password": password
    }).then(res => {
        resolve(res)
    }).then(res =>
        console.log('oke')
    ).catch(error => {
        console.log(error)
    });
}

function postLog(username, password, resolve) {

    const body = new FormData();
    body.append("username", username);
    body.append("password", password);
    console.log(body);
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
            console.log(res.headers['sessionid']);
            console.log(document.cookie);
        }).then(res => {
            console.log('oke');
        }
        ).catch(error => {
            console.log(error)
        });

}

export { updateSensorData, postReg, postLog };
