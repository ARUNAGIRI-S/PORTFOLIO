import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, BookOpen, Loader2 } from 'lucide-react';
import { INITIAL_CERTIFICATES, type CertificateItem } from '../../api/_data';

export const CertificationsSection: React.FC = () => {
  const [certifications, setCertifications] = useState<CertificateItem[]>(INITIAL_CERTIFICATES);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [dataSource, setDataSource] = useState<'database' | 'fallback' | null>(null);

  const fetchCertificates = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/certificates');
      if (res.ok) {
        const data = await res.json();
        if (data.certificates && Array.isArray(data.certificates) && data.certificates.length > 0) {
          setCertifications(data.certificates);
          setDataSource(data.source || 'database');
        }
      }
    } catch (err) {
      console.warn('API fetch error for certificates, using fallback data:', err);
      setDataSource('fallback');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCertificates();
  }, []);

  return (
    <section id="certifications" className="py-20 bg-[#0C0D10] relative border-t border-white/10">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-[#13151D] border border-[#D7A84B]/40 px-3.5 py-1 rounded-full text-xs font-mono-tech text-[#D7A84B]">
            <Award className="w-3.5 h-3.5 text-[#61DDF2]" />
            <span>TRAINING_RECORDS // VERIFIED</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-tech text-[#F2F0EA]">
            Certifications &amp; <span className="text-[#D7A84B]">Workshops</span>
          </h2>

          <p className="text-sm sm:text-base text-[#9BA1B0] font-sans">
            Specialized technical training, AI workshops, industrial visits, and professional skill accreditation.
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-[#13151D] border border-[#D7A84B]/20 hover:border-[#D7A84B] rounded-xl p-5 flex items-start space-x-4 hud-corner-box transition-all"
            >
              <div className="p-2.5 rounded-lg bg-[#0C0D10] border border-[#A61C24]/40 text-[#A61C24] shrink-0">
                <BookOpen className="w-5 h-5 text-[#61DDF2]" />
              </div>
              
              <div className="space-y-1.5 flex-1">
                <h3 className="font-tech text-base font-bold text-[#F2F0EA] leading-snug">
                  {item.title}
                </h3>
                <div className="text-xs font-mono-tech text-[#D7A84B]">
                  {item.issuer}
                </div>
                <div className="flex items-center space-x-1.5 text-[11px] font-mono-tech text-[#9BA1B0] pt-1">
                  <Calendar className="w-3 h-3 text-[#61DDF2]" />
                  <span>{item.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
};
