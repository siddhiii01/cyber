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
      icon: <img src="https://img.icons8.com/color/48/hook.png" alt="Phishing" className="w-10 h-10" />,
      description: "Learn to identify fake emails, messages, and websites designed to steal your information.",
      learn: { /* ... same as before ... */ },
      quiz: { /* ... same as before ... */ }
    },
    "Online Fraud & UPI Scams": {
      icon: <CreditCard className="text-blue-600" size={40} />,
      description: "Protect yourself from UPI payment scams, fake refunds, and digital payment fraud.",
      learn: { /* ... */ },
      quiz: { /* ... */ }
    },
    "Identity Theft": {
      icon: <img src="https://img.icons8.com/fluency/48/theater-masks.png" alt="Identity Theft" className="w-10 h-10" />,
      description: "Understand how criminals steal personal information and use it to commit fraud.",
      learn: { understanding: "..." /* add content */ },
      quiz: { /* add quiz */ }
    },
    "Fake Websites & Links": {
      icon: <img src="https://img.icons8.com/ios-filled/50/link.png" alt="Link" className="w-10 h-10 opacity-90" />,
      description: "Spot fraudulent websites that mimic legitimate platforms to steal your data and money.",
      learn: { /* ... */ },
      quiz: { /* ... */ }
    },
    "Social Engineering Tricks": {
      icon: <img src="https://img.icons8.com/emoji/48/brain.png" alt="Brain" className="w-10 h-10" />,
      description: "Recognize manipulation tactics used by scammers to trick you into revealing information.",
      learn: { /* ... */ },
      quiz: { /* ... */ }
    }
  };

  const handleCheckAnswer = (correctIndex) => {
    if (selectedAnswer === null) return;
    setIsAnswerChecked(true);
    setScore((prev) => ({
      correct: selectedAnswer === correctIndex ? prev.correct + 1 : prev.correct,
      total: prev.total + 1,
    }));
  };

  const Navbar = () => (
    <nav className="border-b bg-white">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div
          className="flex items-center gap-3 text-xl font-bold text-gray-900 cursor-pointer"
          onClick={() => setView('dashboard')}
        >
          <Shield className="text-blue-700" size={28} fill="currentColor" />
          <span>CyberSafe India</span>
        </div>

        <div className="flex items-center gap-8 text-sm font-medium text-gray-700">
          <button className="hover:text-blue-700 transition-colors">Learn</button>
          <button className="hover:text-blue-700 transition-colors">Phishing Simulator</button>
          <button className="hover:text-blue-700 transition-colors">Log In</button>
          <button className="bg-blue-600 text-white px-5 py-2 rounded font-semibold hover:bg-blue-700 transition-colors">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );

  if (view === 'dashboard') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />

        <div className="mx-auto max-w-7xl px-6 pt-12 pb-16">
          <div className="text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Learning Modules
            </h1>
            <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Master cyber security through interactive lessons with real Indian examples. Each module
              includes practical tips and a quiz to test your knowledge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(modules).map(([name, module]) => (
              <div
                key={name}
                onClick={() => {
                  setActiveModule(name);
                  setView('module');
                }}
                className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg hover:border-gray-300 transition-all cursor-pointer group"
              >
                <div className="mb-5 flex justify-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-50 group-hover:bg-blue-50 transition-colors">
                    {module.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center group-hover:text-blue-700 transition-colors">
                  {name}
                </h3>

                <p className="text-gray-600 text-center mb-5 text-[15px] leading-relaxed">
                  {module.description}
                </p>

                <div className="flex items-center justify-center gap-2 text-sm text-gray-500 font-medium">
                  <BookOpen size={16} />
                  5 quiz questions
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ────────────────────────────────────────────────
  // The rest of your module view remains the same
  // (you can keep or slightly adjust the styling as in previous versions)
  // ────────────────────────────────────────────────

  const data = modules[activeModule];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* ... rest of your module/learn/quiz view code ... */}
    </div>
  );
};

export default CyberSafeApp;