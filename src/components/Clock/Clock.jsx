import { useState, useEffect } from 'react';

const Clock = (updateInterval = 10000) => {
    const [date, setDate] = useState(new Date());

    const refreshClock = () => {
        setDate(new Date());
    }
    useEffect(() => {
        const timerId = setInterval(refreshClock, updateInterval);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);
    return (
        <span>
            {date.toLocaleTimeString()}
        </span>
    );
}
export default Clock;