
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import BentoBox from "@/components/BentoBox";
import Services from "@/components/Services";
import SocialMedia from "@/components/SocialMedia";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <About />
      <Gallery />
      <BentoBox />
      <Services />
      <SocialMedia />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
