import React from'react';
import { useEffect, useState } from'react';
function EffectTimer() {
    const [seconds, setSeconds] = React.useState(0);
    React.useEffect(() => {
      const interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
      return () => clearInterval(interval);
    }, []);
    return <h1>{seconds} of people have died due to the affects of war</h1>;
  }
  

export default EffectTimer;