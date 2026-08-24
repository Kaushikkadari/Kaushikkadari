import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const STEPS = ["Build", "Learn", "Break", "Fix", "Improve", "Repeat"];

export default function Mindset() {
  return (
    <section id="mindset" className="mx-auto max-w-5xl px-6 py-28">
      <Reveal>
        <SectionHeading eyebrow="06 / Developer Mindset" title="How I approach the work" />
      </Reveal>

      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <Reveal>
          <div className="flex flex-col items-start gap-0">
            {STEPS.map((step, i) => (
              <div key={step} className="flex flex-col items-start">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-mist">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-xl font-semibold text-white sm:text-2xl">
                    {step}
                  </span>
                </div>
                {i < STEPS.length - 1 && (
                  <span className="ml-[26px] h-6 w-px bg-gradient-to-b from-cyan-soft/50 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass rounded-2xl p-6 font-mono text-sm text-fog">
            <div className="mb-4 flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="ml-2 text-xs text-mist">~/kaushik</span>
            </div>
            <p className="text-mist">
              <span className="text-cyan-soft">$</span> whoami
            </p>
            <p className="mb-3 text-white">data-scientist · ml-pricing</p>
            <p className="text-mist">
              <span className="text-cyan-soft">$</span> status
            </p>
            <p className="mb-3 text-white">shipping the MLP2 pricing pipeline</p>
            <p className="text-mist">
              <span className="text-cyan-soft">$</span> coffee
            </p>
            <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-full rounded-full bg-gradient-to-r from-cyan to-indigo" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
