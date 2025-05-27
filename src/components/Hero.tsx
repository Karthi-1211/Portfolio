import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setYOffset] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const rotatingTexts = [
    "Developer",
    "Full Stack Developer",
    "IOT Specialist",
    "Software Developer",
    "Problem Solver",
    "Code Architect",
    "Tech Enthusiast",
    "Innovation Creator"
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setYOffset(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-purple-800 pt-20 pb-48">
      {/* Enhanced 3D Background Elements with Larger Particles */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => {
          const left = `${Math.random() * 100}%`;
          const top = `${Math.random() * 100}%`;
          const width = `${Math.random() * 20 + 10}px`;
          const height = `${Math.random() * 20 + 10}px`;
          const animationDelay = `${Math.random() * 10}s`;
          const animationDuration = `${Math.random() * 6 + 8}s`;
          const transform = `translate(${mousePosition.x * 0.02 * (i % 3 + 1)}px, ${mousePosition.y * 0.02 * (i % 3 + 1)}px) translateY(${scrollY * (0.3 + Math.random() * 0.4)}px)`;
          const background = `radial-gradient(circle, ${
            i % 4 === 0 ? 'rgba(6, 182, 226, 0.7)' :
            i % 4 === 1 ? 'rgba(139, 92, 246, 0.7)' :
            i % 4 === 2 ? 'rgba(236, 72, 153, 0.7)' :
            'rgba(251, 191, 36, 0.7)'
          }, transparent 50%)`;
          const boxShadow = `0 0 ${Math.random() * 30 + 20}px ${
            i % 4 === 0 ? 'rgba(6, 182, 226, 0.6)' :
            i % 4 === 1 ? 'rgba(139, 92, 246, 0.6)' :
            i % 4 === 2 ? 'rgba(236, 72, 153, 0.6)' :
            'rgba(251, 191, 36, 0.6)'
          }`;
          return (
            <div
              key={i}
              className="particle absolute rounded-full"
              style={{
                left,
                top,
                width,
                height,
                animationDelay,
                animationDuration,
                transform,
                background,
                boxShadow,
              }}
            />
          );
        })}
        
        <div 
          className="absolute w-96 h-96 opacity-20"
          style={{
            left: '5%',
            top: '15%',
            transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px) translateY(${scrollY * 0.8}px) rotateX(${scrollY * 0.15 + mousePosition.x * 0.02}deg) rotateY(${scrollY * 0.25 + mousePosition.y * 0.02}deg) rotateZ(${Math.sin(Date.now() * 0.002) * 15}deg)`,
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-blue-600 via-purple-700 to-cyan-500 animate-spin-slow transform rotate-45 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-pulse"></div>
            <div className="absolute inset-4 bg-gradient-to-br from-pink-500/30 to-cyan-500/20 rounded-md rounded-lg animate-float"></div>
          </div>
        </div>
        
        <div 
          className="absolute w-80 h-80 opacity-25 rounded-full"
          style={{
            right: '10%',
            top: '50%',
            transform: `translate(${-mousePosition.x * 0.06}px, ${-mousePosition.y * 0.06}px) translateY(${scrollY * 0.6}px) rotateZ(${scrollY * 0.08 + Math.cos(Date.now() * 0.002) * 20}deg) rotateX(${Math.sin(Date.now() * 0.001) * 10}deg)`,
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-cyan-600 via-blue-700 to-purple-600 animate-float rounded-full relative overflow-hidden">
            <div className="absolute inset-6 bg-gradient-to-br from-pink-500/30 to-purple-600/30 rounded-full animate-pulse opacity-70"></div>
            <div className="absolute inset-12 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-full animate-spin-slow opacity-50"></div>
          </div>
        </div>

        <div 
          className="absolute w-64 h-64 opacity-30 rounded-full"
          style={{
            left: '75%',
            top: '5%',
            transform: `translate(${mousePosition.x * 0.04}px, ${mousePosition.y * 0.04}px) translateY(${scrollY * 0.7}px) rotateX(${scrollY * 0.12 + Math.sin(Date.now() * 0.003) * 25}deg) rotateY(${Math.cos(Date.now() * 0.002) * 15}deg)`,
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-purple-600 via-pink-600 to-cyan-500 animate-pulse-glow rounded-full relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 animate-spin-slow rounded-full"></div>
          </div>
        </div>

        <div 
          className="absolute w-72 h-72 opacity-15 rounded-full"
          style={{
            right: '5%',
            bottom: '20%',
            transform: `translate(${mousePosition.x * 0.045}px, ${mousePosition.y * 0.045}px) translateY(${scrollY * 0.4}px) rotateY(${scrollY * 0.18 + mousePosition.x * 0.03}deg) rotateX(${Math.cos(Date.now() * 0.002) * 12}deg) rotateZ(${Math.sin(Date.now() * 0.001) * 8}deg)`,
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-cyan-500 via-teal-500 to-blue-600 rounded-full relative transform-3d">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30 animate-spin-slow rounded-full"></div>
            <div className="absolute inset-8 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full animate-float"></div>
          </div>
        </div>

        <div 
          className="absolute w-56 h-56 opacity-25 rounded-full"
          style={{
            left: '20%',
            bottom: '30%',
            transform: `translate(${-mousePosition.x * 0.055}px, ${-mousePosition.y * 0.055}px) translateY(${scrollY * 0.9}px) rotateZ(${scrollY * 0.15 + Math.sin(Date.now() * 0.004) * 30}deg) rotateX(${Math.cos(Date.now() * 0.003) * 20}deg)`,
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-purple-600 via-pink-500 to-cyan-500 rounded-full animate-float relative overflow-hidden transform-3d">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent animate-pulse"></div>
            <div className="absolute inset-4 bg-gradient-to-br from-cyan-400/30 to-purple-600/30 rounded-full animate-spin-slow"></div>
          </div>
        </div>

        <div 
          className="absolute w-48 h-48 opacity-20 rounded-full"
          style={{
            left: '60%',
            bottom: '10%',
            transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px) translateY(${scrollY * 0.3}px) rotateY(${Date.now() * 0.002}rad) rotateX(${Math.sin(Date.now() * 0.001) * 15}deg)`,
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 rounded-full animate-spin-slow relative transform-3d">
            <div className="absolute inset-8 bg-gradient-to-br from-pink-500/30 to-purple-500/30 rounded-full animate-pulse"></div>
            <div className="absolute inset-12 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full animate-float"></div>
          </div>
        </div>

        <div 
          className="absolute w-32 h-32 opacity-30 rounded-full"
          style={{
            left: '10%',
            top: '70%',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px) translateY(${scrollY * 0.5}px) rotateX(${Math.sin(Date.now() * 0.002) * 20}deg) rotateY(${Math.cos(Date.now() * 0.003) * 25}deg)`,
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-cyan-500 via-purple-600 to-pink-500 rounded-full animate-pulse-glow relative">
            <div className="absolute inset-2 bg-gradient-to-br from-purple-500/30 to-blue-600/30 rounded-full animate-spin-slow"></div>
          </div>
        </div>
      </div>

      {/* Main Content with Adjusted Parallax */}
      <div 
        className="relative z-10 text-center max-w-5xl mx-auto px-6"
        style={{
          transform: `translateY(${scrollY * 0.1}px) translateX(${Math.sin(scrollY * 0.002) * 5}px) rotateX(${scrollY * 0.005}deg)`,
        }}
      >
        <div className="mb-8">
          <span className="tech-font text-cyan-400 text-sm tracking-wider uppercase animate-pulse">Welcome to my digital realm</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight">
          <span className="text-gradient">Alamanda Balu Karthik</span>
          <br />
          <span className="text-white">& </span>
          <span 
            className="glitch text-white relative inline-block min-w-[300px] md:min-w-[500px]" 
            data-text={rotatingTexts[currentTextIndex]}
            key={currentTextIndex}
          >
            {rotatingTexts[currentTextIndex]}
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
          Crafting innovative solutions with cutting-edge technology. 
          Passionate about creating digital experiences that make a difference.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-5 text-lg font-semibold transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/30 card-3d cursor-pointer"
          >
            <a href="#projects">View My Work</a>
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-10 py-5 text-lg font-semibold transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-cyan-400/30 card-3d cursor-pointer"
          >
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
        
        {/* Enhanced Tech Stack Preview with Reduced Parallax */}
        <div 
          className="mt-10 flex flex-wrap justify-center gap-6"
          style={{
            transform: `translateY(${scrollY * 0.03}px) rotateX(${scrollY * 0.003}deg)`,
          }}
        >
          {['React', 'Node.js', 'Python', 'MongoDB', 'IOT','Machine Learning','Artificial Intelligence'].map((tech, index) => (
            <div 
              key={tech}
              className="glass-effect px-6 py-3 rounded-full text-sm font-medium hover:scale-125 transition-all duration-500 cursor-pointer card-3d hover:shadow-lg hover:shadow-cyan-400/30 relative overflow-hidden group"
              style={{ 
                animationDelay: `${index * 0.2}s`,
                transform: `translateY(${Math.sin((scrollY + index * 100) * 0.003) * 8}px) rotateY(${Math.cos((scrollY + index * 100) * 0.002) * 6}deg) rotateX(${Math.sin((scrollY + index * 100) * 0.001) * 4}deg)`,
              }}
            >
              <div className="absolute inset-5 bg-gradient-to-r from-cyan-400/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;