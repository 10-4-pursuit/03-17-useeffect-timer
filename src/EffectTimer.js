import React from 'react';

function EffectTimer() {
    const [seconds, setSeconds] = React.useState(0);
    React.useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return <p>{seconds} seconds have passed</p>;
}

export default EffectTimer;