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

        <div data-reveal data-reveal-delay="240" className="grid grid-cols-2 gap-4 max-w-xl mx-auto mb-6">
          {OT.schedule.map((day) => (
            <div
              key={day.date}
              className="rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-white"
            >
              <div className="bg-navy py-4 px-5 text-center">
                <div className="flex items-baseline gap-2 justify-center">
                  <span className="text-gold font-extrabold text-3xl tracking-tight">{day.date}</span>
                  <span className="text-white/60 text-sm font-medium">({day.day})</span>
                </div>
              </div>
              <div className="divide-y divide-gray-100">
                {day.slots.map((slot) => (
                  <div key={slot.label} className="py-3 px-4 text-center">
                    <p className="text-navy font-bold text-sm mb-1.5">
                      {slot.label} {slot.time}
                    </p>
                    <span
                      className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full ${
                        slot.type === "온라인"
                          ? "bg-blue-50 text-blue-600"
                          : "bg-gold/10 text-gold"
                      }`}
                    >
                      {slot.type}
                    </span>
                  </div>
                ))}
              </div>
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
