import React, { useState, useRef, useEffect } from 'react';

export default function Topbar({ user, streak, onLogout, setActiveTab }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Close the dropdown automatically if the user clicks anywhere outside of it
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-8 relative z-40">
      {/* Left side: Search Bar */}
      <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 px-3 py-2 rounded-xl w-72">
        <span className="text-gray-400 text-xs">🔍</span>
        <input 
          type="text" 
          placeholder="Search for topics, quizzes, flashcards..." 
          className="bg-transparent text-xs outline-none w-full text-gray-700 placeholder-gray-400"
        />
        <kbd className="hidden sm:inline-block bg-white border border-gray-200 text-[10px] px-1.5 py-0.5 rounded text-gray-400 shadow-sm font-sans">⌘K</kbd>
      </div>

      {/* Right side: Stats & Profile Button Trigger */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-1.5 text-xs font-bold text-gray-600">
          <span>🔥</span>
          <span>{streak || 0} Days</span>
        </div>
        
        <div className="flex items-center gap-1.5 text-xs font-bold text-gray-600">
          <span>⭐</span>
          <span>1,250 XP</span>
        </div>

        {/* Profile Dropdown Parent Wrapper */}
        <div className="relative" ref={dropdownRef}>
          <button 
            type="button"
            onClick={() => setShowDropdown(!showDropdown)}
            className="w-8 h-8 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center font-bold text-xs tracking-tight shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
          >
            {user?.email ? user.email.charAt(0).toUpperCase() : '24'}
          </button>

          {/* Dropdown Menu Overlay */}
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-100 rounded-2xl shadow-xl py-2 animate-in fade-in slide-in-from-top-1 duration-150">
              <div className="px-4 py-2 border-b border-gray-50">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Signed in as</p>
                <p className="text-xs font-semibold text-gray-700 truncate">{user?.email || 'Student User'}</p>
              </div>

              <div className="p-1">
                <button
                  type="button"
                  onClick={() => {
                    if (setActiveTab) setActiveTab('settings');
                    setShowDropdown(false);
                  }}
                  className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-gray-600 hover:text-indigo-600 hover:bg-indigo-50/60 rounded-xl transition-all text-left"
                >
                  ⚙️ Account Settings
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (setActiveTab) setActiveTab('progress');
                    setShowDropdown(false);
                  }}
                  className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-gray-600 hover:text-indigo-600 hover:bg-indigo-50/60 rounded-xl transition-all text-left"
                >
                  📈 View Progress Metrics
                </button>
              </div>

              <div className="p-1 border-t border-gray-50 mt-1">
                <button
                  type="button"
                  onClick={() => {
                    setShowDropdown(false);
                    if (onLogout) onLogout();
                  }}
                  className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-bold text-red-500 hover:bg-red-50/60 rounded-xl transition-all text-left"
                >
                  🚪 Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}