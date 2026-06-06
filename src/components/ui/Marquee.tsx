"use client";

const ITEMS = ["CREATIVE DEVELOPER", "DESIGNER", "ENTREPRENEUR", "INNOVATOR"];

export default function Marquee() {
  const content = [...ITEMS, ...ITEMS];

  return (
    <div className="relative w-full overflow-hidden border-y border-white/10 bg-charcoal/40 py-6">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex items-center" aria-hidden={dup === 1}>
            {content.map((item, i) => (
              <span key={`${dup}-${i}`} className="flex items-center">
                <span className="px-8 font-serif text-2xl md:text-4xl text-gold-gradient">
                  {item}
                </span>
                <span className="text-gold/40 text-2xl">&bull;</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
