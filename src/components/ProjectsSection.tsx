import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Cpu, HeartPulse, Bus, Home, Globe, CheckCircle2, Loader2, RefreshCw, ShoppingCart, MessageSquareText, CheckSquare, Layout } from 'lucide-react';
import { ModalLinkPlaceholder } from './ModalLinkPlaceholder';
import { GithubIcon } from './SocialIcons';
import { INITIAL_PROJECTS, type ProjectItem } from '../../api/_data';

const getIconForCategory = (category: string, slug?: string) => {
  if (slug === 'ecommerce-app') return ShoppingCart;
  if (slug === 'blog-platform') return MessageSquareText;
  if (slug === 'task-manager') return CheckSquare;
  if (slug === 'personal-portfolio') return Layout;
  if (category.includes('Healthcare') || category.includes('AIoT')) return HeartPulse;
  if (category.includes('Mobility') || category.includes('Transport')) return Bus;
  if (category.includes('Automation') || category.includes('Home')) return Home;
  if (category.includes('Web') || category.includes('Cloud')) return Globe;
  return Cpu;
};

export const ProjectsSection: React.FC = () => {
  const [activeModal, setActiveModal] = useState<{ isOpen: boolean; title: string; type: 'live' | 'repo' }>({
    isOpen: false,
    title: '',
    type: 'live',
  });

  const [projects, setProjects] = useState<ProjectItem[]>(INITIAL_PROJECTS);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [dataSource, setDataSource] = useState<'database' | 'fallback' | null>(null);

  const openPlaceholder = (title: string, type: 'live' | 'repo') => {
    setActiveModal({ isOpen: true, title, type });
  };

  const handleLiveClick = (project: ProjectItem) => {
    if (project.liveDemo) {
      window.open(project.liveDemo, '_blank', 'noopener,noreferrer');
    } else {
      openPlaceholder(project.title, 'live');
    }
  };

  const handleRepoClick = (project: ProjectItem) => {
    if (project.github) {
      window.open(project.github, '_blank', 'noopener,noreferrer');
    } else {
      openPlaceholder(project.title, 'repo');
    }
  };

  const fetchProjects = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/projects');
      if (res.ok) {
        const data = await res.json();
        if (data.projects && Array.isArray(data.projects) && data.projects.length > 0) {
          setProjects(data.projects);
          setDataSource(data.source || 'database');
        }
      }
    } catch (err) {
      console.warn('API fetch error for projects, falling back to static data:', err);
      setDataSource('fallback');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-20 bg-[#0C0D10] relative">
      <div className="absolute inset-0 bg-hud-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-[#13151D] border border-[#61DDF2]/40 px-3.5 py-1 rounded-full text-xs font-mono-tech text-[#61DDF2]">
            <Cpu className="w-3.5 h-3.5 text-[#D7A84B]" />
            <span>CORE_PROJECT_MODULES // REAL-WORLD IMPLEMENTATIONS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-tech text-[#F2F0EA]">
            Project <span className="text-[#A61C24]">Highlights</span>
          </h2>

          <p className="text-sm sm:text-base text-[#9BA1B0] font-sans">
            Engineered hardware-software solutions combining microcontroller sensor networks, Flutter mobile interfaces, cloud alert pipelines, and deployed web application platforms.
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

            <button
              onClick={fetchProjects}
              className="p-1 text-[#9BA1B0] hover:text-[#61DDF2] transition-colors"
              title="Refresh projects telemetry"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = getIconForCategory(project.category, project.slug);
            const borderStyle = project.borderStyle || 'border-[#A61C24]/60 hover:border-[#E62429]';
            const glowColor = project.glowColor || 'shadow-[0_0_25px_rgba(166,28,36,0.25)]';

            return (
              <motion.div
                key={project.id || project.slug || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col justify-between rounded-xl bg-[#13151D] border ${borderStyle} ${glowColor} p-6 sm:p-8 transition-all duration-300 hud-corner-box group`}
              >
                <div>
                  
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                    <div className="flex items-center space-x-3">
                      <div className="p-2.5 rounded-lg bg-[#0C0D10] border border-[#61DDF2]/30 text-[#61DDF2] group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-[#61DDF2]" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono-tech text-[#D7A84B] tracking-wider uppercase block">
                          {project.category}
                        </span>
                        <span className="text-xs font-mono-tech text-[#9BA1B0]">MODULE_0{index + 1}</span>
                      </div>
                    </div>

                    <span className="px-3 py-1 rounded-full bg-[#A61C24]/20 border border-[#A61C24]/50 text-[11px] font-mono-tech text-[#F2F0EA]">
                      {project.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-tech text-[#F2F0EA] mb-3 group-hover:text-[#D7A84B] transition-colors">
                    {project.title}
                  </h3>

                  <div className="mb-5 p-3.5 bg-[#0C0D10] rounded-lg border-l-2 border-[#D7A84B] text-xs sm:text-sm text-[#F2F0EA] font-medium leading-relaxed">
                    <span className="text-[#D7A84B] font-mono-tech font-bold uppercase block text-[10px] mb-1">VALUE PROPOSITION</span>
                    {project.valueProp}
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="text-xs font-mono-tech text-[#61DDF2] uppercase tracking-wider font-semibold">
                      ENGINEERING HIGHLIGHTS:
                    </div>
                    <ul className="space-y-2.5">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-[#9BA1B0]">
                          <CheckCircle2 className="w-4 h-4 text-[#A61C24] shrink-0 mt-0.5" />
                          <span className="leading-snug">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                <div className="pt-6 border-t border-white/10 space-y-4">
                  
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2.5 py-0.5 rounded bg-[#0C0D10] border border-[#61DDF2]/30 text-[11px] font-mono-tech text-[#61DDF2]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <button
                      onClick={() => handleLiveClick(project)}
                      className="inline-flex items-center space-x-1.5 text-xs font-tech font-bold text-[#F2F0EA] hover:text-[#61DDF2] px-3.5 py-2 rounded bg-[#0C0D10] border border-white/15 hover:border-[#61DDF2] transition-colors focus:outline-none focus:ring-1 focus:ring-[#61DDF2]"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-[#61DDF2]" />
                      <span>{project.liveDemo ? 'Launch Web App' : 'Live Demo Link'}</span>
                    </button>

                    <button
                      onClick={() => handleRepoClick(project)}
                      className="inline-flex items-center space-x-1.5 text-xs font-tech font-bold text-[#F2F0EA] hover:text-[#D7A84B] px-3.5 py-2 rounded bg-[#0C0D10] border border-white/15 hover:border-[#D7A84B] transition-colors focus:outline-none focus:ring-1 focus:ring-[#D7A84B]"
                    >
                      <GithubIcon className="w-3.5 h-3.5 text-[#D7A84B]" />
                      <span>{project.github ? 'View Code Repository' : 'Repository Link'}</span>
                    </button>
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

      </div>

      <ModalLinkPlaceholder
        isOpen={activeModal.isOpen}
        onClose={() => setActiveModal({ ...activeModal, isOpen: false })}
        title={activeModal.title}
        type={activeModal.type}
      />

    </section>
  );
};
