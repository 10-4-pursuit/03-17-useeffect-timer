// Import the necessary dependencies from the React library
import React from "react";

// Define a functional component called EffectTimer
function EffectTimer() {
    // Use the useState hook to manage the state of the 'seconds' variable
    const [seconds, setSeconds] = React.useState(0);

    // Use the useEffect hook to run code after the component has rendered
    React.useEffect(() => {
        // Set up an interval that increments the 'seconds' state every 1000 milliseconds (1 second)
        const interval = setInterval(() => {
            setSeconds((seconds) => seconds + 1)
        }, 1000);

        // Clean up the interval when the component is unmounted or when the dependency array is empty
        return () => clearInterval(interval)
    }, []);

    // Return the JSX for rendering the component
    return (
        <div>
            {/* Display the title and current value of 'seconds' */}
            <h1>Timer</h1>
            <h2>Seconds: {seconds}</h2>
            {/* Button to reset the timer */}
            <button onClick={() => setSeconds(0)}>Reset Timer</button>
            < br/>
            {/* Buttons to increment and decrement by 1 */}
            <button onClick={() => setSeconds((seconds) => seconds + 1)}>Increment + 1</button>
            <button onClick={() => setSeconds((seconds) => seconds -1)}>Decrement - 1</button>
            < br/>
            {/* Buttons to increment and decrement by 15 */}
            <button onClick={() => setSeconds((seconds) => seconds + 15)}>Increment + 15</button>
            <button onClick={() => setSeconds((seconds) => seconds -15)}>Decrement - 15</button>
        </div>
    );
};

// Export the EffectTimer component as the default export
export default EffectTimer;