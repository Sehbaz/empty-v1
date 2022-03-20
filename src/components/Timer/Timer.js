// react
import { useState } from "react";
import React from "react";
import "./Timer.css";

const Timer = () => {
  const [counter, setCounter] = useState(60);

  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div>
      <div class="counter">{counter}</div>
    </div>
  );
};
export default Timer;
