import { useState, useEffect } from "react";

const EffectTimer = () => {
  // UseState hook to create a 'seconds' state variable and a 'setSeconds' function
  const [seconds, setSeconds] = useState(0);
  // UseEffect hook to update the 'seconds' state variable every second
  useEffect(() => {
    const interval = setInterval(() => {
      // Update the 'seconds' state variable
      setSeconds((seconds) => seconds + 1);
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    // This is necessary to prevent memory leaks
    return () => clearInterval(interval);

  }, []); // Empty dependency array to run the effect only once


  // Render the 'seconds' state variable    
  return (
    <div>
      <h1>Timer</h1>
      <h2>Seconds: {seconds}</h2>
      <button onClick={() => setSeconds(0)}>Reset</button>
      <button onClick={() => setSeconds((seconds) => seconds + 1)}>
        Increment
      </button>
      <button onClick={() => setSeconds((seconds) => seconds - 1)}>
        Decrement
      </button>
      <button onClick={() => setSeconds((seconds) => seconds + 10)}>
        Increment 10
      </button>
      <button onClick={() => setSeconds((seconds) => seconds - 10)}>
        Decrement 10
      </button>
    </div>
  );
};

export default EffectTimer;
