import React, { useState } from 'react';
import { ChevronRight, CheckCircle, Lock, Mail, Heart, ArrowRight, ShieldCheck, Inbox, AlertCircle, PlayCircle } from 'lucide-react';

/**
 * CONFIGURATION
 */
const AFFILIATE_LINK = "https://savethemarriage.com/?hopId=50f57b6a-8478-4ec4-8818-c390fc813f92";
const APP_TITLE = "Marriage Restoration Project";

const App = () => {
  const [step, setStep] = useState('landing'); 
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const handleOptIn = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "marriage-leads", "email": email })
    })
    .then(() => {
      setIsSubmitting(false);
      setStep('bridge');
      window.scrollTo(0, 0);
    })
    .catch(error => {
      console.error("Submission error:", error);
      setStep('bridge'); 
    });
  };

  const LandingPage = () => (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <form name="marriage-leads" data-netlify="true" netlify-honeypot="bot-field" hidden>
        <input type="email" name="email" />
      </form>

      {/* Top Bar - Changed to Emerald */}
      <div className="bg-emerald-800 text-white py-2.5 text-center text-xs md:text-sm font-bold px-4 uppercase tracking-[0.2em]">
        Free Resource: The 3-Step Emergency Marriage Roadmap
      </div>

      <header className="max-w-4xl mx-auto pt-16 pb-12 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-slate-900 leading-[1.1] tracking-tight">
          Is Your Marriage <span className="text-emerald-600 italic">Falling Apart?</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Don't sign any papers yet. Get the roadmap to stopping a divorce and reconnecting—even if your spouse says it's over.
        </p>

        <div className="bg-white rounded-[2rem] shadow-2xl p-8 md:p-12 max-w-lg mx-auto border border-slate-200 relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
            Instant Access via Email
          </div>
          
          <form onSubmit={handleOptIn} className="space-y-5">
            <div className="text-left">
              <label className="block text-slate-700 text-sm font-bold mb-2 ml-1">Enter your best email address:</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-emerald-500 transition-colors" />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="name@example.com"
                  className="w-full pl-12 pr-4 py-5 rounded-2xl border-2 border-slate-100 bg-slate-50 focus:bg-white focus:border-emerald-500 outline-none transition-all text-lg font-medium"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            
            {/* Primary Button - Changed to Emerald */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-black py-6 rounded-2xl text-xl shadow-xl hover:shadow-emerald-200 active:translate-y-1 transition-all flex items-center justify-center gap-3 uppercase tracking-tight"
            >
              {isSubmitting ? "Processing..." : "Send Me The Roadmap"}
              <ChevronRight className="w-6 h-6" />
            </button>
          </form>
          
          <p className="mt-6 text-slate-400 text-[10px] md:text-xs flex items-center justify-center gap-2 uppercase font-bold tracking-widest">
            <Lock className="w-3.5 h-3.5" /> 100% Privacy Guaranteed
          </p>
        </div>
      </header>

      <section className="max-w-4xl mx-auto py-12 px-6 border-t border-slate-200 mb-12">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <h4 className="font-black text-slate-900 uppercase text-sm">Immediate Calm</h4>
            <p className="text-sm text-slate-500 leading-relaxed">Stop the fighting today with the "Neutral Zone" technique.</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-black text-slate-900 uppercase text-sm">The Reset</h4>
            <p className="text-sm text-slate-500 leading-relaxed">Learn why "talking it out" often pushes them further away.</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-black text-slate-900 uppercase text-sm">Solo Recovery</h4>
            <p className="text-sm text-slate-500 leading-relaxed">How to save the marriage even if you are the only one trying.</p>
          </div>
        </div>
      </section>
    </div>
  );

  const BridgePage = () => (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <div className="bg-emerald-500 h-2 w-full"></div>
      
      <main className="max-w-4xl mx-auto py-16 px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-6 py-2 rounded-full font-black text-sm mb-6 border border-emerald-100 uppercase tracking-widest">
            <Inbox className="w-4 h-4" /> Step 1 Complete: Email Sent
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Go Check Your Inbox...
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
            The Roadmap is on its way to <span className="text-emerald-600 font-bold underline decoration-emerald-200">{email}</span>. Please allow 3-5 minutes for delivery.
          </p>
        </div>

        <div className="bg-slate-50 rounded-2xl p-6 mb-16 border border-slate-200 flex flex-col md:flex-row gap-5 items-center">
          <div className="bg-white p-3 rounded-full shadow-sm">
            <AlertCircle className="w-8 h-8 text-slate-400" />
          </div>
          <p className="text-slate-500 text-sm italic text-center md:text-left leading-relaxed">
            <strong>Important:</strong> If you don't see it soon, check your <strong>Promotions</strong> or <strong>Spam</strong> folder.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tighter">
              DO THIS WHILE YOU WAIT:
            </h2>
            <div className="h-1 w-20 bg-emerald-600 mx-auto mt-2"></div>
          </div>

          <div className="bg-white rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] p-8 md:p-16 border border-slate-100">
            <div className="prose prose-slate max-w-none text-lg leading-[1.6]">
              <p className="font-bold text-slate-900 text-xl mb-4">You are not alone in this.</p>
              <p>
                The roadmap I sent you is the foundation. However, if your spouse has already mentally checked out, you need more than a roadmap—you need an <strong>Emergency Intervention.</strong>
              </p>
              <p className="mb-8">
                I strongly suggest you watch this presentation by <strong>Dr. Lee Baucom</strong>. He is the world's leading expert on saving marriages when only <em>one</em> person is actually trying.
              </p>
              
              <div className="my-12">
                <a
                  href={AFFILIATE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-slate-900 hover:bg-black text-white p-8 md:p-10 rounded-[2rem] shadow-2xl transition-all transform hover:-translate-y-2 text-center relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform">
                    <Heart className="w-24 h-24 fill-white" />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <PlayCircle className="w-10 h-10 text-emerald-500" />
                      <span className="text-2xl md:text-4xl font-black uppercase tracking-tight">Watch Video Now</span>
                    </div>
                    <p className="text-slate-400 font-bold text-sm uppercase tracking-widest">Crucial: Dr. Baucom's 3-Step Strategy</p>
                  </div>
                </a>
              </div>

              <p className="text-slate-500 text-base italic border-l-4 border-slate-100 pl-6">
                "It’s not just about fixing the relationship; it’s about becoming the 'Attractive Character' that your spouse fell in love with in the first place."
              </p>
            </div>
          </div>
        </div>

        <footer className="mt-24 pt-12 border-t border-slate-100 text-center text-slate-400 text-xs font-medium">
          <p>© {new Date().getFullYear()} {APP_TITLE}</p>
          <p className="mt-8 max-w-xl mx-auto leading-relaxed">
            Earnings Disclaimer: We are a professional review and recommendation site. If you choose to use the resources linked here, we may receive a commission.
          </p>
        </footer>
      </main>
    </div>
  );

  return (
    <div className="antialiased selection:bg-emerald-100 selection:text-emerald-900">
      {step === 'landing' ? <LandingPage /> : <BridgePage />}
    </div>
  );
};

export default App;