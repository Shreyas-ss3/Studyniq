import React from 'react';

// 📚 MY SUBJECTS VIEW
export function SubjectsView() {
  const mockSubjects = [
    { name: 'Biology', topics: 16, color: 'from-emerald-500 to-teal-600' },
    { name: 'Chemistry', topics: 12, color: 'from-purple-500 to-indigo-600' },
    { name: 'Physics', topics: 14, color: 'from-blue-500 to-cyan-600' }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-xl font-bold text-gray-900">My Subjects</h2>
        <p className="text-xs text-gray-400 mt-1">Manage active courses and track individual unit timelines.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {mockSubjects.map((sub, i) => (
          <div key={i} className="bg-white border border-gray-100 p-6 rounded-3xl shadow-sm hover:border-indigo-100 transition-all cursor-pointer">
            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${sub.color} mb-4 flex items-center justify-center text-white font-bold text-lg`}>
              {sub.name[0]}
            </div>
            <h3 className="font-bold text-gray-900 text-sm">{sub.name}</h3>
            <p className="text-[11px] text-gray-400 mt-1">{sub.topics} Active Modules</p>
          </div>
        ))}
        <button className="border-2 border-dashed border-gray-200 hover:border-indigo-400 text-gray-400 hover:text-indigo-600 p-6 rounded-3xl flex flex-col items-center justify-center min-h-[160px] transition-all text-xs font-bold gap-2 bg-white/50">
          <span>➕</span> Add New Subject
        </button>
      </div>
    </div>
  );
}

// 📅 STUDY PLAN VIEW
export function StudyPlanView() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900">Study Plan Calendar</h2>
        <p className="text-xs text-gray-400 mt-1">Organize deadlines and automatically generated revision sessions.</p>
      </div>
      <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <span className="text-xs font-bold text-gray-900">June 2026</span>
        </div>
        <div className="grid grid-cols-7 gap-2 text-center text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">
          <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
        </div>
        <div className="grid grid-cols-7 gap-2 min-h-[200px]">
          {Array.from({ length: 28 }).map((_, i) => (
            <div key={i} className="p-2 border border-gray-50 bg-gray-50/50 rounded-xl text-xs font-semibold min-h-[60px]">
              {i + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ❓ QUIZZES VIEW
export function QuizzesView() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900">Interactive Quizzes</h2>
        <p className="text-xs text-gray-400 mt-1">Test your recall knowledge under real exam timers.</p>
      </div>
      <div className="bg-white border border-gray-100 rounded-3xl p-12 text-center shadow-sm max-w-xl mx-auto">
        <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">❓</div>
        <h3 className="font-bold text-gray-900 text-sm">No Active Quizzes Generated</h3>
        <p className="text-xs text-gray-400 max-w-xs mx-auto mt-2 leading-relaxed">Select a topic module or paste study notes to configure your first multiple-choice revision test.</p>
        <button className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all shadow-sm">
          Generate Quiz
        </button>
      </div>
    </div>
  );
}

// 📄 PAST PAPERS VIEW
export function PastPapersView() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900">Past Papers Archive</h2>
        <p className="text-xs text-gray-400 mt-1">Official examination resources paired with marking scheme solutions.</p>
      </div>
      <div className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              <th className="p-4 pl-6">Paper Identifier</th>
              <th className="p-4">Subject</th>
              <th className="p-4 pr-6 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="text-xs font-semibold text-gray-700 divide-y divide-gray-50">
            <tr>
              <td className="p-4 pl-6">Paper 1: Core Principles</td>
              <td className="p-4">Biology</td>
              <td className="p-4 pr-6 text-right"><button className="text-indigo-600 hover:underline">Download PDF</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ✍️ EXAM PRACTICE VIEW
export function ExamPracticeView() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900">Exam Practice Engine</h2>
        <p className="text-xs text-gray-400 mt-1">Practice timed responses on specific topics with analytical feedback.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm space-y-4">
          <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md uppercase tracking-wider">Question Prompt</span>
          <p className="text-xs font-bold text-gray-900 leading-relaxed">Explain how the structure of a cell membrane facilitates active transport mechanisms. (4 Marks)</p>
          <textarea placeholder="Type your examination answer response here..." className="w-full min-h-[120px] p-3 text-xs bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-indigo-500 font-medium" />
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all w-full">
            Submit Answer
          </button>
        </div>
        <div className="bg-gray-50 border border-dashed border-gray-200 rounded-3xl p-6 flex flex-col justify-center items-center text-center text-gray-400 text-xs font-medium">
          <span className="text-xl mb-2">🤖</span>
          <p>Submit an answer to see your marking breakdown and AI grading guidance.</p>
        </div>
      </div>
    </div>
  );
}

// 🤖 AI TUTOR VIEW
export function AiTutorView() {
  return (
    <div className="space-y-6 flex flex-col h-[calc(100vh-220px)]">
      <div>
        <h2 className="text-xl font-bold text-gray-900">AI Tutor Chat</h2>
        <p className="text-xs text-gray-400 mt-1">Ask questions, simplify jargon, or review textbook core logic.</p>
      </div>
      <div className="bg-white border border-gray-100 rounded-3xl flex-1 p-6 shadow-sm flex flex-col justify-between overflow-hidden">
        <div className="space-y-4 overflow-y-auto flex-1 pr-1 pb-4">
          <div className="flex gap-3 max-w-xl">
            <div className="w-7 h-7 bg-indigo-100 text-indigo-600 text-xs rounded-xl flex items-center justify-center font-bold shrink-0">🤖</div>
            <div className="bg-gray-50 border border-gray-100 p-3 rounded-2xl rounded-tl-none text-xs font-medium text-gray-700 leading-relaxed">
              Hello! I am your interactive **studyniq** AI companion. Drop a question below to explain any confusing textbook concepts!
            </div>
          </div>
        </div>
        <div className="flex gap-2 pt-4 border-t border-gray-50">
          <input placeholder="Ask a question..." className="flex-1 p-3 text-xs bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-indigo-500 font-medium" />
          <button className="bg-indigo-600 text-white px-4 text-xs font-bold rounded-xl hover:bg-indigo-700 transition-colors">Send</button>
        </div>
      </div>
    </div>
  );
}

// 📝 NOTES VIEW
export function NotesView() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Workspace Notes</h2>
          <p className="text-xs text-gray-400 mt-1">Organize and compose summaries of class lecture details.</p>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-4 py-2 rounded-xl transition-all shadow-sm">
          ➕ New Document
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white border border-gray-100 p-4 rounded-2xl shadow-sm cursor-pointer hover:border-gray-200 transition-all flex justify-between items-center">
          <div>
            <h4 className="font-bold text-xs text-gray-900">🧬 Mitosis Structural Breakdown</h4>
            <p className="text-[10px] text-gray-400 mt-1">Updated 2 hours ago</p>
          </div>
          <span className="text-xs">📄</span>
        </div>
      </div>
    </div>
  );
}

// 🏆 LEADERBOARD VIEW
export function LeaderboardView() {
  const users = [
    { rank: 1, name: 'Alex M.', xp: '4,820 XP', current: false, badge: '🥇' },
    { rank: 2, name: 'Sarah K.', xp: '3,910 XP', current: false, badge: '🥈' },
    { rank: 3, name: 'You', xp: '1,250 XP', current: true, badge: '🥉' }
  ];

  return (
    <div className="space-y-6 max-w-xl mx-auto">
      <div className="text-center space-y-1">
        <h2 className="text-xl font-bold text-gray-900">Global Leaderboard</h2>
        <p className="text-xs text-gray-400">Compete weekly with peers based on study milestones.</p>
      </div>
      <div className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden p-4 space-y-2">
        {users.map((u, i) => (
          <div key={i} className={`flex justify-between items-center p-3 rounded-2xl text-xs font-bold ${u.current ? 'bg-indigo-50 text-indigo-900 border border-indigo-100' : 'bg-gray-50/50 text-gray-700'}`}>
            <div className="flex items-center gap-4">
              <span className="w-6 text-center text-gray-400 font-black">{u.badge || u.rank}</span>
              <span>{u.name}</span>
            </div>
            <span className={u.current ? 'text-indigo-600' : 'text-gray-400'}>{u.xp}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// 🏅 ACHIEVEMENTS VIEW
export function AchievementsView() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900">Platform Achievements</h2>
        <p className="text-xs text-gray-400 mt-1">Unlock milestone badges as you complete routine targets.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white border border-gray-100 p-5 rounded-3xl shadow-sm flex items-center gap-4">
          <div className="text-3xl">🔥</div>
          <div>
            <h4 className="font-bold text-xs text-gray-900">7-Day Streak Warrior</h4>
            <p className="text-[10px] text-gray-400 mt-0.5">Maintained application study goals for 7 consecutive days.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// 👥 STUDY GROUPS VIEW
export function StudyGroupsView() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900">Study Circles</h2>
        <p className="text-xs text-gray-400 mt-1">Collaborate, share notes, and test each other live.</p>
      </div>
      <div className="bg-white border border-gray-100 rounded-3xl p-12 text-center shadow-sm max-w-xl mx-auto">
        <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">👥</div>
        <h3 className="font-bold text-gray-900 text-sm">Join a New Group Circle</h3>
        <p className="text-xs text-gray-400 max-w-xs mx-auto mt-2 leading-relaxed">Form teams to track collective performance logs together.</p>
        <button className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all shadow-sm">
          Create Circle Room
        </button>
      </div>
    </div>
  );
}

// 📈 PROGRESS VIEW
export function ProgressView() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900">Progress Metrics</h2>
        <p className="text-xs text-gray-400 mt-1">Detailed statistical evaluation of card recall and study metrics.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-gray-100 p-6 rounded-3xl shadow-sm text-center">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Total Active Minutes</span>
          <div className="text-2xl font-black text-gray-900 mt-1">744 mins</div>
        </div>
      </div>
    </div>
  );
}