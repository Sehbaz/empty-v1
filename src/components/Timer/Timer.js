// react
import { useState } from "react";
import React from "react";

import Typography from "@mui/material/Typography";
import "./Timer.css";

const Timer = () => {
  const [counter, setCounter] = useState(60);

  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div class="counter">
      <Typography variant="h4" component="div" gutterBottom>
        "The best way to capture moments is to pay attention. <br />
        This is how we cultivate mindfulness."
      </Typography>
      <div>{counter}</div>
    </div>
  );
};
export default Timer;
