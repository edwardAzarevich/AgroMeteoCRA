import * as Services from '../../services/services';
import Sensor from '../Senser/sensor';
import { Component } from 'react';




const name = "Датчик скорости и направления ветра";
const inp = 20;
const params = [{ "м/с": inp }, { "C": inp }];
const sensors = [
    {
        name: 'Датчик скорости и направления ветра',
        params: [
            {
                param: 15,
                units: 'м/с'
            },
            {
                param: 20,
                units: 'C'
            }
        ]
    }
];


class Home extends Component {
    send = () => {
        Services.updateSensorData();
    }
    render() {
        return (
            <div className="Home" >
                <h1>Hi Gues</h1>
                <div className='area'>
                    <Sensor sensor={sensors[0]} />
                </div>
                <div>
                    {/* <Sensor /> */}
                </div>
                <button onClick={this.send}>Start send massage</button>
            </div>
        )
    }
}

export default Home;