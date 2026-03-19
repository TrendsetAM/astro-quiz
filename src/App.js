import React, { useState, useEffect } from 'react';
import { Sparkles, PlayCircle, ShieldCheck, ArrowRight, Zap, Info, Lock, Volume2 } from 'lucide-react';

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleRedirect = (e) => {
    // Prevent any default browser behavior
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    const destination = "https://62ccdfv-y4u16yp0-bu913nhrg.hop.clickbank.net";
    
    // Primary redirection method
    window.location.assign(destination);
    
    // Fallback if assign fails or is intercepted
    setTimeout(() => {
      window.location.href = destination;
    }, 100);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-amber-500/30 selection:text-amber-200">
      {/* Navigation / Header */}
      <nav className="border-b border-white/5 bg-slate-950/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-tr from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(251,191,36,0.4)]">
              <Volume2 className="text-slate-950 w-5 h-5" />
            </div>
            <span className="font-bold tracking-tight text-xl bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
              FREQUENCY REWIRING
            </span>
          </div>
          <div className="hidden md:block text-xs uppercase tracking-widest text-slate-500">
            A Special Message From Stefan
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-16 pb-24 overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-amber-500/10 blur-[120px] rounded-full -z-10" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/5 blur-[100px] rounded-full -z-10" />

        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full border border-amber-500/30 bg-amber-500/5 text-amber-400 text-sm font-medium tracking-wide">
              Important: This is not your fault.
            </span>
            
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-8 text-white">
              Why 97% of "Manifestation" Methods <span className="text-amber-400">Fail You</span>... And The 10-Minute "Energy Hack" That Fixes It.
            </h1>

            <p className="text-xl md:text-2xl text-slate-400 mb-10 leading-relaxed max-w-3xl mx-auto">
              If you feel like you're stuck in a cycle of bad luck, it's not because you aren't worthy. It's because of the <span className="text-white font-bold italic">"Mind Reaper"</span>—an invisible internal blockage siphoning your abundance.
            </p>

            <button 
              type="button"
              onClick={handleRedirect}
              className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-slate-900 bg-amber-400 rounded-xl transition-all duration-300 hover:bg-amber-300 hover:scale-105 active:scale-95 shadow-[0_20px_40px_rgba(251,191,36,0.2)] hover:shadow-[0_25px_50px_rgba(251,191,36,0.3)]"
            >
              Discover Your Life Prediction Now
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>

            <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6 text-slate-500 text-sm italic">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-500/50" /> No Visualization Required
              </div>
              <div className="flex items-center gap-2">
                <PlayCircle className="w-4 h-4 text-amber-500/50" /> Passive Audio Technology
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-amber-500/50" /> Guaranteed Privacy
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* The Core Problem Section */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-amber-500/20 blur-[80px] -z-10" />
              <div className="aspect-square bg-slate-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-8 flex flex-col justify-center items-center text-center">
                 <Zap className="w-20 h-20 text-amber-500 mb-6 animate-pulse" />
                 <h3 className="text-2xl font-bold text-white mb-4">The "Effort Gap"</h3>
                 <p className="text-slate-400 text-sm leading-relaxed">
                   Have you ever noticed how some people barely try, yet opportunities flow to them effortlessly? While you work 10x harder and stay stuck? This is the energy mismatch caused by an internal saboteur.
                 </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Stop Blaming Yourself For "Broken" Results</h2>
              <div className="space-y-6 text-slate-300">
                <p>
                  You've tried the vision boards. You've written the journals. You've meditated until your legs were numb. And yet... nothing changes.
                </p>
                <p>
                  Traditional "Gurus" tell you that you just need to <span className="text-amber-400 italic">believe harder</span>. But that only adds to the frustration. 
                </p>
                <p className="font-semibold text-white">
                  The truth is: You aren't broken. Your internal frequency is simply being siphoned by a blockage that meditation alone cannot reach.
                </p>
                <ul className="space-y-4 pt-4">
                  {[
                    "No complicated spiritual exercises",
                    "No 1-hour time commitments",
                    "No 'fake it till you make it' routines",
                    "Just 10 minutes of passive listening"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution / Bridge */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-10 italic">"The Universe Has Answered..."</h2>
          <div className="bg-slate-900/50 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
              <Info className="w-6 h-6 text-slate-700" />
            </div>
            
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Stefan discovered a specific sound frequency—a digital "retuning" process—that is designed to dissolve the "Mind Reaper" on contact. It works at the subconscious level, aligning your internal energy with the frequency of flow while you rest.
            </p>

            <div className="bg-amber-400/10 border border-amber-500/20 rounded-2xl p-6 mb-10">
              <p className="text-amber-200 font-medium">
                "I went from struggling to pay my rent to receiving an unexpected financial windfall just 14 days after starting. It felt like a dam finally broke." 
                <span className="block mt-2 text-slate-500 text-sm">— Sarah K., Recent Member</span>
              </p>
            </div>

            <button 
              type="button"
              onClick={handleRedirect}
              className="w-full md:w-auto px-12 py-5 font-bold text-lg text-slate-900 bg-amber-400 rounded-xl transition-all hover:bg-amber-300 shadow-xl"
            >
              Watch The Message & Claim Your Gift
            </button>
            <p className="mt-4 text-slate-500 text-xs uppercase tracking-widest">
              Available For A Limited Time
            </p>
          </div>
        </div>
      </section>

      {/* Compliance Footer */}
      <footer className="bg-slate-950 border-t border-white/5 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-500" />
                Legal Disclaimers
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                The content on this website and the referenced program are provided for <strong>educational and entertainment purposes only</strong>. Individual results vary and are not guaranteed. There is no guarantee that you will earn money or experience specific life changes.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                This frequency methodology is not intended to diagnose, treat, cure, or prevent any disease. Always seek the advice of your physician or other qualified health care provider with any questions you may have regarding a medical or mental health condition.
              </p>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-slate-900/50 rounded-lg border border-white/5">
                <p className="text-slate-500 text-xs">
                  <strong>Age Restriction:</strong> By using this site, you certify that you are at least 18 years of age.
                </p>
              </div>
              <div className="p-4 bg-slate-900/50 rounded-lg border border-white/5">
                <p className="text-slate-500 text-xs">
                  <strong>Liability:</strong> The website and its contents are provided "as is". The provider is not responsible for any damages resulting from the use or misuse of the information provided.
                </p>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-600 text-xs">
              &copy; 2026 Frequency Rewiring. All Rights Reserved.
            </p>
            <div className="flex gap-6 text-xs text-slate-500 underline underline-offset-4">
              <a href="#" className="hover:text-amber-400">Privacy Policy</a>
              <a href="#" className="hover:text-amber-400">Terms of Service</a>
              <a href="#" className="hover:text-amber-400">Earnings Disclaimer</a>
              <a href="#" className="hover:text-amber-400">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;