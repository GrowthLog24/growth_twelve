import { Clock } from "lucide-react";
import { PERSONA } from "@/data/content";

export function PersonaSection() {
  return (
    <section id="persona" className="snap-section sec-bg-dark">
      <div className="inner">
        <p data-reveal className="section-label text-center">{PERSONA.label}</p>
        <h2 data-reveal data-reveal-delay="60" className="text-white text-center">
          {PERSONA.title}
        </h2>
        <div className="section-divider mx-auto mb-12" />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {PERSONA.items.map((item, i) => (
            <div
              key={item.pain}
              data-reveal
              data-reveal-delay={100 + i * 100}
              className="card card--dark flex flex-col gap-4"
            >
              {item.emoji === "⏰" ? (
                <span className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-gold" strokeWidth={1.5} />
                </span>
              ) : (
                <span className="text-4xl">{item.emoji}</span>
              )}

              <p className="text-white font-bold text-base leading-snug">
                &ldquo;{item.pain}&rdquo;
              </p>

              <p className="text-gray-400 text-sm leading-relaxed flex-1">{item.desc}</p>

              <p className="text-white text-sm font-semibold">
                <span className="text-gold mr-1">→</span>
                {item.solution}
              </p>

              <span className="inline-block self-start text-xs font-semibold text-gold bg-gold/10 px-3 py-1 rounded-full">
                {item.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
