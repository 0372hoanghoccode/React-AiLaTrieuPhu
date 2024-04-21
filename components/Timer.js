import React, { useEffect, useState } from "react";

const Timer = ({ setTimeOut, questionNumber, setAnswered }) => {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev > 0 ? prev - 1 : 0);
    }, 1000);

    return () => clearInterval(interval);
  }, [questionNumber]);

  useEffect(() => {
    if (timer === 0) {
      setTimeOut(true);
      setAnswered(false);
    }
  }, [timer, setTimeOut, setAnswered]);

  useEffect(() => {
    setTimer(30);
  }, [questionNumber]);

  return (
    <div>
      <div style={{ height: '20px', width: '100%', backgroundColor: '#f3f3f3', borderRadius: '50px' }}>
        <div style={{ height: '100%', width: `${(timer/30)*100}%`, backgroundColor: '#667eea', borderRadius: 'inherit' }}></div>
      </div>
      <p>{timer}s</p>
    </div>
  );
};

export default Timer;