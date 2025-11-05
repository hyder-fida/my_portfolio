import mongoose from 'mongoose';

const statSchema = new mongoose.Schema({
  number: { type: String, required: true },
  label: { type: String, required: true },
  icon: { type: String, required: true }, // Icon name from react-icons
});

const timelineItemSchema = new mongoose.Schema({
  year: { type: String, required: true },
  title: { type: String, required: true },
  company: { type: String, required: true },
  description: { type: String, required: true },
  order: { type: Number, default: 0 },
});

const aboutSchema = new mongoose.Schema({
  heading: { type: String, default: 'About Me' },
  subheading: { type: String, default: 'Full Stack Developer with 3+ years of experience delivering high-impact web solutions across multiple industries' },
  introTitle: { type: String, default: "Hi there! I'm Fida Hussain Mir" },
  paragraphs: [{ type: String }],
  profileImage: { type: String, default: '/IMG_9846.jpg' },
  stats: [statSchema],
  timeline: [timelineItemSchema],
  tags: [{ type: String }], // ['Problem Solver', 'Team Player', etc.]
}, {
  timestamps: true,
});

// Only one about document should exist
aboutSchema.statics.getAbout = async function() {
  let about = await this.findOne();
  if (!about) {
    about = await this.create({
      heading: 'About Me',
      subheading: 'Full Stack Developer with 3+ years of experience delivering high-impact web solutions across multiple industries',
      introTitle: "Hi there! I'm Fida Hussain Mir",
      paragraphs: [
        "I'm a results-driven Full Stack Developer and UI/UX Designer based in Budgam, J&K. With over 3 years of professional experience, I've successfully delivered 20+ web applications across diverse industries including hospitality, e-commerce, healthcare, and education, achieving a 98% client satisfaction rate.",
        "My expertise spans the complete development lifecycle - from requirements analysis and system architecture to deployment and maintenance. I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js) and leverage modern tools like TypeScript, Tailwind CSS, and Docker to build scalable, high-performance applications that drive measurable business results.",
        "Beyond coding, I'm committed to continuous learning and staying ahead of industry trends. I actively contribute to open source projects, mentor aspiring developers, and share knowledge through technical blogs. My approach combines technical excellence with strong communication skills, ensuring smooth collaboration with stakeholders and delivering solutions that exceed expectations.",
      ],
      profileImage: '/IMG_9846.jpg',
      stats: [
        { number: '3+', label: 'Years Experience', icon: 'FaCode' },
        { number: '20+', label: 'Projects Delivered', icon: 'FaRocket' },
        { number: '15+', label: 'Satisfied Clients', icon: 'FaUsers' },
        { number: '98%', label: 'Success Rate', icon: 'FaHeart' },
      ],
      timeline: [
        {
          year: '2024 - Present',
          title: 'Senior Full Stack Developer',
          company: 'Yaam Web Solutions',
          description: 'Leading development teams of 3-5 developers, architecting scalable MERN stack applications, and implementing CI/CD pipelines. Improved application performance by 40% through code optimization and best practices.',
          order: 0,
        },
        {
          year: '2023 - 2024',
          title: 'Full Stack Developer',
          company: 'Freelance',
          description: 'Successfully delivered 12+ client projects including e-commerce platforms, booking systems, and business websites. Achieved 100% on-time delivery with an average 5-star client rating.',
          order: 1,
        },
        {
          year: '2022 - 2023',
          title: 'Frontend Developer',
          company: 'Contract Projects',
          description: 'Specialized in React.js development, creating responsive and accessible user interfaces. Built reusable component libraries that reduced development time by 30%.',
          order: 2,
        },
        {
          year: '2020 - 2022',
          title: "Master's in Computer Application",
          company: 'University Education',
          description: 'Completed MCA degree with focus on software engineering, data structures, and web technologies. Graduated with distinction while building a strong foundation in computer science fundamentals.',
          order: 3,
        },
      ],
      tags: ['Problem Solver', 'Team Player', 'Quick Learner', 'Creative Thinker'],
    });
  }
  return about;
};

const About = mongoose.model('About', aboutSchema);

export default About;

