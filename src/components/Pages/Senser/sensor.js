import './Sensor.scss';
import SensorListValue from './sensor-list-value/Sensor-list-value';

const Sensor = ({ sensor, value, valueobj }) => {

    const nameSensor = sensor.params;
    const sensors = sensor.params.map((item, i) => {
        if (valueobj && valueobj[`${item.nameSensorParam}`]) {
            item.value = valueobj[`${item.nameSensorParam}`];
        }
        return (
            <SensorListValue key={i} {...item} />
        )
    });
    return (
        <div className="Board" >
            <h3 className="title">{sensor.name}</h3>
            <div className='main-container'>
                {/* all sensors */}
                {sensors}
            </div>
        </div >
    );
}

export default Sensor;