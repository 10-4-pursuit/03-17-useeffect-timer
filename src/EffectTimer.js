import React, {useState, useEffect} from 'react'

function EffectTimer() {
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        const interval= setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000)
        return () => clearInterval(interval);
    }, [])
    return (
        <h1> {seconds} seconds have passed.</h1>
    )
}
export default EffectTimer