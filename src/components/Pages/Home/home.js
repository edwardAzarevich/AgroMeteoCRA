import * as Services from '../../services/services';
import Sensor from '../Senser/sensor';
import { Component } from 'react';
import './home.css';

const sensors = [
    {
        name: 'Датчик скорости и направления ветра (SF-03)',
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
    },
    {
        name: 'Датчик Температуры и влажности (HMP-155)',
        params: [
            {
                value: 1,
                units: '°C'
            },
            {
                value: 60,
                units: '%'
            }
        ]
    },
    {
        name: 'Датчик Давления (PTB210)',
        params: [
            {
                value: 1,
                units: 'Pa'
            }
        ]
    }

];


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            value: 10
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
        }).catch(error => {
            
        })



    }

    testClick = () => {
        this.setState({ count: this.state.count + 1 });
        //sensors[0].params[0].value = this.state.count;
        console.log(this.state.count);
    }


    render() {
        const element = sensors.map((item, i) => {
            return (
                <Sensor sensor={item} value={this.state.value} key={i} />
            )
        })
        return (
            <div className="Home" >
                <h1 className='Header'>Hi Gues</h1>

                <div className='area'>
                    {/* <Sensor sensor={sensors} value={this.state.value} /> */}
                    {element}
                </div>
                <button className='btnHome' onClick={this.send}>Start send massage</button>
                <a href='/StartPage'><button className='btnHome'>Sing In</button></a>
                <button onClick={this.testClick}>click {this.state.count}</button>
            </div>
        )
    }
}

export default Home;