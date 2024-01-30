import React, { useState, useEffect } from 'react';

const EffectTimer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <div>Seconds: {seconds}</div>;
};

export default EffectTimer;
