import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Building2, CheckCircle2, Loader2 } from 'lucide-react';
import { INITIAL_EXPERIENCES, type ExperienceItem } from '../../api/_data';

export const ExperienceSection: React.FC = () => {
  const [experiences, setExperiences] = useState<ExperienceItem[]>(INITIAL_EXPERIENCES);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [dataSource, setDataSource] = useState<'database' | 'fallback' | null>(null);

  const fetchExperience = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/experience');
      if (res.ok) {
        const data = await res.json();
        if (data.experience && Array.isArray(data.experience) && data.experience.length > 0) {
          setExperiences(data.experience);
          setDataSource(data.source || 'database');
        }
      }
    } catch (err) {
      console.warn('API fetch error for experience, using fallback data:', err);
      setDataSource('fallback');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchExperience();
  }, []);

  return (
    <section id="experience" className="py-20 bg-[#0C0D10] relative border-t border-white/10">
      
      <div className="absolute inset-0 bg-hud-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-[#13151D] border border-[#D7A84B]/40 px-3.5 py-1 rounded-full text-xs font-mono-tech text-[#D7A84B]">
            <Briefcase className="w-3.5 h-3.5 text-[#A61C24]" />
            <span>COMMISSION_LOG // TIMELINE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-tech text-[#F2F0EA]">
            Experience &amp; <span className="text-[#A61C24]">Leadership</span>
          </h2>

          <p className="text-sm sm:text-base text-[#9BA1B0] font-sans">
            Chronological log of industry internships, hardware engineering training, and student council leadership roles.
          </p>

          <div className="flex items-center justify-center space-x-3 text-xs font-mono-tech pt-1">
            <span className="text-[#9BA1B0]">DATA SOURCE:</span>
            {isLoading ? (
              <span className="inline-flex items-center space-x-1 text-[#D7A84B]">
                <Loader2 className="w-3 h-3 animate-spin" />
                <span>FETCHING_API...</span>
              </span>
            ) : (
              <span className={`px-2 py-0.5 rounded border uppercase text-[10px] ${
                dataSource === 'database' 
                  ? 'border-[#61DDF2]/60 text-[#61DDF2] bg-[#61DDF2]/10' 
                  : 'border-[#D7A84B]/60 text-[#D7A84B] bg-[#D7A84B]/10'
              }`}>
                {dataSource === 'database' ? 'MongoDB Atlas (API)' : 'Verified Fallback Data'}
              </span>
            )}
          </div>
        </div>

        <div className="relative border-l-2 border-[#D7A84B]/40 ml-4 sm:ml-8 md:ml-12 space-y-12 pl-6 sm:pl-10">
          
          {experiences.map((exp, index) => {
            const badgeColor = exp.badgeColor || 'bg-[#D7A84B]/20 border-[#D7A84B]/50 text-[#D7A84B]';

            return (
              <motion.div
                key={exp.role + exp.period + index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="relative bg-[#13151D] border border-[#D7A84B]/30 rounded-xl p-6 sm:p-8 hud-corner-box shadow-xl hover:border-[#D7A84B] transition-colors"
              >
                <div className="absolute -left-[31px] sm:-left-[47px] top-6 w-5 h-5 rounded-full bg-[#0C0D10] border-2 border-[#A61C24] flex items-center justify-center shadow-[0_0_10px_rgba(166,28,36,0.8)]">
                  <div className="w-2 h-2 rounded-full bg-[#61DDF2] animate-pulse" />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-white/10">
                  <span className={`px-3 py-1 rounded text-xs font-mono-tech border ${badgeColor}`}>
                    {exp.category}
                  </span>

                  <div className="flex items-center space-x-2 text-xs font-mono-tech text-[#61DDF2]">
                    <Calendar className="w-3.5 h-3.5 text-[#D7A84B]" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-tech text-[#F2F0EA] mb-1">
                  {exp.role}
                </h3>

                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-mono-tech text-[#D7A84B] mb-5">
                  <span className="flex items-center space-x-1">
                    <Building2 className="w-4 h-4 text-[#A61C24]" />
                    <span>{exp.organization}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center space-x-1 text-[#9BA1B0]">
                    <MapPin className="w-3.5 h-3.5 text-[#61DDF2]" />
                    <span>{exp.location}</span>
                  </span>
                </div>

                <ul className="space-y-2.5">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-[#9BA1B0]">
                      <CheckCircle2 className="w-4 h-4 text-[#61DDF2] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
};
