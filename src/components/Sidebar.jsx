import React from 'react';
import { useNavigate } from 'react-router-dom'; // 👈 Imported the router navigation engine

// ========================================================
// 🔑 CONFIGURATION: FIXED WITH QUOTES
// ========================================================
const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/test_7sY9AT18a1nX2p68wZ7g400";
// ========================================================

export default function Sidebar({ user, streak, onLogout, activeTab, setActiveTab }) {
  const navigate = useNavigate(); // 👈 Initialized the navigator engine

  const primaryNav = [
    { id: 'dashboard', name: 'Home', icon: '🏠' },
    { id: 'subjects', name: 'My Subjects', icon: '📚' },
    { id: 'plan', name: 'Study Plan', icon: '📅' },
    { id: 'flashcards', name: 'Flashcards', icon: '📇' },
    { id: 'quizzes', name: 'Quizzes', icon: '❓' },
    { id: 'papers', name: 'Past Papers', icon: '📄' },
    { id: 'practice', name: 'Exam Practice', icon: '✍️' },
    { id: 'ai-tutor', name: 'AI Tutor', icon: '🤖', badge: 'NEW' },
    { id: 'notes', name: 'Notes', icon: '📝' },
    { id: 'progress', name: 'Progress', icon: '📈' },
  ];

  const socialNav = [
    { id: 'leaderboard', name: 'Leaderboard', icon: '🏆' },
    { id: 'achievements', name: 'Achievements', icon: '🏅' },
    { id: 'groups', name: 'Study Groups', icon: '👥' },
  ];

  const handlePremiumCheckout = () => {
    window.location.href = STRIPE_PAYMENT_LINK;
  };

  return (
    <aside className="w-64 bg-white border-r border-gray-100 flex flex-col justify-between p-5 hidden md:flex h-screen overflow-y-auto">
      <div className="space-y-6">
        {/* Brand Header */}
        <div className="flex items-center gap-2 px-2">
          {/* 👈 Added cursor-pointer, transitions, and navigate('/') link target */}
          <span 
            onClick={() => navigate('/')} 
            className="text-2xl font-black text-indigo-600 tracking-tight cursor-pointer hover:opacity-80 transition-opacity"
          >
            studyniq
          </span>
        </div>

        {/* Primary Navigation System */}
        <nav className="space-y-0.5">
          {primaryNav.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeTab === item.id
                  ? 'bg-indigo-50 text-indigo-600'
                  : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-base">{item.icon}</span>
                <span>{item.name}</span>
              </div>
              {item.badge && (
                <span className="bg-indigo-600 text-white text-[9px] font-extrabold px-1.5 py-0.5 rounded-md tracking-wider">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        <hr className="border-gray-100" />

        {/* Social Navigation System */}
        <div className="space-y-0.5">
          {socialNav.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeTab === item.id
                  ? 'bg-indigo-50 text-indigo-600'
                  : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <span className="text-base">{item.icon}</span>
              <span>{item.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Premium Conversion Card & Sign Out footer */}
      <div className="pt-6 space-y-4">
        <div className="bg-gradient-to-br from-indigo-50/60 to-purple-50/60 border border-indigo-100/40 p-4 rounded-2xl">
          <h4 className="font-bold text-sm text-indigo-900 mb-0.5">Unlock your potential</h4>
          <p className="text-xs text-indigo-600/80 font-medium mb-3 leading-relaxed">
            Go Premium for unlimited access to all features.
          </p>
          <button 
            type="button"
            onClick={handlePremiumCheckout}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold py-2.5 rounded-xl transition-all shadow-sm shadow-indigo-200"
          >
            Go Premium • £2.99
          </button>
        </div>

        <button
          type="button"
          onClick={onLogout}
          className="w-full text-left px-3 py-2 text-gray-400 hover:text-red-500 text-xs font-bold transition-colors"
        >
          🚪 Sign Out Account
        </button>
      </div>
    </aside>
  );
}