import React, { useState, useEffect } from "react";

function EffectTimer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000)

        return () => clearInterval(intervalId);
    }, []);

    return <div> 
        <h2>EffectTimer</h2>
        <h3>Seconds: {seconds}</h3>
    </div>
}

export default EffectTimer;