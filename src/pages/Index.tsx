
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden cursor-custom">
      <CustomCursor />
      <Navigation />
      <div id="home">
        <Hero />
      </div>
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
