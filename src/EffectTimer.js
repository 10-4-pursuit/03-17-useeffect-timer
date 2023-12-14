import React, { useEffect } from "react";


function EffectTimer() {
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  });

  return <h1>{count}</h1>;
}


export default EffectTimer;