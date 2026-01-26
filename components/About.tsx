'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Code, Database, Layers, GitBranch, Cpu, Shield } from 'lucide-react';

const About = () => {
    const [hoveredTech, setHoveredTech] = useState<string | null>(null);

    const techStack = [
        { name: 'React', icon: Code, color: 'from-cyan-500 to-blue-500', desc: 'UI/UX Magic' },
        { name: 'Next.js', icon: Zap, color: 'from-purple-500 to-pink-500', desc: 'SSR Expert' },
        { name: 'Node.js', icon: Cpu, color: 'from-green-500 to-emerald-500', desc: 'Backend Power' },
        { name: 'Python', icon: Code, color: 'from-yellow-500 to-orange-500', desc: 'AI & Data' },
        { name: 'MongoDB', icon: Database, color: 'from-blue-500 to-indigo-500', desc: 'Data Master' },
        { name: 'Java', icon: Code, color: 'from-orange-500 to-red-500', desc: 'Core Java & OOP' }

    ];

    const highlights = [
        { number: '2+', label: 'Years of Learning & Building', icon: Zap },
        { number: '12+', label: 'Projects Built', icon: Layers },
        { number: '2', label: 'Internships Completed', icon: Shield },
        { number: 'MERN + Next.js', label: 'Primary Tech Stack', icon: GitBranch },
    ];


    return (
        <section
            id="about"
            className="relative z-10 py-32 px-6 overflow-hidden"
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        rotate: [0, 360],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        rotate: [360, 0],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">

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
                        &lt;about_me /&gt;
                    </motion.span>
                        
                    <h2 className="text-5xl md:text-6xl font-bold">
                        <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Crafting Digital Excellence
                        </span>
                    </h2>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">

                    {/* LEFT — TEXT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="space-y-6"
                    >
                        <div className="relative">
                            <motion.div
                                className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-500 rounded-full"
                                initial={{ height: 0 }}
                                whileInView={{ height: '100%' }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.3 }}
                            />

                            <div className="space-y-6 pl-8">
                                <p className="text-xl text-gray-300 leading-relaxed">
                                    I'm Kanishak Todwal, a full-stack developer who focuses on building{' '}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-semibold">
                                        reliable
                                    </span>
                                    {' '}and{' '}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold">
                                        scalable systems
                                    </span>
                                    . I care deeply about clean architecture, performance, and writing code
  that remains easy to understand and extend.
                                </p>

                                <p className="text-lg text-gray-400 leading-relaxed">
                                    Every line of code I write serves a purpose: performance, maintainability, and
                                    user experience. From optimizing database queries to crafting pixel-perfect UIs,
                                    I obsess over the details that matter.
                                </p>

                                <p className="text-lg text-gray-400 leading-relaxed">
                                    My superpower? Taking complex business problems and transforming them into
                                    intuitive, high-performance applications that users love and stakeholders trust.
                                </p>
                            </div>
                        </div>

                        {/* Highlight Stats */}
                        <div className="grid grid-cols-2 gap-4 pt-6">
                            {highlights.map((item, i) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 + i * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="relative group"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative p-6 rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700 backdrop-blur-sm group-hover:border-cyan-500/50 transition-colors">
                                        <item.icon className="w-6 h-6 text-cyan-400 mb-2" />
                                        <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-1">
                                            {item.number}
                                        </div>
                                        <div className="text-sm text-gray-400">{item.label}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* RIGHT — TECH STACK 3D CARDS */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                        className="relative"
                    >
                        {/* Glowing Background Card */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/2 to-purple-300/2 rounded-3xl blur-2xl" />

                        <div className="relative grid grid-cols-2 gap-6">
                            {techStack.map((tech, i) => (
                                <motion.div
                                    key={tech.name}
                                    initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                                    whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: i * 0.1,
                                        duration: 0.6,
                                        type: 'spring',
                                        stiffness: 100,
                                    }}
                                    whileHover={{
                                        y: -10,
                                        scale: 1.05,
                                        rotateY: 5,
                                        rotateX: 5,
                                    }}
                                    onHoverStart={() => setHoveredTech(tech.name)}
                                    onHoverEnd={() => setHoveredTech(null)}
                                    className="group relative cursor-pointer perspective-1000"
                                    style={{ transformStyle: 'preserve-3d' }}
                                >
                                    {/* Glow Effect (REDUCED INTENSITY) */}
                                    <motion.div
                                        className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 bg-gradient-to-r ${tech.color} blur-md`}
                                        animate={{
                                            scale: hoveredTech === tech.name ? [1, 1.08, 1] : 1,
                                        }}
                                        transition={{ duration: 2.5, repeat: Infinity }}
                                    />

                                    {/* Card */}
                                    <div className="relative rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-800 p-6 backdrop-blur-sm group-hover:border-transparent transition-all duration-300">
                                        {/* Gradient Overlay on Hover (SOFTER) */}
                                        <div
                                            className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${tech.color}`}
                                        />

                                        {/* Icon */}
                                        <motion.div
                                            animate={{
                                                rotateY: hoveredTech === tech.name ? 360 : 0,
                                            }}
                                            transition={{ duration: 0.6 }}
                                            className="relative z-10 mb-4"
                                        >
                                            <tech.icon
                                                className={`w-10 h-10 text-gray-400 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${tech.color} transition-all duration-300`}
                                            />
                                        </motion.div>

                                        {/* Tech Name */}
                                        <h3 className="relative z-10 text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300">
                                            {tech.name}
                                        </h3>

                                        {/* Description */}
                                        <p className="relative z-10 text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                                            {tech.desc}
                                        </p>

                                        {/* Corner Accent (LOW INTENSITY) */}
                                        <motion.div
                                            className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-300`}
                                            initial={{ scale: 0.8 }}
                                            whileHover={{ scale: 1 }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>


                        {/* Floating Tech Badges */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1 }}
                            className="mt-8 flex flex-wrap gap-3 justify-center"
                        >
                            {['TypeScript', 'ReactJs', 'Express', 'NodeJs', 'MongoDB'].map((badge, i) => (
                                <motion.span
                                    key={badge}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 1.2 + i * 0.1 }}
                                    whileHover={{ scale: 1.1, y: -3 }}
                                    className="px-4 py-2 text-sm bg-gray-900/50 border border-gray-800 rounded-full text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all cursor-pointer backdrop-blur-sm"
                                >
                                    {badge}
                                </motion.span>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

                {/* Bottom CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="text-center"
                >
                    <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700 backdrop-blur-sm">
                        <p className="text-lg text-gray-300 mb-6 max-w-2xl">
                            Looking for someone who can turn your vision into reality?
                            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-semibold">
                                Let's build something extraordinary together.
                            </span>
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow"
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Let's Talk
                        </motion.button>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default About;