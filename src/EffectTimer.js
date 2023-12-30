import { useEffect, useState } from "react";

function EffectTimer() {
const [seconds, setSeconds] = useState(0);
useEffect(() => {
 setInterval(() => {
        setSeconds((seconds) => seconds + 1);
    },1000 );
}, []);
return (
    <div>
        Seconds: {seconds}
    </div>)
   
}

export default EffectTimer