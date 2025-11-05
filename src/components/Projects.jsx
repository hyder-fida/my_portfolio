import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaPython,
  FaStar,
  FaEye,
  FaHeart
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiPostgresql } from "react-icons/si";

const Projects = () => {
  const projects = [
  {
    title: "University Website",
    description:
      "A comprehensive university website featuring course listings, faculty profiles, interactive notice board, and responsive design to enhance student engagement and provide seamless access to academic information.",
    image: "/iust.png",
    technologies: [
      { icon: FaReact, name: "React", color: "text-blue-500" },
      { icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
      { icon: SiMongodb, name: "MongoDB", color: "text-green-600" },
      { icon: SiTailwindcss, name: "Bootstrap", color: "text-purple-600" },
    ],
    github: "https://github.com/hyder-fida/University-Website",
    live: "https://iustwebsite.netlify.app/",
    featured: true,
    category: "Web Development",
    stats: { stars: 15, views: 234 },
  },
  {
    title: "Website Solutions App",
    description:
      "A project management platform tailored for web development agencies, featuring task tracking, project timelines, collaborative tools, and a clean UI built for productivity.",
    image: "/yaam.png",
    technologies: [
      { icon: FaReact, name: "React", color: "text-blue-500" },
      { icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
      { icon: SiPostgresql, name: "PostgreSQL", color: "text-blue-700" },
      { icon: SiTailwindcss, name: "Tailwind", color: "text-teal-500" },
    ],
    github: "https://github.com/faahadyws/yaamwebsolutions",
    live: "https://yaamwebsolutions.com/",
    featured: true,
    category: "Business Solution",
    stats: { stars: 22, views: 456 },
  },
  {
    title: "Wazaan Food Ordering and Reservation App",
    description:
      "An online food ordering and table reservation web app for traditional Kashmiri cuisine, offering real-time ordering experience with smooth navigation and clean design.",
    image: "/wazwaan.png",
    technologies: [
      { icon: FaReact, name: "React", color: "text-blue-500" },
      { icon: FaPython, name: "Node js", color: "text-yellow-600" },
      { icon: SiTailwindcss, name: "Tailwind", color: "text-teal-500" },
    ],
    github: "https://github.com/fidayws/RestaurantWebsite",
    live: "https://wazwaan.netlify.app/",
    featured: false,
    category: "Hospitality",
    stats: { stars: 8, views: 123 },
  },
  {
    title: "Lotus Cold Store",
    description:
      "A business website for a cold storage facility featuring inventory management UI, storage service details, and customer contact options, built with performance and responsiveness in mind.",
    image: "/appleorchards.png",
    technologies: [
      { icon: FaReact, name: "React", color: "text-blue-500" },
      { icon: FaPython, name: "Node js", color: "text-yellow-600" },
      { icon: SiTailwindcss, name: "Tailwind", color: "text-teal-500" },
    ],
    github: "https://github.com/fidayws/coldstore",
    live: "https://lotuscoldstore.netlify.app/",
    featured: false,
    category: "Business Solution",
    stats: { stars: 8, views: 123 },
  },
  {
    title: "Hotel Heaven Heights",
    description:
      "An elegant hotel booking website with weather API integration, contact forms, image gallery, and fully responsive design tailored for hospitality businesses.",
    image: "/heavenheights.png",
    technologies: [
      { icon: FaReact, name: "React", color: "text-blue-500" },
      { icon: FaPython, name: "Node js", color: "text-yellow-600" },
      { icon: SiTailwindcss, name: "Tailwind", color: "text-teal-500" },
    ],
    github: "https://github.com/faahadyws/hotelheavenheights",
    live: "https://heavenheights.in/",
    featured: false,
    category: "Hospitality",
    stats: { stars: 8, views: 123 },
  },
  {
    title: "Hotel Best Palace",
    description:
      "A professional hotel booking website showcasing rooms with detailed descriptions, modern UI, secure booking process, and mobile-friendly layout for guest convenience.",
    image: "/bestpalace.png",
    technologies: [
      { icon: FaReact, name: "React", color: "text-blue-500" },
      { icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
      { icon: SiMongodb, name: "MongoDB", color: "text-green-600" },
    ],
    github: "https://github.com/fidayws/HotelBestPalace",
    live: "https://hotelbestpalace.com/",
    featured: false,
    category: "Hospitality",
    stats: { stars: 12, views: 189 },
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio site showcasing development projects, skills, GitHub links, and interactive UI with smooth animations and responsive Tailwind design.",
    image: "/portfolio.png",
    technologies: [
      { icon: FaReact, name: "React", color: "text-blue-500" },
      { icon: SiTailwindcss, name: "Tailwind", color: "text-teal-500" },
    ],
    github: "https://github.com/hyder-fida/my-portfolio",
    live: "https://fidaHussainMir.netlify.app",
    featured: false,
    category: "Personal",
    stats: { stars: 18, views: 312 },
  },
  {
    title: "Diabetes Prediction Using ML",
    description:
      "An intelligent machine learning web app that predicts diabetes based on user inputs like age, glucose level, and BMI. Trained on real datasets to ensure accuracy and reliability.",
    image: "/diabetes.png",
    technologies: [
      { icon: FaReact, name: "React", color: "text-blue-500" },
      { icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
      { icon: SiMongodb, name: "MongoDB", color: "text-green-600" },
    ],
    github: "https://github.com/hyder-fida/diabetesApp",
    live: "https://github.com/hyder-fida/diabetesApp",
    featured: false,
    category: "Machine Learning",
    stats: { stars: 25, views: 567 },
  },
  {
    title: "E-Commerce Platform",
    description:
      "A complete e-commerce application with advanced product filtering, shopping cart, dummy PayPal integration for payments, user authentication, and a MongoDB-powered backend.",
    image: "/myntra.jpeg",
    technologies: [
      { icon: FaReact, name: "React", color: "text-blue-500" },
      { icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
      { icon: SiMongodb, name: "MongoDB", color: "text-green-600" },
    ],
    github: "https://github.com/hyder-fida/E-commerce-App",
    live: "https://github.com/hyder-fida/E-commerce-App",
    featured: false,
    category: "E-Commerce",
    stats: { stars: 31, views: 678 },
  },
  {
    title: "Trading Dashboard",
    description:
      "A financial trading dashboard with real-time stock tracking, news integration, interactive charts, and a MongoDB/Python backend for performance analysis and data visualization.",
    image: "/trading.jpeg",
    technologies: [
      { icon: FaReact, name: "React", color: "text-blue-500" },
      { icon: SiMongodb, name: "MongoDB", color: "text-green-600" },
      { icon: FaPython, name: "Python", color: "text-yellow-600" },
      { icon: SiTailwindcss, name: "Material UI", color: "text-blue-600" },
    ],
    github: "https://github.com/hyder-fida/TradingApp",
    live: "https://github.com/hyder-fida/TradingApp",
    featured: false,
    category: "Finance",
    stats: { stars: 19, views: 234 },
  },
];


  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="px-4 section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-300 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container-max relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Portfolio of production-grade applications demonstrating full-stack development expertise, 
            problem-solving capabilities, and commitment to delivering measurable business value across diverse industries.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-20 mb-24">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""} relative group`}>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Stats overlay */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                      <FaStar className="text-yellow-500 text-sm" />
                      <span className="text-sm font-medium">{project.stats.stars}</span>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                      <FaEye className="text-blue-500 text-sm" />
                      <span className="text-sm font-medium">{project.stats.views}</span>
                    </div>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""} animate-fade-in-up`}>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h3>
                
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                    >
                      <tech.icon className={`${tech.color} text-lg`} />
                      <span className="text-sm font-medium text-gray-700">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <FaGithub />
                    <span>View Code</span>
                  </a>
                  
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </a>
                  
                  <button className="flex items-center space-x-2 bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <FaHeart />
                    <span>Like</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Other Notable Projects
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-100 relative"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Stats */}
                  <div className="absolute top-3 right-3 flex space-x-1">
                    <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
                      <FaStar className="text-yellow-500 text-xs" />
                      <span className="text-xs font-medium">{project.stats.stars}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                    {project.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description.substring(0, 120)}...
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="flex items-center space-x-1 bg-gray-100 px-3 py-1 rounded-full"
                      >
                        <tech.icon className={`${tech.color} text-sm`} />
                        <span className="text-xs font-medium text-gray-700">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Action Links */}
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition-colors duration-300"
                      >
                        <FaGithub />
                        <span className="text-sm">Code</span>
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition-colors duration-300"
                      >
                        <FaExternalLinkAlt />
                        <span className="text-sm">Live</span>
                      </a>
                    </div>
                    
                    <div className="flex items-center space-x-1 text-gray-500">
                      <FaEye className="text-xs" />
                      <span className="text-xs">{project.stats.views}</span>
                    </div>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Interested in Working Together?</h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and create amazing digital experiences. 
              Let's discuss how we can bring your ideas to life!
            </p>
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;