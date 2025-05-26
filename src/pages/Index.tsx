
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import BentoBox from "@/components/BentoBox";
import Services from "@/components/Services";
import Trainers from "@/components/Trainers";
import SocialMedia from "@/components/SocialMedia";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import ScrollAnimation from "@/components/ScrollAnimation";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      
      <ScrollAnimation>
        <About />
      </ScrollAnimation>

      <ScrollAnimation direction="right" delay={0.2}>
        <Gallery />
      </ScrollAnimation>

      <ScrollAnimation direction="left" delay={0.2}>
        <BentoBox />
      </ScrollAnimation>

      <ScrollAnimation>
        <Services />
      </ScrollAnimation>

      <ScrollAnimation direction="right" delay={0.2}>
        <Trainers />
      </ScrollAnimation>

      <ScrollAnimation direction="right" delay={0.2}>
        <SocialMedia />
      </ScrollAnimation>

      <ScrollAnimation direction="up" delay={0.3}>
        <Contact />
      </ScrollAnimation>

      <ScrollAnimation direction="up" delay={0.2}>
        <Footer />
      </ScrollAnimation>

      <FloatingContact />
    </div>
  );
};

export default Index;
