import { OT, GOOGLE_FORM_URL } from "@/data/content";
import { KakaoChatButton } from "@/components/KakaoChatButton";
import { renderTitle } from "@/utils/renderTitle";

export function OTSection() {
  return (
    <section id="ot" className="snap-section sec-bg">
      <div className="inner text-center">
        <div data-reveal>
          <span className="inline-block text-xs font-semibold tracking-widest text-gold uppercase mb-4">
            {OT.badge}
          </span>
        </div>
        <h2 data-reveal data-reveal-delay="80" className="mb-4">
          {renderTitle(OT.title)}
        </h2>
        <p data-reveal data-reveal-delay="160" className="section-desc mx-auto">
          {OT.description.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i < OT.description.split("\n").length - 1 && (
                <br className="hidden md:block" />
              )}
            </span>
          ))}
        </p>

        <div data-reveal data-reveal-delay="240" className="flex flex-col gap-2 max-w-md mx-auto mb-6">
          {OT.schedule.map((s) => (
            <div
              key={s.round}
              className="border border-gray-200 rounded-lg py-3 px-5 flex justify-between items-center bg-white"
            >
              <span className="font-bold text-navy">{s.round}</span>
              <span className="text-gray-700 text-sm">{s.date}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500 mb-3">{OT.notice}</p>

        <p className="text-sm text-gold font-semibold mb-8 break-keep">{OT.earlyBird}</p>

        <div data-reveal data-reveal-delay="400" className="flex flex-col sm:flex-row justify-center gap-4">
          <KakaoChatButton className="group relative inline-flex items-center justify-center h-14 px-10 text-base font-semibold text-white bg-gold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(212,175,119,0.4)] hover:scale-[1.02]">
            <span className="relative z-10">{OT.cta.primary}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold-light to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </KakaoChatButton>
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-14 px-10 text-base font-semibold text-navy border border-navy/30 rounded-full transition-all duration-300 hover:bg-navy hover:text-white hover:border-navy"
          >
            {OT.cta.secondary}
          </a>
        </div>
      </div>
    </section>
  );
}
