import React, { useState, useEffect} from 'react';

function EffectTimer() {
    const [seconds, SetSeconds] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            SetSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(intervalId);
}, []);

    return (
        <div>
            <h2>Timer: {seconds} seconds</h2>
        </div>
    );
}

export default EffectTimer;