
import { useEffect, useState } from 'react';
import { Calendar, MapPin, Trophy, Users, Code, Rocket } from 'lucide-react';

const Experience = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const experiences = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "Vizag Steel Plant",
      location: "Visakhapatnam, India",
      period: "June 2023-July 2024",
      type: "Internship",
      description: "Developed and maintained web applications for internal use. Collaborated with cross-functional teams to enhance user experience and application functionality.",
      achievements: [
        "Implemented a new feature that improved data retrieval speed by 40%",
        "Automated deployment processes, reducing release time by 30%",
        "Received 'Best Intern' award for outstanding performance"
      ],
      technologies: ["HTML","CSS","Bootstrap","Java Servlets","MySQL(via XAMPP)","JavaScript","AJAX","JSON","Apache Tomcat"],
      icon: <Code className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Student Coordiantor",
      company: "Anits College of Engineering",
      location: "Visakhapatnam, India",
      period: "Decenber 2023",
      type: "Event Coordinator",
      description: "Organized and managed technical workshops and coding competitions. Led a team of volunteers to ensure smooth execution of events and enhance student engagement.",
      achievements: [
        "Coordinated a successful workshop with over 200 participants",
        "Increased event participation by 50% through effective marketing",
        "Developed a feedback system that improved event quality by 30%"
      ],
      technologies: ["Event Management", "Team Leadership", "Public Speaking", "Problem Solving"],
      icon: <Rocket className="w-6 h-6" />
    }
  ];

  return (
    <section id="experience" className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      {/* Enhanced 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              transform: `translate(${mousePosition.x * (0.01 + Math.random() * 0.02)}px, ${mousePosition.y * (0.01 + Math.random() * 0.02)}px) rotate(${Math.random() * 360}deg)`,
              transition: 'transform 0.1s ease',
            }}
          >
            <div className={`w-full h-full bg-gradient-to-r ${
              i % 3 === 0 ? 'from-cyan-400 to-blue-600' :
              i % 3 === 1 ? 'from-purple-500 to-pink-600' :
              'from-green-400 to-blue-500'
            } ${
              i % 4 === 0 ? 'rounded-full' :
              i % 4 === 1 ? 'rounded-lg rotate-45' :
              i % 4 === 2 ? '' :
              'rounded-full'
            } animate-float-slow`} 
            style={{
              clipPath: i % 4 === 2 ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : undefined
            }}
            />
          </div>
        ))}

        {/* Large 3D shapes */}
        <div 
          className="absolute w-96 h-96 opacity-5"
          style={{
            right: '10%',
            top: '20%',
            transform: `translate(${-mousePosition.x * 0.05}px, ${-mousePosition.y * 0.05}px) rotateX(45deg) rotateY(45deg)`,
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 rounded-3xl animate-spin-slow"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 glass-effect rounded-full">
            <Users className="w-5 h-5 text-cyan-400" />
            <span className="tech-font text-cyan-400 text-sm tracking-wider uppercase">Professional Journey</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Work Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building innovative solutions and leading development teams across various industries
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 hidden md:block"></div>

          {/* Experience Cards */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id}
                className="relative group"
                style={{
                  animation: `fade-in 0.8s ease-out ${index * 0.2}s both`
                }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full border-4 border-slate-900 hidden md:block group-hover:scale-150 transition-transform duration-300"></div>

                {/* Experience Card */}
                <div className="md:ml-20 glass-effect rounded-2xl p-8 card-3d group-hover:scale-105 transition-all duration-500">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Left Column - Main Info */}
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl text-white">
                          {exp.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                          <div className="flex flex-wrap items-center gap-4 text-gray-300 mb-3">
                            <span className="font-semibold text-cyan-400">{exp.company}</span>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.period}</span>
                            </div>
                            <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-full text-sm">
                              {exp.type}
                            </span>
                          </div>
                          <p className="text-gray-300 leading-relaxed mb-4">
                            {exp.description}
                          </p>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                          <Trophy className="w-5 h-5 text-yellow-400" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-gray-300">
                              <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <span 
                              key={idx}
                              className="px-3 py-1 glass-effect rounded-full text-sm text-cyan-400 hover:scale-110 transition-transform duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-effect rounded-2xl p-8 card-3d max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Work Together?</h3>
            <p className="text-gray-300 mb-6">
              Let's discuss how my experience can contribute to your next project
            </p>
            <a 
  href="#contact" 
  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-110 hover:shadow-2xl inline-block"
>
  Get In Touch
</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
