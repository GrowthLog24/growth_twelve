"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { PLANS } from "@/data/content";
import { renderTitle } from "@/utils/renderTitle";

type Tab = "day" | "night";

export function PlansSection() {
  const [tabs, setTabs] = useState<Tab[]>(PLANS.groups.map(() => "day" as const));

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

        <div data-reveal data-reveal-delay="140" className="grid md:grid-cols-2 gap-6 lg:gap-10 items-stretch max-w-3xl mx-auto">
          {PLANS.groups.map((group, i) => {
            const tab = tabs[i];
            const variant = group.variants[tab];
            const isAccent = group.accent; // 배경색 구분용 (white vs gray-50)

            return (
              <div
                key={group.name}
                className="card card--lg flex flex-col"
                style={!isAccent ? { background: '#f3f4f6' } : undefined}
              >
                {/* 배지 */}
                {group.badge && (
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`inline-block text-xs font-semibold px-4 py-1.5 rounded-full ${
                      isAccent
                        ? "bg-gold text-white"
                        : "bg-navy/10 text-navy"
                    }`}>
                      {group.badge}
                    </span>
                    {group.subBadge && (
                      <span className="inline-block text-xs font-semibold px-3 py-1.5 rounded-full bg-navy/10 text-navy">
                        {group.subBadge}
                      </span>
                    )}
                  </div>
                )}

                {/* 플랜 이름 */}
                <h3 className="text-2xl font-extrabold mb-4 text-navy">
                  {group.name}
                </h3>

                {/* Day / Night 토글 */}
                <div className="inline-flex rounded-full p-1 mb-5 self-start bg-gray-100">
                  {(["day", "night"] as const).map((t) => (
                    <button
                      key={t}
                      onClick={() =>
                        setTabs((prev) => {
                          const next = [...prev] as Tab[];
                          next[i] = t;
                          return next;
                        })
                      }
                      className={`flex items-center gap-1.5 px-5 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                        tab === t
                          ? "bg-navy text-white shadow"
                          : "text-gray-400 hover:text-navy"
                      }`}
                    >
                      <span>{t === "day" ? "☀" : "🌙"}</span>
                      <span>{t === "day" ? "Day" : "Night"}</span>
                    </button>
                  ))}
                </div>

                {/* 서브타이틀 */}
                <p className="text-sm mb-4 leading-relaxed text-gray-500">
                  {variant.subtitle}
                </p>

                {/* 기간 */}
                <p className="text-xs mb-5 text-gray-400">
                  {group.duration}
                </p>

                {/* 가격 */}
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-extrabold text-gold">{variant.price}</span>
                  <span className="text-sm line-through text-gray-400">
                    {variant.originalPrice}
                  </span>
                  <span className="text-sm text-gray-500">
                    {variant.priceMonthly}
                  </span>
                </div>

                {/* 얼리버드 */}
                <span className="inline-block self-start text-xs text-gold bg-gold/10 px-3 py-1 rounded-full mb-6">
                  {variant.discount}
                </span>

                {/* 피처 목록 */}
                <div className="border-t pt-5 flex-1 border-gray-100">
                  <ul className="space-y-3 text-sm">
                    {[...variant.features, ...group.commonFeatures].map((f) => (
                      <li
                        key={f.text}
                        className="flex items-start gap-3 text-gray-700"
                      >
                        <span className="w-5 h-5 shrink-0 rounded-full border-2 border-gold flex items-center justify-center mt-0.5">
                          <Check className="text-gold w-3 h-3" strokeWidth={3} />
                        </span>
                        <span>{f.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
