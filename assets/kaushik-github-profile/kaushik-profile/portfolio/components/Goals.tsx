import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const GOALS = [
  "Ship the MLP2 pricing pipeline to production-grade reliability",
  "Go deeper on system design for ML-serving infrastructure",
  "Contribute to open source",
  "Keep learning — new tools, new techniques, no autopilot",
];

export default function Goals() {
  return (
    <section id="goals" className="mx-auto max-w-3xl px-6 py-28">
      <Reveal>
        <SectionHeading eyebrow="07 / Goals" title="Where this is headed" />
      </Reveal>

      <div className="relative border-l border-white/10 pl-8">
        {GOALS.map((goal, i) => (
          <Reveal key={goal} delay={i * 0.08}>
            <div className="relative mb-10 last:mb-0">
              <span className="absolute -left-[38px] top-1 h-3 w-3 rounded-full border-2 border-cyan bg-void shadow-glow" />
              <p className="text-base text-fog sm:text-lg">{goal}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
