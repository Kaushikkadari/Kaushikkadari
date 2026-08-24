import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const FOCUS = [
  {
    icon: "⚡",
    label: "Building",
    text: "A machine-learning pricing pipeline (MLP2) for elevator quotation systems on Azure.",
  },
  {
    icon: "📚",
    label: "Learning",
    text: "Deeper multi-agent orchestration patterns — routing across specialized GPT agents.",
  },
  {
    icon: "🧠",
    label: "Exploring",
    text: "Applied clustering (KModes) and GPT-based argument generation for pricing decisions.",
  },
  {
    icon: "🎯",
    label: "Improving",
    text: "Shipping ML work that's easy to explain in plain language to non-technical stakeholders.",
  },
];

export default function CurrentFocus() {
  return (
    <section id="focus" className="mx-auto max-w-5xl px-6 py-28">
      <Reveal>
        <SectionHeading eyebrow="02 / Current Focus" title="What I'm working through right now" />
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2">
        {FOCUS.map((f, i) => (
          <Reveal key={f.label} delay={i * 0.08}>
            <div className="group h-full rounded-2xl glass p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/30 hover:shadow-glow">
              <div className="mb-4 flex items-center gap-3">
                <span className="text-xl">{f.icon}</span>
                <span className="font-display text-sm font-semibold uppercase tracking-wide text-white">
                  {f.label}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-mist">{f.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
