'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Play, TrendingUp, Users, Zap, Award, ArrowRight, X } from 'lucide-react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState<any>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Career Compass',
      subtitle: 'AI-Assisted Career Guidance Platform',
      problem: 'Students struggle to choose career paths due to lack of structured guidance and data-driven insights',
      solution: 'Built a full-stack platform that recommends career paths based on skills, interests, and preferences using rule-based logic and dashboards',
      impact: 'Helped users explore suitable career options with structured guidance and personalized dashboards',
      tech: ['Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Firebase'],
      color: 'from-cyan-500 to-blue-600',
      stats: [
        { icon: Users, label: 'Users', value: '100+' },
        { icon: TrendingUp, label: 'Modules', value: '5+' },
        { icon: Award, label: 'Status', value: 'Completed' },
      ],
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=600&fit=crop',
      githubUrl: 'https://github.com/Kannu20/careecompass',
      liveUrl: 'https://career-compass.vercel.app'
    },
    {
      id: 2,
      title: 'Blog Ocean',
      subtitle: 'Full-Stack Blogging Platform',
      problem: 'Content creators need a simple platform to write, manage, and publish blogs securely',
      solution: 'Developed a full-stack blog application with authentication, CRUD operations, and role-based access',
      impact: 'Enabled users to create, manage, and publish blogs with secure login and admin controls',
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
      color: 'from-purple-500 to-pink-600',
      stats: [
        { icon: Users, label: 'Users', value: '50+' },
        { icon: Zap, label: 'Features', value: 'CRUD' },
        { icon: Award, label: 'Auth', value: 'Role-Based' },
      ],
      image: 'https://images.unsplash.com/photo-1519337265831-281ec6cc8514?w=800&h=600&fit=crop',
      githubUrl: 'https://github.com/Kannu20/Blog-Website',
      liveUrl: 'https://blog-izeh.vercel.app/'
    },
    {
      id: 3,
      title: 'TeleHealth Connect',
      subtitle: 'Online Doctor Consultation System',
      problem: 'Patients face difficulty accessing doctors for basic consultations and appointment booking',
      solution: 'Built a telehealth platform with doctor listings, appointment booking, and secure communication',
      impact: 'Simplified online consultation and appointment scheduling for patients',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      color: 'from-emerald-500 to-teal-600',
      stats: [
        { icon: Users, label: 'Roles', value: 'Patient / Doctor' },
        { icon: Zap, label: 'Modules', value: 'Appointments' },
        { icon: Award, label: 'Mode', value: 'Web App' },
      ],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
      githubUrl: 'https://github.com/Kannu20/telehealth-landing-page',
      liveUrl: 'https://telehealth-iota.vercel.app/'
    },
    {
      id: 4,
      title: 'E-Commerce Platform',
      subtitle: 'Multi-Vendor Marketplace System',
      problem: 'Vendors and admins need a centralized system to manage products, orders, and users',
      solution: 'Developed a multi-vendor e-commerce platform with vendor dashboards, product management, and order tracking',
      impact: 'Enabled vendors to manage products independently while admins monitor platform activity',
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
      color: 'from-orange-500 to-red-600',
      stats: [
        { icon: Users, label: 'Dashboards', value: 'Admin + Vendor' },
        { icon: TrendingUp, label: 'Modules', value: 'Orders' },
        { icon: Award, label: 'Type', value: 'Marketplace' },
      ],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
      githubUrl: 'https://github.com/Kannu20/Website_Ecommerce',
      liveUrl: 'https://fullstack-ecommerce.netlify.app/'
    }
  ];

  const handleProjectClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="relative z-10 py-32 px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 mb-4 text-sm font-mono text-cyan-400 border border-cyan-500/30 rounded-full bg-cyan-500/10"
          >
            &lt;featured_projects /&gt;
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real-world solutions that drive business impact and delight users
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group relative"
            >
              {/* Glow Effect */}
              <motion.div
                className={`absolute -inset-4 bg-gradient-to-r ${project.color} rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                animate={{
                  scale: hoveredProject === project.id ? [1, 1.05, 1] : 1,
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              <div className={`relative grid md:grid-cols-2 gap-8 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-gray-700 backdrop-blur-sm group-hover:border-transparent transition-all duration-500 ${i % 2 === 0 ? '' : 'md:grid-flow-dense'}`}>

                {/* Content Side */}
                <div className={`flex flex-col justify-between ${i % 2 === 0 ? '' : 'md:col-start-2'}`}>
                  <div>
                    {/* Project Number & Title */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className={`text-6xl font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent opacity-30`}>
                          0{i + 1}
                        </span>
                        <div>
                          <span className="text-sm text-gray-500 block mb-1">{project.subtitle}</span>
                          <h3 className="text-3xl md:text-4xl font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Gradient Bar */}
                    <motion.div
                      className={`h-1 w-0 bg-gradient-to-r ${project.color} rounded-full mb-8`}
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2 + 0.4, duration: 0.8 }}
                    />

                    {/* Problem, Solution, Impact */}
                    <div className="space-y-4 mb-8">
                      <div className="group/item">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full bg-cyan-500" />
                          <span className="text-sm font-mono text-cyan-400 font-semibold">Problem</span>
                        </div>
                        <p className="text-gray-300 leading-relaxed pl-4">{project.problem}</p>
                      </div>

                      <div className="group/item">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full bg-purple-500" />
                          <span className="text-sm font-mono text-purple-400 font-semibold">Solution</span>
                        </div>
                        <p className="text-gray-300 leading-relaxed pl-4">{project.solution}</p>
                      </div>

                      <div className="group/item">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full bg-pink-500" />
                          <span className="text-sm font-mono text-pink-400 font-semibold">Impact</span>
                        </div>
                        <p className="text-gray-300 leading-relaxed pl-4 font-semibold">{project.impact}</p>
                      </div>
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {project.stats.map((stat, idx) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.2 + 0.6 + idx * 0.1 }}
                          whileHover={{ scale: 1.05, y: -5 }}
                          className="relative group/stat"
                        >
                          <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover/stat:opacity-10 rounded-xl transition-opacity`} />
                          <div className="relative p-4 rounded-xl bg-gray-900/50 border border-gray-800 group-hover/stat:border-gray-700 transition-colors">
                            <stat.icon className="w-5 h-5 text-gray-500 mb-2" />
                            <div className={`text-2xl font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                              {stat.value}
                            </div>
                            <div className="text-xs text-gray-500">{stat.label}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((tech, idx) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.2 + 0.8 + idx * 0.05 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className={`px-3 py-1.5 text-xs bg-gray-900/80 border border-gray-800 rounded-full text-gray-400 hover:border-cyan-500/50 hover:text-cyan-400 transition-all cursor-pointer`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setActiveProject(project)}
                      className={`flex-1 px-6 py-3 bg-gradient-to-r ${project.color} rounded-lg font-semibold hover:shadow-lg transition-shadow flex items-center justify-center gap-2`}
                    >
                      <Play size={18} />
                      View Details
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleProjectClick(project.githubUrl)}
                      className="px-6 py-3 border-2 border-gray-700 rounded-lg font-semibold hover:border-cyan-500 transition-colors flex items-center justify-center gap-2"
                      title="View on GitHub"
                    >
                      <Github size={18} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleProjectClick(project.liveUrl)}
                      className="px-6 py-3 border-2 border-gray-700 rounded-lg font-semibold hover:border-cyan-500 transition-colors flex items-center justify-center gap-2"
                      title="View Live Demo"
                    >
                      <ExternalLink size={18} />
                    </motion.button>
                  </div>
                </div>

                {/* Image/Visual Side */}
                <motion.div
                  className={`relative rounded-2xl overflow-hidden cursor-pointer ${i % 2 === 0 ? '' : 'md:col-start-1 md:row-start-1'}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => handleProjectClick(project.liveUrl)}
                >
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 mix-blend-overlay z-10`} />

                  {/* Image */}
                  <div className="relative aspect-[4/3] bg-gray-800">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Hover Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center"
                    >
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        className="text-center"
                      >
                        <Play className="w-16 h-16 text-white mx-auto mb-2" />
                        <p className="text-white font-semibold">View Live Demo</p>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Corner Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`px-4 py-2 bg-gradient-to-r ${project.color} rounded-full text-white text-sm font-bold shadow-lg`}
                    >
                      Featured
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleProjectClick('https://github.com/Kannu20')}
            className="group px-8 py-4 border-2 border-gray-700 rounded-lg font-semibold hover:border-cyan-500 transition-all inline-flex items-center gap-2"
          >
            View All Projects on GitHub
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </motion.button>
        </motion.div>
      </div>

      {/* Enhanced Project Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-6"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-cyan-500/50 rounded-3xl p-8 md:p-12 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setActiveProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-gray-800 border border-gray-700 hover:border-cyan-500 transition-colors z-10"
              >
                <X size={24} />
              </motion.button>

              {/* Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${activeProject.color} opacity-20 blur-2xl rounded-3xl`} />

              <div className="relative">
                {/* Header */}
                <div className="mb-8">
                  <span className="text-sm text-gray-500 mb-2 block">{activeProject.subtitle}</span>
                  <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    {activeProject.title}
                  </h3>
                  <div className={`h-1.5 w-32 bg-gradient-to-r ${activeProject.color} rounded-full`} />
                </div>

                {/* Image */}
                <div 
                  className="relative rounded-2xl overflow-hidden mb-8 aspect-video cursor-pointer"
                  onClick={() => handleProjectClick(activeProject.liveUrl)}
                >
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${activeProject.color} opacity-20 mix-blend-overlay`} />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center"
                  >
                    <div className="text-center">
                      <ExternalLink className="w-12 h-12 text-white mx-auto mb-2" />
                      <p className="text-white font-semibold">Click to View Live</p>
                    </div>
                  </motion.div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {activeProject.stats.map((stat: any) => (
                    <div key={stat.label} className="text-center p-4 rounded-xl bg-gray-900/50 border border-gray-800">
                      <stat.icon className={`w-6 h-6 mx-auto mb-2 text-cyan-400`} />
                      <div className={`text-3xl font-bold bg-gradient-to-r ${activeProject.color} bg-clip-text text-transparent mb-1`}>
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Details */}
                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="text-cyan-400 font-bold text-lg mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-cyan-500" />
                      The Challenge
                    </h4>
                    <p className="text-gray-300 leading-relaxed text-lg">{activeProject.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-purple-400 font-bold text-lg mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-purple-500" />
                      The Solution
                    </h4>
                    <p className="text-gray-300 leading-relaxed text-lg">{activeProject.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-pink-400 font-bold text-lg mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-pink-500" />
                      The Impact
                    </h4>
                    <p className="text-gray-300 leading-relaxed text-lg font-semibold">{activeProject.impact}</p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h4 className="text-gray-400 font-bold mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-3">
                    {activeProject.tech.map((tech: string) => (
                      <span key={tech} className={`px-4 py-2 text-sm bg-gradient-to-r ${activeProject.color} bg-opacity-10 border border-gray-700 rounded-full text-gray-300 hover:border-cyan-500 transition-colors`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleProjectClick(activeProject.liveUrl)}
                    className={`flex-1 px-8 py-4 bg-gradient-to-r ${activeProject.color} rounded-lg font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow flex items-center justify-center gap-2`}
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleProjectClick(activeProject.githubUrl)}
                    className="flex-1 px-8 py-4 border-2 border-cyan-500 rounded-lg font-bold hover:bg-cyan-500/10 transition-colors flex items-center justify-center gap-2"
                  >
                    <Github size={20} />
                    View Code
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;