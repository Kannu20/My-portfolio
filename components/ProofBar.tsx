'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Users, Zap, Award } from 'lucide-react';

const ProofBar = () => {
  const stats = [
    { icon: Code2, label: 'Projects Built', value: '12+' },
    { icon: Users, label: 'Internships', value: '2' },
    { icon: Zap, label: 'Tech Stack', value: 'MERN + Next.js' },
    { icon: Award, label: 'Hackathons / Events', value: '3+' }
  ];

  return (
    <section className="relative z-10 py-12 border-y border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-cyan-400" />
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofBar;
