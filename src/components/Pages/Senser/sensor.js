import './Sensor.scss';
import SensorListValue from './sensor-list-value/Sensor-list-value';


const Sensor = ({ sensor, valueobj }) => {
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
            <h3 className="title">{sensor.name} {updateTimeThenRec}</h3>
            <div className='main-container'>
                {/* all sensors */}
                {sensors}
            </div>
        </div >
    );
}

export default Sensor;