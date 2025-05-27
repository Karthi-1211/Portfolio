import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeProject, setActiveProject] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: 'A Smart IoT Enabled System for Leaf Disease Detection with Severity and Pesticide Recommendation',
      description: 'An innovative IoT system for detecting leaf diseases, assessing severity, and recommending pesticides.',
      //image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      image:'https://www.niubol.com/static/upload/image/20250114/1736824575504341.jpeg',
      technologies: ['Python', 'Flask', 'Machine Learning', 'IoT', 'MYSQL','OpenCV','AI','ESP32','ESP8266'],
      liveDemo: '#',
      github: 'https://github.com/Karthi-1211/PlantCare-AI',
      category: 'Full Stack',
      status: 'Completed',
      features: ['Leaf Disease Detection', 'Severity Assessment', 'Pesticide Recommendation', 'IoT Integration', 'User Dashboard']
    },
    {
      title: 'AI Full Stack Mock Interview APP',
      description: 'AI-powered mock interview application with real-time feedback and personalized questions.',
      //image: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=600&h=400&fit=crop',
      image:'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=600&h=400&fit=crop',
      technologies: ['TypeScript', 'React', 'Vite', 'Tailwind CSS', 'Gemini AI', 'OpenAI','SupaBase'],
      liveDemo: 'https://ai-mock-interview-drab.vercel.app/',
      github: 'https://github.com/Karthi-1211/AI-Mock-Interview',
      category: 'AI/ML Full Stack',
      status: 'Completed',
      features: ['AI-Powered Questions', 'Real-time Feedback', 'User Profiles', 'Interview Analytics', 'Responsive Design']
    },
    {
      title: 'Web Based AI Agent',
      description: 'A responsive portfolio showcasing projects with smooth animations, built using React, TypeScript, and Tailwind CSS.',
      image: 'https://miro.medium.com/v2/resize:fit:1400/1*6oxuBAFs8inGVycEsSXzug.jpeg',
      technologies: ['ReactJS', 'Tailwind CSS','Python', 'Gemini AI', 'Playwright'],
      liveDemo: '#',
      github: 'https://github.com/Karthi-1211/My-AI-Agent',
      category: 'AI/ML',
      status: 'Completed',
      features: ['AI Agent Interaction', 'Natural Language Processing', 'User-Friendly Interface', 'Real-time Responses', 'Multi-Platform Support']
    },
    {
      title: 'Personal Portfolio Website',
      description: 'A responsive portfolio showcasing projects with smooth animations, built using React, TypeScript, and Tailwind CSS.',
      image:'https://images.unsplash.com/photo-1545665277-5937489579f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['React', 'Vite', 'Tailwind CSS'],
      liveDemo: 'https://portfolio-website-phi-one-44.vercel.app/',
      github: 'https://github.com/Karthi-1211/Portfolio',
      category: 'Frontend',
      status: 'Completed',
      features: ['Responsive Design', 'Smooth Animations', 'Project Showcase', 'Contact Form', 'SEO Optimized']
    },
    {
      title: 'Drowsiness Detection System',
      description: 'A real-time system using computer vision to detect driver drowsiness and alert users, built with Python and React.',
      image: 'https://www.bosch-mobility.com/media/global/solutions/passenger-cars-and-light-commercial-vehicles/driver-assistance-systems/driver-drowsiness-detection/thumbnail_fahrermuedigkeitserkennung.jpg',
      technologies: ['Python', 'OpenCV', 'Dlib', 'Numpy', 'PyGame'],
      liveDemo: '#',
      github: 'https://github.com/Karthi-1211/Real-time-Drowsiness-Detection-using-ML',
      category: 'AI/ML',
      status: 'Completed',
      features: ['Real-time Detection', 'Alert System', 'User-Friendly Interface', 'Data Visualization', 'Cross-Platform Support']
    },
    {
      title: 'GroqGPT - AI Chatbot',
      description: 'An AI-powered chatbot application using GroqGPT for natural language processing and user interaction.',
      image: 'https://www.fmj.co.uk/wp-content/uploads/2022/04/iStock-1206796363.jpg',
      technologies: ['Python', 'Langchain', 'Streamlit' ,'GroqAPI' ,'LLM'],
      liveDemo: 'https://karthi-1211-groqgptchatbot-8hezkh.streamlit.app/',
      github: 'https://github.com/Karthi-1211/GroqGPT',
      category: 'AI/ML',
      status: 'Completed',
      features: ['Natural Language Processing', 'User Interaction', 'Contextual Understanding', 'Multi-Platform Support', 'Real-time Responses']
    },
    {
      title: 'Real Time Human Detection System',
      description: 'A real-time human detection system using computer vision and machine learning techniques.',
      image: 'https://media.istockphoto.com/id/1168365129/photo/authentication-by-facial-recognition-concept-biometric-security-system.jpg?s=612x612&w=0&k=20&c=PYcoBVyeVF5CNR4m6BAWbteF3Cvo2DxOURHMYGglTx0=',
      technologies: ['Python', 'OpenCV', 'NumPy', 'Imutils', 'Argparse', 'HOG', 'SVM', 'YOLO'],
      liveDemo: '#',
      github: 'https://github.com/Karthi-1211/Human-Detection',
      category: 'AI/ML',
      status: 'Completed',
      features: ['Real-time Detection', 'High Accuracy', 'User-Friendly Interface', 'Data Visualization', 'Cross-Platform Support']
    },
    {
      title: 'AI Speech Bot',
      description: 'A voice-activated assistant supporting speech-to-text and text-to-speech, built with React and cloud APIs.',
      image: 'https://assets.techcircle.in/uploads/article-image/2019/03/images/18008-voice-rf.jpg',
      technologies: ['HTML','CSS','JavaScript','SpeechRecognition API','Web Speech API','ScoketIO'],
      liveDemo: '#',
      github: 'https://github.com/Karthi-1211/AI-Speech-Bot',
      category: 'AI/ML',
      status: 'Completed',
      features: ['Speech Recognition', 'Text-to-Speech', 'Voice Commands', 'Real-time Interaction', 'Multi-Platform Support']
    },
    {
      title: 'Internet Of Things',
      description: 'IoT based projects on various applications.',
      image: 'https://www.cloudblue.com/wp-content/uploads/2024/06/what-is-the-internet-of-things-iot.png',
      technologies: ['Ardunio','ESP8266' ,'ESP32 Cam' ,'LED' ,'Servo Motor'],
      liveDemo: '#',
      github: 'https://github.com/Karthi-1211/Internet-of-Things',
      category: 'IoT',
      status: 'Completed',
      features: ['Smart Home Automation', 'Remote Monitoring', 'Sensor Integration', 'Data Logging', 'Real-time Control']
    },
    {
      title: 'Expense Tracker',
      description: 'A personal finance app for tracking expenses and budgets, featuring data visualization and secure authentication.',
      image: 'https://images.unsplash.com/photo-1707157281599-d155d1da5b4c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['React','TypeScript','Tailwind CSS','SupaBase'],
      liveDemo: 'https://wallet-whiz-three.vercel.app/',
      github: 'https://github.com/Karthi-1211/WalletWhiz',
      category: 'Full Stack',
      status: 'Completed',
      features: ['Expense Tracking', 'Budget Management', 'Data Visualization', 'Secure Authentication', 'Responsive Design']
    },
    {
      title: 'Delay Management System',
      description: 'A web application for managing and tracking delays in projects, with real-time updates and notifications.',
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['HTML','CSS','Bootstrap','Java Servlets','MySQL(via XAMPP)','JavaScript','AJAX','JSON','Apache Tomcat'],
      liveDemo: '#',
      github: 'https://github.com/Karthi-1211/Delay-Management-System',
      category: 'Java Full Stack',
      status: 'Completed',
      features: ['Project Tracking', 'Real-time Updates', 'Notifications', 'User Management', 'Data Visualization']
    },
    {
      title: 'Student Management System',
      description: 'A comprehensive system for managing student records, attendance, and grades, built with Java and Spring Boot.',
      image: 'https://frontcore.com/wp-content/uploads/2020/03/Top-features-and-functions-in-a-training-management-system.jpg',
      technologies: ['HTML','CSS','JavaScript','PHP','MySQL','Bootstrap','Apache Tomcat','XAMPP (Apache)'],
      liveDemo: '#',
      github: 'https://github.com/Karthi-1211/Student-Management-System',
      category: 'Full Stack',
      status: 'Completed',
      features: ['Account Management', 'Analytics', 'Post Scheduling', 'Notifications', 'Responsive Design']
    },
    {
      title: 'Whatsapp Portfolio',
      description: 'A portfolio website designed to showcase projects and skills, inspired by WhatsApp\'s design.',
      image: 'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['HTML5','CSS3','JavaScript','React.js','TypeScript','Tailwind CSS','Vercel'],
      liveDemo: 'https://whats-app-portfolio.vercel.app/',
      github: 'https://github.com/Karthi-1211/WhatsApp-Portfolio',
      category: 'Frontend',
      status: 'Completed',
      features: ['Responsive Design', 'Project Showcase', 'Contact Form', 'Smooth Animations', 'SEO Optimized']
    }
  ];

  const categories = ['All', 'Full Stack', 'Frontend', 'AI/ML', 'Java Full Stack', 'IoT','AI/ML Full Stack', 'Mobile'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-6 relative z-20 flex flex-col min-h-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing my latest work and innovative solutions
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                  : 'border-gray-600 text-gray-400 hover:text-white hover:border-cyan-400'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative glass-effect rounded-2xl overflow-hidden card-3d hover:scale-105 transition-all duration-500"
              onMouseEnter={() => setActiveProject(index)}
              onMouseLeave={() => setActiveProject(-1)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                  project.status === 'Completed' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-gray-900'
                }`}>
                  {project.status}
                </div>
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500 text-white">
                  {project.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-800 text-cyan-400 text-xs rounded-lg border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded-lg border border-gray-700">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                <div className={`transition-all duration-300 overflow-hidden ${
                  activeProject === index ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <ul className="text-xs text-gray-400 space-y-1 mb-4">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="w-1 h-1 bg-cyan-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-xs"
                  >
                    Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-gray-600 text-gray-400 hover:text-white hover:border-cyan-400 text-xs"
                  >
                    GitHub
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

       <div className="text-center mt-auto">
  <a
    href="https://github.com/Karthi-1211" // Replace with your actual GitHub link
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button
      size="lg"
      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-none"
    >
      View All Projects on GitHub
    </Button>
  </a>
</div>
      </div>
    </section>
  );
};

export default Projects;
