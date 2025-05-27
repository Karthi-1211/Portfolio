import React, { useState } from 'react';
import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    phone: '',
    contactMethod: 'email',
    subject: 'Portfolio Message',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '80d4ca65-cbb1-49ff-9349-46b543430486',
          name: formData.name,
          email: formData.email,
          company: formData.company,
          project_type: formData.projectType,
          budget: formData.budget,
          phone: formData.phone,
          contact_method: formData.contactMethod,
          subject: 'Portfolio Message',
          message: formData.message,
          to: 'balukarthikalamanda@gmail.com',
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success('Message sent successfully! I\'ll get back to you soon.');
        setFormData({
          name: '',
          email: '',
          company: '',
          projectType: '',
          budget: '',
          phone: '',
          contactMethod: 'email',
          subject: 'Portfolio Message',
          message: ''
        });
      } else {
        toast.error('Failed to send message. Please try again later.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'balukarthikalamanda@gmail.com',
      link: 'mailto:balukarthikalamanda@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9515607788',
      link: 'tel:+919515607788',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      link: '#',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://www.linkedin.com/in/balu-karthik/',
      color: 'from-blue-600 to-blue-800'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'Connect with me',
      link: 'https://github.com/Karthi-1211',
      color: 'from-gray-600 to-gray-800'
    }
  ];

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/Karthi-1211', icon: Github },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/balu-karthik/', icon: Linkedin },
    { name: 'Twitter', url: 'https://x.com/yourusername', icon: Twitter }, // Replace with your Twitter/X URL
    { name: 'Email', url: 'mailto:balukarthik1308@gmail.com', icon: Mail }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let's discuss opportunities, collaborations, or just have a tech conversation!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                I'm always excited to connect with fellow developers, potential employers, 
                or anyone interested in technology. Whether you have a project in mind, 
                want to collaborate, or just want to chat about the latest in tech, 
                feel free to reach out!
              </p>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center p-4 glass-effect rounded-xl hover:scale-105 transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center mr-4 group-hover:animate-pulse-glow`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">{info.label}</div>
                      <div className="text-white font-semibold group-hover:text-cyan-400 transition-colors duration-300">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-effect p-6 rounded-2xl">
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      className="w-12 h-12 glass-effect rounded-lg flex items-center justify-center hover:scale-110 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 group"
                    >
                      <Icon className="w-6 h-6 text-white group-hover:animate-bounce" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability Status */}
            <div className="glass-effect p-6 rounded-2xl">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-3"></div>
                <span className="text-green-400 font-semibold">Available for opportunities</span>
              </div>
              <p className="text-gray-400 text-sm mt-2">
                Currently seeking full-time positions and exciting projects
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-effect p-8 rounded-2xl card-3d">
            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-gray-400 text-sm font-medium mb-2">
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-cyan-400 focus:ring-cyan-400"
                    placeholder="Balu Karthik"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-400 text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-cyan-400 focus:ring-cyan-400"
                    placeholder="balu@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-gray-400 text-sm font-medium mb-2">
                  Company Name
                </label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-cyan-400 focus:ring-cyan-400"
                  placeholder="Your Company (Optional)"
                />
              </div>

              <div>
                <label htmlFor="projectType" className="block text-gray-400 text-sm font-medium mb-2">
                  Project Type *
                </label>
                <Select
                  name="projectType"
                  value={formData.projectType}
                  onValueChange={(value) => handleSelectChange('projectType', value)}
                  required
                >
                  <SelectTrigger className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-cyan-400 focus:ring-cyan-400">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700 text-white">
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="Mobile App">Mobile App</SelectItem>
                    <SelectItem value="AI/ML Project">AI/ML Project</SelectItem>
                    <SelectItem value="Data Science">Data Science</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="budget" className="block text-gray-400 text-sm font-medium mb-2">
                  Budget Range
                </label>
                <Select
                  name="budget"
                  value={formData.budget}
                  onValueChange={(value) => handleSelectChange('budget', value)}
                >
                  <SelectTrigger className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-cyan-400 focus:ring-cyan-400">
                    <SelectValue placeholder="Select budget range (Optional)" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700 text-white">
                    <SelectItem value="$1,000-$5,000">$1,000-$5,000</SelectItem>
                    <SelectItem value="$5,000-$10,000">$5,000-$10,000</SelectItem>
                    <SelectItem value="$10,000-$20,000">$10,000-$20,000</SelectItem>
                    <SelectItem value="$20,000+">$20,000+</SelectItem>
                    <SelectItem value="Not Sure">Not Sure</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-400 text-sm font-medium mb-2">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-cyan-400 focus:ring-cyan-400"
                  placeholder="+1234567890 (Optional)"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">
                  Preferred Contact Method *
                </label>
                <RadioGroup
                  name="contactMethod"
                  value={formData.contactMethod}
                  onValueChange={(value) => handleSelectChange('contactMethod', value)}
                  className="flex space-x-4"
                  required
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="email" id="contact-email" className="text-cyan-400" />
                    <Label htmlFor="contact-email" className="text-gray-400">Email</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="phone" id="contact-phone" className="text-cyan-400" />
                    <Label htmlFor="contact-phone" className="text-gray-400">Phone</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-400 text-sm font-medium mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-cyan-400 focus:ring-cyan-400 resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-3 transition-all duration-300 hover:scale-105"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  'Send Message'
                )}
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass-effect p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Build Something Amazing?</h3>
            <p className="text-gray-400 mb-6">
              Let's turn your ideas into reality with cutting-edge technology and innovative solutions.
            </p>
            <a
              href="mailto:balukarthikalamanda@gmail.com?subject=Portfolio%20Message&body=Hi%20Balu%20Karthik,%0D%0AI'd%20like%20to%20discuss%20a%20potential%20project%20with%20you.%20Here%20are%20some%20details:%0D%0A[Your%20message%20here]"
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              Start a Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;