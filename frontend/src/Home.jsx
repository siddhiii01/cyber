import React, { useState } from 'react';
import { Shield, ArrowLeft, BookOpen, HelpCircle, AlertTriangle, CheckCircle, XCircle, ChevronRight } from 'lucide-react';

export const PhishingModule = () => {
  const [activeTab, setActiveTab] = useState('learn'); // 'learn' or 'quiz'
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const quizQuestions = [
    {
      question: "You receive an SMS saying your SBI account will be blocked. What should you do?",
      smsText: "SMS: 'Dear Customer, Your SBI account will be suspended. Update your KYC now: http://sbi-kyc-update.in'",
      options: [
        "Click the link and update KYC immediately",
        "Ignore and call SBI's official helpline to verify",
        "Reply with your account details",
        "Forward to friends as warning"
      ],
      correct: 1
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-12">
      {/* Shared Navbar */}
      <nav className="flex items-center justify-between px-12 py-4 bg-white border-b border-gray-100 mb-6">
        <div className="flex items-center gap-2 text-blue-900 font-bold text-xl cursor-pointer">
          <Shield className="text-blue-800" fill="currentColor" size={28} />
          <span>CyberSafe India</span>
        </div>
        <div className="flex items-center gap-8 text-gray-600 font-medium text-sm">
          <button className="hover:text-blue-800">Learn</button>
          <button className="hover:text-blue-800">Phishing Simulator</button>
          <button className="hover:text-blue-800">Log In</button>
          <button className="bg-[#1a2b5a] text-white px-6 py-2 rounded-md hover:bg-blue-900 transition-colors">
            Sign Up Free
          </button>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6">
        {/* Back Button */}
        <button className="flex items-center gap-2 text-gray-600 hover:text-blue-800 mb-6 text-sm font-medium transition-colors">
          <ArrowLeft size={16} /> Back to Modules
        </button>

        {/* Module Header */}
        <div className="flex items-start gap-4 mb-8">
          <div className="text-4xl">🎣</div> {/* Replace with actual hook icon */}
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Phishing Attacks</h1>
            <p className="text-gray-500 mt-1">Learn to identify fake emails, messages, and websites designed to steal your information.</p>
          </div>
        </div>

        {/* Tabs Switcher */}
        <div className="flex bg-gray-100 p-1 rounded-lg mb-8 max-w-2xl mx-auto">
          <button 
            onClick={() => setActiveTab('learn')}
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md text-sm font-medium transition-all ${activeTab === 'learn' ? 'bg-white shadow-sm text-blue-900' : 'text-gray-500 hover:text-gray-700'}`}
          >
            <BookOpen size={18} /> Learn
          </button>
          <button 
            onClick={() => setActiveTab('quiz')}
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md text-sm font-medium transition-all ${activeTab === 'quiz' ? 'bg-white shadow-sm text-blue-900' : 'text-gray-500 hover:text-gray-700'}`}
          >
            <HelpCircle size={18} /> Quiz (5 questions)
          </button>
        </div>

        {activeTab === 'learn' ? (
          <div className="space-y-6">
            {/* Understanding the Threat Card */}
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-4">
                <AlertTriangle className="text-orange-500" size={20} /> Understanding the Threat
              </h2>
              <div className="text-gray-600 space-y-4 leading-relaxed">
                <p>Phishing is one of the most common cyber attacks in India. Attackers send fake emails, SMS, or WhatsApp messages pretending to be from trusted sources like banks, government agencies, or popular e-commerce sites.</p>
                <p>In India, phishing attacks often impersonate <strong>SBI, HDFC Bank, Income Tax Department,</strong> or platforms like <strong>Amazon, Flipkart, and Paytm.</strong></p>
                <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <p className="font-semibold text-slate-800 mb-1">Common signs of phishing:</p>
                  <ul className="list-disc ml-5 space-y-1 text-sm">
                    <li>Generic greetings like "Dear Customer" instead of your name</li>
                    <li>Spelling and grammar mistakes</li>
                    <li>Suspicious sender email addresses (sbi-secure@gmail.com instead of @sbi.co.in)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Real Examples Section */}
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Real Examples from India</h2>
              <div className="space-y-4">
                {[
                  { type: 'SMS', msg: "SBI Alert: Your account will be blocked in 24 hrs. Update KYC immediately: bit.ly/sbi-kyc-update", fact: "FAKE! Banks never send shortened links." },
                  { type: 'Email', msg: "Congratulations! You won ₹10 Lakh in Amazon Lucky Draw. Click here to claim.", fact: "No legitimate company runs such lucky draws via email." },
                  { type: 'WhatsApp', msg: "Your Paytm KYC is expiring. Share Aadhaar and OTP to continue using wallet.", fact: "Paytm never asks for OTP on WhatsApp." }
                ].map((ex, i) => (
                  <div key={i} className="p-4 rounded-lg bg-red-50 border border-red-100">
                    <p className="text-sm font-mono text-red-900">
                      <span className="font-bold">{ex.type}:</span> '{ex.msg}' — <span className="italic">{ex.fact}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Do's and Don'ts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-green-600 font-bold flex items-center gap-2 mb-4"><CheckCircle size={20}/> Do's (Safe Practices)</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex gap-2"><span>✅</span> Always verify sender email addresses carefully</li>
                  <li className="flex gap-2"><span>✅</span> Type bank/company URLs directly in browser</li>
                  <li className="flex gap-2"><span>✅</span> Call official helpline numbers to verify</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-red-600 font-bold flex items-center gap-2 mb-4"><XCircle size={20}/> Don'ts (Avoid These)</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex gap-2"><span>❌</span> Never click links in suspicious messages</li>
                  <li className="flex gap-2"><span>❌</span> Never share OTP, PIN, or CVV with anyone</li>
                  <li className="flex gap-2"><span>❌</span> Don't trust caller ID - it can be spoofed</li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          /* Quiz Section */
          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm max-w-3xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm text-gray-500">Question {currentQuestion + 1} of 5</span>
              <span className="text-sm font-bold text-blue-900">Score: 0/0</span>
            </div>
            
            <div className="w-full bg-gray-100 h-2 rounded-full mb-8">
              <div className="bg-teal-500 h-2 rounded-full w-1/5"></div>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-6">{quizQuestions[currentQuestion].question}</h3>
            
            <div className="bg-slate-50 p-4 rounded-lg border border-gray-100 mb-8 font-mono text-sm text-gray-600">
              {quizQuestions[currentQuestion].smsText}
            </div>

            <div className="space-y-3 mb-8">
              {quizQuestions[currentQuestion].options.map((option, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedAnswer(i)}
                  className={`w-full text-left p-4 rounded-lg border transition-all ${
                    selectedAnswer === i 
                    ? 'border-blue-500 bg-blue-50 text-blue-900' 
                    : 'border-gray-200 hover:border-blue-200 bg-white'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            <button className="w-full bg-slate-400 text-white py-3 rounded-md font-bold hover:bg-slate-500 transition-colors">
              Check Answer
            </button>
          </div>
        )}
        
        {/* Footer */}
        <footer className="mt-20 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
            <div>
              <div className="flex items-center gap-2 text-blue-900 font-bold text-lg mb-4">
                <Shield fill="currentColor" size={24} /> CyberSafe India
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">Empowering Indians with the knowledge to stay safe online. Learn to identify scams and navigate the digital world securely.</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Quick Links</h4>
              <ul className="text-gray-500 text-sm space-y-2">
                <li>Learning Modules</li>
                <li>Phishing Simulator</li>
                <li>Sign Up</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Resources</h4>
              <ul className="text-gray-500 text-sm space-y-2">
                <li>CERT-In (Report Incidents)</li>
                <li>Cyber Crime Portal</li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
