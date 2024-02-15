import React, { useEffect, useState } from "react";

function EffectTimer() {
    const [seconds, setseconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setseconds(seconds => seconds + 1);
        }, 1000);
        return () => clearInterval(interval);
    })

    return (
        <div>
            Seconds: {seconds}
        </div>
    )

}

export default EffectTimer