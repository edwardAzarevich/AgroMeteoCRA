import './Sensor.scss';

const Sensor = ({ sensor }) => {
    console.log(sensor.params[0]);
    return (
        <div className="Sensor">
            <img className="icon" alt="icon" /*</div>src={`/static/images/${sensor.name}.png`}*/></img>
            <h3 className="title">{sensor.name}</h3>

            <div key={2}>
                <div className="container">
                    <div>{sensor.params[0].param}</div>
                    <div>{sensor.params[0].units}</div>
                </div>
                <hr />
                <div className="container">
                    <div>{sensor.params[1].param}</div>
                    <div>{sensor.params[1].units}</div>
                </div>
                <hr />
            </div>
        </div>
    );
}

export default Sensor;