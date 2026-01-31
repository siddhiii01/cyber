import React, { useState } from 'react';
import { Shield, ArrowLeft, BookOpen, AlertTriangle, CheckCircle, XCircle, CreditCard, RefreshCw } from 'lucide-react';

const CyberSafeApp = () => {
  const [view, setView] = useState('dashboard');
  const [activeModule, setActiveModule] = useState(null);
  const [activeTab, setActiveTab] = useState('learn');
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  const modules = {
    "Phishing Attacks": {
      icon: <img src="https://img.icons8.com/color/48/hook.png" alt="hook" className="w-12 h-12" />,
      description: "Learn to identify fake emails, messages, and websites designed to steal your information.",
      learn: {
        understanding: "Phishing is one of the most common cyber attacks in India. Attackers send fake emails, SMS, or WhatsApp messages pretending to be from trusted sources like banks or government agencies.",
        examples: [
          { type: 'SMS', text: "SBI Alert: Your account will be blocked in 24 hrs. Update KYC: bit.ly/sbi-kyc-update", fact: "FAKE! Banks never send shortened links." },
          { type: 'WhatsApp', text: "Your Paytm KYC is expiring. Share Aadhaar and OTP.", fact: "Paytm never asks for OTP on WhatsApp." }
        ],
        dos: ["Verify sender email addresses carefully", "Call official helpline numbers to verify"],
        donts: ["Never click links in suspicious messages", "Never share OTP, PIN, or CVV with anyone"]
      },
      quiz: {
        question: "You receive an SMS saying your SBI account will be blocked. What should you do?",
        msg: "SMS: 'Dear Customer, Your SBI account will be suspended. Update your KYC now: http://sbi-kyc-update.in'",
        options: ["Click the link and update KYC immediately", "Ignore and call SBI's official helpline to verify", "Reply with your account details", "Forward to friends as warning"],
        correct: 1
      }
    },
    "Online Fraud & UPI Scams": {
      icon: <CreditCard className="text-indigo-600" size={48} />,
      description: "Protect yourself from UPI payment scams, fake refunds, and digital payment fraud.",
      learn: {
        understanding: "With 10+ billion transactions monthly, fraudsters exploit the misconception that you need a PIN to receive money.",
        examples: [
          { type: 'OLX Scam', text: "I'm sending ₹15,000... please accept the request and enter PIN.", fact: "This is a COLLECT request, not payment!" },
          { type: 'QR Code Trick', text: "Scan this QR... to receive ₹5,000 cashback.", fact: "Scanning QR + PIN = You PAY money." }
        ],
        dos: ["Remember: No PIN needed to RECEIVE money", "Check transaction type (Pay/Collect)"],
        donts: ["Never enter PIN for receiving money", "Don't scan unknown QR codes"]
      },
      quiz: {
        question: "Someone wants to buy your product on OLX and sends a UPI request. What should you check?",
        msg: "Action: A 'Collect Request' notification appears on your UPI app.",
        options: ["Check if the amount is correct", "Check if it's a PAY or COLLECT request", "Enter PIN quickly", "Call the buyer"],
        correct: 1
      }
    }
  };

  const handleCheckAnswer = (correctIndex) => {
    if (selectedAnswer === null) return;
    setIsAnswerChecked(true);
    setScore(prev => ({
      correct: selectedAnswer === correctIndex ? prev.correct + 1 : prev.correct,
      total: prev.total + 1
    }));
  };

  const navBar = (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        <div
          className="flex items-center gap-3 text-indigo-700 font-bold text-2xl cursor-pointer transition-colors hover:text-indigo-800"
          onClick={() => setView('dashboard')}
        >
          <Shield size={32} className="text-indigo-600" fill="currentColor" />
          <span>CyberSafe India</span>
        </div>
        <div className="hidden md:flex items-center gap-9 text-gray-700 font-medium">
          <button className="hover:text-indigo-700 transition-colors">Learn</button>
          <button className="hover:text-indigo-700 transition-colors">Simulator</button>
          <button className="hover:text-indigo-700 transition-colors">Log In</button>
          <button className="bg-indigo-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-indigo-700 transition-all shadow-sm hover:shadow active:scale-[0.98]">
            Sign Up Free
          </button>
        </div>
      </div>
    </nav>
  );

  if (view === 'dashboard') {
    return (
      <div className="min-h-screen bg-gray-50">
        {navBar}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              Cyber Security Learning Modules
            </h1>
            <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">
              Practical lessons with real Indian examples — phishing, UPI scams, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.keys(modules).map(name => (
              <div
                key={name}
                onClick={() => { setActiveModule(name); setView('module'); }}
                className="group bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl hover:border-indigo-200 transition-all duration-300 overflow-hidden cursor-pointer"
              >
                <div className="h-2 bg-gradient-to-r from-indigo-500 to-blue-400 group-hover:from-indigo-600 group-hover:to-blue-500 transition-all" />
                <div className="p-8">
                  <div className="w-20 h-20 rounded-2xl bg-indigo-50 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                    {modules[name].icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-700 transition-colors">
                    {name}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {modules[name].description}
                  </p>
                  <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                    <BookOpen size={16} />
                    <span>5 quiz questions</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const data = modules[activeModule];

  return (
    <div className="min-h-screen bg-gray-50">
      {navBar}

      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-12">
        <button
          onClick={() => setView('dashboard')}
          className="mb-10 flex items-center gap-2 text-gray-600 hover:text-indigo-700 font-medium transition-colors"
        >
          <ArrowLeft size={18} />
          Back to Modules
        </button>

        <div className="flex items-center gap-5 mb-12">
          <div className="p-4 bg-white rounded-2xl shadow border border-gray-100">
            {data.icon}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{activeModule}</h1>
        </div>

        <div className="inline-flex bg-gray-100 p-1.5 rounded-xl mb-12">
          <button
            onClick={() => { setActiveTab('learn'); setIsAnswerChecked(false); setSelectedAnswer(null); }}
            className={`px-8 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'learn'
                ? 'bg-white shadow text-indigo-700'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Learn
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`px-8 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'quiz'
                ? 'bg-white shadow text-indigo-700'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Quiz
          </button>
        </div>

        {activeTab === 'learn' ? (
          <div className="space-y-12">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 lg:p-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <AlertTriangle className="text-amber-600" size={28} />
                Understanding the Threat
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-10">
                {data.learn.understanding}
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-6">Real Examples from India</h3>
              <div className="space-y-5">
                {data.learn.examples.map((ex, i) => (
                  <div
                    key={i}
                    className="bg-red-50/70 border border-red-100 rounded-xl p-6"
                  >
                    <div className="font-bold text-red-700 uppercase tracking-wide mb-2">[{ex.type}]</div>
                    <div className="font-mono text-gray-800 mb-3 break-words">"{ex.text}"</div>
                    <div className="text-red-600 font-semibold">→ {ex.fact}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Do's */}
              <div className="bg-white rounded-2xl border border-green-100 shadow-sm p-8">
                <h3 className="text-green-700 font-bold text-xl mb-6 flex items-center gap-2 pb-4 border-b border-green-50">
                  <CheckCircle size={24} /> Safe Practices
                </h3>
                <ul className="space-y-4 text-gray-700">
                  {data.learn.dos.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-green-600 font-black text-2xl leading-none mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Don'ts */}
              <div className="bg-white rounded-2xl border border-red-100 shadow-sm p-8">
                <h3 className="text-red-700 font-bold text-xl mb-6 flex items-center gap-2 pb-4 border-b border-red-50">
                  <XCircle size={24} /> Avoid These
                </h3>
                <ul className="space-y-4 text-gray-700">
                  {data.learn.donts.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-red-600 font-black text-2xl leading-none mt-0.5">✕</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-8 lg:p-10 max-w-3xl mx-auto">
            <div className="flex justify-between items-center mb-8 pb-5 border-b border-gray-100">
              <span className="px-4 py-1.5 bg-indigo-50 text-indigo-700 rounded-full text-sm font-semibold uppercase tracking-wide">
                Module Quiz
              </span>
              <span className="text-gray-700 font-medium">
                Score: <strong className="text-indigo-700">{score.correct}/{score.total}</strong>
              </span>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-8 leading-tight">
              {data.quiz.question}
            </h3>

            <div className="bg-gray-50 border-l-4 border-indigo-500 p-6 rounded-xl mb-10 text-gray-700 italic">
              {data.quiz.msg}
            </div>

            <div className="space-y-4">
              {data.quiz.options.map((opt, i) => {
                let style = "border-gray-200 hover:border-indigo-200 hover:bg-indigo-50/30 text-gray-800";
                if (isAnswerChecked) {
                  if (i === data.quiz.correct) {
                    style = "border-green-500 bg-green-50 text-green-800 font-semibold";
                  } else if (i === selectedAnswer) {
                    style = "border-red-500 bg-red-50 text-red-800 font-semibold";
                  }
                } else if (selectedAnswer === i) {
                  style = "border-indigo-500 bg-indigo-50 text-indigo-700 font-semibold ring-2 ring-indigo-100";
                }

                return (
                  <button
                    key={i}
                    onClick={() => !isAnswerChecked && setSelectedAnswer(i)}
                    disabled={isAnswerChecked}
                    className={`w-full text-left p-5 rounded-xl border-2 transition-all flex justify-between items-center ${style}`}
                  >
                    {opt}
                    {isAnswerChecked && i === data.quiz.correct && <CheckCircle className="text-green-600" size={22} />}
                    {isAnswerChecked && i === selectedAnswer && i !== data.quiz.correct && <XCircle className="text-red-600" size={22} />}
                  </button>
                );
              })}
            </div>

            {!isAnswerChecked ? (
              <button
                onClick={() => handleCheckAnswer(data.quiz.correct)}
                disabled={selectedAnswer === null}
                className={`mt-10 w-full py-4 rounded-xl font-bold text-lg transition-all shadow-md ${
                  selectedAnswer !== null
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700 active:scale-[0.98]'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                Check Answer
              </button>
            ) : (
              <button
                onClick={() => { setIsAnswerChecked(false); setSelectedAnswer(null); }}
                className="mt-10 w-full py-4 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <RefreshCw size={20} />
                Next Question
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CyberSafeApp;