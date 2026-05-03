import { ArrowRight, Check, MapPin, DollarSign } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-amber-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-serif font-bold text-white">Andrew Waggoner</div>
            <div className="hidden md:flex gap-8">
              <a href="#approach" className="text-slate-300 hover:text-amber-300 transition">Approach</a>
              <a href="#services" className="text-slate-300 hover:text-amber-300 transition">Services</a>
              <a href="#contact" className="text-slate-300 hover:text-amber-300 transition">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6">
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">CLARITY FOR LIFE SCIENCE PROFESSIONALS</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Navigate Your <span className="text-amber-300">Career Transition</span> with Clarity
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Stop competing for leads. Start making informed decisions about your future with independent guidance.
          </p>
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto italic">
            "Personalized financial guidance for your next chapter."
          </p>
          <button className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-10 py-4 rounded-lg font-semibold hover:from-amber-300 hover:to-amber-400 transition transform hover:scale-105">
            Schedule a Consultation
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

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

      {/* Why This Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-amber-900/30">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">04 — WHY THIS WORKS</span>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mt-4">Strategic Positioning</h2>
          </div>

          <div className="space-y-6">
            <div className="border border-amber-900/50 rounded-xl p-8 hover:border-amber-700/70 transition">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-6 h-6 rounded-full bg-amber-900/50 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                </div>
                <h3 className="text-2xl font-serif font-bold text-white">You're Not Competing on Price</h3>
              </div>
              <p className="text-slate-300">
                By positioning as THE independent financial advisor for life science professionals—backed by your book and expertise—you attract clients who value expertise over cost. These are the best clients: they close faster, stay longer, and refer more.
              </p>
            </div>

            <div className="border border-amber-900/50 rounded-xl p-8 hover:border-amber-700/70 transition">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-6 h-6 rounded-full bg-amber-900/50 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                </div>
                <h3 className="text-2xl font-serif font-bold text-white">AI-First Discovery Strategy</h3>
              </div>
              <p className="text-slate-300">
                Most financial advisors are still optimizing for Google. You dominate ChatGPT, Claude, and Perplexity—where the next generation of high-net-worth clients are asking for guidance. First-mover advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Availability & Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-amber-900/30">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-amber-900/50 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-amber-400" />
                <h3 className="text-xl font-semibold text-white">Availability</h3>
              </div>
              <p className="text-slate-300">United States</p>
            </div>

            <div className="border border-amber-900/50 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-6 h-6 text-amber-400" />
                <h3 className="text-xl font-semibold text-white">Pricing</h3>
              </div>
              <p className="text-slate-300">Customized based on your needs. Contact for personalized pricing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-amber-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">05 — NEXT STEPS</span>
          <h2 className="text-5xl md:text-6xl font-serif font-bold mt-6 mb-8">Ready to Clarify Your Path?</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Schedule a consultation to discuss your situation and explore how I can help you navigate your career transition with clarity.
          </p>
          <button className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-10 py-4 rounded-lg font-semibold hover:from-amber-300 hover:to-amber-400 transition transform hover:scale-105">
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-amber-900/30 bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-slate-400">
          <p>&copy; 2024 Andrew Waggoner. All rights reserved.</p>
          <p className="mt-2 text-sm">Independent Financial Advisory Services</p>
        </div>
      </footer>
    </div>
  );
}
