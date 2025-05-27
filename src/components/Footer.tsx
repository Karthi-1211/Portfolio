import React from 'react';
import { Github, Linkedin, Twitter, Mail, LinkedinIcon, TwitterIcon } from 'lucide-react';
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/Karthi-1211', icon: Github },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/balu-karthik/', icon: Linkedin },
    { name: 'Twitter', url: 'https://x.com/', icon: Twitter},
    { name: 'Email', url: 'mailto:balukarthik1308@gmail.com', icon: Mail }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 border-t border-gray-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gradient mb-2">Portfolio</h3>
              <p className="text-gray-400 leading-relaxed max-w-md">
      
                A showcase of my creative work, projects, and professional experience. Designed and developed with passion and attention to detail
              
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-semibold">Available for opportunities</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-10 h-10 glass-effect rounded-lg flex items-center justify-center hover:scale-110 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 group"
                  title={social.name}
                >
                  <span className="text-lg group-hover:animate-bounce">
                    {typeof social.icon === 'string'
                      ? social.icon
                      : React.createElement(social.icon, { size: 22 })}
                  </span>
                </a>
              ))}
            </div>
            
        <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white">
  <a
    href="https://drive.google.com/uc?export=download&id=1h2WpqApLtVCiKLUXQnItTpNi52Hb_FKc"
    download="Alamanda_Balu_Karthik.pdf"
  >
    Download CV
  </a>
</Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Portfolio. Made with ❤️ By Alamanda Balu karthik
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-cyan-400 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors duration-300">Terms of Service</a>
            <span className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></span>
              Online
            </span>
          </div>
        </div>

        {/* Scroll to Top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 z-50 shadow-lg hover:shadow-2xl"
        >
          ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;
