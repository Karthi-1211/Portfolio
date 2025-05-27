import { useEffect, useState } from 'react';

const Education = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const educationData = [
    {
      year: '2021 - 2025',
      degree: 'Bachelor of Technology',
      field: 'Computer Science & Engineering(CSE)',
      institution: 'Anil Nerukonda Institute of Technology & Sciences',
      grade: 'CGPA: 8.5/10',
      description: 'Specialized in software engineering, data structures, algorithms, and modern web technologies.',
      icon: '🎓',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      year: '2019 - 2021',
      degree: 'Higher Secondary',
      field: 'Science (PCM)',
      institution: 'State Board',
      grade: '956/1000',
      description: 'Strong foundation in Physics, Chemistry, and Mathematics with focus on problem-solving.',
      icon: '📚',
      color: 'from-purple-500 to-pink-500'
    },
    {
      year: '2018-2019',
      degree: 'Secondary Education',
      field: 'All Subjects',
      institution: 'State Board',
      grade: '9.7/10.0',
      description: 'Well-rounded education with excellent performance in science and mathematics.',
      icon: '🏫',
      color: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <section id="education" className="py-32 pb-40 relative overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `translateY(${Math.sin((scrollY + i * 100) * 0.001) * 20}px)`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* 3D Floating Shapes */}
      <div 
        className="absolute top-20 left-10 w-32 h-32 opacity-20"
        style={{
          transform: `translateY(${scrollY * 0.1}px) rotateX(${scrollY * 0.05}deg) rotateY(${scrollY * 0.1}deg)`,
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl animate-float"></div>
      </div>

      <div 
        className="absolute top-40 right-20 w-24 h-24 opacity-15"
        style={{
          transform: `translateY(${scrollY * -0.08}px) rotateZ(${scrollY * 0.02}deg)`,
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-cyan-400 to-blue-600" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div 
          className="text-center mb-16"
          style={{
            transform: `translateY(${scrollY * 0.02}px)`,
          }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Education Journey</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My academic path towards becoming a technology professional
          </p>
        </div>

        <div className="relative mb-50">
          {/* Extended Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 rounded-full opacity-30" style={{ height: '150%' }}></div>

          <div className="space-y-20">
            {educationData.map((edu, index) => (
              <div 
                key={index}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                style={{
                  transform: `translateY(${scrollY * 0.03 * (index + 1)}px) translateX(${Math.sin(scrollY * 0.002 + index) * 5}px)`,
                }}
              >
                {/* Content Card */}
                <div className="w-5/12">
                  <div className="glass-effect p-8 rounded-2xl card-3d hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${edu.color} rounded-lg flex items-center justify-center mr-4 hover:rotate-12 transition-transform duration-300`}>
                        <span className="text-2xl">{edu.icon}</span>
                      </div>
                      <span className="tech-font text-cyan-400 text-sm">{edu.year}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                    <h4 className="text-lg text-purple-400 mb-2">{edu.field}</h4>
                    <p className="text-gray-400 mb-3">{edu.institution}</p>
                    <p className="text-green-400 font-semibold mb-4">{edu.grade}</p>
                    <p className="text-gray-300 leading-relaxed">{edu.description}</p>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="w-2/12 flex justify-center">
                  <div className={`w-6 h-6 bg-gradient-to-r ${edu.color} rounded-full animate-pulse-glow relative z-10`}>
                    <div className="absolute inset-1 bg-gray-900 rounded-full"></div>
                  </div>
                </div>

                {/* Spacer */}
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Stats - Moved much further down with significant extra spacing */}
        <div 
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-80 pt-60"
          style={{
            transform: `translateY(${scrollY * 0.01}px)`,
          }}
        >
          {[
            { label: 'Years of Study', value: '4+', icon: '⏱️' },
            { label: 'Projects Completed', value: '15+', icon: '🚀' },
            { label: 'Technologies Learned', value: '20+', icon: '💻' },
            { label: 'CGPA', value: '8.5', icon: '🏆' }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="glass-effect p-6 rounded-xl text-center hover:scale-110 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/20 card-3d"
              style={{
                transform: `translateY(${Math.sin((scrollY + index * 500) * 0.002) * 10}px)`,
              }}
            >
              <div className="text-3xl mb-2 hover:animate-bounce">{stat.icon}</div>
              <div className="text-2xl font-bold text-gradient mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
