"use client";

import { useEffect, useState } from "react";
import { useCountdown } from "@/hooks/useCountdown";
import { Clock } from "lucide-react";

import { GOOGLE_FORM_URL } from "@/data/content";
import { openKakaoChat } from "@/lib/kakao";

const TARGET_DATE = "2026-05-29T23:59:59";

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [onLastSection, setOnLastSection] = useState(false);
  const { mounted, timeLeft } = useCountdown(TARGET_DATE);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const cta = document.getElementById("cta");
    if (!hero || !cta) return;

    const heroObserver = new IntersectionObserver(
      ([entry]) => setIsVisible(!entry.isIntersecting),
      { threshold: 0.1 }
    );
    const ctaObserver = new IntersectionObserver(
      ([entry]) => setOnLastSection(entry.isIntersecting),
      { threshold: 0.3 }
    );

    heroObserver.observe(hero);
    ctaObserver.observe(cta);
    return () => {
      heroObserver.disconnect();
      ctaObserver.disconnect();
    };
  }, []);

  if (!isVisible || !mounted || onLastSection) return null;

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-in slide-in-from-bottom-full duration-300">
      <div className="bg-navy/95 backdrop-blur-sm">
        <div className="inner py-4">
          {/* Countdown */}
          <p className="text-white text-center text-sm font-medium mb-3 flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-gold" />
            1기 얼리버드 마감까지
            <span className="tabular-nums font-bold text-gold">
              {pad(timeLeft.days)}일 {pad(timeLeft.hours)}:{pad(timeLeft.minutes)}:{pad(timeLeft.seconds)}
            </span>
          </p>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={openKakaoChat}
              aria-label="카카오톡 1:1 문의 열기"
              className="group relative flex-1 inline-flex items-center justify-center h-12 text-base font-semibold text-white bg-gold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(212,175,119,0.4)] hover:scale-[1.02]"
            >
              <span className="relative z-10">1기 등록하기</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold-light to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center h-12 text-base font-semibold text-white border border-white/30 rounded-full backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-navy hover:border-white"
            >
              OT 신청하기
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
