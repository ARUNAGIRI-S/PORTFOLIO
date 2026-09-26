import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu, Activity } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['about', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#0C0D10]/95 backdrop-blur-md border-b border-[#D7A84B]/30 shadow-[0_4px_25px_rgba(0,0,0,0.8)] py-3' 
        : 'bg-gradient-to-b from-[#0C0D10] to-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          <a 
            href="#hero" 
            className="group flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-[#61DDF2] rounded-lg p-1"
          >
            <div className="relative w-9 h-9 rounded-md bg-[#13151D] border border-[#A61C24] flex items-center justify-center overflow-hidden group-hover:border-[#D7A84B] transition-colors shadow-[0_0_10px_rgba(166,28,36,0.3)]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#A61C24]/30 to-[#61DDF2]/10 opacity-60" />
              <Cpu className="w-5 h-5 text-[#61DDF2] group-hover:rotate-45 transition-transform duration-500" />
            </div>
            <div>
              <span className="font-tech text-lg sm:text-xl font-bold tracking-wider text-[#F2F0EA] group-hover:text-[#D7A84B] transition-colors">
                ARUNAGIRI S
              </span>
              <div className="flex items-center space-x-2 text-[10px] font-mono-tech text-[#9BA1B0] tracking-widest">
                <span className="text-[#61DDF2]">STARK_CORE</span>
                <span>//</span>
                <span className="text-[#D7A84B]">ECE</span>
              </div>
            </div>
          </a>

          <nav className="hidden md:flex items-center space-x-1 border border-[#D7A84B]/20 bg-[#13151D]/80 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(0,0,0,0.5)]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-xs font-tech font-semibold uppercase tracking-widest transition-all rounded-full focus:outline-none focus:ring-1 focus:ring-[#61DDF2] ${
                    isActive 
                      ? 'text-[#61DDF2] bg-[#A61C24]/20 border border-[#61DDF2]/40 shadow-[0_0_10px_rgba(97,221,242,0.3)]' 
                      : 'text-[#F2F0EA]/80 hover:text-[#D7A84B] hover:bg-[#A61C24]/10'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center space-x-3 bg-[#13151D]/90 px-3 py-1.5 rounded border border-[#61DDF2]/20 text-[11px] font-mono-tech">
            <Activity className="w-3.5 h-3.5 text-[#61DDF2] animate-pulse" />
            <span className="text-[#9BA1B0]">SYS:</span>
            <span className="text-[#61DDF2] font-semibold tracking-wider">ONLINE</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#61DDF2] animate-ping" />
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md bg-[#13151D] border border-[#A61C24]/50 text-[#F2F0EA] hover:text-[#D7A84B] focus:outline-none focus:ring-2 focus:ring-[#61DDF2]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#61DDF2]" /> : <Menu className="w-6 h-6 text-[#D7A84B]" />}
          </button>

        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0C0D10]/98 border-b border-[#A61C24]/40 px-4 pt-3 pb-6 space-y-3 font-tech">
          <div className="flex items-center justify-between text-[11px] font-mono-tech text-[#61DDF2] pb-2 border-b border-white/10">
            <span>INTERFACE_MODE: HUD_MOBILE</span>
            <span className="text-[#D7A84B]">V4.2</span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 text-sm font-semibold tracking-widest uppercase text-[#F2F0EA] hover:text-[#D7A84B] hover:bg-[#A61C24]/20 border-l-2 border-[#A61C24] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 flex items-center justify-between text-xs font-mono-tech text-[#9BA1B0] px-2">
            <span>STATUS: READY</span>
            <span className="text-[#61DDF2]">8778165582</span>
          </div>
        </div>
      )}
    </header>
  );
};
