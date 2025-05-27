import { useEffect, useState } from 'react';

const About = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="about" className="py-20 relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 min-h-fit">
      {/* Enhanced Background Elements with better parallax */}
      <div className="absolute inset-0 opacity-15">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-3xl"
          style={{
            top: '20%',
            left: '10%',
            transform: `translateY(${scrollY * 0.15}px) translateX(${mousePosition.x * 0.02}px) rotateX(${scrollY * 0.05}deg)`,
          }}
        />
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-3xl"
          style={{
            bottom: '20%',
            right: '15%',
            transform: `translateY(${-scrollY * 0.2}px) translateX(${-mousePosition.x * 0.03}px) rotateY(${scrollY * 0.08}deg)`,
          }}
        />
        <div 
          className="absolute w-48 h-48 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full blur-3xl"
          style={{
            top: '60%',
            left: '70%',
            transform: `translateY(${scrollY * 0.12}px) rotateZ(${scrollY * 0.03}deg)`,
          }}
        />
      </div>

      {/* Floating 3D Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `translateY(${scrollY * (0.1 + Math.random() * 0.2)}px) rotateX(${scrollY * 0.02 + i * 10}deg) rotateY(${scrollY * 0.03 + i * 15}deg)`,
            }}
          >
            <div 
              className={`w-${4 + Math.floor(Math.random() * 8)} h-${4 + Math.floor(Math.random() * 8)} bg-gradient-to-r ${
                i % 4 === 0 ? 'from-cyan-400 to-blue-600' :
                i % 4 === 1 ? 'from-purple-500 to-pink-500' :
                i % 4 === 2 ? 'from-green-400 to-teal-500' :
                'from-orange-400 to-red-500'
              } rounded-lg animate-float card-3d`}
              style={{
                width: `${16 + Math.random() * 32}px`,
                height: `${16 + Math.random() * 32}px`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div 
          className="text-center mb-16"
          style={{
            transform: `translateY(-${scrollY * 0.03}px) rotateX(${scrollY * 0.01}deg)`,
          }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate about technology and innovation, driven by curiosity and creativity
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Enhanced Image/Avatar Section */}
          <div 
            className="relative"
            style={{
              transform: `translateY(-${scrollY * 0.05}px) rotateY(${scrollY * 0.02}deg)`,
            }}
          >
            <div className="relative w-80 h-80 mx-auto transform-3d group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-3xl animate-pulse-glow"></div>
              <div className="absolute inset-2 bg-gray-800 rounded-3xl card-3d group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-cyan-500/20 transition-all duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1748074808850-f01f17f3a876?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
              </div>
              
              {/* Floating elements around the image */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full animate-bounce shadow-lg shadow-green-500/50"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-cyan-400 rounded-full animate-float shadow-lg shadow-cyan-400/50"></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-purple-500 rounded-full animate-pulse shadow-lg shadow-purple-500/50"></div>
              <div className="absolute bottom-1/4 -left-6 w-5 h-5 bg-pink-500 rounded-full animate-bounce shadow-lg shadow-pink-500/50" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>

          {/* Enhanced Content Section */}
          <div 
            className="space-y-8"
            style={{
              transform: `translateY(-${scrollY * 0.01}px) rotateX(${scrollY * 0.01}deg)`,
            }}
          >
            <div className="glass-effect p-8 rounded-2xl card-3d hover:scale-105 transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-purple-600/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4 relative z-10">BTech Graduate</h3>
              <p className="text-gray-300 leading-relaxed mb-6 relative z-10">
                As a passionate Full Stack Web Developer, I specialize in building innovative projects that integrate AI, Machine Learning, and IoT technologies. 
                With extensive experience in creating dynamic web applications, I’ve developed numerous AI-driven solutions and machine learning models to solve real-world problems. 
                My expertise in IoT has led to the successful execution of various projects, blending hardware and software to deliver seamless, smart systems. 
                I thrive on tackling complex challenges and continuously enhancing my skills to stay at the forefront of technology.
              </p>
              <p className="text-gray-300 leading-relaxed relative z-10">
                My journey began with a degree in Computer Science, followed by years of practical experience working with coding and new technologies. 
                I love solving complex problems and turning ideas into reality through clean, efficient code.
                When I'm not immersed in coding, I'm diving into cutting-edge technologies, experimenting with new frameworks, or unwinding with outdoor adventures.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: '🎓', title: 'Education', desc: 'BTech in Computer Science with strong foundation in programming and software engineering', color: 'from-blue-500 to-cyan-500' },
                { icon: '💡', title: 'Innovation', desc: 'Always exploring new technologies and methodologies to create impactful solutions', color: 'from-purple-500 to-pink-500' },
                { icon: '🚀', title: 'Growth', desc: 'Committed to continuous learning and adapting to emerging technologies', color: 'from-green-500 to-teal-500' },
                { icon: '🤝', title: 'Collaboration', desc: 'Excellent team player with strong communication and leadership skills', color: 'from-orange-500 to-red-500' }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="glass-effect p-6 rounded-xl hover:scale-105 transition-all duration-500 card-3d relative overflow-hidden group"
                  style={{
                    transform: `translateY(${Math.sin((scrollY + index * 200) * 0.002) * 5}px) rotateY(${Math.cos((scrollY + index * 200) * 0.001) * 3}deg)`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center mb-4 transform group-hover:rotate-12 transition-transform duration-300 shadow-lg`}>
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2 relative z-10">{item.title}</h4>
                  <p className="text-gray-400 text-sm relative z-10">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
