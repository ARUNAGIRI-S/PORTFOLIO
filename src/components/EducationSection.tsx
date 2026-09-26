import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, CheckCircle } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-16 bg-[#0C0D10] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-[#13151D] border border-[#61DDF2]/40 px-3.5 py-1 rounded-full text-xs font-mono-tech text-[#61DDF2]">
            <GraduationCap className="w-3.5 h-3.5 text-[#D7A84B]" />
            <span>ACADEMIC_CREDENTIALS // QUALIFICATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-tech text-[#F2F0EA]">
            Education
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-[#13151D] border-2 border-[#D7A84B]/40 rounded-2xl p-6 sm:p-8 hud-corner-box shadow-[0_0_30px_rgba(215,168,75,0.15)]"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-white/10">
            
            <div className="space-y-2">
              <span className="px-3 py-1 rounded bg-[#A61C24]/20 border border-[#A61C24]/50 text-xs font-mono-tech text-[#E62429]">
                UNDERGRADUATE DEGREE
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-tech text-[#F2F0EA]">
                B.E. Electronics &amp; Communication Engineering
              </h3>
              <p className="text-sm sm:text-base text-[#D7A84B] font-mono-tech">
                Adhi College of Engineering and Technology (Autonomous), Kanchipuram
              </p>
              <p className="text-xs text-[#9BA1B0] font-mono-tech">
                Affiliated to Anna University
              </p>
            </div>

            <div className="bg-[#0C0D10] p-4 rounded-xl border border-[#61DDF2]/40 text-center min-w-[160px] hud-corner-box">
              <div className="text-[10px] font-mono-tech text-[#9BA1B0] uppercase">ACADEMIC STANDING</div>
              <div className="text-3xl font-bold font-tech text-[#61DDF2] my-1 text-glow-cyan">
                7.93 <span className="text-sm text-[#9BA1B0]">/ 10</span>
              </div>
              <div className="text-[11px] font-mono-tech text-[#D7A84B]">CGPA SCORE</div>
            </div>

          </div>

          <div className="pt-6 flex flex-wrap items-center justify-between text-xs font-mono-tech text-[#9BA1B0] gap-4">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-[#61DDF2]" />
              <span>DURATION: <strong className="text-[#F2F0EA]">2024–2028 (Expected)</strong></span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-[#A61C24]" />
              <span>LOCATION: <strong className="text-[#F2F0EA]">Kanchipuram, Tamil Nadu</strong></span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-[#D7A84B]" />
              <span>STATUS: <strong className="text-[#61DDF2]">IN PROGRESS</strong></span>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
