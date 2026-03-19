import React, { useState, useEffect } from 'react';
import { ArrowRight, Lock, Sparkles, AlertTriangle, CheckCircle2 } from 'lucide-react';

const Frequencyrewiring2 = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Replace with your actual ClickBank Hoplink
  const affiliateLink = "https://62ccdfv-y4u16yp0-bu913nhrg.hop.clickbank.net";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100">
      
      {/* Urgent Top Bar */}
      <div className="bg-amber-100 border-b border-amber-200 py-2.5 px-4 text-center">
        <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-amber-800 flex items-center justify-center gap-2">
          <AlertTriangle size={14} />
          Important: Do Not Close This Page Until You Read Every Word
        </p>
      </div>

      <div className={`max-w-3xl mx-auto px-6 py-12 md:py-20 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* Header / Hook */}
        <header className="text-center mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">
            A Message For My Dear Friend...
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-slate-900 mb-8">
            The Universe Has Been <span className="text-blue-600 italic">Listening</span> To Your Prayers...
          </h1>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </header>

        {/* Body / Epiphany Bridge Story */}
        <section className="space-y-8 text-lg md:text-xl leading-relaxed text-slate-700">
          <p className="font-bold text-2xl text-slate-900">
            I know exactly how it feels.
          </p>
          
          <p>
            You’ve been working hard. You’ve been trying to manifest a better life. You’ve probably tried the "Law of Attraction," read the books, and maybe even tried meditation...
          </p>

          <p>
            And yet, the bank account stays the same. The stress keeps piling up. It feels like there’s an <span className="bg-blue-50 px-1 border-b-2 border-blue-200 text-slate-900 font-medium">invisible wall</span> between you and the abundance you know you deserve.
          </p>

          <blockquote className="bg-slate-900 text-white rounded-3xl p-8 md:p-10 my-10 relative overflow-hidden group">
            <Sparkles className="absolute -right-4 -top-4 text-blue-500 opacity-20 group-hover:scale-125 transition-transform duration-500" size={120} />
            <p className="relative z-10 italic text-xl md:text-2xl leading-snug">
              "I used to think wealth was for 'the lucky ones.' I thought I was destined to struggle... until my friend Stefan showed me the 'Mind Reaper' that was secretly killing my manifestations."
            </p>
          </blockquote>

          <p>
            The truth is: You are not limited by your past, your age, or your current balance. 
          </p>

          <p>
            The Universe doesn't want you to "work harder." It wants you to <strong>align your energy.</strong>
          </p>

          <p>
            My mentor and good friend, <span className="text-slate-900 font-bold">Stefan</span>, discovered a breakthrough that allows you to attract spendable wealth in as little as <span className="text-blue-600 font-black">10 minutes a day.</span>
          </p>

          <div className="space-y-4 pt-4">
            <h2 className="text-2xl font-bold text-slate-900">Why am I sharing this with you?</h2>
            <p>
              Because you were meant for more than "just getting by." You are here by destiny. Stefan has prepared a special, exclusive video message for you that reveals exactly how to unlock your inner ability to harness abundance—starting <u>today</u>.
            </p>
          </div>
        </section>

        {/* Big CTA Section */}
        <div className="mt-20">
          <div className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-2xl shadow-blue-200 border border-slate-100 text-center relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest shadow-lg">
              Destiny is Calling
            </div>

            <p className="text-slate-500 font-medium mb-8">Click the button below to see the message the Universe has for you:</p>
            
            <a 
              href={affiliateLink}
              className="group relative inline-flex items-center justify-center w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-black text-xl md:text-3xl py-6 px-12 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl active:scale-95"
            >
              <span className="flex items-center gap-3">
                YES! SHOW ME THE MESSAGE
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </span>
            </a>

            <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6 text-slate-400 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-green-500" />
                <span>Instant Access</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock size={16} className="text-blue-400" />
                <span>Secure Connection</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles size={18} className="text-amber-400" />
                <span>Universe Verified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer / Legal */}
        <footer className="mt-24 pt-12 border-t border-slate-200 text-center">
          <p className="text-slate-500 italic mb-8">"Your destiny is calling. Don't let the Mind Reaper keep you in the dark any longer."</p>
          <p className="font-bold text-slate-900 mb-12 text-xl italic">— Your Personal Success Mentor</p>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">
            <a href="#" className="hover:text-blue-600 transition-colors">Terms</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Earnings Disclaimer</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>

          <div className="bg-slate-100 rounded-2xl p-6 text-[10px] text-slate-400 leading-relaxed max-w-2xl mx-auto uppercase">
            ClickBank is the retailer of products on this site. CLICKBANK® is a registered trademark of Click Sales, Inc., a Delaware corporation located at 1444 S. Entertainment Ave., Suite 410 Boise, ID 83709, USA and used by permission. ClickBank's role as retailer does not constitute an endorsement, approval or review of these products or any claim, statement or opinion used in promotion of these products.
          </div>
          <p className="mt-8 text-slate-300 text-xs">© 2026 Prosperity Miracles. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Frequencyrewiring2;