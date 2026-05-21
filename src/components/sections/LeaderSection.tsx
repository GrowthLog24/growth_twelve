import Image from "next/image";
import { LEADER } from "@/data/content";
import { renderTitle } from "@/utils/renderTitle";

export function LeaderSection() {
  return (
    <section id="leader" className="snap-section sec-bg-dark">
      <div className="inner">
        {/* 타이틀 */}
        <p data-reveal className="section-label">{LEADER.label}</p>
        <h2 data-reveal data-reveal-delay="60" className="text-white">
          {LEADER.title.map((line, i) => (
            <span key={i}>{renderTitle(line)}{i < LEADER.title.length - 1 && <br />}</span>
          ))}
        </h2>
        <div className="section-divider" />

        {/* 좌: 사진(이름/직함 오버레이) | 우: 학력 + 경력 + 나레이션 */}
        <div className="mt-12 lg:mt-20 flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* 왼쪽: 사진 + 이름/직함 오버레이 */}
          <div data-reveal data-reveal-delay="120" className="lg:w-[40%] shrink-0">
            <div
              className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-white/10"
              aria-label={`${LEADER.profile.name} ${LEADER.profile.role}`}
            >
              <Image
                src="/images/leader.png"
                alt={`${LEADER.profile.name} ${LEADER.profile.role}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              {/* 가독성 위한 하단 그라디언트 */}
              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none" />

              {/* 사진 좌하단 오버레이: 이름 + 직함 */}
              <div className="absolute left-6 bottom-6 right-6">
                <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{LEADER.profile.name}</h3>
                <p className="text-gold text-base md:text-lg font-semibold mt-1.5">{LEADER.profile.role}</p>
              </div>
            </div>
          </div>

          {/* 오른쪽: 학력 + 경력 + 나레이션 */}
          <div data-reveal data-reveal-delay="180" className="flex-1 space-y-8">
            <div>
              <h4 className="text-xs font-bold tracking-[0.25em] uppercase text-gold mb-4">EDUCATION</h4>
              <ul className="space-y-2 text-gray-300 text-sm leading-relaxed">
                {LEADER.education.map((e) => (
                  <li key={e}>· {e}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold tracking-[0.25em] uppercase text-gold mb-4">CAREER</h4>
              <p className="text-gray-200 text-sm leading-relaxed mb-4">{LEADER.careerHeadline}</p>

              <ul className="space-y-2 text-gray-300 text-sm leading-relaxed mb-3">
                {LEADER.careerCurrent.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <ul className="space-y-2 text-gray-400 text-sm leading-relaxed">
                {LEADER.careerPast.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>

            {/* 나레이션 — 경력 아래 */}
            <div className="bg-white/5 p-6 rounded-2xl">
              <p className="text-base text-white/90 leading-relaxed break-keep italic font-serif text-center">
                {LEADER.quote.map((line, i) => (
                  <span key={i}>
                    {i === 0 && <>&ldquo;</>}
                    {line}
                    {i === LEADER.quote.length - 1 && <>&rdquo;</>}
                    {i < LEADER.quote.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
