import React, { useState, useEffect, useRef } from 'react';
import { 
  Waves, 
  ArrowRight, 
  ShieldCheck, 
  Zap,
  Fingerprint,
  MousePointer2,
  Info
} from 'lucide-react';

const App = () => {
  const [stage, setStage] = useState('landing');
  
  // Randomize the user's STARTING position
  const [position, setPosition] = useState(() => Math.random() * 100); 
  
  // Randomize WHERE the "target" 432Hz sits on the slider (0-100 scale)
  const [targetSlot] = useState(() => 15 + Math.random() * 70); 

  const [isTuning, setIsTuning] = useState(false);
  const [calibrationProgress, setCalibrationProgress] = useState(0);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [results, setResults] = useState(null);
  
  const audioCtx = useRef(null);
  const osc = useRef(null);
  const gainNode = useRef(null);
  const sliderRef = useRef(null);
  const isDragging = useRef(false);

  // Hidden Constants
  const HIDDEN_TARGET_HZ = 432;

  // Map slider (0-100) to frequency so that targetSlot always = 432Hz
  const getFreqFromPos = (pos) => {
    const offset = pos - targetSlot;
    return HIDDEN_TARGET_HZ + (offset * 0.8);
  };

  const initAudio = () => {
    if (!audioCtx.current) {
      audioCtx.current = new (window.AudioContext || window.webkitAudioContext)();
      osc.current = audioCtx.current.createOscillator();
      gainNode.current = audioCtx.current.createGain();
      
      osc.current.type = 'sine';
      gainNode.current.gain.setValueAtTime(0.06, audioCtx.current.currentTime);
      
      osc.current.connect(gainNode.current);
      gainNode.current.connect(audioCtx.current.destination);
      osc.current.start();
    }
    setAudioEnabled(true);
  };

  useEffect(() => {
    if (audioEnabled && osc.current) {
      const currentFreq = getFreqFromPos(position);
      osc.current.frequency.setTargetAtTime(currentFreq, audioCtx.current.currentTime, 0.05);
    }
  }, [position, audioEnabled]);

  const handleMove = (clientX) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const newPos = (x / rect.width) * 100;
    setPosition(newPos);
  };

  const onMouseDown = (e) => {
    isDragging.current = true;
    handleMove(e.clientX);
  };

  const onTouchStart = (e) => {
    isDragging.current = true;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const onMouseMove = (e) => { if (isDragging.current) handleMove(e.clientX); };
    const onTouchMove = (e) => {
      if (isDragging.current) {
        if (e.cancelable) e.preventDefault();
        handleMove(e.touches[0].clientX);
      }
    };
    const onEnd = () => { isDragging.current = false; };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onEnd);
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('touchend', onEnd);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onEnd);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onEnd);
    };
  }, []);

  const startAnalysis = () => {
    setIsTuning(true);
    let prog = 0;
    const interval = setInterval(() => {
      prog += 2;
      if (prog >= 100) {
        clearInterval(interval);
        const finalFreq = getFreqFromPos(position);
        const diff = Math.abs(finalFreq - HIDDEN_TARGET_HZ);
        
        let verdict;
        if (diff < 2.5) {
          verdict = {
            title: "Natural Harmonizer",
            color: "text-emerald-400",
            msg: `Incredible. Your biological rhythm intuitively locked onto ${finalFreq.toFixed(1)}Hz. You possess a rare "Wealth-Receptive" neural signature. However, without a structural anchor, this resonance will fade within 24 hours.`,
            cta: "LOCK IN MY RESONANCE"
          };
        } else {
          verdict = {
            title: "Vibrational Dissonance",
            color: "text-rose-400",
            msg: `Your chosen frequency is ${finalFreq.toFixed(1)}Hz. This is a "Deficit Tone." Your subconscious is broadcasting a signal ${diff.toFixed(1)}Hz away from the 432Hz Abundance Constant, creating a repelling force against financial gain.`,
            cta: "RECALIBRATE MY BRAIN NOW"
          };
        }

        setResults({ ...verdict, freq: finalFreq.toFixed(1) });
        if (audioCtx.current) audioCtx.current.close();
        setStage('results');
      } else {
        setCalibrationProgress(prog);
      }
    }, 40);
  };

  return (
    <div className="min-h-screen bg-[#02040a] text-slate-300 font-sans flex items-center justify-center p-4 selection:bg-blue-500/30">
      <div className="max-w-xl w-full bg-[#0a0f1d] border border-white/5 rounded-[3rem] shadow-2xl overflow-hidden relative">
        
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none" />

        {stage === 'landing' && (
          <div className="p-10 md:p-14 text-center space-y-10 animate-in fade-in duration-1000 relative z-10">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-10 animate-pulse" />
              <div className="relative bg-slate-900 w-24 h-24 mx-auto rounded-[2rem] flex items-center justify-center border border-white/10 shadow-xl">
                <Fingerprint size={40} className="text-blue-500" />
              </div>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl font-black text-white leading-tight tracking-tighter uppercase">
                Neural <span className="text-blue-500 italic">Alignment</span> Scan
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed">
                Your brain emits a specific financial frequency. If it's "Out of Tune," wealth cannot enter your physical reality.
              </p>
            </div>

            <div className="bg-blue-600/5 rounded-[2rem] p-8 text-left border border-blue-500/10 space-y-5">
              <div className="flex items-center gap-2 text-blue-400 font-black text-[10px] uppercase tracking-[0.25em]">
                <Info size={14} /> Calibration Phase:
              </div>
              <ul className="space-y-4 text-sm text-slate-400">
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                  <span>Slowly move the sensor to scan your neural baseline.</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                  <span>Stop precisely when the sound creates a "Pulling" sensation in your chest.</span>
                </li>
              </ul>
            </div>

            <button 
              onClick={() => { initAudio(); setStage('tuner'); }}
              className="w-full py-8 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl text-xl transition-all shadow-xl shadow-blue-900/30 active:scale-[0.98] uppercase tracking-wider"
            >
              INITIALIZE SCANNER
            </button>
          </div>
        )}

        {stage === 'tuner' && (
          <div className="p-8 md:p-12 space-y-12 animate-in slide-in-from-bottom-8 duration-500 relative z-10">
            <div className="text-center">
              <p className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-2">Internal Resonance Sensor</p>
              <h2 className="text-2xl font-black text-white italic">Scan for your "Abundance Meridian"</h2>
            </div>

            {/* Static visualizer without proximity feedback */}
            <div className="relative py-8 flex items-center justify-center">
               <div className="absolute inset-0 flex items-center justify-center opacity-10">
                 <div className="w-full h-[1px] bg-blue-500" />
                 <div className="absolute w-[1px] h-64 bg-blue-500" />
               </div>
               
               <div className="relative bg-black/40 w-52 h-52 rounded-full border border-blue-500/20 flex items-center justify-center shadow-2xl overflow-hidden">
                  <div className="flex gap-2 items-end h-24">
                    {[...Array(12)].map((_, i) => (
                      <div 
                        key={i} 
                        className="w-2 bg-gradient-to-t from-blue-600 to-blue-300 rounded-full opacity-40 animate-pulse" 
                        style={{ height: `${30 + (Math.random() * 40)}%`, animationDelay: `${i * 100}ms` }}
                      />
                    ))}
                  </div>
                  <div className="absolute inset-0 bg-conic-gradient from-blue-500/10 via-transparent to-transparent animate-[spin_6s_linear_infinite]" />
               </div>
            </div>

            <div className="space-y-12">
              <div className="relative pt-6 pb-2">
                <div 
                  ref={sliderRef}
                  onMouseDown={onMouseDown}
                  onTouchStart={onTouchStart}
                  className="h-20 bg-slate-900/80 rounded-2xl border border-white/10 relative cursor-pointer overflow-hidden touch-none"
                >
                  <div className="absolute inset-0 flex justify-between px-6 opacity-20">
                    {[...Array(40)].map((_, i) => <div key={i} className="w-[1px] h-4 bg-white self-center" />)}
                  </div>
                  
                  <div 
                    className="absolute top-0 bottom-0 w-[2px] bg-blue-400 shadow-[0_0_20px_rgba(96,165,250,1)] transition-transform duration-75"
                    style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
                  >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-2xl border border-white/20">
                      <MousePointer2 size={22} className="text-white fill-white" />
                    </div>
                  </div>
                </div>
              </div>

              {!isTuning ? (
                <button 
                  onClick={startAnalysis}
                  className="w-full py-8 bg-white text-black font-black rounded-3xl text-xl flex items-center justify-center gap-4 hover:bg-blue-50 transition-all shadow-xl active:scale-[0.97]"
                >
                  <Zap size={24} className="fill-black" />
                  CONFIRM CALIBRATION
                </button>
              ) : (
                <div className="space-y-6 text-center">
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 transition-all duration-100" style={{ width: `${calibrationProgress}%` }} />
                  </div>
                  <p className="text-[11px] font-black text-blue-400 uppercase tracking-[0.5em] animate-pulse">
                    Mapping Bio-Financial Signature...
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {stage === 'results' && results && (
          <div className="p-8 md:p-14 text-center space-y-10 animate-in zoom-in-95 duration-700 relative z-10">
            <div className="space-y-4">
               <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500/10 rounded-full border border-blue-500/20 mb-2">
                 <Waves size={18} className="text-blue-400" />
                 <span className="text-xs font-black text-blue-400 uppercase tracking-widest">
                   Signature: {results.freq}Hz
                 </span>
               </div>
               <h2 className={`text-4xl md:text-5xl font-black italic tracking-tighter uppercase leading-none ${results.color}`}>
                 {results.title}
               </h2>
            </div>

            <div className="bg-[#0c1221] border border-white/5 p-10 rounded-[3.5rem] relative shadow-inner">
              <p className="text-slate-200 text-lg md:text-xl leading-relaxed italic font-medium">
                "{results.msg}"
              </p>
            </div>

            <div className="space-y-6">
              <a 
                href="https://62ccdfv-y4u16yp0-bu913nhrg.hop.clickbank.net"
                className="group block w-full py-8 bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-black text-2xl rounded-[2.5rem] shadow-[0_20px_40px_rgba(37,99,235,0.4)] hover:-translate-y-1 transition-all"
              >
                {results.cta}
                <ArrowRight className="inline ml-2" />
              </a>
              
              <div className="flex items-center justify-center gap-3 py-4">
                 <ShieldCheck size={18} className="text-emerald-500" />
                 <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">
                   Vibrational Security Protocol Active
                 </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;