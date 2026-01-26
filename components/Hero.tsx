'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, Sparkles, Code, Rocket } from 'lucide-react';

const Hero = () => {
    const [currentWord, setCurrentWord] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [typedText, setTypedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

    const words = ["Scalable", "High-Performance", "Production-Ready", "Innovative"];
    const fullText = words[currentWord];

    // Typing effect
    useEffect(() => {
        const typingSpeed = isDeleting ? 50 : 100;
        const pauseTime = isDeleting ? 500 : 2000;

        const timer = setTimeout(() => {
            if (!isDeleting && typedText === fullText) {
                setTimeout(() => setIsDeleting(true), pauseTime);
            } else if (isDeleting && typedText === '') {
                setIsDeleting(false);
                setCurrentWord((prev) => (prev + 1) % words.length);
            } else {
                setTypedText(
                    isDeleting
                        ? fullText.substring(0, typedText.length - 1)
                        : fullText.substring(0, typedText.length + 1)
                );
            }
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [typedText, isDeleting, fullText]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (

        <section className="relative min-h-screen flex items-centerjustify-left px-6 overflow-hidden pt-24">

            {/* Advanced Custom Cursor */}
            <motion.div
                className="fixed w-6 h-6 border-2 border-cyan-500 rounded-full pointer-events-none z-50 mix-blend-difference hidden md:block"
                animate={{ x: mousePosition.x - 12, y: mousePosition.y - 12 }}
                transition={{ type: "spring", stiffness: 500, damping: 28 }}
            />
            <motion.div
                className="fixed w-2 h-2 bg-cyan-500 rounded-full pointer-events-none z-50 hidden md:block"
                animate={{ x: mousePosition.x - 4, y: mousePosition.y - 4 }}
                transition={{ type: "spring", stiffness: 800, damping: 35 }}
            />

            {/* Animated Grid Background */}
            <div className="fixed inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
            linear-gradient(to right, rgba(6,182,212,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(6,182,212,0.1) 1px, transparent 1px)
          `,
                    backgroundSize: '50px 50px'
                }} />
            </div>

            {/* Animated Background Gradient */}
            <div className="fixed inset-0 opacity-30">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 via-purple-600/20 to-pink-600/20 animate-pulse" style={{ animationDuration: '8s' }} />
            </div>

            {/* Enhanced 3D Floating Orbs with Glow */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full blur-3xl"
                        style={{
                            width: i < 3 ? '400px' : '200px',
                            height: i < 3 ? '400px' : '200px',
                            background: i === 0 ? 'radial-gradient(circle, rgba(6,182,212,0.4) 0%, transparent 70%)'
                                : i === 1 ? 'radial-gradient(circle, rgba(168,85,247,0.4) 0%, transparent 70%)'
                                    : i === 2 ? 'radial-gradient(circle, rgba(236,72,153,0.4) 0%, transparent 70%)'
                                        : i === 3 ? 'radial-gradient(circle, rgba(34,211,238,0.3) 0%, transparent 70%)'
                                            : 'radial-gradient(circle, rgba(192,132,252,0.3) 0%, transparent 70%)',
                            left: i < 3 ? `${20 + i * 30}%` : `${10 + i * 20}%`,
                            top: i < 3 ? `${10 + i * 20}%` : `${50 + i * 10}%`,
                        }}
                        animate={{
                            x: [0, 100 + i * 20, 0],
                            y: [0, -100 - i * 20, 0],
                            scale: [1, 1.2 + i * 0.1, 1],
                            rotate: [0, 360],
                        }}
                        transition={{
                            duration: 20 + i * 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-400/50 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [-20, -100],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                            ease: "easeOut"
                        }}
                    />
                ))}
            </div>

            {/* <motion.div style={{ opacity, scale }} className="relative z-10 max-w-6xl mx-auto text-left"> */}
            <motion.div
                style={{ opacity, scale }}
                className="relative z-10 max-w-6xl mx-auto w-full"
            >
                  <div className="max-w-3xl"></div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Animated Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 backdrop-blur-sm"
                    >
                        <Sparkles className="w-4 h-4 text-cyan-400" />
                        <span className="text-cyan-400 font-mono text-sm">Available for Opportunities</span>
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-2 h-2 bg-green-500 rounded-full"
                        />
                    </motion.div>

                    <motion.p
                        className="text-cyan-400 font-mono text-sm md:text-base mb-4 tracking-wider flex items-center gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <Code className="w-4 h-4" />
                        &lt;Full-Stack Developer /&gt;
                    </motion.p>

                    {/* Main Heading with Typing Effect */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="block mb-2"
                        >
                            I Design & Build{' '}
                        </motion.span>

                        <span className="relative inline-block min-h-[1.2em]">
                            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                {typedText}
                                <motion.span
                                    animate={{ opacity: [1, 0] }}
                                    transition={{ duration: 0.8, repeat: Infinity }}
                                    className="inline-block w-1 h-[0.9em] bg-cyan-400 ml-1"
                                />
                            </span>

                            {/* Glowing Underline */}
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${(typedText.length / fullText.length) * 100}%` }}
                                transition={{ duration: 0.3 }}
                                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full"
                                style={{
                                    boxShadow: '0 0 20px rgba(6,182,212,0.5)'
                                }}
                            />
                        </span>

                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="block mt-2"
                        >
                            Web Applications
                        </motion.span>
                    </h1>

                    {/* Enhanced Subheading with Animation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="relative mb-10"
                    >
                        <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
                            Transforming real-world problems into{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-semibold">
                                clean, scalable web applications.
                            </span>
                            {' '}Focused on performance, maintainability, and user-centric design.
                        </p>

                        {/* Stats Row */}
                        <div className="flex flex-wrap gap-6 mt-6 text-sm">

                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="flex items-center gap-2"
                            >
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                <span className="text-gray-400">2+ Years Learning & Building</span>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="flex items-center gap-2"
                            >
                                <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
                                <span className="text-gray-400">12+ Projects Built</span>
                            </motion.div>
                        </div>

                    </motion.div>

                    {/* Enhanced CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(6,182,212,0.5)' }}
                            whileTap={{ scale: 0.95 }}
                            className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/50 transition-all relative overflow-hidden"
                            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500"
                                initial={{ x: '-100%' }}
                                whileHover={{ x: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                            <span className="relative z-10 flex items-center gap-2">
                                View Projects
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group px-8 py-4 border-2 border-cyan-500 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all relative overflow-hidden"
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            <motion.div
                                className="absolute inset-0 bg-cyan-500/5"
                                initial={{ scale: 0, opacity: 0 }}
                                whileHover={{ scale: 1.5, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            />
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                Hire Me
                                <Rocket size={18} className="group-hover:translate-y-[-2px] transition-transform" />
                            </span>
                        </motion.button>
                    </motion.div>

                    {/* Tech Stack Preview */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="mt-12 flex items-center gap-4"
                    >
                        <span className="text-sm text-gray-500 font-mono">Tech Stack:</span>
                        <div className="flex gap-3">
                            {['React', 'Next.js', 'Node.js', 'TypeScript', 'Express'].map((tech, i) => (
                                <motion.div
                                    key={tech}
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1.3 + i * 0.1 }}
                                    whileHover={{ scale: 1.2, y: -5 }}
                                    className="px-3 py-1 text-xs bg-gray-900/50 border border-gray-800 rounded-full text-cyan-400 backdrop-blur-sm hover:border-cyan-500 transition-colors cursor-pointer"
                                >
                                    {tech}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
          

            
            </motion.div>

            {/* Enhanced Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <span className="text-xs text-gray-500 font-mono">Scroll Down</span>
                <motion.div
                    animate={{
                        y: [0, 10, 0],
                        opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <ChevronDown size={32} className="text-cyan-500" />
                </motion.div>
            </motion.div>

            {/* Spotlight Effect */}
            <motion.div
                className="fixed pointer-events-none z-30 opacity-30"
                style={{
                    background: 'radial-gradient(circle 300px at var(--mouse-x) var(--mouse-y), rgba(6,182,212,0.15), transparent 80%)',
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 0,
                }}
                animate={{
                    '--mouse-x': `${mousePosition.x}px`,
                    '--mouse-y': `${mousePosition.y}px`,
                } as any}
            />
        </section>
    );
};

export default Hero;