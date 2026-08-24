import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import MagneticButton from "./MagneticButton";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-28 text-center">
      <Reveal>
        <SectionHeading
          eyebrow="08 / Contact"
          title="Let's talk"
          description="Open to Data Scientist / AI roles and conversations about ML in production."
        />
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mx-auto flex max-w-md flex-wrap items-center justify-center gap-4">
          <MagneticButton href="https://github.com/TODO">GitHub</MagneticButton>
          <MagneticButton href="https://linkedin.com/in/TODO" variant="ghost">
            LinkedIn
          </MagneticButton>
          <MagneticButton href="mailto:TODO@example.com" variant="ghost" external={false}>
            Email
          </MagneticButton>
        </div>
      </Reveal>
    </section>
  );
}
