'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Rocket, TrendingUp, Users, Code, Zap, MapPin } from 'lucide-react';

const Timeline = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'work' | 'education'>('all');
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const timelineData = [
    {
      id: 1,
      year: '2025',
      type: 'work',
      icon: Briefcase,
      role: 'Full-Stack Developer Intern',
      company: 'CepiaLabs',
      location: 'Remote',
      duration: 'Nov 2025 - Present',
      color: 'from-cyan-500 to-blue-600',
      achievements: [
        'Developing full-stack features using Next.js and the MERN stack',
        'Building reusable React components and optimizing frontend performance',
        'Implementing REST APIs and integrating backend services',
        'Collaborating remotely with team members using Git and agile workflows'
      ],
      tech: ['Next.js', 'MongoDB', 'Express.js', 'React', 'Node.js'],
      metrics: [
        { icon: Code, label: 'Role', value: 'Intern' },
        { icon: TrendingUp, label: 'Stack', value: 'Next.js + MERN' },
        { icon: Users, label: 'Mode', value: 'Remote' }
      ]
    },
    {
      id: 2,
      year: '2025',
      type: 'work',
      icon: Briefcase,
      role: 'Full-Stack Developer Intern',
      company: 'Promoddady Digital LLP',
      location: 'Jaipur, Rajasthan (On-site)',
      duration: 'Mar 2023 - Dec 2023',
      color: 'from-purple-500 to-pink-600',
      achievements: [
        'Developed full-stack web features using the MERN stack',
        'Built and integrated REST APIs for dynamic data handling',
        'Worked closely with designers to convert UI designs into responsive pages',
        'Improved application performance and fixed production bugs'
      ],
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      metrics: [
        { icon: Code, label: 'Role', value: 'Intern' },
        { icon: TrendingUp, label: 'Stack', value: 'MERN' },
        { icon: Users, label: 'Mode', value: 'On-site' }
      ]
    },

    {
      id: 3,
      year: '2022',
      type: 'education',
      icon: GraduationCap,
      role: 'Bachelor of Technology in Computer Science',
      company: 'Poornima College of Engineering',
      location: 'Jaipur, Rajasthan',
      duration: '2022 - 2026',
      color: 'from-cyan-500 to-purple-600',
      achievements: [
        'Currently pursuing B.Tech in Computer Science',
        'Specialization in Artificial Intelligence',
        'Strong foundation in data structures, algorithms, and software development',
        'Actively building full-stack and AI-based projects'
      ],
      tech: ['Data Structures', 'Algorithms', 'Web Development', 'AI Basics'],
      metrics: [
        { icon: Award, label: 'Degree', value: 'B.Tech' },
        { icon: Code, label: 'Focus', value: 'AI' },
        { icon: Users, label: 'Status', value: 'Pursuing' }
      ]
    },
    {
      id: 4,
      year: '2020',
      type: 'education',
      icon: Award,
      role: 'Senior Secondary Education (Class XII – Science)',
      company: 'Swami Vivekanand Model School',
      location: 'Newai, Rajasthan',
      duration: '2020 - 2022',
      color: 'from-indigo-500 to-blue-600',
      achievements: [
        'Completed Class XII with Physics, Chemistry, and Mathematics',
        'Graduated with distinction',
        'Built strong analytical and problem-solving foundation',
        'Developed early interest in programming and technology'
      ],
      tech: ['Physics', 'Chemistry', 'Mathematics', 'Logical Reasoning'],
      metrics: [
        { icon: Award, label: 'Stream', value: 'Science (PCM)' },
        { icon: Code, label: 'Level', value: 'Class XII' },
        { icon: Users, label: 'Result', value: 'Distinction' }
      ]
    },

    {
      id: 5,
      year: '2019',
      type: 'education',
      icon: Award,
      role: 'Secondary Education (Class X)',
      company: 'Bhagwan Das Pareek Dream School',
      location: 'Newai, Rajasthan',
      duration: '2019 - 2020',
      color: 'from-slate-500 to-gray-600',
      achievements: [
        'Completed Class X with strong academic performance',
        'Built early interest in science and technology',
        'Developed analytical thinking and problem-solving skills',
        'Maintained consistent academic discipline'
      ],
      tech: ['Mathematics', 'Science', 'Logical Reasoning'],
      metrics: [
        { icon: Award, label: 'Level', value: 'Class X' },
        { icon: Code, label: 'Focus', value: 'Science' },
        { icon: Users, label: 'Board', value: 'Secondary' }
      ]
    }

  ];

  const filteredTimeline = activeTab === 'all'
    ? timelineData
    : timelineData.filter(item => item.type === activeTab);

  return (
    // <section id="experience" className="relative z-10 py-32 px-6 overflow-hidden">
    //     {/* Animated Background */}
    //     <div className="absolute inset-0">
    //         <motion.div
    //             animate={{
    //                 rotate: [0, 360],
    //                 scale: [1, 1.2, 1],
    //             }}
    //             transition={{
    //                 duration: 30,
    //                 repeat: Infinity,
    //                 ease: "linear"
    //             }}
    //             className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"
    //         />
    //         <motion.div
    //             animate={{
    //                 rotate: [360, 0],
    //                 scale: [1, 1.3, 1],
    //             }}
    //             transition={{
    //                 duration: 35,
    //                 repeat: Infinity,
    //                 ease: "linear"
    //             }}
    //             className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
    //         />
    //     </div>

    //     <div className="max-w-6xl mx-auto relative z-10">
    //         {/* Section Header */}
    //         <motion.div
    //             initial={{ opacity: 0, y: 20 }}
    //             whileInView={{ opacity: 1, y: 0 }}
    //             viewport={{ once: true }}
    //             className="text-center mb-16"
    //         >
    //             <motion.span
    //                 initial={{ opacity: 0, scale: 0.5 }}
    //                 whileInView={{ opacity: 1, scale: 1 }}
    //                 viewport={{ once: true }}
    //                 className="inline-block px-4 py-2 mb-4 text-sm font-mono text-cyan-400 border border-cyan-500/30 rounded-full bg-cyan-500/10"
    //             >
    //                 &lt;my_journey /&gt;
    //             </motion.span>
    //             <h2 className="text-5xl md:text-6xl font-bold mb-4">
    //                 Experience & <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Education</span>
    //             </h2>
    //             <p className="text-gray-400 text-lg max-w-2xl mx-auto">
    //                 A journey of continuous learning, building, and growing
    //             </p>
    //         </motion.div>

    //         {/* Filter Tabs */}
    //         <motion.div
    //             initial={{ opacity: 0, y: 20 }}
    //             whileInView={{ opacity: 1, y: 0 }}
    //             viewport={{ once: true }}
    //             className="flex justify-center gap-4 mb-16"
    //         >
    //             {[
    //                 { id: 'all', label: 'All', icon: Rocket },
    //                 { id: 'work', label: 'Work Experience', icon: Briefcase },
    //                 { id: 'education', label: 'Education', icon: GraduationCap }
    //             ].map((tab) => (
    //                 <motion.button
    //                     key={tab.id}
    //                     whileHover={{ scale: 1.05 }}
    //                     whileTap={{ scale: 0.95 }}
    //                     onClick={() => setActiveTab(tab.id as any)}
    //                     className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${activeTab === tab.id
    //                         ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/30'
    //                         : 'bg-gray-900/50 border border-gray-700 text-gray-400 hover:border-cyan-500/50'
    //                         }`}
    //                 >
    //                     <tab.icon size={18} />
    //                     {tab.label}
    //                 </motion.button>
    //             ))}
    //         </motion.div>

    //         {/* Timeline */}
    //         <div className="relative">
    //             {/* Central Line */}
    //             <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 opacity-30" />

    //             <div className="space-y-16">
    //                 {filteredTimeline.map((item, i) => (
    //                     <motion.div
    //                         key={item.id}
    //                         initial={{ opacity: 0, y: 50 }}
    //                         whileInView={{ opacity: 1, y: 0 }}
    //                         viewport={{ once: true, margin: "-100px" }}
    //                         transition={{ delay: i * 0.1, duration: 0.6 }}
    //                         onHoverStart={() => setHoveredItem(item.id)}
    //                         onHoverEnd={() => setHoveredItem(null)}
    //                         className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
    //                             }`}
    //                     >
    //                         {/* Year Badge */}
    //                         <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
    //                             <motion.div
    //                                 whileHover={{ scale: 1.2, rotate: 360 }}
    //                                 transition={{ duration: 0.6 }}
    //                                 className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg shadow-cyan-500/30 border-4 border-black`}
    //                             >
    //                                 <item.icon className="w-8 h-8 text-white" />
    //                             </motion.div>
    //                         </div>

    //                         {/* Content Card */}
    //                         <div className={`md:w-[calc(50%-4rem)] ml-24 md:ml-0 ${i % 2 === 0 ? 'md:text-right md:pr-16' : 'md:pl-16'}`}>
    //                             <motion.div
    //                                 whileHover={{ scale: 1.02, y: -5 }}
    //                                 className="group relative"
    //                             >
    //                                 {/* Glow Effect */}
    //                                 <motion.div
    //                                     className={`absolute -inset-2 bg-gradient-to-r ${item.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
    //                                     animate={{
    //                                         scale: hoveredItem === item.id ? [1, 1.05, 1] : 1,
    //                                     }}
    //                                     transition={{ duration: 2, repeat: Infinity }}
    //                                 />

    //                                 {/* Card */}
    //                                 <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-gray-700 backdrop-blur-sm group-hover:border-transparent transition-all duration-500">
    //                                     {/* Year Tag */}
    //                                     <div className={`inline-block px-3 py-1 mb-4 rounded-full bg-gradient-to-r ${item.color} text-white text-sm font-bold`}>
    //                                         {item.year}
    //                                     </div>

    //                                     {/* Role & Company */}
    //                                     <h3 className="text-3xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300 'md:text-left' : ''">
    //                                         {item.role}
    //                                     </h3>

    //                                     <div className="flex items-center gap-2 mb-2 text-purple-400 font-semibold 'md:text-left' : ''">
    //                                         <span>{item.company}</span>
    //                                     </div>

    //                                     <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
    //                                         <div className="flex items-center gap-1">
    //                                             <MapPin size={14} />
    //                                             {item.location}
    //                                         </div>
    //                                         <span>•</span>
    //                                         <span>{item.duration}</span>
    //                                     </div>

    //                                     {/* Gradient Line */}
    //                                     <div className={`h-1 w-20 bg-gradient-to-r ${item.color} rounded-full mb-6 ${i % 2 === 0 ? 'md:ml-auto' : ''}`} />

    //                                     {/* Achievements */}
    //                                     <ul
    //                                         className={`space-y-3 mb-6 ${i % 2 === 0 ? 'md:text-left' : ''
    //                                             }`}
    //                                     >
    //                                         {item.achievements.map((achievement, idx) => (
    //                                             <motion.li
    //                                                 key={idx}
    //                                                 initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
    //                                                 whileInView={{ opacity: 1, x: 0 }}
    //                                                 viewport={{ once: true }}
    //                                                 transition={{ delay: 0.1 + idx * 0.05 }}
    //                                                 className={`flex items-start gap-2 text-gray-300 ${i % 2 === 0 ? 'md:flex-row-reverse md:text-left' : ''
    //                                                     }`}
    //                                             >
    //                                                 {/* Bullet */}
    //                                                 <div
    //                                                     className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color} mt-2 flex-shrink-0 ${i % 2 === 0 ? 'md:ml-0 md:mr-2' : ''
    //                                                         }`}
    //                                                 />

    //                                                 {/* Text */}
    //                                                 <span className={`${i % 2 === 0 ? 'md:text-left' : ''}`}>
    //                                                     {achievement}
    //                                                 </span>
    //                                             </motion.li>
    //                                         ))}
    //                                     </ul>


    //                                     {/* Metrics */}
    //                                     <div className="grid grid-cols-3 gap-3 mb-6">
    //                                         {item.metrics.map((metric, idx) => (
    //                                             <motion.div
    //                                                 key={idx}
    //                                                 initial={{ opacity: 0, scale: 0.8 }}
    //                                                 whileInView={{ opacity: 1, scale: 1 }}
    //                                                 viewport={{ once: true }}
    //                                                 transition={{ delay: 0.3 + idx * 0.1 }}
    //                                                 whileHover={{ scale: 1.1, y: -3 }}
    //                                                 className="p-3 rounded-lg bg-gray-900/50 border border-gray-800 text-center"
    //                                             >
    //                                                 <metric.icon className="w-4 h-4 mx-auto mb-1 text-gray-500" />
    //                                                 <div className={`text-lg font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
    //                                                     {metric.value}
    //                                                 </div>
    //                                                 <div className="text-xs text-gray-500">{metric.label}</div>
    //                                             </motion.div>
    //                                         ))}
    //                                     </div>

    //                                     {/* Tech Stack */}
    //                                     <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
    //                                         {item.tech.map((tech, idx) => (
    //                                             <motion.span
    //                                                 key={tech}
    //                                                 initial={{ opacity: 0, scale: 0.8 }}
    //                                                 whileInView={{ opacity: 1, scale: 1 }}
    //                                                 viewport={{ once: true }}
    //                                                 transition={{ delay: 0.4 + idx * 0.05 }}
    //                                                 whileHover={{ scale: 1.1, y: -2 }}
    //                                                 className="px-3 py-1 text-xs bg-gray-900/80 border border-gray-800 rounded-full text-gray-400 hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
    //                                             >
    //                                                 {tech}
    //                                             </motion.span>
    //                                         ))}
    //                                     </div>
    //                                 </div>
    //                             </motion.div>
    //                         </div>
    //                     </motion.div>
    //                 ))}
    //             </div>
    //         </div>
    //     </div>
    // </section>

    <section id="experience" className="relative z-10 py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Timeline */}

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 mb-4 text-sm font-mono text-cyan-400 border border-cyan-500/30 rounded-full bg-cyan-500/10"
          >
            &lt;my_journey /&gt;
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Experience & <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A journey of continuous learning, building, and growing
          </p>
        </motion.div>
        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 opacity-30" />
          <div className="space-y-16">
            {filteredTimeline.map((item, i) => {
              const isLeft = i % 2 === 0;

              return (


                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  onHoverStart={() => setHoveredItem(item.id)}
                  onHoverEnd={() => setHoveredItem(null)}
                  className={`relative flex flex-col md:flex-row gap-8 ${isLeft ? '' : 'md:flex-row-reverse'
                    }`}
                >

                  {/* ICON */}
                  <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 z-10">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 360 }}
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center border-4 border-black`}
                    >
                      <item.icon className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>

                  {/* CARD */}
                  <div className={`md:w-[calc(50%-4rem)] ml-24 md:ml-0 ${isLeft ? 'md:pr-16' : 'md:pl-16'}`}>
                    <motion.div whileHover={{ y: -6 }} className="relative">
                      <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-gray-700">

                        {/* YEAR */}
                        <div className={`inline-block px-3 py-1 mb-4 rounded-full bg-gradient-to-r ${item.color} text-white text-sm font-bold`}>
                          {item.year}
                        </div>

                        {/* TITLE */}
                        <h3 className="text-3xl font-bold mb-2">
                          {item.role}
                        </h3>

                        {/* COMPANY */}
                        <div className="text-purple-400 font-semibold mb-2">
                          {item.company}
                        </div>

                        {/* META */}
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            {item.location}
                          </div>
                          <span>•</span>
                          <span>{item.duration}</span>
                        </div>

                        {/* DIVIDER */}
                        <div className={`h-1 w-20 bg-gradient-to-r ${item.color} rounded-full mb-6`} />

                        {/* ACHIEVEMENTS */}
                        <ul className="space-y-3 mb-6">
                          {item.achievements.map((a, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-300">
                              <span className={`w-2 h-2 mt-2 rounded-full bg-gradient-to-r ${item.color}`} />
                              <span>{a}</span>
                            </li>
                          ))}
                        </ul>

                        {/* METRICS */}
                        <div className="grid grid-cols-3 gap-3 mb-6">
                          {item.metrics.map((m, idx) => (
                            <div key={idx} className="p-3 rounded-lg bg-gray-900/50 border border-gray-800 text-center">
                              <m.icon className="w-4 h-4 mx-auto mb-1 text-gray-500" />
                              <div className={`text-lg font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                                {m.value}
                              </div>
                              <div className="text-xs text-gray-500">{m.label}</div>
                            </div>
                          ))}
                        </div>

                        {/* TECH */}
                        <div className="flex flex-wrap gap-2">
                          {item.tech.map((t) => (
                            <span
                              key={t}
                              className="px-3 py-1 text-xs bg-gray-900/80 border border-gray-800 rounded-full text-gray-400"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700">
            <p className="text-lg text-gray-300 mb-4">
              Interested in my full resume?
            </p>
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow"
            >
              Download Resume
            </motion.button> */}
            <a
              href="/Kanishak_Todwal_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow"
              >
                Download Resume
              </motion.button>
            </a>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;