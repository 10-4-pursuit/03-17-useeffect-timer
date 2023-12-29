import { useEffect, useState } from 'react';

function EffectTimer() {
    const [count, setCount] = useState(0);

    useEffect(() => { 
        setTimeout(() => { 
            setCount(count + 1);
        }, 1000)
    })

    return (
        <div>
            {count} 
        </div>
    )
}

export default EffectTimer