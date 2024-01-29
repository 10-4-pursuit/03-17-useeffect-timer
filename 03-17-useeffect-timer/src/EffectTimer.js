import React, { useState, useEffect } from 'react';

const EffectTimer = () => {
    const [seconds, setSeconds] = useState(0);
    
    useEffect(() => {
    const interval = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds + 1);
            }, 1000);
 
return () => clearInterval(interval);  
    }, []);
    return <p>Elapsed Time: {seconds} seconds </p>
   
};

export default EffectTimer;