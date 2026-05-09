import { FINAL, GOOGLE_FORM_URL, KAKAO_CHANNEL_URL } from "@/data/content";
import { renderTitle } from "@/utils/renderTitle";

export function FinalSection() {
  return (
    <section id="cta" className="snap-section bg-navy text-white text-center">
      <div className="inner">
        <h2 data-reveal className="mb-6 leading-snug text-white">
          {FINAL.title.map((line, i) => (
            <span key={i}>{renderTitle(line)}{i < FINAL.title.length - 1 && <br />}</span>
          ))}
        </h2>
        <p data-reveal data-reveal-delay="120" className="text-base md:text-lg text-gray-400 mb-10 leading-relaxed break-keep">
          {FINAL.description.map((line, i) => (
            <span key={i}>{line}{i < FINAL.description.length - 1 && <br />}</span>
          ))}
        </p>

        <div data-reveal data-reveal-delay="240" className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={KAKAO_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center h-14 px-10 text-base font-semibold text-white bg-gold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(212,175,119,0.4)] hover:scale-[1.02]"
          >
            <span className="relative z-10">{FINAL.cta.primary}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold-light to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-14 px-10 text-base font-semibold text-white border border-white/30 rounded-full backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-navy hover:border-white"
          >
            {FINAL.cta.secondary}
          </a>
        </div>
      </div>
    </section>
  );
}
