"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

function calcTimeLeft() {
  const targetDate = new Date("2026-05-29T23:59:59").getTime();
  const distance = targetDate - Date.now();

  if (distance <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000),
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export function MiniTimer() {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const [timeLeft, setTimeLeft] = useState(calcTimeLeft);

  useEffect(() => {
    const interval = setInterval(() => {
      const next = calcTimeLeft();
      setTimeLeft(next);

      if (!next.days && !next.hours && !next.minutes && !next.seconds) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const t = mounted
    ? timeLeft
    : { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return (
    <div className="mini-timer">
      <span className="mini-timer-label">1기 얼리버드 마감까지</span>
      <span className="mini-timer-time">
        {pad(t.days)}일 {pad(t.hours)}:{pad(t.minutes)}:{pad(t.seconds)}
      </span>
    </div>
  );
}