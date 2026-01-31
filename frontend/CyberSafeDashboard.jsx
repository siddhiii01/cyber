import React from 'react';
import { Shield, BookOpen, Lock, CreditCard, UserCheck, Link as LinkIcon, Brain } from 'lucide-react';

const CyberSafeDashboard = () => {
  const modules = [
    {
      title: "Phishing Attacks",
      description: "Learn to identify fake emails, messages, and websites designed to steal your information.",
      icon: <img src="/api/placeholder/40/40" alt="Phishing" className="mb-2" />, // Replace with your hook icon
      questions: 5
    },
    {
      title: "Online Fraud & UPI Scams",
      description: "Protect yourself from UPI payment scams, fake refunds, and digital payment fraud.",
      icon: <CreditCard className="text-blue-500 mb-2" size={32} />,
      questions: 5
    },
    {
      title: "Identity Theft",
      description: "Understand how criminals steal personal information and use it to commit fraud.",
      icon: <UserCheck className="text-orange-400 mb-2" size={32} />,
      questions: 5
    },
    {
      title: "Fake Websites & Links",
      description: "Spot fraudulent websites that mimic legitimate platforms to steal your data and money.",
      icon: <LinkIcon className="text-purple-400 mb-2" size={32} />,
      questions: 5
    },
    {
      title: "Social Engineering Tricks",
      description: "Recognize manipulation tactics used by scammers to trick you into revealing information.",
      icon: <Brain className="text-pink-400 mb-2" size={32} />,
      questions: 5
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-12 py-4 bg-white border-b border-gray-100">
        <div className="flex items-center gap-2 text-blue-900 font-bold text-xl">
          <Shield className="text-blue-800" fill="currentColor" size={28} />
          <span>CyberSafe India</span>
        </div>
        <div className="flex items-center gap-8 text-gray-600 font-medium">
          <button className="hover:text-blue-800">Learn</button>
          <button className="hover:text-blue-800">Phishing Simulator</button>
          <button className="hover:text-blue-800">Log In</button>
          <button className="bg-[#1a2b5a] text-white px-6 py-2 rounded-md hover:bg-blue-900 transition-colors">
            Sign Up Free
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-7xl mx-auto px-12 pt-16 pb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Learning Modules</h1>
        <p className="text-gray-600 max-w-3xl text-lg leading-relaxed">
          Master cyber security through interactive lessons with real Indian examples. Each module 
          includes practical tips and a quiz to test your knowledge.
        </p>
      </header>

      {/* Grid Layout */}
      <main className="max-w-7xl mx-auto px-12 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col h-full"
            >
              <div className="mb-4">
                {/* Icon rendering logic */}
                {module.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{module.title}</h3>
              <p className="text-gray-500 text-sm mb-6 flex-grow leading-relaxed">
                {module.description}
              </p>
              <div className="flex items-center gap-2 text-gray-500 text-sm border-t pt-4">
                <BookOpen size={16} />
                <span>{module.questions} quiz questions</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CyberSafeDashboard;
