'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Wrench, Sparkles, CheckCircle2, TrendingUp } from 'lucide-react';

const Skills = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const skillCategories = {
    Frontend: {
      icon: Code,
      color: 'from-cyan-500 to-blue-600',
      skills: [
        { name: 'React', level: 80, years: '2+' },
        { name: 'Next.js', level: 78, years: '1.5+' },
        { name: 'TypeScript', level: 72, years: '1.5+' },
        { name: 'Tailwind CSS', level: 85, years: '2+' },
      ]
    },

    Backend: {
      icon: Server,
      color: 'from-purple-500 to-pink-600',
      skills: [
        { name: 'Node.js', level: 75, years: '2+' },
        { name: 'Express.js', level: 78, years: '2+' },
        { name: 'Python', level: 70, years: '1.5+' },
        { name: 'REST APIs', level: 80, years: '2+' },
      ]
    },

    Database: {
      icon: Database,
      color: 'from-emerald-500 to-teal-600',
      skills: [
        { name: 'MySQL', level: 75, years: '2+' },
        { name: 'MongoDB', level: 78, years: '2+' },
        { name: 'Database Design (Basics)', level: 70, years: '1.5+' },
      ]
    },

    Tools: {
      icon: Wrench,
      color: 'from-orange-500 to-red-600',
      skills: [
        { name: 'VS Code', level: 85, years: '3+' },
        { name: 'Git & GitHub', level: 80, years: '2+' },
        { name: 'Postman', level: 78, years: '2+' },
        { name: 'Vercel', level: 75, years: '1.5+' }
      ]
    }

  };

  const floatVariants = {
    animate: (i: number) => ({
      y: [0, -15, 0],
      transition: {
        duration: 3 + i * 0.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.2
      }
    })
  };

  return (
    <section id="skills" className="relative z-10 py-32 px-6 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
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
          className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        />

        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: i % 3 === 0 ? '#06b6d4' : i % 3 === 1 ? '#a855f7' : '#ec4899',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.3
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-mono text-cyan-400">&lt;skills_expertise /&gt;</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Technical <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Arsenal</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Battle-tested technologies I use to build production-ready solutions
          </p>
        </motion.div>

        {/* Skills Grid with Floating Effect */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skillCategories).map(([category, data], categoryIndex) => (
            <motion.div
              key={category}
              custom={categoryIndex}
              variants={floatVariants}
              animate="animate"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              onHoverStart={() => setHoveredCategory(category)}
              onHoverEnd={() => setHoveredCategory(null)}
              className="group relative"
            >
              {/* Glow Effect */}
              <motion.div
                className={`absolute -inset-2 bg-gradient-to-r ${data.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                animate={{
                  scale: hoveredCategory === category ? [1, 1.05, 1] : 1,
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Card */}
              <div className="relative h-full p-6 rounded-2xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-gray-700 backdrop-blur-sm group-hover:border-transparent transition-all duration-500">
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${data.color}`} />

                {/* Category Header */}
                <div className="relative z-10 mb-6">
                  <motion.div
                    animate={{
                      rotate: hoveredCategory === category ? 360 : 0,
                    }}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${data.color} mb-4`}
                  >
                    <data.icon className="w-7 h-7 text-white" />
                  </motion.div>

                  <h3 className={`text-2xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${data.color} transition-all duration-300`}>
                    {category}
                  </h3>

                  <div className={`h-1 w-12 bg-gradient-to-r ${data.color} rounded-full group-hover:w-full transition-all duration-500`} />
                </div>

                {/* Skills List */}
                <ul className="relative z-10 space-y-3">
                  {data.skills.map((skill, skillIndex) => (
                    <motion.li
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ x: 5, scale: 1.02 }}
                      onClick={() => setSelectedSkill(skill.name)}
                      className="cursor-pointer group/skill"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <motion.div
                            animate={{
                              scale: selectedSkill === skill.name ? [1, 1.3, 1] : 1,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <CheckCircle2 className={`w-4 h-4 ${selectedSkill === skill.name ? 'text-green-400' : 'text-gray-600'} group-hover/skill:text-cyan-400 transition-colors`} />
                          </motion.div>
                          <span className="text-gray-300 group-hover/skill:text-white transition-colors font-medium">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs text-gray-500 font-mono">{skill.years}</span>
                      </div>

                      {/* Progress Bar */}
                      <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            delay: categoryIndex * 0.1 + skillIndex * 0.1,
                            duration: 1,
                            ease: "easeOut"
                          }}
                          className={`h-full bg-gradient-to-r ${data.color} rounded-full relative`}
                        >
                          {/* Shimmer Effect */}
                          <motion.div
                            animate={{
                              x: [-100, 200],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          />
                        </motion.div>
                      </div>
                    </motion.li>
                  ))}
                </ul>

                {/* Skill Count Badge */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="relative z-10 mt-6 pt-6 border-t border-gray-800"
                >
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Total Skills</span>
                    <span className={`font-bold bg-gradient-to-r ${data.color} bg-clip-text text-transparent`}>
                      {data.skills.length}
                    </span>
                  </div>
                </motion.div>

                {/* Corner Accent */}
                <motion.div
                  className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${data.color} opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-300`}
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { icon: Code, label: 'Languages', value: '8+', color: 'from-cyan-500 to-blue-600' },
            { icon: Server, label: 'Frameworks', value: '12+', color: 'from-purple-500 to-pink-600' },
            { icon: Database, label: 'Databases', value: '6+', color: 'from-emerald-500 to-teal-600' },
            { icon: TrendingUp, label: 'Years XP', value: '5+', color: 'from-orange-500 to-red-600' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 + i * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group/stat"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-xl blur-xl opacity-0 group-hover/stat:opacity-30 transition-opacity`} />
              <div className="relative p-6 rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700 group-hover/stat:border-transparent transition-all text-center">
                <stat.icon className={`w-8 h-8 mx-auto mb-3 text-gray-400 group-hover/stat:text-transparent group-hover/stat:bg-clip-text group-hover/stat:bg-gradient-to-r ${stat.color}`} />
                <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Want to see these skills in action?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;