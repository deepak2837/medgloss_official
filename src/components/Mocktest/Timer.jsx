"use client"
import { useEffect, useState } from 'react';

export default function Timer({ duration, onEnd }) {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    setTimeLeft(duration); // Set initial timeLeft to duration only on mount
  }, [duration]);
 
  useEffect(() => {
    // console.log(timeLeft)
    // if (timeLeft === 0) {
    //   console.log("TIME",timeLeft)
    //   onEnd();
    //   return;
    // }

    const timer = setInterval(() => {
      setTimeLeft((time) => {
        if (time <= 1) {
          clearInterval(timer); // Stop the timer at 0 to avoid negative values
          onEnd();
          return 0;
        }
        return time - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // Clean up the interval on unmount
  }, [onEnd, timeLeft]); // Depend on timeLeft to properly countdown

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="font-bold">
      Time Remaining: {minutes}:{seconds.toString().padStart(2, '0')}
    </div>
  );
}
