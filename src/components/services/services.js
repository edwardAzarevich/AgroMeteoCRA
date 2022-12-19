import axios from 'axios';

function updateSensorData() {
    const data = new Date();
    const Time = `${data.getFullYear()}-${data.getMonth()}`;
    const bodyForSend = {
        station: '26653',
        time: '2022-12-15T19:00:00+0300',
        types: [
            {
                name: 'WS',
                sensors: [],
                time_spans: {
                    'all': [
                        'INS'
                    ]
                }
            }
        ]
    };

    const obj = JSON.stringify(bodyForSend);

    console.log(JSON.stringify(bodyForSend));

    axios(
        {
            method: 'post',
            url: 'https://10.0.25.63:8000/api/stations/get/',
            data: bodyForSend,
            withCredentials: true
        }
    ).then(res => {
        console.log(res.data)
    }).catch(error => {
        console.log(error)
    });
}

export { updateSensorData };
