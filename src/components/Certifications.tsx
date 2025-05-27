import { useState, useEffect } from 'react';

const Certifications = () => {
  const [scrollY, setScrollY] = useState(0);
  const [viewMode, setViewMode] = useState<'grid' | 'timeline'>('grid');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const certifications = [
    {
      title: 'Introduction To Internet of Things (IoT)',
      issuer: 'National Programme on Technology Enhanced Learning(NPTEL)',
      date: 'November 2024',
      credentialId: 'NPTEL24CS115S752900069',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
      certificateLink: 'https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs115/Course/NPTEL24CS115S75290006903955989.pdf', // Replace with actual link
      skills: ['IoT', 'Python', 'Arduino', 'Raspberry Pi'],
      level: 'Professional',
      color: 'from-orange-500 to-yellow-500'
    },
    {
      title: 'Introduction to Python for Data Science',
      issuer: 'National Programme on Technology Enhanced Learning(NPTEL)',
      date: 'March 2024',
      credentialId: 'NPTEL24CS54S542700253',
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop',
      certificateLink: 'https://archive.nptel.ac.in/content/noc/NOC24/SEM1/Ecertificates/106/noc24-cs54/Course/NPTEL24CS54S54270025330052130.pdf', // Replace with actual link
      skills: ['Python', 'Data Science', 'Numpy', 'Pandas', 'Data Visualization'],
      level: 'Professional',
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'CS50s Introduction to Artificial Intelligence with Python',
      issuer: 'Harvard University,EDX',
      date: 'August 2024',
      credentialId: '0d48e68a0ffe45aa844ecb3210e400ea',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      certificateLink: 'https://courses.edx.org/certificates/0d48e68a0ffe45aa844ecb3210e400ea', // Replace with actual link
      skills: ['AI', 'Python', 'Machine Learning', 'Deep Learning', 'Natural Language Processing'],
      level: 'Professional',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'CS50s Introduction to Computer Science',
      issuer: 'Harvard University,EDX',
      date: 'August 2024',
      credentialId: '78072fe4d127446e8cbca850ae76b7b3',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop',
      certificateLink: 'https://courses.edx.org/certificates/78072fe4d127446e8cbca850ae76b7b3', // Replace with actual link
      skills: ['Computer Science', 'Programming', 'Algorithms', 'Data Structures', 'Problem Solving'],
      level: 'Specialization',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Prompt Engineering and Advanced ChatGPT',
      issuer: 'edX',
      date: 'July 2024',
      credentialId: '6356db0ddcfa4c148969dcbf57d6440d',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
      certificateLink: 'https://courses.edx.org/certificates/6356db0ddcfa4c148969dcbf57d6440d', // Replace with actual link
      skills: ['Prompt Engineering', 'ChatGPT', 'AI', 'Natural Language Processing'],
      level: 'Associate',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Introduction to Prompt Engineering',
      issuer: 'edX',
      date: 'July 2024',
      credentialId: '42251c79f7884bf68826d8a012e2c311',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop',
      certificateLink: 'https://courses.edx.org/certificates/42251c79f7884bf68826d8a012e2c311', // Replace with actual link
      skills: ['Prompt Engineering', 'AI', 'Natural Language Processing'],
      level: 'Associate',
      color: 'from-blue-400 to-cyan-400'
    },
    {
      title: 'SQL and Relational Databases 101',
      issuer: 'cognitiveclass.ai , IBM',
      date: 'July 2024',
      credentialId: '4d5924523fc44585934250133df1965f',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop',
      certificateLink: 'https://courses.cognitiveclass.ai/certificates/4d5924523fc44585934250133df1965f', // Replace with actual link
      skills: ['SQL', 'Relational Databases', 'Data Management', 'Database Design'],
      level: 'Professional',
      color: 'from-blue-400 to-cyan-400'
    },
    {
      title: 'TCS iON Career Edge - Young Professionals',
      issuer: 'TCS iON',
      date: 'October 2023',
      credentialId: '119854-24981805-1016',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop',
      certificateLink: 'https://drive.google.com/file/d/1tMwfy8kr_VdahSjkXuRRjzNDP1JUe-XO/view?usp=sharing', // Replace with actual link
      skills: ['Professional Skills', 'Career Development', 'Soft Skills', 'Communication'],
      level: 'Professional',
      color: 'from-blue-400 to-cyan-400'
    },
    {
      title: 'Full Stack Development J2EE and web-2.0 Technologies',
      issuer: 'Rashtriya Ispat Nigam Limited(RINL)',
      date: 'June 2024',
      credentialId: '100032995',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop',
      certificateLink: 'https://drive.google.com/file/d/1OSIS9EFlMDMpipiQi0jQV4qnRngVF2jA/view?usp=sharing', // Replace with actual link
      skills: ['Full Stack Development', 'Java', 'J2EE', 'Web Technologies', 'Java Servlets', 'JSP'],
      level: 'Professional',
      color: 'from-blue-400 to-cyan-400'
    },
    {
      title: 'Model Smart IoT Systems using Arduino and AI - Bootcamp on Artificial Intelligence and IoT',
      issuer: 'KAIDOKO AUTOMATION SOLUTIONS PRIVATE LIMITED',
      date: 'December 2023',
      credentialId: '#',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop',
      certificateLink: 'https://drive.google.com/file/d/1EvqLa0xj4U210wnncW4SgkeaQG6MzlJd/view?usp=sharing', // Replace with actual link
      skills: ['Arduino', 'IoT', 'Artificial Intelligence', 'Machine Learning', 'Python'],
      level: 'Professional',
      color: 'from-blue-400 to-cyan-400'
    },
    {
      title: 'Salesforce Developer Virtual Internship',
      issuer: 'Salesforce',
      date: 'July 2024',
      credentialId: 'SISFVIPAD2024-1939',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop',
      certificateLink: 'https://drive.google.com/file/d/14lnSgMMg5IxEzTlngW-cj-16Gv2g700p/view?usp=sharing', // Replace with actual link
      skills: ['Salesforce', 'CRM', 'Apex', 'Visualforce', 'Lightning Components'],
      level: 'Professional',
      color: 'from-blue-400 to-cyan-400'
    },
    {
      title: 'Python Essentials',
      issuer: 'Cisco Networking Academy',
      date: 'May 2024',
      credentialId: '#',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop',
      certificateLink: 'https://drive.google.com/file/d/1lqq6KuiMc2VYxDp8I9NZZnnx3ENdq7-M/view?usp=sharing', // Replace with actual link
      skills: ['Python', 'Programming', 'Data Structures', 'Algorithms'],
      level: 'Professional',
      color: 'from-blue-400 to-cyan-400'
    }
  ];

  const TimelineView = () => (
    <div className="relative mb-20">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 rounded-full opacity-30"></div>
      <div className="space-y-16">
        {certifications.map((cert, index) => (
          <div
            key={cert.credentialId}
            className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            style={{
              transform: `translateY(${Math.sin(scrollY * 0.001) * 3}px)`,
            }}
          >
            <div className="w-5/12">
              <div className="glass-effect p-6 rounded-2xl card-3d hover:scale-105 transition-all duration-500">
                <div className="flex items-center mb-4">
                  <div className={`w-10 h-10 bg-gradient-to-r ${cert.color} rounded-lg flex items-center justify-center mr-3`}>
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-cyan-400 text-sm font-semibold">{cert.date}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{cert.issuer}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.slice(0, 2).map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-gray-800 text-cyan-400 text-xs rounded-lg border border-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <a
                  href={cert.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-xs py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 text-center"
                >
                  View Certificate
                </a>
              </div>
            </div>
            <div className="w-2/12 flex justify-center">
              <div className={`w-6 h-6 bg-gradient-to-r ${cert.color} rounded-full animate-pulse-glow relative z-10`}>
                <div className="absolute inset-1 bg-gray-900 rounded-full"></div>
              </div>
            </div>
            <div className="w-5/12"></div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="certifications" className="pt-20 pb-32 relative align-items bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 4}s`,
              transform: `translateY(${Math.sin((scrollY + i * 150) * 0.001) * 20}px)`,
            }}
          />
        ))}
      </div>

      {/* Floating Decorative Elements */}
      <div
        className="absolute top-20 left-20 w-36 h-36 opacity-15"
        style={{
          transform: `translateY(${scrollY * 0.12}px) rotateX(${scrollY * 0.03}deg) rotateY(${scrollY * 0.05}deg)`,
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-3xl animate-float"></div>
      </div>
      <div
        className="absolute bottom-40 right-16 w-28 h-28 opacity-20"
        style={{
          transform: `translateY(${scrollY * -0.08}px) rotateZ(${scrollY * 0.02}deg)`,
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-pink-500 to-orange-500" style={{ clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)' }}></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Certifications & Achievements</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional certifications that validate my expertise and commitment to continuous learning
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: 'Certifications', value: '6+', icon: '🏆' },
            { label: 'Hours of Learning', value: '500+', icon: '📚' },
            { label: 'Skills Validated', value: '25+', icon: '✅' },
            { label: 'Year Started', value: '2021', icon: '🚀' }
          ].map((stat, index) => (
            <div
              key={index}
              className="glass-effect p-6 rounded-xl text-center hover:scale-110 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/20 card-3d"
              style={{
                transform: `translateY(${Math.sin((scrollY + index * 400) * 0.002) * 8}px)`,
              }}
            >
              <div className="text-2xl mb-2 hover:animate-bounce">{stat.icon}</div>
              <div className="text-xl font-bold text-gradient mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* View Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-800 rounded-lg p-1 hover:bg-gray-700 transition-colors duration-300">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 ${
                viewMode === 'grid'
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Grid View
            </button>
            <button
              onClick={() => setViewMode('timeline')}
              className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 ${
                viewMode === 'timeline'
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Timeline View
            </button>
          </div>
        </div>

        {/* Conditional Rendering */}
        {viewMode === 'timeline' ? (
          <TimelineView />
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {certifications.map((cert) => (
              <div
                key={cert.credentialId}
                className="group glass-effect rounded-2xl overflow-hidden card-3d hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                {/* Certificate Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
                  {/* Level Badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${cert.color} text-white`}>
                    {cert.level}
                  </div>
                  {/* Verification Icon */}
                  <div className="absolute top-4 left-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                </div>
                {/* Certificate Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-cyan-400 text-sm font-semibold">{cert.date}</span>
                    <span className="text-gray-500 text-xs">#{cert.credentialId}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{cert.issuer}</p>
                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-gray-800 text-cyan-400 text-xs rounded-lg border border-gray-700 hover:border-cyan-400 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  {/* Action Button */}
                  <a
                    href={cert.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-xs py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 text-center"
                  >
                    View Certificate
                  </a>
                </div>
                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;