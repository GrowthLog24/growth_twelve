import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { CountdownTimer } from "@/components/CountdownTimer";
import { HERO, GOOGLE_FORM_URL } from "@/data/content";
import { KakaoChatButton } from "@/components/KakaoChatButton";

export function HeroSection() {
  return (
    <section id="hero" className="snap-section-hero relative overflow-hidden">
      <Image src="/hero-bg.jpg" alt="GROWTH12 부동산 커뮤니티 메인 이미지" fill className="object-cover" priority />
      <div className="absolute inset-0 bg-black/70" />

      <div className="inner relative z-10 text-center pt-[calc(5rem+4rem+10px)] pb-[calc(5rem+10px)]">
        <div className="hero-item" style={{ animationDelay: "0ms" }}>
          <div className="inline-block mb-6 px-10 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase text-gold-light border border-gold/60 bg-gold/35 backdrop-blur-sm">
            {HERO.badge}
          </div>
        </div>
        <h1 className="hero-item text-white" style={{ animationDelay: "100ms" }}>
          {HERO.title.map((line, i) => (
            <span key={i}>{line}{i < HERO.title.length - 1 && <br />}</span>
          ))}
        </h1>
        <p className="hero-item text-xl md:text-2xl text-white font-bold mb-8 break-keep" style={{ animationDelay: "200ms" }}>
          {HERO.subtitle}
        </p>

        <div className="hero-item flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-8 text-base md:text-lg font-semibold text-white" style={{ animationDelay: "280ms" }}>
          {HERO.features.map((f) => (
            <span key={f} className="flex items-center justify-center gap-2">
              <CheckCircle2 className="text-gold w-5 h-5 shrink-0" /> {f}
            </span>
          ))}
        </div>

        <div className="hero-item" style={{ animationDelay: "360ms" }}>
          <CountdownTimer />
        </div>

        <div className="hero-item flex flex-col sm:flex-row gap-4 justify-center mt-8" style={{ animationDelay: "440ms" }}>
          <KakaoChatButton className="group relative inline-flex items-center justify-center h-14 px-10 text-base font-semibold text-white bg-gold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(212,175,119,0.4)] hover:scale-[1.02]">
            <span className="relative z-10">{HERO.cta.primary}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold-light to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </KakaoChatButton>
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-14 px-10 text-base font-semibold text-white border border-white/30 rounded-full backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-navy hover:border-white"
          >
            {HERO.cta.secondary}
          </a>
        </div>
      </div>
    </section>
  );
}
