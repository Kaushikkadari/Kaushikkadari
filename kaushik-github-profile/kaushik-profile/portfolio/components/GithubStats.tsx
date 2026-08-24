import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

// Replace TODO_GITHUB_USERNAME with your actual GitHub handle.
const USERNAME = "TODO_GITHUB_USERNAME";

export default function GithubStats() {
  return (
    <section id="stats" className="mx-auto max-w-5xl px-6 py-28">
      <Reveal>
        <SectionHeading
          eyebrow="04 / GitHub Analytics"
          title="Activity, not vanity metrics"
        />
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2">
        <Reveal>
          <div className="glass overflow-hidden rounded-2xl p-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${USERNAME}&show_icons=true&hide_border=true&bg_color=00000000&title_color=00E5FF&icon_color=38BDF8&text_color=B7C3D6`}
              alt="GitHub stats"
              className="w-full"
            />
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="glass overflow-hidden rounded-2xl p-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${USERNAME}&layout=compact&hide_border=true&bg_color=00000000&title_color=00E5FF&text_color=B7C3D6`}
              alt="Top languages"
              className="w-full"
            />
          </div>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="glass overflow-hidden rounded-2xl p-2 md:col-span-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${USERNAME}&hide_border=true&background=00000000&ring=00E5FF&fire=38BDF8&currStreakLabel=00E5FF`}
              alt="Contribution streak"
              className="w-full"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
