import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Zap, Target } from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  const achievements = [
    {
      title: 'First Prize — IoT & Smart Home Workshop Competition',
      description: 'Won 1st Prize and received a ₹1,500 cash prize for demonstrating the best IoT smart home automation solution.',
      highlight: '₹1,500 Cash Prize & Winner Trophy',
      icon: Trophy,
      borderStyle: 'border-[#D7A84B]/60 shadow-[0_0_20px_rgba(215,168,75,0.2)]',
      badgeColor: 'bg-[#D7A84B]/20 text-[#D7A84B] border-[#D7A84B]/50',
    },
    {
      title: 'Smart India Hackathon 2025 — Internal Selection',
      description: 'Successfully led the cross-functional engineering team through the institutional SIH selection process.',
      highlight: 'SIH 2025 Team Lead & Qualifier',
      icon: Target,
      borderStyle: 'border-[#A61C24]/60 shadow-[0_0_20px_rgba(166,28,36,0.2)]',
      badgeColor: 'bg-[#A61C24]/20 text-[#E62429] border-[#A61C24]/50',
    },
    {
      title: 'Prototype Parade — VIDYUTRENZ Technical Event',
      description: 'Showcased the IoT Smart Home Automation project at Chennai Institute of Technology before technical panels.',
      highlight: 'CIT Technical Showcase',
      icon: Star,
      borderStyle: 'border-[#61DDF2]/60 shadow-[0_0_20px_rgba(97,221,242,0.2)]',
      badgeColor: 'bg-[#61DDF2]/20 text-[#61DDF2] border-[#61DDF2]/50',
    },
    {
      title: 'National Hackathons: Chakravyuha 1.0 & HACKTRIX 24-hr',
      description: 'Participated in national-level hackathons Chakravyuha 1.0 and HACKTRIX 24-hour hackathon with IoT-focused prototype projects.',
      highlight: '24-Hour Hackathon Competitor',
      icon: Zap,
      borderStyle: 'border-[#D7A84B]/60 shadow-[0_0_20px_rgba(215,168,75,0.2)]',
      badgeColor: 'bg-[#D7A84B]/20 text-[#D7A84B] border-[#D7A84B]/50',
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-[#0C0D10] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-[#13151D] border border-[#A61C24]/40 px-3.5 py-1 rounded-full text-xs font-mono-tech text-[#A61C24]">
            <Trophy className="w-3.5 h-3.5 text-[#D7A84B]" />
            <span>HONORS // COMPETITION_AWARDS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-tech text-[#F2F0EA]">
            Key <span className="text-[#A61C24]">Achievements</span>
          </h2>
          <p className="text-sm sm:text-base text-[#9BA1B0] font-sans">
            Competitive honors, hackathon selections, awards, and technical prototype exhibitions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-[#13151D] border ${item.borderStyle} rounded-xl p-6 sm:p-8 hud-corner-box transition-transform hover:-translate-y-1`}
              >
                <div className="flex items-start justify-between pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-lg bg-[#0C0D10] border border-white/10 text-[#D7A84B]">
                      <Icon className="w-6 h-6 text-[#D7A84B]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono-tech text-[#61DDF2] uppercase block">
                        HONOR_LOG // 0{index + 1}
                      </span>
                      <span className={`px-2.5 py-0.5 rounded text-[11px] font-mono-tech border ${item.badgeColor}`}>
                        {item.highlight}
                      </span>
                    </div>
                  </div>
                </div>

                <h3 className="font-tech text-xl font-bold text-[#F2F0EA] mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-[#9BA1B0] leading-relaxed font-sans">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
