import React, { useState } from "react";
import { ArrowRight, Bot, MessageSquare, ShieldCheck, Cpu, Sparkles, MapPin, Briefcase, GraduationCap, Users, Shield, Target, TrendingUp } from "lucide-react";
import BgAnimation from "../components/BgAnimation";
import RollingText from "../components/RollingText";
import NovaChat from "../components/NovaChat";
import ContactModal from "../components/ContactModal";

export default function Index() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-amber-500/30 selection:text-amber-200 antialiased font-sans">
      <BgAnimation />
      <NovaChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-slate-950/20 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
              <ShieldCheck className="text-amber-400 w-5 h-5" />
            </div>
            <span className="font-serif text-xl font-bold tracking-tight text-white uppercase tracking-widest">Andrew <span className="text-amber-400">Waggoner</span></span>
          </div>
          <div className="hidden md:flex items-center gap-12 text-[12px] font-mono uppercase tracking-[0.3em] text-white">
            <a href="#benefits" className="hover:text-amber-400 transition-all"><RollingText text="The New Way" /></a>
            <a href="#services" className="hover:text-amber-400 transition-all"><RollingText text="What I Do" /></a>
            <a href="#pedigree" className="hover:text-amber-400 transition-all"><RollingText text="Pedigree" /></a>
            <button 
              onClick={() => setIsContactOpen(true)}
              className="group flex items-center gap-3 bg-amber-500 text-slate-950 px-6 py-2.5 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(245,158,11,0.3)]"
            >
              <span className="text-[12px] font-black uppercase tracking-widest">Connect</span>
            </button>
          </div>
        </div>
      </nav>

      {/* 01 // HERO SECTION */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 md:px-16 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8 animate-fade-in">
            Independent Financial Advisory // STL MO
          </div>
          <h1 className="text-6xl md:text-9xl font-serif font-bold mb-8 leading-[0.85] tracking-tighter text-white">
            Navigate Your <br />
            <span className="text-amber-400 italic">Career Transition.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
            Stop competing for leads. Start making informed decisions about your future with high-fidelity, independent guidance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => {
                const el = document.getElementById('benefits');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group flex items-center gap-4 bg-amber-500 text-slate-950 px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(245,158,11,0.35)]"
            >
              <span>Explore The New Way</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => setIsContactOpen(true)}
              className="group flex items-center gap-4 bg-white/5 border border-white/10 text-white/60 px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest transition-all duration-300 hover:bg-white/8 hover:border-white/20 hover:text-white"
            >
              <span>Direct Handshake</span>
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] bg-gradient-to-t from-amber-500/5 to-transparent blur-[100px] pointer-events-none" />
      </section>

      {/* 02 // A NEW WAY TO NAVIGATE BENEFITS (Nova AI Focus) */}
      <section id="benefits" className="py-40 px-6 md:px-16 border-t border-white/5 relative bg-slate-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_0.8fr] gap-20 items-center">
            <div className="space-y-8">
              <span className="text-amber-500 font-mono text-[10px] tracking-[0.4em] uppercase font-bold block">02 // The Paradigm Shift</span>
              <h2 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight">
                A New Way to <br />
                <span className="text-amber-400 italic text-4xl md:text-6xl">Navigate Benefits.</span>
              </h2>
              <p className="text-xl text-slate-400 leading-relaxed max-w-xl">
                Life science professionals inherit complexity. We've automated the analysis phase to give you instant clarity before the first meeting.
              </p>
              
              <div className="grid gap-4">
                {[
                  { title: "Deterministic Analysis", desc: "No sales pitches. Just raw data integrity applied to your compensation package." },
                  { title: "Real-Time Clarity", desc: "Evaluate 401(k) matches and RSU vesting schedules in seconds, not weeks." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-amber-500/30 transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all text-amber-400">
                      <Cpu className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-2">{item.title}</h4>
                      <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => setIsChatOpen(true)}
                className="group flex items-center gap-4 bg-slate-950 border border-amber-500/30 text-white px-8 py-5 rounded-2xl font-black uppercase text-xs tracking-widest transition-all hover:border-amber-500 hover:scale-105 active:scale-95"
              >
                <Bot className="w-5 h-5 text-amber-400" />
                <span>Initialize Nova AI Engine</span>
              </button>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-amber-500/20 to-transparent blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative rounded-[4rem] overflow-hidden border border-white/10 bg-slate-900 aspect-[4/5] flex flex-col items-center justify-center p-12">
                <div className="absolute inset-0 opacity-10" 
                  style={{ 
                    backgroundImage: `linear-gradient(rgba(245,158,11,1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,1) 1px, transparent 1px)`,
                    backgroundSize: '30px 30px' 
                  }} 
                />
                <Bot className="w-32 h-32 text-amber-500/40 mb-8 animate-pulse" />
                <div className="text-center space-y-4 relative z-10">
                  <div className="inline-block px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-[9px] uppercase tracking-widest mb-2">Neural Link Active</div>
                  <h4 className="text-2xl font-serif text-white">&quot;Clarity First. Always.&quot;</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-[0.2em] font-bold">Personalized Guidance for your next chapter</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 // WHAT I DO (Services) */}
      <section id="services" className="py-40 px-6 md:px-16 border-t border-white/5 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="text-amber-500 font-mono text-[10px] tracking-[0.4em] uppercase font-bold mb-4 block">03 // High-Fidelity Services</span>
              <h2 className="text-5xl md:text-8xl font-serif font-bold text-white leading-[0.9] tracking-tighter">What I <br /><span className="text-amber-400 italic">Do.</span></h2>
            </div>
            <p className="text-lg text-slate-400 max-w-md pb-4 font-medium italic">
              &quot;Architecting financial transitions for those who build the future of life sciences.&quot;
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { 
                title: "Retirement Logic", 
                desc: "Technical review of 401(k) and 403(b) allocations to optimize for long-term velocity.",
                icon: Shield,
                num: "01"
              },
              { 
                title: "Equity Architecture", 
                desc: "Evaluating RSU packages and stock options during high-stakes career moves between biotech firms.",
                icon: Target,
                num: "02"
              },
              { 
                title: "Transition Strategy", 
                desc: "End-to-end planning for your next chapter, ensuring no value is left on the table.",
                icon: TrendingUp,
                num: "03"
              }
            ].map((f, i) => (
              <div key={i} className="group p-12 rounded-[3.5rem] bg-white/[0.02] border border-white/5 hover:border-amber-500/30 hover:bg-white/[0.04] transition-all flex flex-col items-start gap-10 h-full relative overflow-hidden">
                <span className="absolute top-8 right-12 text-7xl font-serif text-white/5 font-black group-hover:text-amber-500/10 transition-colors">{f.num}</span>
                <div className="w-20 h-20 rounded-3xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-500 text-amber-400">
                  <f.icon className="w-10 h-10" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold uppercase tracking-tighter text-white group-hover:text-amber-400 transition-colors">{f.title}</h3>
                  <p className="text-base text-slate-400 leading-relaxed font-medium">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 // THE PEDIGREE (Enlarged & Restyled) */}
      <section id="pedigree" className="py-40 px-6 md:px-16 border-y border-white/5 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-24 mb-32">
            <div className="space-y-10">
              <div>
                <span className="text-amber-500 font-mono text-[10px] tracking-[0.4em] uppercase font-bold mb-6 block">04 // The Pedigree</span>
                <h2 className="text-6xl md:text-8xl font-serif font-bold text-white mb-8 tracking-tighter">Andrew <br /><span className="text-amber-400 italic">Waggoner.</span></h2>
                <div className="flex items-center gap-3 text-slate-400 font-mono text-xs uppercase tracking-[0.3em] font-bold">
                  <MapPin className="w-5 h-5 text-amber-500" />
                  Quincy, Illinois // US
                </div>
              </div>
              
              <div className="p-10 rounded-[3rem] bg-white/5 border border-white/10 relative group overflow-hidden">
                <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-amber-500/10 transition-colors">
                  <Users className="w-24 h-24" />
                </div>
                <p className="text-xl text-slate-300 leading-relaxed font-medium relative z-10 italic">
                  &quot;Andy has lived in Quincy for over 30 years. He began his career in financial services in 2014, bridging the gap between biological sciences and high-stakes wealth management.&quot;
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  "Series 7 Licensed",
                  "Series 66 Licensed",
                  "Life Insurance",
                  "CFP® Candidate"
                ].map(tag => (
                  <div key={tag} className="px-6 py-4 rounded-2xl bg-amber-500/5 border border-amber-500/20 text-amber-400 text-[10px] font-black uppercase tracking-widest flex items-center gap-3">
                    <ShieldCheck className="w-4 h-4" />
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-16">
               <div className="space-y-10">
                 <div className="flex items-center gap-4 border-b border-white/5 pb-6">
                    <Briefcase className="w-8 h-8 text-amber-500" />
                    <h3 className="text-2xl font-black uppercase tracking-widest text-white">Professional Trajectory</h3>
                 </div>
                 <div className="space-y-12">
                   {[
                     { company: "Bates Financial Group", role: "Financial Planner", years: "2021 — NOW", desc: "Architecting complex financial transitions for biotech executives." },
                     { company: "Bates Financial Group", role: "Investment Advisor", years: "2017 — 2019", desc: "Strategic portfolio management and risk mitigation." },
                     { company: "Stifel Financial Corp", role: "Financial Advisor", years: "2014 — 2016", desc: "Advisory services for established life science professionals." },
                     { company: "Reagents Inc", role: "Biotech Product Manager", years: "2010 — 2014", desc: "Managing high-fidelity chemical supply chains for industry giants." },
                     { company: "GS Robins", role: "Account Manager", years: "2003 — 2008", desc: "Strategic partnership management in the chemical sector." }
                   ].map((job, i) => (
                     <div key={i} className="relative pl-12 border-l-2 border-amber-500/20 group hover:border-amber-500 transition-all pb-4">
                       <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-slate-950 border-2 border-amber-500 group-hover:bg-amber-500 group-hover:scale-125 transition-all" />
                       <span className="block text-xs font-mono text-amber-500/60 mb-2 font-bold tracking-widest">{job.years}</span>
                       <h4 className="text-3xl font-serif font-bold text-white mb-2">{job.company}</h4>
                       <p className="text-lg text-amber-400 font-bold uppercase tracking-widest text-[10px] mb-3">{job.role}</p>
                       <p className="text-base text-slate-500 leading-relaxed font-medium">{job.desc}</p>
                     </div>
                   ))}
                 </div>
               </div>
            </div>
          </div>

          {/* Education Node - Large Grid */}
          <div className="grid md:grid-cols-2 gap-12 border-t border-white/5 pt-32">
            <div className="p-12 rounded-[4rem] bg-white/[0.03] border border-white/5 hover:border-amber-500/20 transition-all flex flex-col gap-10">
               <div className="flex items-center gap-6">
                 <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500">
                    <GraduationCap className="w-8 h-8" />
                 </div>
                 <h3 className="text-2xl font-black uppercase tracking-[0.2em] text-white">Graduate Studies</h3>
               </div>
               <div className="space-y-4">
                 <h4 className="text-4xl font-serif font-bold text-white">Boston University</h4>
                 <p className="text-lg text-slate-400 font-medium leading-relaxed uppercase tracking-widest text-xs">Financial Planning & Services</p>
                 <div className="h-px w-20 bg-amber-500/40" />
               </div>
            </div>

            <div className="p-12 rounded-[4rem] bg-white/[0.03] border border-white/5 hover:border-amber-500/20 transition-all flex flex-col gap-10">
               <div className="flex items-center gap-6">
                 <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500">
                    <GraduationCap className="w-8 h-8" />
                 </div>
                 <h3 className="text-2xl font-black uppercase tracking-[0.2em] text-white">Bachelor of Science</h3>
               </div>
               <div className="space-y-4">
                 <h4 className="text-4xl font-serif font-bold text-white">Quincy University</h4>
                 <p className="text-lg text-slate-400 font-medium leading-relaxed uppercase tracking-widest text-xs">Biological Sciences // Chemistry Minor</p>
                 <div className="h-px w-20 bg-amber-500/40" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 md:px-16 bg-slate-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div className="flex flex-col gap-2">
            <span className="font-serif text-2xl font-extrabold uppercase text-white tracking-widest">Andrew <span className="text-amber-400">Waggoner</span></span>
            <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold italic">Independent Financial Advisory // Quincy, IL</p>
          </div>
          <div className="flex items-center gap-8">
             <button onClick={() => setIsContactOpen(true)} className="text-xs font-black uppercase tracking-widest text-amber-500 hover:text-white transition-colors">Initiate Contact</button>
             <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.4em]">© 2026 DTE Solutions LLC.</p>
          </div>
        </div>
      </footer>
      
      {/* Floating Action Button for Nova Chat */}
      <button 
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-8 right-8 z-[200] w-16 h-16 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:scale-110 active:scale-95 transition-all"
      >
        {isChatOpen ? <Sparkles className="w-7 h-7" /> : <MessageSquare className="w-7 h-7" />}
      </button>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Space+Grotesk:wght@300..700&display=swap');
        
        .font-serif { font-family: "Playfair Display", serif; }
        .font-sans { font-family: "Space Grotesk", sans-serif; }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
