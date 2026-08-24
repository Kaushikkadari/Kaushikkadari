import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const STACK: { category: string; items: string[] }[] = [
  { category: "Languages", items: ["Python"] },
  { category: "ML / Data", items: ["pandas", "scikit-learn", "KModes clustering", "Jupyter"] },
  { category: "Backend", items: ["Django"] },
  {
    category: "Cloud / Azure",
    items: ["ADLS", "Azure OpenAI", "Cosmos DB", "AI Search", "Blob Storage"],
  },
  { category: "Tools", items: ["TODO"] },
];

export default function TechStack() {
  return (
    <section id="stack" className="mx-auto max-w-5xl px-6 py-28">
      <Reveal>
        <SectionHeading
          eyebrow="03 / Tech Stack"
          title="What I actually build with"
          description="No badge wall — just the tools I reach for day to day."
        />
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2">
        {STACK.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.06}>
            <div className="h-full rounded-2xl glass p-6">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-cyan-soft">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-fog transition-colors duration-200 hover:border-cyan/40 hover:text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
