import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, LinkedinIcon, Mail, ExternalLink, ShieldCheck } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-slate-900 border border-white/10 rounded-[3rem] shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="p-8 border-b border-white/5 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
                  <ShieldCheck className="text-amber-400 w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-bold text-white uppercase tracking-tight">Initiate <span className="text-amber-400 italic">Contact.</span></h3>
              </div>
              <button onClick={onClose} className="p-2 rounded-full hover:bg-white/5 text-slate-500 transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-8 space-y-6">
              <p className="text-slate-400 leading-relaxed">
                Connect with Andrew Waggoner for independent, high-fidelity financial guidance tailored to life science and biotech professionals.
              </p>

              <div className="grid gap-4">
                <a 
                  href="https://www.linkedin.com/in/andrew-waggoner-cfp%C2%AE-03a9712a/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/40 hover:bg-white/10 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#0077b5]/20 flex items-center justify-center text-[#0077b5]">
                      <LinkedinIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="block text-white font-bold uppercase tracking-widest text-xs mb-1">Professional Network</span>
                      <span className="text-slate-400 text-sm">Andrew Waggoner, CFP®</span>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-slate-600 group-hover:text-amber-400 transition-colors" />
                </a>

                <a 
                  href="mailto:andywaggoner24@gmail.com"
                  className="group flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/40 hover:bg-white/10 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="block text-white font-bold uppercase tracking-widest text-xs mb-1">Direct Inquiries</span>
                      <span className="text-slate-400 text-sm">andywaggoner24@gmail.com</span>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-slate-600 group-hover:text-amber-400 transition-colors" />
                </a>
              </div>
            </div>

            {/* Footer */}
            <div className="p-8 bg-white/5 text-center">
               <p className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.3em]">Missouri Based // National Reach</p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
