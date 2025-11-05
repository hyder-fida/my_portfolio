import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaPaperPlane,
  FaUser,
  FaClipboard,
  FaComments,
  FaCheckCircle,
  FaExclamationTriangle
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const response = await fetch("https://formspree.io/f/xpwrynwz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      content: "hyderfida14@gmail.com",
      link: "mailto:hyderfida14@gmail.com",
      color: "from-red-500 to-pink-500",
      description: "Send me an email anytime"
    },
    {
      icon: FaPhone,
      title: "Phone",
      content: "+917006106504",
      link: "tel:+917006106504",
      color: "from-green-500 to-teal-500",
      description: "Let's have a conversation"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      content: "Budgam, J&K, India",
      color: "from-blue-500 to-purple-500",
      description: "Based in beautiful Kashmir"
    },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/hyder-fida",
      label: "GitHub",
      color: "hover:bg-gray-800",
      followers: "50+"
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/fida-hussain-b9a047239/",
      label: "LinkedIn",
      color: "hover:bg-blue-600",
      followers: "200+"
    },
    {
      icon: FaTwitter,
      href: "https://x.com/Fidaa37298252",
      label: "Twitter",
      color: "hover:bg-blue-400",
      followers: "100+"
    },
  ];

  return (
    <section id="contact" className="section-padding bg-white relative overflow-hidden px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-300 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container-max relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm always excited to discuss new opportunities, innovative projects, and creative collaborations. 
            Let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side - Contact Info */}
          <div className="animate-fade-in-up">
            {/* Header */}
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Get In Touch
              </h3>
              <p className="text-lg text-gray-600">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. Don't hesitate to reach out through any of these channels.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="group flex items-start space-x-4 p-6 bg-gradient-to-r from-gray-50 to-white rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className={`flex items-center justify-center w-14 h-14 bg-gradient-to-r ${info.color} rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <info.icon className="text-white text-xl" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-gray-700">
                      {info.title}
                    </h4>
                    <p className="text-gray-800 font-medium mb-1">{info.content}</p>
                    <p className="text-gray-500 text-sm">{info.description}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative flex flex-col items-center justify-center w-20 h-20 bg-gray-900 text-white rounded-xl ${social.color} transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl`}
                    aria-label={social.label}
                  >
                    <social.icon className="text-2xl mb-1" />
                    <span className="text-xs font-medium">{social.followers}</span>
                    
                    {/* Tooltip */}
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      {social.label}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border border-green-200">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Currently Available</h4>
                  <p className="text-gray-600 text-sm">Open for new projects and collaborations</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="animate-fade-in-right">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2"
                  >
                    <FaUser className="text-purple-600" />
                    <span>Full Name *</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white hover:border-gray-400"
                    placeholder="Your full name"
                  />
                </div>
                
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2"
                  >
                    <FaEnvelope className="text-purple-600" />
                    <span>Email Address *</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white hover:border-gray-400"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="relative">
                <label
                  htmlFor="subject"
                  className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2"
                >
                  <FaClipboard className="text-purple-600" />
                  <span>Subject *</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white hover:border-gray-400"
                  placeholder="What's this about?"
                />
              </div>

              {/* Message */}
              <div className="relative">
                <label
                  htmlFor="message"
                  className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2"
                >
                  <FaComments className="text-purple-600" />
                  <span>Message *</span>
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="6"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white hover:border-gray-400 resize-none"
                  placeholder="Tell me about your project, ideas, or just say hello..."
                ></textarea>
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="flex items-center space-x-3 p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg animate-fade-in">
                  <FaCheckCircle className="text-green-600 text-xl" />
                  <div>
                    <h4 className="font-medium">Message sent successfully!</h4>
                    <p className="text-sm">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="flex items-center space-x-3 p-4 bg-red-50 border border-red-200 text-red-800 rounded-lg animate-fade-in">
                  <FaExclamationTriangle className="text-red-600 text-xl" />
                  <div>
                    <h4 className="font-medium">Failed to send message</h4>
                    <p className="text-sm">Sorry, there was an error. Please try again or contact me directly.</p>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${
                  isSubmitting ? "opacity-50 cursor-not-allowed scale-100" : ""
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {/* Form Footer */}
              <p className="text-center text-sm text-gray-500">
                I typically respond within 24 hours. Looking forward to hearing from you!
              </p>
            </form>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center mb-4">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Prefer a Different Way to Connect?</h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Feel free to reach out through any platform you're comfortable with. 
              I'm active on all social media and always happy to chat!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:hyderfida14@gmail.com"
                className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                Send Email Directly
              </a>
              <a
                href="tel:+917006106504"
                className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                Call Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;