import { useEffect, useState } from 'react';

const Skills = () => {
  const [scrollY, setScrollY] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skillCategories = [
    {
      category: 'Frontend',
      icon: '🎨',
      skills: [
        { name: 'React', level: 90, color: 'from-blue-400 to-blue-600' },
        { name: 'TypeScript', level: 85, color: 'from-blue-500 to-blue-700' },
        { name: 'HTML/CSS', level: 95, color: 'from-orange-400 to-red-500' },
        { name: 'Tailwind CSS', level: 88, color: 'from-cyan-400 to-cyan-600' },
        { name: 'JavaScript', level: 92, color: 'from-yellow-400 to-yellow-600' },
        { name: 'bootstrap', level: 80, color: 'from-purple-500 to-purple-700' }
      ]
    },
    {
      category: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'React', level: 90, color: 'from-yellow-400 to-yellow-600' },
        { name: 'FastAPI', level: 75, color: 'from-green-500 to-green-700' },
        { name: 'Node.js', level: 80, color: 'from-green-400 to-green-600' },
        { name: 'Flask', level: 85, color: 'from-blue-500 to-green-500' },
        { name: 'Express.js', level: 78, color: 'from-gray-400 to-gray-600' },
        { name: 'RestFul API', level: 75, color: 'from-indigo-500 to-indigo-700' }
      ]
    },
    {
      category: 'Database',
      icon: '🗄️',
      skills: [
        { name: 'MongoDB', level: 80, color: 'from-green-500 to-green-700' },
        { name: 'MySQL', level: 75, color: 'from-blue-500 to-blue-700' },
        { name: 'FireBase', level: 68, color: 'from-red-500 to-red-700' },
      ]
    },
    {
      category: 'Tools & Others',
      icon: '🛠️',
      skills: [
        { name: 'Artificial Intelligence', level: 95, color: 'from-blue-600 to-blue-800' },
        { name: 'Machine Learning', level: 90, color: 'from-gray-700 to-gray-900' },
        { name: 'Internet of Things', level: 75, color: 'from-blue-400 to-blue-600' },
        { name: 'Git/Github', level: 70, color: 'from-orange-400 to-orange-600' },
        { name: 'Figma', level: 82, color: 'from-purple-500 to-pink-500' }
      ]
    }
  ];

  return (
    <section id="skills" className="pt-20 pb-32 relative overflow-hidden bg-gradient-to-br from-slate-800 via-gray-900 to-slate-900">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 4}s`,
              transform: `translateY(${Math.sin((scrollY + i * 200) * 0.001) * 15}px)`,
            }}
          />
        ))}
      </div>

      {/* 3D Floating Elements */}
      <div 
        className="absolute top-10 right-10 w-40 h-40 opacity-10"
        style={{
          transform: `translateY(${scrollY * 0.15}px) rotateX(${scrollY * 0.05}deg) rotateZ(${scrollY * 0.02}deg)`,
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl animate-spin-slow"></div>
      </div>

      <div 
        className="absolute bottom-20 left-10 w-28 h-28 opacity-15"
        style={{
          transform: `translateY(${scrollY * -0.12}px) rotateY(${scrollY * 0.03}deg)`,
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-pink-500 to-orange-500" style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div 
          className="text-center mb-16"
          style={{
            transform: `translateY(${scrollY * 0.001}px)`,
          }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Technical Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My expertise across various technologies and tools
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.category}
              className="glass-effect p-8 rounded-2xl card-3d hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20"
              style={{
                transform: `translateY(${scrollY * 0.01 * (categoryIndex + 1)}px) translateX(${Math.sin((scrollY + categoryIndex * 300) * 0.001) * 3}px)`,
              }}
            >
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mr-4 hover:rotate-12 transition-transform duration-300">
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-white">{category.category}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name}
                    className="group"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                        {skill.name}
                      </span>
                      <span className="text-cyan-400 text-sm font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out ${
                          hoveredSkill === skill.name ? 'animate-pulse-glow shadow-lg' : ''
                        }`}
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${skillIndex * 0.1}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced 3D Tech Stack Ecosystem */}
        <div 
          className="mt-32 pt-20 mb-32"
          style={{
            transform: `translateY(${scrollY * 0.03}px)`,
          }}
        >
          <div className="text-center mb-20">
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Tech Stack Ecosystem</span>
            </h3>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              An interconnected universe of technologies working in perfect harmony
            </p>
          </div>
          
          <div className="relative h-[600px] flex items-center justify-center">
            {/* Multiple orbital rings with enhanced effects */}
            <div 
              className="absolute w-96 h-96 border-2 border-cyan-500/30 rounded-full"
              style={{
                transform: `rotateZ(${scrollY * 0.05}deg) rotateY(${scrollY * 0.02}deg)`,
                boxShadow: '0 0 30px rgba(6, 182, 212, 0.3)',
              }}
            ></div>
            <div 
              className="absolute w-[500px] h-[500px] border border-purple-500/20 rounded-full"
              style={{
                transform: `rotateZ(${-scrollY * 0.03}deg) rotateX(${scrollY * 0.02}deg)`,
                boxShadow: '0 0 50px rgba(147, 51, 234, 0.2)',
              }}
            ></div>
            <div 
              className="absolute w-[600px] h-[600px] border border-pink-500/10 rounded-full"
              style={{
                transform: `rotateZ(${scrollY * 0.02}deg) rotateY(${-scrollY * 0.01}deg)`,
                boxShadow: '0 0 70px rgba(236, 72, 153, 0.1)',
              }}
            ></div>

            {/* Enhanced Central Hub with 3D effects */}
            <div 
              className="absolute w-40 h-40 bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 rounded-full flex items-center justify-center z-20 shadow-2xl"
              style={{
                transform: `rotateY(${scrollY * 0.2}deg) rotateX(${scrollY * 0.1}deg) translateY(${Math.sin(scrollY * 0.003) * 10}px) scale(${1 + Math.sin(scrollY * 0.002) * 0.1})`,
                boxShadow: '0 0 60px rgba(147, 51, 234, 0.6), 0 0 100px rgba(6, 182, 212, 0.4)',
                animation: 'pulse-glow 3s ease-in-out infinite',
              }}
            >
              <div className="w-32 h-32 bg-gray-900 rounded-full flex items-center justify-center">
                <span className="text-4xl animate-bounce filter drop-shadow-lg">👨‍💻</span>
              </div>
            </div>

            {/* Enhanced Orbiting Tech Icons with corrected text orientation */}
            {[
              { name: 'React', color: 'from-blue-400 to-cyan-400', icon: '⚛️' },
              { name: 'Node.js', color: 'from-green-400 to-emerald-400', icon: '🟢' },
              { name: 'Python', color: 'from-yellow-400 to-blue-400', icon: '🐍' },
              { name: 'MongoDB', color: 'from-green-500 to-green-600', icon: '🍃' },
              { name: 'IoT', color: 'from-orange-400 to-yellow-400', icon: '☁️' },
              { name: 'AI', color: 'from-blue-400 to-blue-600', icon: '🐳' }
            ].map((tech, index) => {
              const angle = (index * 60 + scrollY * 0.1) * Math.PI / 180;
              const radius = 200;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              const rotateY = scrollY * 0.1 + index * 30;
              const rotateX = Math.sin(scrollY * 0.002 + index) * 15;

              return (
                <div
                  key={tech.name}
                  className={`absolute w-28 h-28 glass-effect rounded-2xl flex flex-col items-center justify-center text-sm font-semibold transition-all duration-500 cursor-pointer shadow-xl border border-gray-600/30 hover:scale-125 hover:z-30`}
                  style={{
                    transform: `translate(${x}px, ${y}px) translateY(${Math.sin((scrollY + index * 1500) * 0.002) * 20}px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(${1 + Math.sin(scrollY * 0.001 + index) * 0.1})`,
                    background: `linear-gradient(135deg, ${tech.color.split(' ')[1]} 0%, ${tech.color.split(' ')[3]} 100%)`,
                    boxShadow: `0 10px 30px rgba(0,0,0,0.3), 0 0 20px rgba(6, 182, 212, 0.2)`,
                  }}
                >
                  <div
                    style={{
                      transform: `rotateY(${-rotateY}deg) rotateX(${-rotateX}deg)`,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '100%',
                      height: '100%',
                    }}
                  >
                    <span className="text-2xl mb-1 filter drop-shadow-lg">{tech.icon}</span>
                    <span className="text-white font-bold text-xs">{tech.name}</span>
                  </div>
                </div>
              );
            })}

            {/* Additional floating particles for enhanced atmosphere */}
            {[...Array(20)].map((_, i) => (
              <div
                key={`particle-${i}`}
                className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-30 animate-float"
                style={{
                  left: `${30 + Math.random() * 40}%`,
                  top: `${30 + Math.random() * 40}%`,
                  transform: `translateY(${Math.sin((scrollY + i * 300) * 0.003) * 30}px) translateX(${Math.cos((scrollY + i * 200) * 0.002) * 20}px)`,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;