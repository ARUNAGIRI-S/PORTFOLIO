import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Copy, Check, Send, Radio, Terminal, Loader2, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const ContactSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus(null);
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setFormStatus({
          type: 'success',
          message: 'TRANSMISSION_SENT // Message delivered and stored in MongoDB database.',
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setFormStatus({
          type: 'error',
          message: data.error || 'TRANSMISSION_FAILED // Could not deliver contact message.',
        });
      }
    } catch (err) {
      console.error('Network error during contact submission:', err);
      setFormStatus({
        type: 'error',
        message: 'TRANSMISSION_ERROR // Network or server error occurred. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#0C0D10] relative border-t border-[#A61C24]/30">
      <div className="absolute inset-0 bg-hud-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-[#13151D] border border-[#61DDF2]/40 px-3.5 py-1 rounded-full text-xs font-mono-tech text-[#61DDF2]">
            <Radio className="w-3.5 h-3.5 text-[#A61C24] animate-pulse" />
            <span>COMMUNICATION_LINK // INITIATE_CONTACT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-tech text-[#F2F0EA]">
            Get In <span className="text-[#61DDF2]">Touch</span>
          </h2>
          <p className="text-sm sm:text-base text-[#9BA1B0] font-sans">
            Seeking internship and practical project roles in Embedded Systems, IoT / AIoT, and Software Engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <motion.div 
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[#13151D] border border-[#D7A84B]/40 rounded-xl p-6 sm:p-8 hud-corner-box shadow-xl space-y-6">
              
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono-tech text-[#D7A84B]">
                <span>COMM_CHANNEL // ACTIVE</span>
                <span>CHENNAI, TN</span>
              </div>

              {/* Email Card */}
              <div className="p-4 bg-[#0C0D10] rounded-lg border border-white/10 flex items-center justify-between group hover:border-[#61DDF2] transition-colors">
                <div className="flex items-center space-x-3.5 overflow-hidden">
                  <div className="p-2.5 rounded bg-[#A61C24]/20 border border-[#A61C24]/50 text-[#E62429] shrink-0">
                    <Mail className="w-5 h-5 text-[#E62429]" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-mono-tech text-[#9BA1B0] uppercase">PRIMARY EMAIL</div>
                    <a 
                      href="mailto:arunofficial311@gmail.com" 
                      className="text-xs sm:text-sm font-mono-tech font-semibold text-[#F2F0EA] hover:text-[#61DDF2] transition-colors truncate block"
                    >
                      arunofficial311@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard('arunofficial311@gmail.com', 'email')}
                  className="p-2 rounded bg-[#13151D] text-[#9BA1B0] hover:text-[#61DDF2] border border-white/10 hover:border-[#61DDF2] transition-colors focus:outline-none shrink-0"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-[#61DDF2]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 bg-[#0C0D10] rounded-lg border border-white/10 flex items-center justify-between group hover:border-[#D7A84B] transition-colors">
                <div className="flex items-center space-x-3.5">
                  <div className="p-2.5 rounded bg-[#61DDF2]/20 border border-[#61DDF2]/50 text-[#61DDF2] shrink-0">
                    <Phone className="w-5 h-5 text-[#61DDF2]" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono-tech text-[#9BA1B0] uppercase">PHONE / MOBILE</div>
                    <a 
                      href="tel:8778165582" 
                      className="text-sm sm:text-base font-mono-tech font-semibold text-[#F2F0EA] hover:text-[#D7A84B] transition-colors"
                    >
                      8778165582
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard('8778165582', 'phone')}
                  className="p-2 rounded bg-[#13151D] text-[#9BA1B0] hover:text-[#D7A84B] border border-white/10 hover:border-[#D7A84B] transition-colors focus:outline-none shrink-0"
                  title="Copy phone number"
                  aria-label="Copy phone number"
                >
                  {copiedField === 'phone' ? <Check className="w-4 h-4 text-[#D7A84B]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 bg-[#0C0D10] rounded-lg border border-white/10 flex items-center space-x-3.5">
                <div className="p-2.5 rounded bg-[#D7A84B]/20 border border-[#D7A84B]/50 text-[#D7A84B] shrink-0">
                  <MapPin className="w-5 h-5 text-[#D7A84B]" />
                </div>
                <div>
                  <div className="text-[10px] font-mono-tech text-[#9BA1B0] uppercase">PRIMARY LOCATION</div>
                  <div className="text-sm font-mono-tech font-semibold text-[#F2F0EA]">
                    Chennai / Chengalpattu, Tamil Nadu
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-2 border-t border-white/10 space-y-3">
                <div className="text-xs font-mono-tech text-[#61DDF2] uppercase">PROFESSIONAL PROFILES:</div>
                <div className="grid grid-cols-2 gap-3">
                  
                  <a
                    href="https://www.linkedin.com/in/arunagiri-ece"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2.5 p-3 rounded bg-[#0C0D10] border border-white/10 hover:border-[#61DDF2] text-[#F2F0EA] hover:text-[#61DDF2] transition-colors text-xs font-mono-tech focus:outline-none focus:ring-1 focus:ring-[#61DDF2]"
                  >
                    <LinkedinIcon className="w-4 h-4 text-[#61DDF2]" />
                    <span>LinkedIn Profile</span>
                  </a>

                  <a
                    href="https://github.com/ARUNAGIRI-S"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2.5 p-3 rounded bg-[#0C0D10] border border-white/10 hover:border-[#D7A84B] text-[#F2F0EA] hover:text-[#D7A84B] transition-colors text-xs font-mono-tech focus:outline-none focus:ring-1 focus:ring-[#D7A84B]"
                  >
                    <GithubIcon className="w-4 h-4 text-[#D7A84B]" />
                    <span>GitHub Profile</span>
                  </a>

                </div>
              </div>

            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form 
              onSubmit={handleSubmit}
              className="bg-[#13151D] border border-[#A61C24]/50 rounded-xl p-6 sm:p-8 hud-corner-box shadow-xl space-y-5"
            >
              
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center space-x-2 font-mono-tech text-xs text-[#61DDF2]">
                  <Terminal className="w-4 h-4 text-[#D7A84B]" />
                  <span>HUD_TERMINAL // DISPATCH_MESSAGE</span>
                </div>
                <span className="text-[10px] font-mono-tech text-[#9BA1B0]">STORE: MONGODB_ATLAS</span>
              </div>

              {formStatus && (
                <div 
                  className={`p-3.5 rounded border text-xs font-mono-tech flex items-start space-x-2 ${
                    formStatus.type === 'success'
                      ? 'bg-[#0C0D10] border-[#61DDF2] text-[#61DDF2]'
                      : 'bg-[#0C0D10] border-[#A61C24] text-[#E62429]'
                  }`}
                >
                  {formStatus.type === 'success' ? (
                    <Check className="w-4 h-4 text-[#61DDF2] shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-[#E62429] shrink-0 mt-0.5" />
                  )}
                  <span>{formStatus.message}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="block text-xs font-mono-tech text-[#9BA1B0] uppercase">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Recruiter / Project Lead"
                    className="w-full bg-[#0C0D10] border border-white/15 focus:border-[#61DDF2] rounded px-3.5 py-2.5 text-sm text-[#F2F0EA] placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-[#61DDF2] font-sans"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-xs font-mono-tech text-[#9BA1B0] uppercase">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. recruiter@company.com"
                    className="w-full bg-[#0C0D10] border border-white/15 focus:border-[#61DDF2] rounded px-3.5 py-2.5 text-sm text-[#F2F0EA] placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-[#61DDF2] font-sans"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="block text-xs font-mono-tech text-[#9BA1B0] uppercase">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Embedded Systems Internship Opportunity"
                  className="w-full bg-[#0C0D10] border border-white/15 focus:border-[#61DDF2] rounded px-3.5 py-2.5 text-sm text-[#F2F0EA] placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-[#61DDF2] font-sans"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="block text-xs font-mono-tech text-[#9BA1B0] uppercase">
                  Message Content *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message or opportunity details here..."
                  className="w-full bg-[#0C0D10] border border-white/15 focus:border-[#61DDF2] rounded px-3.5 py-2.5 text-sm text-[#F2F0EA] placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-[#61DDF2] font-sans"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded bg-[#A61C24] hover:bg-[#E62429] disabled:bg-[#5C1418] text-[#F2F0EA] font-tech font-bold uppercase tracking-wider text-sm flex items-center justify-center space-x-2 border border-[#F5C542]/40 shadow-[0_0_20px_rgba(166,28,36,0.5)] transition-all hover:shadow-[0_0_25px_rgba(230,36,41,0.7)] focus:outline-none focus:ring-2 focus:ring-[#61DDF2]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 text-[#F5C542] animate-spin" />
                    <span>TRANSMITTING...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-[#F5C542]" />
                    <span>Transmit Message</span>
                  </>
                )}
              </button>

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
