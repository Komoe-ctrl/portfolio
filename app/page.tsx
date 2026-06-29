import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import CursorGlow from "@/components/CursorGlow";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Background />
      <CursorGlow />
      <ScrollProgress />

      <Navbar />

      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />

      <Footer />
    </main>
  );
}