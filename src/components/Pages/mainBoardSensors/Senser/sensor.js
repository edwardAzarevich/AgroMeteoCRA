import './sensor.scss';
import SensorListValue from './sensor-list-value/sensor-list-value';


const Sensor = ({ sensor, valueobj, timeArrival }) => {
    const start = Date();
    let updateTimeThenRec = '---';
    const sensors = sensor.params.map((item, i) => {
        if (valueobj && valueobj[`${item.nameSensorParam}`]) {
            updateTimeThenRec = start.slice(15, 33);
            item.value = valueobj[`${item.nameSensorParam}`];
        }
        return (
            <SensorListValue key={i} {...item} />
        )
    });
    return (
        <div className="Board" >
            <h3 className="title">{sensor.name} {timeArrival}</h3>
            <div className='main-container'>
                {/* all sensors */}
                {sensors}
            </div>
        </div >
    );
}

export default Sensor;