import mongoose from 'mongoose';

const socialLinkSchema = new mongoose.Schema({
  icon: { type: String, required: true }, // Icon name from react-icons
  href: { type: String, required: true },
  label: { type: String, required: true },
  color: { type: String, required: true },
});

const heroSchema = new mongoose.Schema({
  firstName: { type: String, required: true, default: 'Fida Hussain' },
  lastName: { type: String, required: true, default: 'Mir' },
  roles: [{ type: String, required: true }], // ['Full Stack Developer', 'UI/UX Designer']
  description: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  profileImage: { type: String, default: '/IMG_9846.jpg' },
  resumeLink: { type: String, required: true },
  socialLinks: [socialLinkSchema],
  badgeStats: {
    yearsExperience: { type: String, default: '3+' },
    projectsCount: { type: String, default: '20+' },
  },
}, {
  timestamps: true,
});

// Only one hero document should exist
heroSchema.statics.getHero = async function() {
  let hero = await this.findOne();
  if (!hero) {
    // Create default hero data
    hero = await this.create({
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
    });
  }
  return hero;
};

const Hero = mongoose.model('Hero', heroSchema);

export default Hero;

