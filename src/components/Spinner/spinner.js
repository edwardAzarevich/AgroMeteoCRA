import spinner from './image/spinner.gif';

const Spinner = () => {
    return (
        <div>
            <img style={{ display: 'flex', width: '25px', height: '25px', margin: "0 auto" }} src={spinner} alt='spinner' />
        </div>
    )
}

export default Spinner;