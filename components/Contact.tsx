'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send, MapPin, Phone, Calendar, MessageCircle, Sparkles, Check, ArrowRight, MessageSquare, FileCode  } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  const handleSubmit = () => {
    const phone = "919602870828"; // without +

    const text = `New Contact Form Message%0A
Name: ${formData.name}%0A
Email: ${formData.email}%0A
Message: ${formData.message}`;

    const url = `https://wa.me/${phone}?text=${text}`;

    window.open(url, "_blank");
  };

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Kannu20',
      username: '@Kannu20',
      color: 'from-gray-600 to-gray-800',
      hoverColor: 'hover:from-gray-500 hover:to-gray-700'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/kanishak-todwal/',
      username: '/in/Kanishak-Todwal',
      color: 'from-blue-600 to-blue-800',
      hoverColor: 'hover:from-blue-500 hover:to-blue-700'
    },
    {
      icon: FileCode ,
      label: 'LeetCode',
      href: 'https://leetcode.com/u/123kannu/',
      username: '@123kannu',
      color: 'from-black-600 to-yellow-800',
      hoverColor: 'hover:from-black-500 hover:to-yellow-700'
    },
    {
      icon: MessageSquare,
      label: 'WhatsApp',
      href: 'https://wa.me/919602870828',
      username: '+91 96028 70828',
      color: 'from-green-500 to-emerald-600',
      hoverColor: 'hover:from-green-400 hover:to-emerald-500'
    },

    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:kannutodwal@gmail.com',
      username: 'kannutodwal@gmail.com',
      color: 'from-purple-600 to-purple-800',
      hoverColor: 'hover:from-purple-500 hover:to-purple-700'
    }
  ];

  const quickInfo = [
    { icon: MapPin, label: 'Location', value: 'Jaipur, Rajasthan' },
    { icon: Phone, label: 'Phone', value: '+91 96028 70828' },
    { icon: Calendar, label: 'Availability', value: 'Available Now' },
  ];

  return (
    <section id="contact" className="relative z-10 py-32 px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            style={{
              // eslint-disable-next-line react-hooks/purity
              left: `${Math.random() * 100}%`,
              // eslint-disable-next-line react-hooks/purity
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              // eslint-disable-next-line react-hooks/purity
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              // eslint-disable-next-line react-hooks/purity
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30"
          >
            <MessageCircle className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-mono text-cyan-400">&lt;get_in_touch /&gt;</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Lets Build Something{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Extraordinary
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? I am available for full-time opportunities and select freelance projects. Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Quick Info Cards */}
            <div className="space-y-4">
              {quickInfo.map((info, i) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative p-6 rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700 backdrop-blur-sm group-hover:border-cyan-500/50 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/30">
                        <info.icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">{info.label}</div>
                        <div className="font-semibold text-white">{info.value}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl blur-2xl" />
              <div className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700 backdrop-blur-sm">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                  Connect With Me
                </h3>
                <div className="space-y-3">
                  {socialLinks.map((social, i) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      whileHover={{ x: 5, scale: 1.02 }}
                      onHoverStart={() => setHoveredSocial(social.label)}
                      onHoverEnd={() => setHoveredSocial(null)}
                      className="group/social flex items-center justify-between p-4 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-cyan-500/50 transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${social.color} ${social.hoverColor} transition-all`}>
                          <social.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-white group-hover/social:text-cyan-400 transition-colors">
                            {social.label}
                          </div>
                          <div className="text-sm text-gray-500">{social.username}</div>
                        </div>
                      </div>
                      <ArrowRight
                        className={`w-5 h-5 text-gray-600 group-hover/social:text-cyan-400 transition-all ${hoveredSocial === social.label ? 'translate-x-1' : ''
                          }`}
                      />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl blur-xl" />
              <div className="relative p-6 rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-green-500/30 backdrop-blur-sm text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-3 h-3 bg-green-500 rounded-full"
                  />
                  <span className="text-green-400 font-semibold">Available for Work</span>
                </div>
                <p className="text-sm text-gray-400">
                  Open to new opportunities and exciting projects
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-2xl" />

              {/* Form Card */}
              <div className="relative p-8 md:p-10 rounded-2xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-gray-700 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Send className="w-6 h-6 text-cyan-400" />
                  Send Me a Message
                </h3>

                <div className="space-y-6">
                  {/* Name Input */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-4 bg-gray-900/50 border border-gray-700 rounded-xl focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all text-white placeholder-gray-500"
                    />
                  </motion.div>

                  {/* Email Input */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-4 bg-gray-900/50 border border-gray-700 rounded-xl focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all text-white placeholder-gray-500"
                    />
                  </motion.div>

                  {/* Message Textarea */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Your Message
                    </label>
                    <textarea
                      placeholder="Tell me about your project..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-4 bg-gray-900/50 border border-gray-700 rounded-xl focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all text-white placeholder-gray-500 resize-none"
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleSubmit}
                      disabled={isSent}
                      className={`group relative w-full px-8 py-4 rounded-xl font-bold text-lg overflow-hidden transition-all ${isSent
                        ? 'bg-green-600'
                        : 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:shadow-lg hover:shadow-cyan-500/50'
                        }`}
                    >
                      {/* Hover Effect */}
                      {!isSent && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}

                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {isSent ? (
                          <>
                            <Check className="w-5 h-5" />
                            Message Sent!
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </span>
                    </motion.button>
                  </motion.div>
                </div>

                {/* Privacy Note */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="mt-6 text-sm text-gray-500 text-center"
                >
                  🔒 Your information is secure and will never be shared with third parties.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Response Time Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gray-900/80 to-gray-800/80 border border-gray-700">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
            </motion.div>
            <span className="text-sm text-gray-400">
              Average response time: <span className="text-cyan-400 font-semibold">24 hours</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;