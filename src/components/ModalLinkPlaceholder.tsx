import React from 'react';
import { X, ShieldAlert } from 'lucide-react';

interface ModalLinkPlaceholderProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  type: 'live' | 'repo';
}

export const ModalLinkPlaceholder: React.FC<ModalLinkPlaceholderProps> = ({
  isOpen,
  onClose,
  title,
  type,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md bg-[#13151D] border-2 border-[#A61C24] rounded-xl p-6 shadow-[0_0_50px_rgba(166,28,36,0.5)] hud-corner-box">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg bg-[#0C0D10] text-[#9BA1B0] hover:text-[#F2F0EA] border border-white/10 hover:border-[#61DDF2] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-[#61DDF2]" />
        </button>

        <div className="flex items-center space-x-3 text-[#D7A84B] font-tech text-lg font-bold pb-3 border-b border-white/10">
          <ShieldAlert className="w-6 h-6 text-[#A61C24]" />
          <span>LINK PLACEHOLDER</span>
        </div>

        <div className="py-4 space-y-3">
          <div className="font-mono-tech text-xs text-[#61DDF2]">
            PROJECT: <span className="text-[#F2F0EA] font-semibold">{title}</span>
          </div>
          <p className="text-sm text-[#9BA1B0] leading-relaxed">
            The {type === 'live' ? 'live deployment' : 'source code repository'} URL for this project has not been provided in the official document records.
          </p>
          <div className="p-3 bg-[#0C0D10] rounded border border-[#D7A84B]/30 text-xs font-mono-tech text-[#D7A84B]">
            STATUS: Placeholder ACTIVE // Contact Arunagiri S for repository access or demonstration.
          </div>
        </div>

        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded bg-[#A61C24] hover:bg-[#E62429] text-[#F2F0EA] font-tech font-bold text-xs uppercase tracking-wider transition-colors border border-[#F5C542]/40"
          >
            Acknowledge
          </button>
        </div>

      </div>
    </div>
  );
};
