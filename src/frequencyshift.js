import React, { useState, useEffect } from 'react';
import { Volume2, ShieldCheck, Zap, ArrowRight, Star, Lock, Info, AlertCircle, Headphones, Sparkles } from 'lucide-react';

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCTA = () => {
    // Replace with your actual affiliate link
    window.location.href = "https://62ccdfv-y4u16yp0-bu913nhrg.hop.clickbank.net";
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100">
      {/* Sticky Header */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-indigo-900">
            <Zap className="text-amber-500 fill-amber-500" size={24} />
            <span>Frequency<span className="text-indigo-600">Shift</span></span>
          </div>
          <button 
            onClick={handleCTA}
            className="hidden md:block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full font-semibold transition-all hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Watch Message Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-16 md:pt-48 md:pb-24 bg-gradient-to-b from-indigo-50 to-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 px-4 py-1.5 rounded-full text-sm font-bold mb-6 animate-pulse">
            <Sparkles size={16} className="text-indigo-600" />
            URGENT: DESTINY HAS BROUGHT YOU TO THIS PAGE
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-8">
            Is an Invisible <span className="text-indigo-600 underline decoration-amber-400 underline-offset-8">"Mind Reaper"</span> Quietly Siphoning Away Your Abundance?
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Discover the <span className="font-bold text-indigo-600">10-minute frequency shift</span> used to clear the energetic parasites blocking your path to wealth.
          </p>
          
          <div className="flex flex-col items-center gap-4">
            <button 
              onClick={handleCTA}
              className="group relative flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white text-lg md:text-xl px-10 py-5 rounded-2xl font-bold transition-all shadow-xl hover:shadow-indigo-200 transform hover:-translate-y-1 w-full md:w-auto"
            >
              Get Instant Access To The Secret
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-sm text-slate-500 flex items-center gap-2 font-medium">
              <ShieldCheck size={16} className="text-green-500" /> Authorized Presentation Access
            </p>
          </div>
        </div>
      </header>

      {/* The Epiphany Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="prose prose-lg prose-slate max-w-none">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-16 w-16 bg-indigo-100 rounded-full flex items-center justify-center">
                <Volume2 className="text-indigo-600" size={32} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-indigo-900 m-0">The Answer to Your Struggle</h2>
                <p className="text-slate-500 m-0 font-medium">Why working "harder" is actually pushing wealth away...</p>
              </div>
            </div>
            
            <p className="text-lg leading-relaxed text-slate-700 mb-6">
              Have you ever wondered why some people seem to attract success effortlessly while you stay stuck behind a glass wall, no matter how hard you try?
            </p>

            <p className="text-lg leading-relaxed text-slate-700 mb-6">
              It's not your lack of education, your background, or your luck. It is a <strong>negative energy parasite</strong>—the Mind Reaper—that has latched onto your vibration and is siphoning your abundance before it can reach you.
            </p>

            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-8 my-10 rounded-r-xl shadow-sm">
              <p className="italic text-slate-800 text-xl font-medium mb-4">
                "I discovered that you cannot tune a radio by working harder on the dial; you have to shift the frequency. Once I cleared the Mind Reaper, the struggle stopped instantly."
              </p>
              <p className="text-sm font-bold text-indigo-700">— A Special Message From Stefan</p>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-4">The 10-Minute Cellular Shift</h3>
            <p className="text-lg leading-relaxed text-slate-700 mb-6">
              You don't need to learn new skills or spend hours in meditation. You simply need to <strong>retune your frequency</strong>. This presentation reveals the exact 10-minute daily audio ritual designed to "reset" your internal Prosperity Dial.
            </p>
            
            <p className="text-lg leading-relaxed text-slate-700 font-bold mb-6 text-indigo-700 bg-white border-2 border-dashed border-indigo-200 p-6 rounded-xl">
              This discovery is based on the scientific reality that every human cell vibrates. If your vibration is "off," you are literally repelling the things you desire.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Break Through The Energetic Barrier</h2>
            <p className="text-slate-400">The most effective way to align with your desired future.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: <Headphones className="text-amber-400" />, 
                title: "Effortless Tuning", 
                desc: "No complex rituals. Just listen to a single track for 10 minutes before sleep." 
              },
              { 
                icon: <Zap className="text-indigo-400" />, 
                title: "Immediate Clearing", 
                desc: "Start removing the 'Mind Reaper' parasites from your vibration today." 
              },
              { 
                icon: <ShieldCheck className="text-green-400" />, 
                title: "Proven Results", 
                desc: "Join thousands who have shifted their frequency and attracted abundance." 
              },
              { 
                icon: <Lock className="text-amber-400" />, 
                title: "Anytime Access", 
                desc: "Use the easy mobile interface to stay in sync no matter where you are." 
              }
            ].map((feature, i) => (
              <div key={i} className="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl">
                <div className="mb-4 bg-slate-700/50 w-12 h-12 rounded-lg flex items-center justify-center">{feature.icon}</div>
                <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Urgency Section */}
      <section className="py-24 bg-indigo-600 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 opacity-10">
          <Zap size={400} />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            Stop Searching. Start Manifesting.
          </h2>
          <p className="text-xl md:text-2xl text-indigo-100 mb-10 max-w-2xl mx-auto">
            The Universe has brought you here for a reason. Are you ready to see the truth about your prosperity?
          </p>
          <button 
            onClick={handleCTA}
            className="group bg-white text-indigo-600 hover:bg-indigo-50 text-xl px-12 py-6 rounded-2xl font-bold transition-all shadow-2xl transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3 mx-auto"
          >
            Watch The Full Presentation Now
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Compliance Footer */}
      <footer className="bg-slate-950 text-slate-500 py-20 text-xs md:text-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 mb-12 border-b border-slate-900 pb-12">
            <div className="space-y-4">
              <h5 className="text-slate-300 font-bold flex items-center gap-2">
                <Info size={16} /> EDUCATIONAL & ENTERTAINMENT NOTICE
              </h5>
              <p className="leading-relaxed">
                The information provided on this website is for <strong>educational & entertainment purposes only</strong>. It is not intended as a substitute for professional medical, legal, or financial advice. We encourage all visitors to consult with a licensed professional before making significant changes to their life or financial strategy.
              </p>
              <p className="leading-relaxed">
                Statements regarding energy frequency and brainwave entrainment have not been evaluated by the Food and Drug Administration or any other regulatory body.
              </p>
            </div>
            <div className="space-y-4">
              <h5 className="text-slate-300 font-bold flex items-center gap-2">
                <AlertCircle size={16} /> CLICKBANK® DISCLOSURE
              </h5>
              <p className="leading-relaxed">
                ClickBank is the retailer of products on this site. CLICKBANK® is a registered trademark of Click Sales, Inc., a Delaware corporation located at 1444 S. Entertainment Ave., Suite 410 Boise, ID 83709, USA and used by permission.
              </p>
              <p className="leading-relaxed">
                ClickBank's role as retailer does not constitute an endorsement, approval or review of these products or any claim, statement or opinion used in promotion of these products.
              </p>
            </div>
          </div>
          
          <div className="text-center space-y-6">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-slate-400 uppercase tracking-widest font-bold">
              <a href="#" className="hover:text-indigo-400 transition-colors">Terms & Conditions</a>
              <a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-indigo-400 transition-colors">Earnings Disclaimer</a>
              <a href="#" className="hover:text-indigo-400 transition-colors">Contact Support</a>
            </div>
            <p className="text-slate-700">© 2026 Energy Alignment Solutions. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;