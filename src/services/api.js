// API Service with fallback to hardcoded data
// This ensures the frontend works even if backend is not available

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Helper function to fetch with fallback
const fetchWithFallback = async (endpoint, fallbackData) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    if (response.ok) {
      const data = await response.json();
      return data.success ? data.data : fallbackData;
    }
  } catch (error) {
    console.warn(`API call failed for ${endpoint}, using fallback data:`, error.message);
  }
  return fallbackData;
};

// Hero API
export const getHero = async () => {
  const fallbackData = {
    firstName: 'Fida Hussain',
    lastName: 'Mir',
    roles: ['Full Stack Developer', 'UI/UX Designer'],
    description: 'Passionate about creating beautiful, responsive web applications with modern technologies. I turn complex problems into simple, elegant solutions. Based in Kashmir (Srinagar & Budgam), J&K, I specialize as a Full Stack Developer and React.js/Next.js Frontend Developer building high-performance products for clients across India.',
    email: 'hyderfida14@gmail.com',
    phone: '+917006106504',
    profileImage: '/IMG_9846.jpg',
    resumeLink: 'https://drive.google.com/file/d/1BRe7Fse156s7nVbCWhvR5GGqJaakGFtF/view?usp=drive_link',
    socialLinks: [
      {
        icon: 'FaGithub',
        href: 'https://github.com/hyder-fida',
        label: 'GitHub',
        color: 'hover:text-gray-900',
      },
      {
        icon: 'FaLinkedin',
        href: 'https://www.linkedin.com/in/fida-hussain-b9a047239/',
        label: 'LinkedIn',
        color: 'hover:text-blue-600',
      },
      {
        icon: 'FaTwitter',
        href: 'https://x.com/Fidaa37298252',
        label: 'Twitter',
        color: 'hover:text-blue-400',
      },
    ],
    badgeStats: {
      yearsExperience: '3+',
      projectsCount: '20+',
    },
  };
  return fetchWithFallback('/hero', fallbackData);
};

// About API
export const getAbout = async () => {
  const fallbackData = {
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
  };
  return fetchWithFallback('/about', fallbackData);
};

// Projects API
export const getProjects = async () => {
  // Fallback data will be loaded from Projects component
  // This ensures we don't duplicate the large projects array
  return fetchWithFallback('/projects', []);
};

// Skills API
export const getSkills = async () => {
  // Fallback data will be loaded from Skills component
  return fetchWithFallback('/skills', []);
};

// Contact API
export const getContact = async () => {
  const fallbackData = {
    heading: "Let's Work Together",
    subheading: "I'm always excited to discuss new opportunities, innovative projects, and creative collaborations. Let's create something amazing together!",
    contactInfo: [
      {
        icon: 'FaEnvelope',
        title: 'Email',
        content: 'hyderfida14@gmail.com',
        link: 'mailto:hyderfida14@gmail.com',
        color: 'from-red-500 to-pink-500',
        description: 'Send me an email anytime',
      },
      {
        icon: 'FaPhone',
        title: 'Phone',
        content: '+917006106504',
        link: 'tel:+917006106504',
        color: 'from-green-500 to-teal-500',
        description: "Let's have a conversation",
      },
      {
        icon: 'FaMapMarkerAlt',
        title: 'Location',
        content: 'Budgam, J&K, India',
        color: 'from-blue-500 to-purple-500',
        description: 'Based in beautiful Kashmir',
      },
    ],
    socialLinks: [
      {
        icon: 'FaGithub',
        href: 'https://github.com/hyder-fida',
        label: 'GitHub',
        color: 'hover:bg-gray-800',
        followers: '50+',
      },
      {
        icon: 'FaLinkedin',
        href: 'https://www.linkedin.com/in/fida-hussain-b9a047239/',
        label: 'LinkedIn',
        color: 'hover:bg-blue-600',
        followers: '200+',
      },
      {
        icon: 'FaTwitter',
        href: 'https://x.com/Fidaa37298252',
        label: 'Twitter',
        color: 'hover:bg-blue-400',
        followers: '100+',
      },
    ],
    availability: {
      status: 'Available',
      message: 'Open for new projects and collaborations',
    },
  };
  return fetchWithFallback('/contact', fallbackData);
};

// Auth API (for admin panel - future use)
export const login = async (email, password) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (data.success) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
    }
    return data;
  } catch (error) {
    return { success: false, message: 'Network error' };
  }
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

export const getAuthToken = () => {
  return localStorage.getItem('token');
};

export const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};

