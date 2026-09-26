import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Smartphone, Globe, Database, Wrench, ShieldCheck, Layers } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      skills: ['C', 'C++', 'Python', 'Dart', 'JavaScript'],
      accentColor: 'border-[#A61C24]/60 text-[#E62429]',
      badgeColor: 'bg-[#A61C24]/10 border-[#A61C24]/40 text-[#F2F0EA]',
    },
    {
      title: 'Embedded Systems & IoT',
      icon: Cpu,
      skills: [
        'ESP32',
        'ESP8266',
        'Arduino',
        'Sensor Interfacing',
        'UART/I2C/SPI Protocols',
        'AIoT',
        'Edge Computing',
        'Federated Learning',
        'Blynk IoT',
      ],
      accentColor: 'border-[#61DDF2]/60 text-[#61DDF2]',
      badgeColor: 'bg-[#61DDF2]/10 border-[#61DDF2]/40 text-[#61DDF2]',
    },
    {
      title: 'Mobile & Cloud',
      icon: Smartphone,
      skills: [
        'Flutter (Dart)',
        'Firebase Authentication',
        'Firestore',
        'Realtime Database',
        'Cloud Functions',
        'Firebase Cloud Messaging (FCM)',
      ],
      accentColor: 'border-[#D7A84B]/60 text-[#D7A84B]',
      badgeColor: 'bg-[#D7A84B]/10 border-[#D7A84B]/40 text-[#D7A84B]',
    },
    {
      title: 'Full-Stack Development',
      icon: Globe,
      skills: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'REST APIs', 'JWT', 'Vercel'],
      accentColor: 'border-[#A61C24]/60 text-[#E62429]',
      badgeColor: 'bg-[#A61C24]/10 border-[#A61C24]/40 text-[#F2F0EA]',
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['MongoDB', 'MongoDB Atlas', 'MongoDB Compass', 'MySQL'],
      accentColor: 'border-[#61DDF2]/60 text-[#61DDF2]',
      badgeColor: 'bg-[#61DDF2]/10 border-[#61DDF2]/40 text-[#61DDF2]',
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      skills: [
        'Git',
        'GitHub',
        'Arduino IDE',
        'Firebase Console',
        'Vercel (deployment & hosting)',
        'MATLAB',
        'MS Office Suite',
      ],
      accentColor: 'border-[#D7A84B]/60 text-[#D7A84B]',
      badgeColor: 'bg-[#D7A84B]/10 border-[#D7A84B]/40 text-[#D7A84B]',
    },
    {
      title: 'Additional Strengths',
      icon: ShieldCheck,
      skills: [
        'Team Leadership',
        'Cross-Functional Collaboration',
        'Problem Solving',
        'Project Management',
        'Public Speaking',
      ],
      accentColor: 'border-[#61DDF2]/60 text-[#61DDF2]',
      badgeColor: 'bg-[#0C0D10] border-[#D7A84B]/40 text-[#F2F0EA]',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-[#0C0D10] relative">
      
      {/* Background HUD subtle grid */}
      <div className="absolute inset-0 bg-hud-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-[#13151D] border border-[#A61C24]/40 px-3.5 py-1 rounded-full text-xs font-mono-tech text-[#A61C24]">
            <Layers className="w-3.5 h-3.5 text-[#D7A84B]" />
            <span>TECHNICAL_CAPABILITIES // REPERTOIRE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-tech text-[#F2F0EA]">
            Skills &amp; <span className="text-[#61DDF2]">Technologies</span>
          </h2>
          <p className="text-sm sm:text-base text-[#9BA1B0] font-sans">
            Categorized technical stack spanning embedded hardware programming, cloud infrastructure, mobile frameworks, web tech, and soft skills.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-[#13151D] border ${category.accentColor} rounded-xl p-6 hud-corner-box shadow-lg hover:shadow-[0_0_20px_rgba(215,168,75,0.15)] transition-all`}
              >
                
                {/* Category Header */}
                <div className="flex items-center space-x-3 pb-3 mb-4 border-b border-white/10">
                  <div className="p-2 rounded bg-[#0C0D10] border border-white/10">
                    <Icon className="w-5 h-5 text-[#D7A84B]" />
                  </div>
                  <div>
                    <h3 className="font-tech text-lg font-bold text-[#F2F0EA]">
                      {category.title}
                    </h3>
                    <span className="text-[10px] font-mono-tech text-[#9BA1B0] uppercase">
                      CAT_0{index + 1}
                    </span>
                  </div>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 rounded text-xs font-mono-tech border transition-transform hover:scale-105 ${category.badgeColor}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>

    </section>
  );
};
