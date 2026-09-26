import React from 'react';
import { motion } from 'framer-motion';
import { User, Cpu, Zap, Layers, Binary } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#0C0D10] relative border-t border-[#D7A84B]/20">
      
      <div className="absolute inset-0 bg-hud-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-[#13151D] border border-[#D7A84B]/40 px-3.5 py-1 rounded-full text-xs font-mono-tech text-[#D7A84B]">
            <User className="w-3.5 h-3.5 text-[#61DDF2]" />
            <span>ENGINEER_PROFILE // BACKGROUND &amp; VISION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-tech text-[#F2F0EA]">
            About <span className="text-[#D7A84B]">Arunagiri S</span>
          </h2>
          <p className="text-sm sm:text-base text-[#9BA1B0] font-sans">
            Connecting hardware microcontrollers, cross-platform mobile apps, and cloud pipelines to build impactful real-world systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <motion.div 
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="p-6 sm:p-8 rounded-xl bg-[#13151D] border border-[#A61C24]/50 hud-corner-box shadow-[0_0_30px_rgba(0,0,0,0.8)] space-y-5">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs font-mono-tech text-[#61DDF2]">
                <span className="flex items-center space-x-2">
                  <Binary className="w-4 h-4 text-[#D7A84B]" />
                  <span>BIOGRAPHY // SYSTEM LOG</span>
                </span>
                <span className="text-[#D7A84B]">ECE UNDERGRADUATE</span>
              </div>

              <p className="text-base sm:text-lg text-[#F2F0EA] leading-relaxed font-sans font-normal">
                I’m an Electronics and Communication Engineering undergraduate who enjoys connecting software with the physical world. Through internships and team projects, I’ve built and explored embedded and IoT systems, Flutter apps, cloud-connected applications, and full-stack web projects.
              </p>

              <p className="text-sm sm:text-base text-[#9BA1B0] leading-relaxed font-sans">
                My work includes an AIoT elder-care system, a smart transportation platform, home automation, and four web applications deployed on Vercel. I’ve also taken on leadership roles in hackathons and campus innovation activities, where I’ve helped teams move from ideas to prototypes and presentations.
              </p>

              <div className="p-4 bg-[#0C0D10] rounded-lg border-l-4 border-[#61DDF2] text-xs sm:text-sm text-[#61DDF2] font-mono-tech">
                <span className="font-bold text-[#F5C542]">CURRENT OBJECTIVE:</span> I’m currently focused on embedded systems, IoT, AIoT, and Flutter and Firebase development, and I’m seeking internship opportunities in these fields.
              </div>

            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-5 space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            
            <div className="bg-[#13151D] p-6 rounded-xl border border-[#D7A84B]/40 hud-corner-box space-y-4">
              <h3 className="text-lg font-bold font-tech text-[#F2F0EA] flex items-center space-x-2 border-b border-white/10 pb-3">
                <Cpu className="w-5 h-5 text-[#A61C24]" />
                <span>CORE ENGINEERING PILLARS</span>
              </h3>

              <div className="space-y-3 font-mono-tech text-xs">
                
                <div className="p-3 bg-[#0C0D10] rounded border border-white/10 flex items-start space-x-3">
                  <div className="p-2 rounded bg-[#A61C24]/20 border border-[#A61C24]/50 text-[#F2F0EA]">
                    <Cpu className="w-4 h-4 text-[#A61C24]" />
                  </div>
                  <div>
                    <div className="text-[#F2F0EA] font-semibold">Embedded Electronics &amp; Edge AI</div>
                    <div className="text-[#9BA1B0] text-[11px] mt-0.5">ESP32, Arduino, Proteus circuit design, Keil uVision5, Federated Learning.</div>
                  </div>
                </div>

                <div className="p-3 bg-[#0C0D10] rounded border border-white/10 flex items-start space-x-3">
                  <div className="p-2 rounded bg-[#61DDF2]/20 border border-[#61DDF2]/50 text-[#61DDF2]">
                    <Layers className="w-4 h-4 text-[#61DDF2]" />
                  </div>
                  <div>
                    <div className="text-[#F2F0EA] font-semibold">Cross-Platform &amp; Cloud Pipelines</div>
                    <div className="text-[#9BA1B0] text-[11px] mt-0.5">Flutter mobile development, Firebase Auth/Firestore/Realtime DB, MQTT/FCM alerts.</div>
                  </div>
                </div>

                <div className="p-3 bg-[#0C0D10] rounded border border-white/10 flex items-start space-x-3">
                  <div className="p-2 rounded bg-[#D7A84B]/20 border border-[#D7A84B]/50 text-[#D7A84B]">
                    <Zap className="w-4 h-4 text-[#D7A84B]" />
                  </div>
                  <div>
                    <div className="text-[#F2F0EA] font-semibold">Full-Stack Web &amp; Leadership</div>
                    <div className="text-[#9BA1B0] text-[11px] mt-0.5">Node.js, MongoDB Atlas, REST APIs, Vercel, IIC Representative &amp; SIH Team Lead.</div>
                  </div>
                </div>

              </div>

              <div className="pt-2 text-center">
                <span className="inline-block text-[11px] font-mono-tech text-[#61DDF2] tracking-wider uppercase">
                  STATUS: READY FOR INTERNSHIP OPPORTUNITIES
                </span>
              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};
