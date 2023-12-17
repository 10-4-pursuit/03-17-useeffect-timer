import React, { useState, useEffect } from "react";

function EffectTimer() {
  const [seconds, setSeconds] = useState(0);
 useEffect(() => { 
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => (prevSeconds < 10 ? prevSeconds + 1 : 0));
    }, 1000);

  return () => clearInterval(interval);
}, []);
  return <h1>{seconds} seconds have passed</h1>

}

export default EffectTimer;

