import { FaHeart, FaGithub, FaLinkedin, FaTwitter, FaArrowUp, FaCode, FaCoffee, FaRocket } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/hyder-fida',
      label: 'GitHub',
      color: 'hover:text-gray-300',
    },
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/fida-hussain-b9a047239/',
      label: 'LinkedIn',
      color: 'hover:text-blue-400',
    },
    {
      icon: FaTwitter,
      href: 'https://x.com/Fidaa37298252',
      label: 'Twitter',
      color: 'hover:text-blue-300',
    },
  ];

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container-max relative z-10 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Fida Hussain Mir
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Full Stack Developer & UI/UX Designer passionate about creating 
              beautiful, functional, and user-centered digital experiences that 
              make a difference.
            </p>
            
            {/* Skills badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="flex items-center space-x-1 bg-white/10 px-3 py-1 rounded-full text-sm">
                <FaCode className="text-purple-400" />
                <span>Full Stack</span>
              </span>
              <span className="flex items-center space-x-1 bg-white/10 px-3 py-1 rounded-full text-sm">
                <FaRocket className="text-blue-400" />
                <span>UI/UX</span>
              </span>
              <span className="flex items-center space-x-1 bg-white/10 px-3 py-1 rounded-full text-sm">
                <FaCoffee className="text-yellow-400" />
                <span>Coffee Lover</span>
              </span>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-gray-400 ${social.color} transform hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/40`}
                  aria-label={social.label}
                >
                  <social.icon className="text-xl" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 transform"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:hyderfida14@gmail.com"
                className="block text-gray-300 hover:text-purple-400 transition-colors duration-300"
              >
                hyderfida14@gmail.com
              </a>
              <a
                href="tel:+917006106504"
                className="block text-gray-300 hover:text-purple-400 transition-colors duration-300"
              >
                +91 7006106504
              </a>
              <p className="text-gray-300">
                Budgam, J&K, India
              </p>
            </div>

            {/* Availability Status */}
            <div className="mt-6 flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-300">Available for projects</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© {currentYear} Fida Hussain Mir. All rights reserved.</span>
            </div>

            {/* Made with love */}
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <FaHeart className="text-red-400 animate-pulse" />
              <span>using React & Tailwind CSS</span>
            </div>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="group flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <FaArrowUp className="group-hover:animate-bounce" />
              <span>Back to Top</span>
            </button>
          </div>

          {/* Additional footer note */}
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-xs max-w-2xl mx-auto">
              This website is built with modern web technologies and follows best practices for 
              performance, accessibility, and user experience. Feel free to explore the code on GitHub!
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;