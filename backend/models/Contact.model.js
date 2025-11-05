import mongoose from 'mongoose';

const contactInfoSchema = new mongoose.Schema({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  link: { type: String },
  color: { type: String, required: true },
  description: { type: String },
});

const socialLinkSchema = new mongoose.Schema({
  icon: { type: String, required: true },
  href: { type: String, required: true },
  label: { type: String, required: true },
  color: { type: String, required: true },
  followers: { type: String },
});

const contactSchema = new mongoose.Schema({
  heading: { type: String, default: "Let's Work Together" },
  subheading: { type: String, default: "I'm always excited to discuss new opportunities, innovative projects, and creative collaborations. Let's create something amazing together!" },
  contactInfo: [contactInfoSchema],
  socialLinks: [socialLinkSchema],
  availability: {
    status: { type: String, default: 'Available' },
    message: { type: String, default: 'Open for new projects and collaborations' },
  },
}, {
  timestamps: true,
});

// Only one contact document should exist
contactSchema.statics.getContact = async function() {
  let contact = await this.findOne();
  if (!contact) {
    contact = await this.create({
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
    });
  }
  return contact;
};

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;

