import React from 'react';
import { motion } from 'framer-motion';
import { ArcReactorVisual } from './ArcReactorVisual';
import { ChevronRight, ArrowDown, Terminal, Zap, Cpu, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-hud-grid bg-radial-arc">
      
      {/* HUD Tactical Background Telemetry */}
      <div className="absolute top-20 left-6 hidden md:block font-mono-tech text-[11px] text-[#61DDF2]/40 tracking-widest space-y-1 select-none pointer-events-none">
        <div>SYS.POS: LAT 12.92° N / LONG 80.04° E</div>
        <div>ARMOR_INTEGRITY: 100%</div>
        <div>CORE_SYNC: ACTIVE</div>
      </div>

      <div className="absolute top-20 right-6 hidden md:block font-mono-tech text-[11px] text-[#D7A84B]/40 tracking-widest text-right space-y-1 select-none pointer-events-none">
        <div>PROTOCOL: JARVIS_HUD_v4.2</div>
        <div>TARGET: EMBEDDED_&amp;_FULLSTACK_INTERNSHIP</div>
        <div>SYS_FREQ: 240 MHz (ESP32)</div>
      </div>

      {/* Decorative Radial HUD Lines */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-20">
        <div className="w-[600px] h-[600px] rounded-full border border-[#61DDF2]/20" />
        <div className="w-[850px] h-[850px] rounded-full border border-[#A61C24]/20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Content */}
          <motion.div 
            className="lg:col-span-7 space-y-6 text-left"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            
            {/* Conceptual JARVIS System Status Banner */}
            <div className="inline-flex items-center space-x-2 bg-[#13151D] border border-[#D7A84B]/40 px-3.5 py-1.5 rounded-full text-xs font-mono-tech text-[#D7A84B] shadow-[0_0_15px_rgba(215,168,75,0.2)]">
              <span className="w-2 h-2 rounded-full bg-[#61DDF2] animate-pulse" />
              <span className="uppercase tracking-widest">SYSTEM ONLINE // STATUS: OPEN TO OPPORTUNITIES</span>
            </div>

            <div className="space-y-1">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-tech tracking-tight text-[#F2F0EA]">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F2F0EA] via-[#F5C542] to-[#D7A84B] drop-shadow-[0_2px_10px_rgba(215,168,75,0.3)]">
                  ARUNAGIRI S
                </span>
              </h1>
              <p className="font-mono-tech text-xs sm:text-sm text-[#61DDF2] tracking-widest uppercase">
                B.E. Electronics and Communication Engineering
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-lg bg-[#13151D]/90 border-l-4 border-[#A61C24] border-y border-r border-[#D7A84B]/20 hud-corner-box shadow-xl">
              <p className="text-base sm:text-lg font-medium text-[#F2F0EA] leading-relaxed">
                “Building connected systems that unite embedded microcontrollers, edge AI, mobile applications, and cloud platforms to solve real-world problems.”
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#9BA1B0] leading-relaxed max-w-2xl font-sans">
              Specialized in engineering end-to-end hardware-software solutions across AIoT smart elder care, intelligent transport monitoring, home automation microcontrollers, and cloud-deployed web applications.
            </p>

            {/* Core Focus Areas */}
            <div className="pt-1 flex flex-wrap gap-2 text-xs font-mono-tech">
              <span className="bg-[#0C0D10] border border-[#A61C24]/50 px-2.5 py-1 rounded text-[#F2F0EA]">Embedded Systems</span>
              <span className="bg-[#0C0D10] border border-[#61DDF2]/50 px-2.5 py-1 rounded text-[#61DDF2]">IoT / AIoT</span>
              <span className="bg-[#0C0D10] border border-[#D7A84B]/50 px-2.5 py-1 rounded text-[#D7A84B]">Electronics</span>
              <span className="bg-[#0C0D10] border border-[#61DDF2]/50 px-2.5 py-1 rounded text-[#61DDF2]">Full-Stack Dev</span>
              <span className="bg-[#0C0D10] border border-[#A61C24]/50 px-2.5 py-1 rounded text-[#F2F0EA]">AI / ML</span>
              <span className="bg-[#0C0D10] border border-[#D7A84B]/50 px-2.5 py-1 rounded text-[#D7A84B]">Cloud Systems</span>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-wrap gap-3 items-center">
              <a 
                href="#projects"
                className="group inline-flex items-center space-x-2 bg-[#A61C24] hover:bg-[#E62429] text-[#F2F0EA] font-tech font-bold uppercase tracking-wider px-5 py-3 rounded shadow-[0_0_20px_rgba(166,28,36,0.6)] transition-all hover:-translate-y-0.5 border border-[#F5C542]/40 text-xs sm:text-sm"
              >
                <Cpu className="w-4 h-4 text-[#F5C542]" />
                <span>View Projects</span>
              </a>

              <a 
                href="#contact"
                className="inline-flex items-center space-x-2 bg-[#13151D] hover:bg-[#1A1D29] text-[#61DDF2] font-tech font-semibold uppercase tracking-wider px-5 py-3 rounded border border-[#61DDF2]/40 shadow-[0_0_15px_rgba(97,221,242,0.15)] hover:border-[#61DDF2] transition-all text-xs sm:text-sm"
              >
                <ChevronRight className="w-4 h-4 text-[#61DDF2]" />
                <span>Contact Me</span>
              </a>

              <a 
                href="mailto:arunofficial311@gmail.com?subject=Resume%20Request%20-%20Arunagiri%20S"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-[#13151D] hover:bg-[#1A1D29] text-[#D7A84B] font-tech font-semibold uppercase tracking-wider px-5 py-3 rounded border border-[#D7A84B]/40 shadow-[0_0_15px_rgba(215,168,75,0.15)] hover:border-[#D7A84B] transition-all text-xs sm:text-sm"
              >
                <FileText className="w-4 h-4 text-[#F5C542]" />
                <span>Download Resume</span>
              </a>

              <a 
                href="https://github.com/ARUNAGIRI-S"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#13151D] hover:bg-[#1A1D29] text-[#F2F0EA] hover:text-[#D7A84B] border border-white/10 hover:border-[#D7A84B] rounded transition-all"
                title="GitHub Profile"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4 text-[#D7A84B]" />
              </a>

              <a 
                href="https://www.linkedin.com/in/arunagiri-ece"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#13151D] hover:bg-[#1A1D29] text-[#F2F0EA] hover:text-[#61DDF2] border border-white/10 hover:border-[#61DDF2] rounded transition-all"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4 text-[#61DDF2]" />
              </a>
            </div>

          </motion.div>

          {/* Right Visual Console Frame */}
          <motion.div 
            className="lg:col-span-5 flex flex-col items-center justify-center relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div className="relative p-6 sm:p-8 rounded-2xl bg-[#13151D]/90 border border-[#D7A84B]/30 shadow-[0_0_40px_rgba(0,0,0,0.9)] hud-corner-box text-center w-full max-w-md">
              
              <div className="flex items-center justify-between font-mono-tech text-[11px] text-[#61DDF2] pb-4 mb-4 border-b border-[#D7A84B]/20">
                <span className="flex items-center space-x-1.5">
                  <Terminal className="w-3.5 h-3.5 text-[#D7A84B]" />
                  <span>JARVIS_TELEMETRY</span>
                </span>
                <span className="text-[#D7A84B]">CORE: 100%</span>
              </div>

              <div className="py-4 flex justify-center">
                <ArcReactorVisual size={240} />
              </div>

              {/* HUD Diagnostics Table */}
              <div className="mt-4 pt-4 border-t border-[#61DDF2]/20 space-y-2 text-left font-mono-tech text-xs">
                <div className="flex items-center justify-between bg-[#0C0D10] p-2 rounded border border-white/10">
                  <span className="text-[#9BA1B0] uppercase text-[10px]">IDENTITY</span>
                  <span className="text-[#F2F0EA] font-semibold">ARUNAGIRI S</span>
                </div>
                <div className="flex items-center justify-between bg-[#0C0D10] p-2 rounded border border-white/10">
                  <span className="text-[#9BA1B0] uppercase text-[10px]">DISCIPLINE</span>
                  <span className="text-[#61DDF2] font-semibold">ECE UNDERGRAD</span>
                </div>
                <div className="flex items-center justify-between bg-[#0C0D10] p-2 rounded border border-white/10">
                  <span className="text-[#9BA1B0] uppercase text-[10px]">SYSTEM STATUS</span>
                  <span className="text-[#D7A84B] font-semibold">OPEN FOR INTERNSHIPS</span>
                </div>
              </div>

              <div className="mt-4 text-[11px] font-mono-tech text-[#D7A84B] flex items-center justify-center space-x-1">
                <Zap className="w-3.5 h-3.5 text-[#F5C542] animate-bounce" />
                <span>READY FOR DEPLOYMENT</span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-1 text-[#61DDF2]/60 hover:text-[#61DDF2] transition-colors">
        <span className="font-mono-tech text-[10px] tracking-widest uppercase">SCROLL FOR SYSTEM DATA</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </div>

    </section>
  );
};
