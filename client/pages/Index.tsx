import React, { useState } from "react";
import { ArrowRight, Bot, MessageSquare, ShieldCheck, Cpu, Sparkles, MapPin, Briefcase, GraduationCap, Users } from "lucide-react";
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
            <a href="#approach" className="hover:text-amber-400 transition-all"><RollingText text="Approach" /></a>
            <a href="#services" className="hover:text-amber-400 transition-all"><RollingText text="Services" /></a>
            <a href="#about" className="hover:text-amber-400 transition-all"><RollingText text="Pedigree" /></a>
            <button 
              onClick={() => setIsContactOpen(true)}
              className="group flex items-center gap-3 bg-amber-500 text-slate-950 px-6 py-2.5 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(245,158,11,0.3)]"
            >
              <span className="text-[12px] font-black uppercase tracking-widest">Connect</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 md:px-16 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8 animate-fade-in">
            High-Fidelity Financial Guidance // Quincy, IL
          </div>
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-8 leading-[0.9] tracking-tighter text-white">
            Navigate Your <br />
            <span className="text-amber-400 italic">Career Transition.</span>
          </h1>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            Specialized financial planning for Life Science and Biotech professionals. Deterministic analysis. Zero-judgment clarity.
          </p>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
          Stop competing for leads. Start making informed decisions about your future with independent guidance.
          <br>
          "Personalized financial guidance for your next chapter."
          </br>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => setIsChatOpen(true)}
              className="group flex items-center gap-4 bg-amber-500 text-slate-950 px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(245,158,11,0.35)]"
            >
              <span>Consult Nova AI</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => setIsContactOpen(true)}
              className="group flex items-center gap-4 bg-white/5 border border-white/10 text-white/60 px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest transition-all duration-300 hover:bg-white/8 hover:border-white/20 hover:text-white"
            >
              <span>Direct Link</span>
            </button>
          </div>
        </div>
        {/* Approach Section */}
      <section id="approach" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-amber-900/30">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">01 — THE APPROACH</span>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mt-4 mb-6">A New Way to Navigate Your Benefits</h2>
            <p className="text-xl text-slate-300">
              You don't want a sales pitch. You want clarity. Here's how I give it to you.
            </p>
          </div>

          <div className="space-y-6">
            <div className="border border-amber-900/50 rounded-xl p-8 hover:border-amber-700/70 transition">
              <h3 className="text-2xl font-serif font-bold text-white mb-3">"Clarity First, Always."</h3>
              <p className="text-slate-300 mb-4">
                This is the principle behind my approach. I review your 401(k) or 403(b) plans, evaluate new employer benefits, analyze stock options, and assess retirement offerings—all without the intimidation factor. No pressure. No judgment. Just straightforward analysis that helps you understand your situation before you make any decisions.
              </p>
              <p className="text-slate-400 italic">
                Then, when you're ready: "Want help creating a long-term plan? Let's talk about your situation."
              </p>
              <div className="mt-6 pt-6 border-t border-amber-900/30">
                <h4 className="text-amber-400 font-semibold mb-3">THE PHILOSOPHY</h4>
                <p className="text-slate-300">
                  Life science and biotech professionals inherit complexity—compensation packages with multiple moving parts, tax implications, career trajectory decisions. You feel overwhelmed. I remove the intimidation and position myself as a helpful resource—not a product salesman. By offering an AI-first experience, you get clarity without judgment. You understand your situation before anyone pressures you to act.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-amber-900/30">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">03 — CORE SERVICES</span>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mt-4">What I Do</h2>
          </div>

          <div className="space-y-6">
            <div className="border border-amber-900/50 rounded-xl p-8 hover:border-amber-700/70 transition group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-amber-300 group-hover:to-amber-500 transition">
                  <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-serif font-bold text-white mb-3">401(k) & 403(b) Optimization</h3>
                  <p className="text-slate-300">
                    Comprehensive review of your current retirement plans. We identify optimization opportunities without forcing unnecessary transfers or rollovers. Understand your options before making changes.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-amber-900/50 rounded-xl p-8 hover:border-amber-700/70 transition group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-amber-300 group-hover:to-amber-500 transition">
                  <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-serif font-bold text-white mb-3">Employer Benefits Evaluation</h3>
                  <p className="text-slate-300">
                    Evaluating a new role? I provide detailed analysis of stock options, RSUs, benefits packages, and retirement offerings to help you understand the true value of your compensation and career move.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-amber-900/50 rounded-xl p-8 hover:border-amber-700/70 transition group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-amber-300 group-hover:to-amber-500 transition">
                  <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-serif font-bold text-white mb-3">Career Transition Planning</h3>
                  <p className="text-slate-300">
                    Navigating a career move? Personalized guidance aligned with your unique situation, helping you understand financial implications and opportunities at every step of your journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        {/* Abstract Background Element */}
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] bg-gradient-to-t from-amber-500/5 to-transparent blur-[100px] pointer-events-none" />
      </section>

      {/* About / Pedigree Section */}
      <section id="about" className="py-32 px-6 md:px-16 border-t border-white/5 bg-slate-900/30">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.5fr] gap-16">
          <div className="space-y-8">
            <div>
              <span className="text-amber-500 font-mono text-[10px] tracking-[0.4em] uppercase font-bold mb-4 block">01 // The Principal</span>
              <h2 className="text-5xl font-serif font-bold text-white mb-6">Andrew <br /><span className="text-amber-400 italic">Waggoner.</span></h2>
              <div className="flex items-center gap-2 text-slate-500 font-mono text-xs uppercase tracking-widest">
                <MapPin className="w-4 h-4 text-amber-500" />
                Quincy, Illinois // US
              </div>
            </div>
            <p className="text-lg text-slate-400 leading-relaxed italic border-l-2 border-amber-500/30 pl-6">
              "Andy has lived in Quincy for over 30 years. He began his career in the financial services industry in October 2014, bringing a unique perspective from over 15 years in the biotech and chemical sectors."
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <ShieldCheck className="w-5 h-5 text-amber-500" />
                <span>Series 7 & Series 66 Licensed</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <ShieldCheck className="w-5 h-5 text-amber-500" />
                <span>Life Insurance Licensed</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300 font-bold text-white">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <span>CFP® Candidate</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Work History */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                <Briefcase className="w-5 h-5 text-amber-500" />
                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white">Professional Experience</h3>
              </div>
              <div className="space-y-6">
                {[
                  { company: "Bates Financial Group", role: "Financial Planner", years: "2021 — PRESENT" },
                  { company: "Bates Financial Group", role: "Investment Advisor", years: "2017 — 2019" },
                  { company: "Stifel Financial Corp", role: "Financial Advisor", years: "2014 — 2016" },
                  { company: "Reagents Inc", role: "Biotech Product Manager", years: "2010 — 2014" },
                  { company: "GS Robins", role: "Account Manager", years: "2003 — 2008" }
                ].map((job, i) => (
                  <div key={i} className="relative pl-6 border-l border-amber-500/20 group hover:border-amber-500 transition-colors">
                    <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-slate-950 border border-amber-500 group-hover:bg-amber-500 transition-all" />
                    <span className="block text-[9px] font-mono text-amber-500/60 mb-1">{job.years}</span>
                    <span className="block text-white font-bold text-sm uppercase tracking-wider">{job.company}</span>
                    <span className="text-slate-400 text-xs">{job.role}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Bio */}
            <div className="space-y-12">
              <div>
                <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                  <GraduationCap className="w-5 h-5 text-amber-500" />
                  <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white">Academic Pedigree</h3>
                </div>
                <div className="space-y-6">
                  <div className="relative pl-6 border-l border-amber-500/20">
                    <span className="block text-[9px] font-mono text-amber-500/60 mb-1">GRADUATE STUDIES</span>
                    <span className="block text-white font-bold text-sm uppercase tracking-wider">Boston University</span>
                    <span className="text-slate-400 text-xs">Financial Planning & Services</span>
                  </div>
                  <div className="relative pl-6 border-l border-amber-500/20">
                    <span className="block text-[9px] font-mono text-amber-500/60 mb-1">BACHELOR OF SCIENCE</span>
                    <span className="block text-white font-bold text-sm uppercase tracking-wider">Quincy University</span>
                    <span className="text-slate-400 text-xs">Biological Sciences / Chemistry Minor</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-[10px] uppercase tracking-widest">
                  <Users className="w-4 h-4" />
                  <span>Personal Context</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Andy and his wife Christy have three children and one grandchild. Beyond financial architecture, he has spent years coaching varsity basketball and enjoys the high-fidelity clarity of the outdoors and music.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="approach" className="py-32 px-6 md:px-16 border-t border-white/5 relative bg-white/[0.01]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-amber-500 font-mono text-[10px] tracking-[0.4em] uppercase font-bold mb-4 block">02 // The Philosophy</span>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight">Clarity First. <br /><span className="text-amber-400 italic">Always.</span></h2>
            <p className="text-lg text-slate-400 leading-relaxed mb-8">
              Life science and biotech professionals inherit complexity—compensation packages with multiple moving parts, tax implications, and career trajectory decisions. Standard financial advice is often a veiled sales pitch. 
            </p>
            <div className="grid gap-6">
              {[
                { title: "No Intimidation", icon: ShieldCheck, desc: "Independent analysis of 401(k), 403(b), and stock options without the sales pressure." },
                { title: "AI-First Insights", icon: Cpu, desc: "Utilizing Nova's Clarity Engine to evaluate benefits packages with deterministic precision." },
                { title: "Strategic Outcomes", icon: Sparkles, desc: "Transforming complex benefits into a clear roadmap for your next career chapter." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/30 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all text-amber-400">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-2">{item.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-amber-500/20 to-transparent blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="relative rounded-[3rem] overflow-hidden border border-white/10 bg-slate-900 aspect-square flex items-center justify-center p-12">
               <div className="absolute inset-0 opacity-10" 
                 style={{ 
                   backgroundImage: `linear-gradient(rgba(245,158,11,1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,1) 1px, transparent 1px)`,
                   backgroundSize: '20px 20px' 
                 }} 
               />
               <Bot className="w-48 h-48 text-amber-500/20 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-32 px-6 md:px-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="max-w-2xl">
            <span className="text-amber-500 font-mono text-[10px] tracking-[0.4em] uppercase font-bold mb-4 block">03 // Core Services</span>
            <h2 className="text-5xl font-serif font-bold text-white leading-none">Architecting Your <br /><span className="text-amber-400 italic">Financial Future.</span></h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Retirement Optimization", 
                desc: "Comprehensive review of 401(k) and 403(b) plans to identify high-fidelity opportunities without unnecessary transfers.",
                icon: ShieldCheck
              },
              { 
                title: "Equity & Stock Analysis", 
                desc: "Determining the true value of RSUs, options, and complex compensation during career moves.",
                icon: Cpu
              },
              { 
                title: "Transition Strategy", 
                desc: "Deterministic planning for professionals moving between major life science and biotech organizations.",
                icon: Sparkles
              }
            ].map((f, i) => (
              <div key={i} className="group p-10 rounded-[3rem] bg-white/3 border border-white/10 hover:border-amber-500/30 transition-all flex flex-col items-start gap-8 h-full">
                <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:scale-110 transition-transform text-amber-400">
                  <f.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tighter text-white group-hover:text-amber-400 transition-colors">{f.title}</h3>
                <p className="text-base text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nova AI Integration Callout */}
      <section className="py-32 px-6 md:px-16">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-amber-500 to-amber-700 rounded-[4rem] p-12 md:p-24 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-slate-950 mb-8 leading-[0.9]">Experience <br />AI-Powered Clarity.</h2>
            <p className="text-xl text-slate-900 font-medium mb-12 leading-relaxed">
              Why wait for a meeting? Get instant, independent insights into your benefits package through the Nova Clarity Engine. High-fidelity analysis on demand.
            </p>
            <button 
              onClick={() => setIsChatOpen(true)}
              className="flex items-center gap-4 bg-slate-950 text-white px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:scale-105 active:scale-95 transition-all"
            >
              <span>Launch Nova Analysis</span>
              <MessageSquare className="w-5 h-5 text-amber-400" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 md:px-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div className="flex flex-col gap-2">
            <span className="font-serif text-2xl font-extrabold uppercase text-white tracking-widest">Andrew <span className="text-amber-400">Waggoner</span></span>
            <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold italic">Independent Financial Advisory // Quincy, IL</p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-4">
             <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.4em]">© 2026 DTE Solutions LLC. All rights reserved.</p>
             <div className="flex gap-6 opacity-30 hover:opacity-100 transition-opacity">
               <ShieldCheck className="w-5 h-5" />
               <Cpu className="w-5 h-5" />
               <Sparkles className="w-5 h-5" />
             </div>
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
