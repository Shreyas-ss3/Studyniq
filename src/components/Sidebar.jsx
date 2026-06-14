import React from 'react';

export default function Sidebar({ user, streak, onLogout, activeTab, setActiveTab }) {
  const primaryNav = [
    { id: 'dashboard', name: 'Home', icon: '🏠' },
    { id: 'flashcards', name: 'Flashcards', icon: '📇' },
    { id: 'quizzes', name: 'Quizzes', icon: '❓' },
    { id: 'notes', name: 'Notes', icon: '📝' },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-100 flex flex-col justify-between p-6 hidden md:flex h-full">
      <div>
        {/* Logo */}
        <div className="flex items-center gap-2 mb-8">
          <span className="text-2xl font-bold text-indigo-600 tracking-tight">studyniq</span>
        </div>

        {/* User Status Bar */}
        <div className="bg-gray-50 border border-gray-100 rounded-xl p-3 mb-6">
          <p className="text-xs text-gray-400 font-medium truncate">{user?.email}</p>
          <p className="text-sm font-semibold text-amber-500 flex items-center gap-1 mt-1">
            🔥 {streak} Day Streak
          </p>
        </div>

        {/* Navigation Tabs */}
        <nav className="space-y-1">
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
      </div>

      {/* Bottom Section with Actions */}
      <div className="space-y-4">
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 rounded-2xl border border-indigo-100">
          <h4 className="font-semibold text-sm text-indigo-900 mb-1">Unlock premium</h4>
          <p className="text-xs text-indigo-600 mb-3">Get unlimited storage for your flashcards and custom notes.</p>
          <button disabled className="w-full bg-indigo-400 text-white text-xs font-semibold py-2 rounded-xl cursor-not-allowed opacity-70">
            Coming Soon
          </button>
        </div>

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