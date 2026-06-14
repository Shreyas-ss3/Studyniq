import React from 'react';

export default function Topbar({ user, streak }) {
  return (
    <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-8">
      <div className="relative w-80">
        <input
          type="text"
          placeholder="Search for topics, quizzes, flashcards..."
          className="w-full bg-gray-50 border border-gray-200 text-sm pl-4 pr-10 py-2 rounded-xl focus:outline-none focus:border-indigo-500 transition-colors"
        />
        <kbd className="absolute right-3 top-2.5 text-[10px] text-gray-400 border px-1.5 py-0.5 rounded-md bg-white">⌘K</kbd>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-1.5 text-sm font-semibold text-gray-700">
          <span>🔥</span>
          <span>{streak} Days</span>
        </div>
        <div className="flex items-center gap-1.5 text-sm font-semibold text-gray-700">
          <span className="text-yellow-500">⭐</span>
          <span>1,250 XP</span>
        </div>

        <div className="h-4 w-px bg-gray-200"></div>

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xs uppercase">
            {user?.email ? user.email.substring(0, 2) : 'U'}
          </div>
        </div>
      </div>
    </header>
  );
}