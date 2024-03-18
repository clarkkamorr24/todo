import { useState, useEffect } from "react";

export default function LiveClockUpdate() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);

  const tick = () => {
    setDate(new Date());
  };

  return (
    <>
      <h2 className="text-bold text-3xl text-dark">
        🕰️ {date.toLocaleTimeString()}
      </h2>
    </>
  );
}
