import { Check } from "lucide-react";
import { PLANS } from "@/data/content";
import { renderTitle } from "@/utils/renderTitle";

export function PlansSection() {
  return (
    <section id="plans" className="snap-section sec-bg-dark">
      <div className="inner">
        <p data-reveal className="section-label text-center">{PLANS.label}</p>
        <h2 data-reveal data-reveal-delay="60" className="text-white text-center">
          {renderTitle(PLANS.title)}
        </h2>
        <div className="section-divider mx-auto mb-4" />
        <p data-reveal data-reveal-delay="100" className="text-center text-gray-300 mb-12">
          {PLANS.description}
        </p>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {PLANS.items.map((plan, i) => (
            <div
              key={plan.name}
              data-reveal
              data-reveal-delay={140 + i * 110}
              className={`card card--lg flex flex-col ${plan.accent ? "bg-white" : "card--dark"}`}
            >
              {plan.badge && (
                <span className="inline-block self-start bg-gold text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5">
                  {plan.badge}
                </span>
              )}

              <h3 className={`text-xl font-bold mb-1 ${plan.accent ? "text-navy" : "text-white"}`}>
                {plan.name}
                {plan.nameTag && (
                  <span className={`text-base font-normal ${plan.accent ? "text-gray-500" : "text-gray-400"}`}>
                    {" "}{plan.nameTag}
                  </span>
                )}
              </h3>
              <p className={`text-sm mb-3 ${plan.accent ? "text-gray-500" : "text-gray-400"}`}>
                {plan.subtitle}
              </p>

              {plan.duration && (
                <p className={`text-xs mb-5 ${plan.accent ? "text-gray-500" : "text-gray-400"}`}>
                  {plan.duration}
                </p>
              )}

              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-3xl font-extrabold text-gold">{plan.price}</span>
                {"originalPrice" in plan && plan.originalPrice && (
                  <span className={`text-sm line-through ${plan.accent ? "text-gray-400" : "text-gray-500"}`}>
                    {plan.originalPrice}
                  </span>
                )}
                {plan.priceMonthly && (
                  <span className={`text-sm ${plan.accent ? "text-gray-500" : "text-gray-300"}`}>
                    {plan.priceMonthly}
                  </span>
                )}
              </div>

              <span className="inline-block self-start text-xs text-gold bg-gold/10 px-3 py-1 rounded-full mb-6">
                {plan.discount}
              </span>

              <div className={`border-t pt-5 flex-1 ${plan.accent ? "border-gray-100" : "border-white/10"}`}>
                <ul className="space-y-3 text-sm">
                  {plan.features.map((f) => (
                    <li
                      key={f.text}
                      className={`flex items-start gap-3 ${plan.accent ? "text-gray-700" : "text-gray-300"}`}
                    >
                      <span className="w-5 h-5 shrink-0 rounded-full border-2 border-gold flex items-center justify-center mt-0.5">
                        <Check className="text-gold w-3 h-3" strokeWidth={3} />
                      </span>
                      {"bold" in f && f.bold ? (
                        <span className={`font-semibold ${plan.accent ? "text-navy" : "text-white"}`}>{f.text}</span>
                      ) : (
                        <span>{f.text}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
