import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CurrentFocus from "@/components/CurrentFocus";
import TechStack from "@/components/TechStack";
import GithubStats from "@/components/GithubStats";
import CreativeMode from "@/components/CreativeMode";
import Mindset from "@/components/Mindset";
import Goals from "@/components/Goals";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-void">
      <NavBar />
      <Hero />
      <About />
      <CurrentFocus />
      <TechStack />
      <GithubStats />
      <CreativeMode />
      <Mindset />
      <Goals />
      <Contact />
      <Footer />
    </main>
  );
}
