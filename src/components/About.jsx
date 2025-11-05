import { FaGraduationCap, FaCode, FaUsers, FaRocket, FaHeart } from "react-icons/fa";

const About = () => {
  const stats = [
    { number: "3+", label: "Years Experience", icon: FaCode },
    { number: "20+", label: "Projects Delivered", icon: FaRocket },
    { number: "15+", label: "Satisfied Clients", icon: FaUsers },
    { number: "98%", label: "Success Rate", icon: FaHeart },
  ];

  const timeline = [
    {
      year: "2024 - Present",
      title: "Senior Full Stack Developer",
      company: "Yaam Web Solutions",
      description: "Leading development teams of 3-5 developers, architecting scalable MERN stack applications, and implementing CI/CD pipelines. Improved application performance by 40% through code optimization and best practices.",
    },
    {
      year: "2023 - 2024",
      title: "Full Stack Developer",
      company: "Freelance",
      description: "Successfully delivered 12+ client projects including e-commerce platforms, booking systems, and business websites. Achieved 100% on-time delivery with an average 5-star client rating.",
    },
    {
      year: "2022 - 2023",
      title: "Frontend Developer",
      company: "Contract Projects",
      description: "Specialized in React.js development, creating responsive and accessible user interfaces. Built reusable component libraries that reduced development time by 30%.",
    },
    {
      year: "2020 - 2022",
      title: "Master's in Computer Application",
      company: "University Education",
      description: "Completed MCA degree with focus on software engineering, data structures, and web technologies. Graduated with distinction while building a strong foundation in computer science fundamentals.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-300 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-300 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container-max relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Full Stack Developer with 3+ years of experience delivering high-impact web solutions across multiple industries
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left side - Image and quick info */}
          <div className="relative animate-fade-in-up">
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/IMG_9846.jpg"
                  alt="Fida Hussain Mir"
                  className="w-full h-full object-cover object-top filter brightness-110"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white p-4 rounded-xl shadow-lg animate-float">
                <FaHeart className="text-2xl" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-4 rounded-xl shadow-lg animate-float-delayed">
                <FaCode className="text-2xl" />
              </div>
            </div>

            {/* Quick facts */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-lg text-center card-hover">
                <FaGraduationCap className="text-3xl text-purple-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-800">Education</h4>
                <p className="text-sm text-gray-600">MCA (Master's Degree)</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-lg text-center card-hover">
                <FaRocket className="text-3xl text-blue-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-800">Focus</h4>
                <p className="text-sm text-gray-600">Web Development</p>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="animate-fade-in-right">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Hi there! I'm Fida Hussain Mir
            </h3>
            
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                I'm a results-driven Full Stack Developer and UI/UX Designer based in Budgam, J&K. 
                With over 3 years of professional experience, I've successfully delivered 20+ web applications 
                across diverse industries including hospitality, e-commerce, healthcare, and education, 
                achieving a 98% client satisfaction rate.
              </p>
              
              <p>
                My expertise spans the complete development lifecycle - from requirements analysis and 
                system architecture to deployment and maintenance. I specialize in the MERN stack (MongoDB, 
                Express.js, React.js, Node.js) and leverage modern tools like TypeScript, Tailwind CSS, 
                and Docker to build scalable, high-performance applications that drive measurable business results.
              </p>
              
              <p>
                Beyond coding, I'm committed to continuous learning and staying ahead of industry trends. 
                I actively contribute to open source projects, mentor aspiring developers, and share knowledge 
                through technical blogs. My approach combines technical excellence with strong communication 
                skills, ensuring smooth collaboration with stakeholders and delivering solutions that exceed expectations.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="bg-gradient-to-r from-purple-100 to-blue-100 px-4 py-2 rounded-full">
                <span className="text-purple-700 font-medium">Problem Solver</span>
              </div>
              <div className="bg-gradient-to-r from-blue-100 to-green-100 px-4 py-2 rounded-full">
                <span className="text-blue-700 font-medium">Team Player</span>
              </div>
              <div className="bg-gradient-to-r from-green-100 to-yellow-100 px-4 py-2 rounded-full">
                <span className="text-green-700 font-medium">Quick Learner</span>
              </div>
              <div className="bg-gradient-to-r from-yellow-100 to-red-100 px-4 py-2 rounded-full">
                <span className="text-yellow-700 font-medium">Creative Thinker</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-lg card-hover border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="text-2xl text-white" />
              </div>
              <h4 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h4>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Timeline Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">My Journey</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"></div>
            
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                {/* Content */}
                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
                  }`}
                >
                  <div className="bg-white p-6 rounded-xl shadow-lg card-hover border border-gray-100">
                    <div className="text-sm font-bold text-purple-600 mb-1">{item.year}</div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                    <div className="text-blue-600 font-medium mb-3">{item.company}</div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;