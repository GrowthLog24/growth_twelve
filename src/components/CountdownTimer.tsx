"use client";

import { useCountdown } from "@/hooks/useCountdown";

const TARGET_DATE = "2026-05-15T23:59:59";

export function CountdownTimer() {
  const { mounted, timeLeft } = useCountdown(TARGET_DATE);

  if (!mounted) {
    return <div className="text-sm font-bold text-center p-2 opacity-0">loading</div>;
  }

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="countdown-frost inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 px-8 py-5 rounded-2xl">
      <span className="text-sm sm:text-base font-semibold text-white/90">1기 얼리버드 마감까지</span>
      <div className="flex items-center gap-4">
        <div className="text-center">
          <span className="block text-[2rem] sm:text-[2.625rem] font-bold tabular-nums text-white leading-none">{pad(timeLeft.days)}</span>
          <span className="text-[0.8125rem] text-white/60 uppercase tracking-wider mt-1 inline-block">Days</span>
        </div>
        <span className="text-gold text-[1.6875rem] font-light">:</span>
        <div className="text-center">
          <span className="block text-[2rem] sm:text-[2.625rem] font-bold tabular-nums text-white leading-none">{pad(timeLeft.hours)}</span>
          <span className="text-[0.8125rem] text-white/60 uppercase tracking-wider mt-1 inline-block">Hours</span>
        </div>
        <span className="text-gold text-[1.6875rem] font-light">:</span>
        <div className="text-center">
          <span className="block text-[2rem] sm:text-[2.625rem] font-bold tabular-nums text-white leading-none">{pad(timeLeft.minutes)}</span>
          <span className="text-[0.8125rem] text-white/60 uppercase tracking-wider mt-1 inline-block">Mins</span>
        </div>
        <span className="text-gold text-[1.6875rem] font-light">:</span>
        <div className="text-center">
          <span className="block text-[2rem] sm:text-[2.625rem] font-bold tabular-nums text-white leading-none">{pad(timeLeft.seconds)}</span>
          <span className="text-[0.8125rem] text-white/60 uppercase tracking-wider mt-1 inline-block">Secs</span>
        </div>
      </div>
    </div>
  );
}
