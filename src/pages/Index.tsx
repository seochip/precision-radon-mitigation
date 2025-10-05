import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import RadonData from "@/components/RadonData";
import MitigationTechniques from "@/components/MitigationTechniques";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <RadonData />
      <MitigationTechniques />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
