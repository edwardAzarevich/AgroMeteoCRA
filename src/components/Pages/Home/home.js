import * as Services from '../../services/services';
import Sensor from '../Senser/sensor';
import { Component } from 'react';
import './home.css';




const name = "Датчик скорости и направления ветра";
const inp = 20;
const params = [{ "м/с": inp }, { "C": inp }];
const sensors = [
    {
        name: 'Датчик скорости и направления ветра',
        params: [
            {
                value: 15,
                units: 'м/с'
            },
            {
                value: 20,
                units: 'C'
            }
        ]
    }
];


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            value: 9
        }
    }
    send = () => {
        const promise = new Promise((resolve, reject) => {
            Services.updateSensorData(resolve);
        });

        promise.then(data => {
            //console.log(data.data.types[0].value.all.INS);
            this.setState({ value: data.data.types[0].value.all.INS });
            //sensors[0].params[0].value = this.state.value;
        });



    }

    testClick = () => {
        this.setState({ count: this.state.count + 1 });
        //sensors[0].params[0].value = this.state.count;
        console.log(this.state.count);
    }


    render() {
        return (
            <div className="Home" >
                <h1>Hi Gues</h1>
                <div className='area'>
                    <Sensor sensor={sensors} value={this.state.value} />
                </div>
                <div>
                    {/* <Sensor /> */}
                </div>
                <button className='btnHome' onClick={this.send}>Start send massage</button>
                <a href='/StartPage'><button className='btnHome'>Sing In</button></a>
                <button onClick={this.testClick}>click {this.state.count}</button>
                <p>text name { }</p>
            </div>
        )
    }
}

export default Home;