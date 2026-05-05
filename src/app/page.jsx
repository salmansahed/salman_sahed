import About from "@/components/About";
import Contacts from "@/components/Contacts ";
import HeroBanner from "@/components/HeroBanner";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import ServicesModal from "@/components/ServicesModal";
import Skills from "@/components/Skills";
import Technologies from "@/components/Technologies";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <HeroBanner />
      <About />
      <Technologies />
      <Skills />
      <Services />
      <Projects />
      <Testimonials />
      <Contacts />
    </div>
  );
}
