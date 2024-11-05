import { useState, useEffect } from "react";

const DigitalClock = () => {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // cleanup the interval on compount unmount
        return () => clearInterval(timerId);
    }, []);

  return (
    <div>
      <h1>{time.toLocaleTimeString()}</h1>
    </div>
  )
}

export default DigitalClock;
