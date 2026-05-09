import { WHY } from "@/data/content";
import { renderTitle } from "@/utils/renderTitle";

export function WhySection() {
  return (
    <section id="why" className="snap-section sec-bg">
      <div className="inner">
        <p data-reveal className="section-label">{WHY.label}</p>
        <h2 data-reveal data-reveal-delay="60">{renderTitle(WHY.title)}</h2>
        <div className="section-divider mb-4" />
        <p data-reveal data-reveal-delay="100" className="section-desc whitespace-pre-line">{WHY.description}</p>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {WHY.cards.map((c, i) => (
            <div
              key={c.num}
              data-reveal
              data-reveal-delay={180 + i * 100}
              className="card card--lg group transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] hover:border-gold/40"
            >
              <span className="text-3xl font-extrabold text-gold/30 block mb-4 transition-colors duration-300 group-hover:text-gold">{c.num}</span>
              <h3 className="text-xl font-bold text-navy mb-3">{c.title}</h3>
              <p className="text-gray-600 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
