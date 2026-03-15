import React, { useState, useEffect } from 'react';
import { Sparkles, ChevronRight, Star, ShieldCheck, Clock, Send, CheckCircle2, Moon, Sun, Lock, BrainCircuit } from 'lucide-react';

const App = () => {
  const [step, setStep] = useState('welcome');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [progress, setProgress] = useState(0);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  // CONFIGURATION
  const SALES_PAGE_URL = "https://your-sales-page-url.com";
  const apiKey = ""; // The environment provides this at runtime

  const questions = [
    {
      id: 'sun_sign',
      question: "What is your Sun Sign?",
      options: ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'],
      type: 'grid'
    },
    {
      id: 'focus',
      question: "Which area of your life needs the most cosmic clarity right now?",
      options: ['Love & Relationships', 'Career & Wealth', 'Personal Growth', 'Health & Energy'],
      type: 'list'
    },
    {
      id: 'struggle',
      question: "Do you feel like you've been 'stuck' lately?",
      options: ['Yes, definitely', 'Sometimes', 'I feel a shift coming', 'Not really'],
      type: 'list'
    },
    {
      id: 'goal',
      question: "In 12 months, where do you want to be?",
      options: ['Financially Independent', 'In a Soulmate Connection', 'Living my True Purpose', 'At Peace with my Past'],
      type: 'list'
    }
  ];

  const generateAIReading = async (userAnswers) => {
    setIsGenerating(true);
    const prompt = `User is a ${userAnswers.sun_sign} focusing on ${userAnswers.focus}. 
    They feel ${userAnswers.struggle} and want to be ${userAnswers.goal} in 12 months. 
    Write a 3-sentence "Cosmic Teaser" for their 2026 forecast. 
    Tone: Mystical, scarily accurate, encouraging but urgent. 
    Do not use generic fluff. Mention a specific "alignment" or "planetary shift" related to their sign.`;

    try {
      let retries = 0;
      const maxRetries = 5;
      
      const callApi = async () => {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            systemInstruction: { parts: [{ text: "You are an elite Vedic and Western Astrologer. You provide short, high-impact readings that make users feel deeply seen." }] }
          })
        });
        
        if (!response.ok) throw new Error('API Error');
        const data = await response.json();
        return data.candidates?.[0]?.content?.parts?.[0]?.text;
      };

      // Simple exponential backoff
      while (retries < maxRetries) {
        try {
          const text = await callApi();
          setAiResponse(text);
          break;
        } catch (e) {
          retries++;
          await new Promise(res => setTimeout(res, Math.pow(2, retries) * 1000));
        }
      }
    } catch (err) {
      setAiResponse("Your 2026 alignment shows a massive shift in your primary house of influence. Your full blueprint is ready below.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleStart = () => {
    setStep('quiz');
    setProgress((1 / questions.length) * 100);
  };

  const handleAnswer = (answer) => {
    const newAnswers = { ...answers, [questions[currentQuestion].id]: answer };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setProgress(((currentQuestion + 2) / questions.length) * 100);
    } else {
      setStep('loading');
      startAnalysis(newAnswers);
    }
  };

  const startAnalysis = (finalAnswers) => {
    let p = 0;
    const interval = setInterval(() => {
      p += 1;
      setProgress(p);
      if (p >= 100) {
        clearInterval(interval);
        // Start AI generation in background so it's ready for the next step
        generateAIReading(finalAnswers);
        setTimeout(() => setStep('optin'), 500);
      }
    }, 30);
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setStep('results-teaser');
  };

  const renderOptIn = () => (
    <div className="max-w-xl mx-auto px-4 py-12 text-center">
      <div className="bg-indigo-600/20 border border-indigo-500/30 rounded-2xl p-8 shadow-2xl backdrop-blur-sm">
        <h2 className="text-3xl font-serif text-white mb-2">Analysis Complete!</h2>
        <p className="text-indigo-200 mb-8">
          We've mapped your <strong>{answers.sun_sign}</strong> transits. Where should we send your full 12-month blueprint?
        </p>
        
        <form className="space-y-4" onSubmit={handleFinalSubmit}>
          <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="First Name" className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-indigo-300/50" />
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-indigo-300/50" />
          <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center space-x-2">
            <span>Get My Cosmic Reading</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );

  const renderResultsTeaser = () => (
    <div className="max-w-2xl mx-auto px-4 py-12 text-center">
      <div className="bg-gradient-to-b from-indigo-900/40 to-transparent p-1 rounded-3xl mb-8">
        <div className="bg-[#050510] rounded-[22px] p-8 border border-indigo-500/30">
          <div className="flex justify-center mb-6">
            <BrainCircuit className="w-12 h-12 text-indigo-400 animate-pulse" />
          </div>
          <h2 className="text-2xl font-serif text-white mb-6">Personal Insight for {name || 'you'}:</h2>
          
          {isGenerating ? (
            <div className="space-y-2 animate-pulse">
              <div className="h-4 bg-white/5 rounded w-3/4 mx-auto"></div>
              <div className="h-4 bg-white/5 rounded w-5/6 mx-auto"></div>
              <div className="h-4 bg-white/5 rounded w-2/3 mx-auto"></div>
            </div>
          ) : (
            <p className="text-xl text-indigo-100 italic leading-relaxed font-light mb-8">
              "{aiResponse}"
            </p>
          )}

          <div className="pt-6 border-t border-white/10">
            <p className="text-indigo-200/60 mb-6 text-sm">
              This is just the surface. Your full 100+ page **Akasha Blueprint** contains the exact dates for your 2026 breakthroughs.
            </p>
            <button 
              onClick={() => window.location.href = SALES_PAGE_URL}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold py-5 rounded-2xl transition-all shadow-xl shadow-indigo-500/20 text-lg flex items-center justify-center group"
            >
              <span>Access My Full 12-Month Blueprint</span>
              <ChevronRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
      <p className="text-white/40 text-xs">Securely redirected to results page in 10... 9...</p>
    </div>
  );

  const renderWelcome = () => (
    <div className="max-w-3xl mx-auto text-center px-4 py-20">
      <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
        Your 2026 Is <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Written.</span>
      </h1>
      <p className="text-xl text-indigo-100/80 mb-10 max-w-2xl mx-auto">
        We use AI-powered transit mapping to reveal the exact cosmic windows for your wealth, love, and purpose.
      </p>
      <button onClick={handleStart} className="px-10 py-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl shadow-2xl transition-all flex items-center mx-auto">
        Analyze My Chart
        <ChevronRight className="ml-2 w-5 h-5" />
      </button>
    </div>
  );

  const renderQuiz = () => {
    const q = questions[currentQuestion];
    return (
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="w-full bg-white/10 h-1 mb-12 rounded-full overflow-hidden">
          <div className="bg-indigo-500 h-full transition-all duration-300" style={{ width: `${progress}%` }} />
        </div>
        <h2 className="text-3xl font-serif text-white mb-8 text-center">{q.question}</h2>
        <div className={q.type === 'grid' ? "grid grid-cols-3 gap-3" : "space-y-3"}>
          {q.options.map((opt) => (
            <button key={opt} onClick={() => handleAnswer(opt)} className="p-4 border border-white/10 bg-white/5 hover:bg-indigo-600/40 text-white rounded-xl transition-all text-center font-medium">
              {opt}
            </button>
          ))}
        </div>
      </div>
    );
  };

  const renderLoading = () => (
    <div className="max-w-2xl mx-auto text-center px-4 py-20">
      <div className="w-20 h-20 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-8"></div>
      <h2 className="text-2xl text-white font-serif">Synthesizing Cosmic Data...</h2>
      <p className="text-indigo-300/60 mt-4">Consulting your ${answers.sun_sign} alignments.</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#050510] text-white selection:bg-indigo-500">
      <nav className="p-6 flex justify-center border-b border-white/5">
        <div className="flex items-center space-x-2">
          <Moon className="w-6 h-6 text-indigo-500" />
          <span className="text-2xl font-serif font-bold tracking-tighter">AKASHA</span>
        </div>
      </nav>
      <main>
        {step === 'welcome' && renderWelcome()}
        {step === 'quiz' && renderQuiz()}
        {step === 'loading' && renderLoading()}
        {step === 'optin' && renderOptIn()}
        {step === 'results-teaser' && renderResultsTeaser()}
      </main>
    </div>
  );
};

export default App;
