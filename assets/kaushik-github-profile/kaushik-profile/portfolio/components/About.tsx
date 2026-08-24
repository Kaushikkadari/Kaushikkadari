import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-28">
      <Reveal>
        <SectionHeading eyebrow="01 / About" title="Who I am" />
      </Reveal>
      <Reveal delay={0.1}>
        <div className="glass rounded-2xl p-8 sm:p-10">
          <p className="text-base leading-relaxed text-fog sm:text-lg">
            I&apos;m a <span className="text-white">Data Scientist</span> working
            on a machine-learning pricing pipeline for elevator quotation
            systems — the kind of production ML that has to be accurate,
            explainable, and boring in the best way. Day to day that means
            Python, notebooks, and pulling together Azure services (ADLS,
            Cosmos DB, AI Search, Blob Storage) with pandas, scikit-learn,
            and GPT-based tooling.
          </p>
          <p className="mt-5 text-base leading-relaxed text-fog sm:text-lg">
            Outside of pricing models, I&apos;m interested in the broader craft
            of turning messy data into systems people can actually trust —
            and I&apos;m always looking to sharpen how I build and ship ML in
            production, not just in a notebook.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
