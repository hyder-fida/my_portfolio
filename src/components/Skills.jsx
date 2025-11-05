import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaJsSquare, 
  FaHtml5, 
  FaCss3Alt,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaFigma
} from "react-icons/fa";
import { 
  SiTypescript, 
  SiTailwindcss, 
  SiMongodb, 
  SiPostgresql, 
  SiGraphql,
  SiNextdotjs,
  SiVuedotjs,
  SiExpress,
  SiBootstrap,
  SiWordpress
} from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Technologies',
      description: 'Creating beautiful and interactive user interfaces',
      color: 'from-blue-500 to-purple-600',
      skills: [
        { name: 'React.js', icon: FaReact, level: 95, color: 'text-blue-500' },
        { name: 'Next.js', icon: SiNextdotjs, level: 90, color: 'text-gray-800' },
        { name: 'JavaScript', icon: FaJsSquare, level: 92, color: 'text-yellow-500' },
        { name: 'TypeScript', icon: SiTypescript, level: 85, color: 'text-blue-600' },
        { name: 'HTML5', icon: FaHtml5, level: 98, color: 'text-orange-500' },
        { name: 'CSS3', icon: FaCss3Alt, level: 95, color: 'text-blue-500' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 92, color: 'text-teal-500' },
        { name: 'Vue.js', icon: SiVuedotjs, level: 80, color: 'text-green-500' },
      ],
    },
    {
      title: 'Backend Technologies',
      description: 'Building robust and scalable server-side applications',
      color: 'from-green-500 to-teal-600',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, level: 88, color: 'text-green-500' },
        { name: 'Python', icon: FaPython, level: 82, color: 'text-blue-600' },
        { name: 'Express.js', icon: SiExpress, level: 90, color: 'text-gray-600' },
        { name: 'MongoDB', icon: SiMongodb, level: 85, color: 'text-green-600' },
        { name: 'PostgreSQL', icon: SiPostgresql, level: 80, color: 'text-blue-700' },
        { name: 'GraphQL', icon: SiGraphql, level: 75, color: 'text-pink-500' },
      ],
    },
    {
      title: 'Tools & Others',
      description: 'Essential tools and technologies for modern development',
      color: 'from-purple-500 to-pink-600',
      skills: [
        { name: 'Git', icon: FaGitAlt, level: 90, color: 'text-orange-600' },
        { name: 'Docker', icon: FaDocker, level: 75, color: 'text-blue-500' },
        { name: 'AWS', icon: FaAws, level: 70, color: 'text-orange-400' },
        { name: 'Figma', icon: FaFigma, level: 85, color: 'text-purple-500' },
        { name: 'Bootstrap', icon: SiBootstrap, level: 88, color: 'text-purple-600' },
        { name: 'WordPress', icon: SiWordpress, level: 80, color: 'text-blue-700' },
      ],
    },
  ];

  return (
    <section id="skills" className="px-4 section-padding bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-300 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container-max relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technical expertise across the full development stack, with proficiency in modern frameworks, 
            databases, and development tools that enable the creation of scalable, enterprise-grade applications.
          </p>
        </div>

        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="animate-fade-in-up">
              {/* Category Header */}
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>

              {/* Skills Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group bg-white p-6 rounded-xl shadow-lg border border-gray-100 card-hover relative overflow-hidden"
                  >
                    {/* Background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="flex items-center justify-center w-16 h-16 bg-gray-50 rounded-xl mb-4 group-hover:bg-white group-hover:shadow-md transition-all duration-300">
                        <skill.icon className={`text-3xl ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                      </div>
                      
                      {/* Skill name */}
                      <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-gray-800">
                        {skill.name}
                      </h4>
                      
                      {/* Progress bar */}
                      <div className="relative">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-600">Proficiency</span>
                          <span className="text-sm font-bold text-gray-900">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    {/* Hover effect border */}
                    <div className={`absolute inset-0 border-2 border-transparent group-hover:border-gradient-to-r ${category.color} rounded-xl transition-all duration-300 opacity-0 group-hover:opacity-100`}></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Continuous Professional Development</h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-6">
              Committed to maintaining technical excellence through ongoing learning and skill enhancement. 
              Actively participate in developer communities, complete advanced certifications, and stay updated 
              with emerging technologies to deliver innovative, production-ready solutions that meet industry standards.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">Agile Methodologies</span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">Clean Code Principles</span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">Security Best Practices</span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">Performance Optimization</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;