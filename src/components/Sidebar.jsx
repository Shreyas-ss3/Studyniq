import React from 'react';

export default function Sidebar({ user, streak, onLogout, activeTab, setActiveTab, currentTheme, setCurrentTheme }) {
  const primaryNav = [
    { id: 'dashboard', name: 'Home', icon: '🏠' },
    { id: 'flashcards', name: 'Flashcards', icon: '📇' },
    { id: 'quizzes', name: 'Quizzes', icon: '❓' },
    { id: 'notes', name: 'Notes', icon: '📝' },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-100 flex flex-col justify-between p-6 hidden md:flex h-full">
      <div>
        <div className="flex items-center gap-2 mb-8">
          <span className="text-2xl font-bold text-indigo-600 tracking-tight">studyniq</span>
        </div>

        <div className="bg-gray-50 border border-gray-100 rounded-xl p-3 mb-6">
          <p className="text-xs text-gray-400 font-medium truncate">{user?.email}</p>
          <p className="text-sm font-semibold text-amber-500 flex items-center gap-1 mt-1">
            🔥 {streak} Day Streak
          </p>
        </div>

        {/* Navigation Tabs */}
        <nav className="space-y-1 mb-6">
          {primaryNav.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeTab === item.id
                  ? 'bg-indigo-50 text-indigo-600'
                  : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </button>
          ))}
        </nav>

        {/* Premium Theme Selector Panel */}
        <div className="border-t border-gray-100 pt-4">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">✨ Premium Aesthetics</h3>
          <div className="grid grid-cols-2 gap-1.5">
            <button 
              onClick={() => setCurrentTheme('default')}
              className={`text-[11px] p-1.5 rounded-lg border font-medium transition-all ${currentTheme === 'default' ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}
            >
              Light Default
            </button>
            <button 
              onClick={() => setCurrentTheme('roseAesthetic')}
              className={`text-[11px] p-1.5 rounded-lg border font-medium transition-all ${currentTheme === 'roseAesthetic' ? 'border-pink-500 bg-pink-50 text-pink-700' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}
            >
              🌸 Rose ★
            </button>
            <button 
              onClick={() => setCurrentTheme('mintFocus')}
              className={`text-[11px] p-1.5 rounded-lg border font-medium transition-all ${currentTheme === 'mintFocus' ? 'border-emerald-500 bg-emerald-50 text-emerald-700' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}
            >
              🌿 Mint ★
            </button>
            <button 
              onClick={() => setCurrentTheme('slateDark')}
              className={`text-[11px] p-1.5 rounded-lg border font-medium transition-all ${currentTheme === 'slateDark' ? 'border-slate-800 bg-slate-900 text-slate-100' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}
            >
              🌌 Dark ★
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <button
          onClick={onLogout}
          className="w-full bg-red-50 text-red-600 hover:bg-red-100 text-sm font-semibold py-2.5 rounded-xl transition-colors"
        >
          Logout
        </button>
      </div>
    </aside>
  );
}