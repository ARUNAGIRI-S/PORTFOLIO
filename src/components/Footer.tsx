import React from 'react';
import { ChevronUp, Cpu } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08090C] border-t border-[#D7A84B]/30 py-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-hud-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center space-x-3 text-center md:text-left">
            <div className="p-2 rounded bg-[#13151D] border border-[#A61C24] text-[#61DDF2]">
              <Cpu className="w-5 h-5 text-[#61DDF2]" />
            </div>
            <div>
              <div className="font-tech text-xl font-bold text-[#F2F0EA] tracking-wider">
                ARUNAGIRI S
              </div>
              <div className="text-xs font-mono-tech text-[#9BA1B0]">
                Electronics &amp; Communication Engineering | Embedded Systems &amp; Full-Stack
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            
            <a
              href="https://www.linkedin.com/in/arunagiri-ece"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-[#13151D] border border-white/10 hover:border-[#61DDF2] text-[#9BA1B0] hover:text-[#61DDF2] transition-colors focus:outline-none focus:ring-1 focus:ring-[#61DDF2]"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>

            <a
              href="https://github.com/ARUNAGIRI-S"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-[#13151D] border border-white/10 hover:border-[#D7A84B] text-[#9BA1B0] hover:text-[#D7A84B] transition-colors focus:outline-none focus:ring-1 focus:ring-[#D7A84B]"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>

            <button
              onClick={scrollToTop}
              className="group flex items-center space-x-2 px-4 py-2 rounded-lg bg-[#13151D] border border-[#A61C24]/60 hover:border-[#A61C24] text-xs font-mono-tech text-[#F2F0EA] hover:text-[#D7A84B] transition-colors focus:outline-none focus:ring-1 focus:ring-[#61DDF2]"
              aria-label="Back to top"
            >
              <span>BACK TO TOP</span>
              <ChevronUp className="w-4 h-4 text-[#A61C24] group-hover:-translate-y-1 transition-transform" />
            </button>

          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono-tech text-[#9BA1B0] gap-3">
          <div>
            © {new Date().getFullYear()} <strong className="text-[#F2F0EA]">Arunagiri S</strong>. Contact: <a href="mailto:arunofficial311@gmail.com" className="text-[#61DDF2] hover:underline">arunofficial311@gmail.com</a> | <a href="tel:8778165582" className="text-[#D7A84B] hover:underline">8778165582</a>
          </div>
          <div className="text-[11px] text-[#61DDF2]/70">
            JARVIS_PORTFOLIO // MONGODB_CONNECTED
          </div>
        </div>

      </div>
    </footer>
  );
};
