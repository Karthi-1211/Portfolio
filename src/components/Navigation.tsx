
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-effect shadow-lg py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="text-2xl font-bold">
          <span className="text-gradient">Balu Karthik's Portfolio</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-all duration-300 hover:text-cyan-400 relative group ${
                activeSection === item.name.toLowerCase() ? 'text-cyan-400' : 'text-gray-300'
              }`}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white">
          <a
             href="/Alamanda_Balu_Karthik.pdf" // Adjust this path based on your PDF location
              download="Alamanda_Balu_Karthik.pdf" // Optional: customize the downloaded file name
              >
          Download CV
          </a>
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
