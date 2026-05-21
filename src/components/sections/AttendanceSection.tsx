import { Calendar, CheckCircle2 } from "lucide-react";
import { PROGRAM } from "@/data/content";
import { renderTitle } from "@/utils/renderTitle";

export function AttendanceSection() {
  return (
    <section id="program" className="snap-section sec-bg">
      <div className="inner">
        <p data-reveal className="section-label text-center">{PROGRAM.label}</p>
        <h2 data-reveal data-reveal-delay="60" className="text-center">{renderTitle(PROGRAM.title)}</h2>
        <div className="section-divider mx-auto mb-4" />
        <p data-reveal data-reveal-delay="100" className="section-desc text-center mx-auto whitespace-pre-line">
          {PROGRAM.description}
        </p>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {PROGRAM.cards.map((c, i) => (
            <div
              key={c.title}
              data-reveal
              data-reveal-delay={180 + i * 110}
              className="card card--lg flex flex-col"
            >
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-xl font-bold text-navy">{c.title}</h3>
                {c.tag && (
                  <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                    c.tag === "오프라인"
                      ? "bg-navy/10 text-navy"
                      : "bg-gold/10 text-gold"
                  }`}>
                    {c.tag}
                  </span>
                )}
              </div>
              <div className="flex items-start gap-2 text-gold text-sm font-semibold mb-5">
                <Calendar className="w-4 h-4 mt-0.5 shrink-0" />
                <span>{c.schedule}</span>
              </div>
              <ul className="space-y-3 text-gray-600 text-sm leading-relaxed">
                {c.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
