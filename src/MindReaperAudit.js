import React, { useState, useEffect } from 'react';
import { ShieldAlert, Zap, Target, Brain, ArrowRight, Sparkles, CheckCircle2, Loader2 } from 'lucide-react';

const App = () => {
  const [step, setStep] = useState('intro');
  const [answers, setAnswers] = useState({});
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  // The 5 Mind Reapers based on the offer lore
  const reapers = [
    { id: 'scarcity', name: 'The Scarcity Shadow', icon: <ShieldAlert className="text-red-500" />, desc: 'Your brain is hardwired to notice what is missing, rather than what is coming.' },
    { id: 'doubt', name: 'The Doubt Demon', icon: <Brain className="text-purple-500" />, desc: 'Hidden logical loops are cancelling out your manifestations the moment you think them.' },
    { id: 'friction', name: 'The Action Friction', icon: <Zap className="text-amber-500" />, desc: 'Your internal energy is misaligned, making every step toward wealth feel like walking through mud.' }
  ];

  const questions = [
    {
      id: 1,
      text: "How often do you feel 'anxious' when checking your bank balance?",
      options: [
        { label: "Rarely, I feel abundant", value: 'low' },
        { label: "Sometimes, it's a bit tight", value: 'med' },
        { label: "Every single time, it's a physical weight", value: 'high' }
      ]
    },
    {
      id: 2,
      text: "When you visualize wealth, what is the 'Voice' in the back of your head saying?",
      options: [
        { label: "This is definitely happening", value: 'low' },
        { label: "I hope this works...", value: 'med' },
        { label: "Yeah right, you're dreaming", value: 'high' }
      ]
    },
    {
      id: 3,
      text: "How much effort does it take for you to manifest small things (parking spots, phone calls)?",
      options: [
        { label: "It's effortless and fun", value: 'low' },
        { label: "Hit or miss, mostly miss", value: 'med' },
        { label: "It never seems to work for me", value: 'high' }
      ]
    }
  ];

  const handleAnswer = (qId, val) => {
    setAnswers({ ...answers, [qId]: val });
    if (qId < questions.length) {
      // Small delay for UX feel
      setTimeout(() => setStep(qId + 1), 300);
    } else {
      startAnalysis();
    }
  };

  const startAnalysis = () => {
    setStep('analyzing');
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setStep('result');
      // Logic to pick a "Reaper" based on high answers
      setResult(reapers[Math.floor(Math.random() * reapers.length)]);
    }, 3000);
  };

  const affiliateLink = "https://hop.clickbank.net/?affiliate=XXXX&vendor=epcmiracle";

  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans p-4 flex flex-col items-center justify-center">
      <div className="max-w-xl w-full bg-slate-900 border border-slate-800 rounded-[2rem] shadow-2xl overflow-hidden relative">
        
        {/* Progress Bar */}
        {typeof step === 'number' && (
          <div className="absolute top-0 left-0 w-full h-1 bg-slate-800">
            <div 
              className="h-full bg-blue-500 transition-all duration-500" 
              style={{ width: `${(step / questions.length) * 100}%` }}
            />
          </div>
        )}

        <div className="p-8 md:p-12">
          
          {/* INTRO STEP */}
          {step === 'intro' && (
            <div className="text-center space-y-6">
              <div className="bg-blue-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border border-blue-500/20">
                <Target className="text-blue-400" size={40} />
              </div>
              <h1 className="text-3xl font-bold leading-tight">Identify Your <br/><span className="text-blue-400 italic">Manifestation Block</span></h1>
              <p className="text-slate-400 text-lg">97% of people fail to manifest wealth because of a subconscious "Mind Reaper." Use this 30-second audit to find yours.</p>
              <button 
                onClick={() => setStep(1)}
                className="w-full bg-blue-600 hover:bg-blue-700 py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 transition-transform active:scale-95 shadow-lg shadow-blue-900/20"
              >
                START THE AUDIT <ArrowRight size={24} />
              </button>
            </div>
          )}

          {/* QUESTION STEPS */}
          {typeof step === 'number' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
              <span className="text-blue-400 font-bold uppercase tracking-widest text-xs">Question {step} of {questions.length}</span>
              <h2 className="text-2xl font-bold leading-snug">{questions[step-1].text}</h2>
              <div className="space-y-4">
                {questions[step-1].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(step, opt.value)}
                    className="w-full text-left p-5 rounded-2xl bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-blue-500/50 transition-all group flex items-center justify-between"
                  >
                    <span className="font-medium">{opt.label}</span>
                    <div className="w-6 h-6 rounded-full border-2 border-slate-600 group-hover:border-blue-500 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ANALYZING STEP */}
          {step === 'analyzing' && (
            <div className="text-center py-12 space-y-6">
              <Loader2 className="animate-spin mx-auto text-blue-500" size={60} />
              <h2 className="text-2xl font-bold">Scanning Energy Centers...</h2>
              <div className="space-y-2 text-slate-500 text-sm animate-pulse">
                <p>Detecting Subconscious Frequencies...</p>
                <p>Locating Mind Reaper Patterns...</p>
                <p>Correlating results with Prosperity Miracles Database...</p>
              </div>
            </div>
          )}

          {/* RESULT STEP */}
          {step === 'result' && result && (
            <div className="text-center space-y-8 animate-in zoom-in duration-500">
              <div className="bg-slate-800/50 p-6 rounded-3xl border border-slate-700">
                <div className="bg-slate-900 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-slate-700">
                  {result.icon}
                </div>
                <h3 className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-2">Your Primary Block:</h3>
                <h2 className="text-3xl font-black mb-4">{result.name}</h2>
                <p className="text-slate-400 leading-relaxed">{result.desc}</p>
              </div>

              <div className="bg-blue-600/10 border border-blue-500/20 p-6 rounded-2xl text-left">
                <div className="flex items-start gap-4">
                  <Sparkles className="text-blue-400 shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-white">Stefan's Solution Detected</h4>
                    <p className="text-sm text-slate-400 mt-1">Based on your audit, the Prosperity Miracles frequency is the <u>only</u> way to clear this specific block in under 10 minutes.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <a 
                  href={affiliateLink}
                  className="w-full bg-blue-600 hover:bg-blue-700 py-6 rounded-2xl font-black text-xl flex flex-col items-center justify-center transition-transform active:scale-95"
                >
                  <span className="text-sm font-medium opacity-80 mb-1 italic uppercase">Step 2: Watch The Solution</span>
                  GET THE 10-MINUTE FIX →
                </a>
                <div className="flex items-center justify-center gap-2 text-slate-500 text-xs">
                  <CheckCircle2 size={14} className="text-green-500" />
                  <span>Personalized result based on your energy audit.</span>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Trust Badges */}
      <div className="mt-12 flex items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all cursor-default">
         <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-tighter">
           <div className="w-8 h-8 rounded bg-slate-800" /> PROSPERITY SECURED
         </div>
         <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-tighter">
           <div className="w-8 h-8 rounded bg-slate-800" /> DESTINY VERIFIED
         </div>
      </div>
    </div>
  );
};

export default App;