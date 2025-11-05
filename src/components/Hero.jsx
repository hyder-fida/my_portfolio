import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaDownload,
  FaCode,
  FaPalette,
} from "react-icons/fa";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    // Open resume in new tab
    window.open("https://drive.google.com/file/d/14uzM0YOSB8AczwYnNYcJ--bZWJSP3LBl/view?usp=sharing", "_blank");
  };

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/hyder-fida",
      label: "GitHub",
      color: "hover:text-gray-900",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/fida-hussain-b9a047239/",
      label: "LinkedIn",
      color: "hover:text-blue-600",
    },
    {
      icon: FaTwitter,
      href: "https://x.com/Fidaa37298252",
      label: "Twitter",
      color: "hover:text-blue-400",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 px-2"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-30 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            {/* Greeting */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6 animate-slide-down">
              <span className="animate-wave mr-2">👋</span>
              Hello, I'm
            </div>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="block">Fida Hussain</span>
              <span className="block bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                Mir
              </span>
            </h1>

            {/* Role */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <div className="flex items-center space-x-2 text-white/90">
                <FaCode className="text-yellow-400" />
                <span className="text-xl font-medium">Full Stack Developer</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-white/30"></div>
              <div className="flex items-center space-x-2 text-white/90">
                <FaPalette className="text-pink-400" />
                <span className="text-xl font-medium">UI/UX Designer</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Specialized in crafting high-performance web applications using React, Node.js, and modern technologies. 
              Delivered 20+ successful projects with 98% client satisfaction rate, transforming complex business challenges into intuitive digital solutions.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-10 text-white/90">
              <a
                href="mailto:hyderfida14@gmail.com"
                className="flex items-center space-x-2 hover:text-yellow-400 transition-colors duration-300"
              >
                <FaEnvelope className="text-yellow-400" />
                <span>hyderfida14@gmail.com</span>
              </a>
              <a
                href="tel:+917006106504"
                className="flex items-center space-x-2 hover:text-yellow-400 transition-colors duration-300"
              >
                <FaPhone className="text-yellow-400" />
                <span>+91 7006106504</span>
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button
                onClick={scrollToContact}
                className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
              
              <button
                onClick={scrollToProjects}
                className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transform hover:scale-105 transition-all duration-300"
              >
                View My Work
              </button>
              
              <button
                onClick={downloadResume}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              >
                <FaDownload className="text-sm" />
                <span>Resume</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white/80 ${social.color} transform hover:scale-110 transition-all duration-300 border border-white/20 hover:border-white/40`}
                  aria-label={social.label}
                >
                  <social.icon className="text-xl" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in-right">
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 animate-spin-slow p-1">
                <div className="w-full h-full bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 rounded-full"></div>
              </div>
              
              {/* Profile image container */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-4 border-white/20 shadow-2xl transform hover:scale-105 transition-all duration-500">
               <div className="relative aspect-square w-80 sm:w-96 lg:w-[450px] rounded-full overflow-hidden border-4 border-white/20 shadow-2xl transform hover:scale-105 transition-all duration-500">
                  <img
                      src="/dp2.png"
                      alt="Fida Hussain Mir"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>

              {/* Floating badges */}
              <div className="absolute top-8 -right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg animate-float">
                <span className="text-sm font-semibold text-gray-800">3+ Years</span>
              </div>
              
              <div className="absolute bottom-8 -left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg animate-float-delayed">
                <span className="text-sm font-semibold text-gray-800">20+ Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-white/60">
          <span className="text-sm mb-2">Scroll down</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;