import React from "react";

function EffectTimer() {
    const [seconds, setSeconds] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((seconds) => seconds + 1)
        }, 1000);

        return () => clearInterval(interval)
    }, []);

    return (
        <div>
            <h1>Timer</h1>
            <h2>Seconds: {seconds}</h2>
            <button onClick={() => setSeconds(0)}>Reset Timer</button>
            < br/>
            <button onClick={() => setSeconds((seconds) => seconds + 1)}>Increment + 1</button>
            <button onClick={() => setSeconds((seconds) => seconds -1)}>Decrement - 1</button>
            < br/>
            <button onClick={() => setSeconds((seconds) => seconds + 15)}>Increment + 15</button>
            <button onClick={() => setSeconds((seconds) => seconds -15)}>Decrement - 15</button>
        </div>
    );
};

export default EffectTimer;