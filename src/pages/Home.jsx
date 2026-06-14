import React from 'react';

export default function Home({ onNavigate }) {
  const features = [
    { title: "Smart Notes", desc: "Clear, concise notes written to help you understand and remember.", icon: "📄" },
    { title: "Flashcards", desc: "Spaced repetition flashcards to boost memory and long-term retention.", icon: "📇" },
    { title: "Practice Questions", desc: "Exam-style questions and instant feedback to test your understanding.", icon: "❓" },
    { title: "Progress Tracking", desc: "Track your progress, set goals and stay motivated every step of the way.", icon: "📈" },
    { title: "All Subjects", desc: "Maths, Science, English, History and more – all in one place.", icon: "📚" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Top Navigation Bar */}
      <header className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between bg-white/80 backdrop-blur border-b border-gray-100 sticky top-0 z-50 rounded-b-2xl shadow-sm">
        <div className="flex items-center gap-8">
          <span className="text-2xl font-black text-indigo-600 tracking-tight">studyniq</span>
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-500">
            <a href="#features" className="hover:text-indigo-600 transition-colors">Features</a>
            <a href="#subjects" className="hover:text-indigo-600 transition-colors">Subjects</a>
            <a href="#pricing" className="hover:text-indigo-600 transition-colors">Pricing</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => onNavigate('login')} 
            className="text-sm font-bold text-gray-600 hover:text-indigo-600 transition-colors px-4 py-2"
          >
            Log in
          </button>
          <button 
            onClick={() => onNavigate('login')} 
            className="text-sm font-bold bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl transition-all shadow-sm"
          >
            Get Started
          </button>
        </div>
      </header>

      {/* Hero Presentation Layout */}
      <main className="max-w-7xl mx-auto px-6 pt-16 pb-24 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5 space-y-6">
          <h1 className="text-5xl font-black tracking-tight text-gray-900 leading-[1.15]">
            Smarter studying.<br />
            <span className="text-indigo-600">Better results.</span>
          </h1>
          <p className="text-gray-500 text-base font-medium leading-relaxed">
            All the tools you need to learn, practice and master any subject — in one place.
          </p>
          <ul className="space-y-3 text-sm font-semibold text-gray-600">
            <li className="flex items-center gap-2">✨ Learn actively with notes and explanations</li>
            <li className="flex items-center gap-2">🎯 Practice with quizzes and exam questions</li>
            <li className="flex items-center gap-2">📈 Track progress and improve every day</li>
          </ul>
          <button 
            onClick={() => onNavigate('login')}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-3.5 rounded-2xl transition-all shadow-md inline-flex items-center gap-2 text-sm"
          >
            Get Started – It's Free <span>→</span>
          </button>
          <p className="text-xs text-gray-400 font-medium">No credit card required</p>
        </div>

        {/* Hero Interactive App Mockup Preview */}
        <div className="md:col-span-7 bg-gradient-to-tr from-indigo-100 to-purple-100 p-8 rounded-[2.5rem] shadow-inner border border-white/40">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-gray-50 pb-4">
              <span className="font-extrabold text-indigo-600">Welcome back, Alex! 👋</span>
              <span className="text-xs font-bold bg-amber-50 text-amber-600 px-3 py-1 rounded-full">🔥 12 Days Streak</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-gray-100 p-4 rounded-xl bg-slate-50/50">
                <span className="text-xs font-bold text-gray-400 block mb-1">Daily Goal</span>
                <span className="text-sm font-bold text-gray-700">3/5 Topics Mastered</span>
              </div>
              <div className="border border-gray-100 p-4 rounded-xl bg-indigo-50/30">
                <span className="text-xs font-bold text-indigo-400 block mb-1">Overall Progress</span>
                <span className="text-lg font-black text-indigo-600">72%</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Feature Value Grid */}
      <section id="features" className="bg-white border-t border-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">Everything you need to succeed</h2>
            <p className="text-sm font-semibold text-gray-400">Powerful study tools designed to help you learn more effectively.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {features.map((f, idx) => (
              <div key={idx} className="border border-gray-100/80 p-5 rounded-2xl text-left hover:shadow-md transition-all space-y-3 bg-slate-50/30">
                <div className="text-2xl bg-white w-10 h-10 rounded-xl flex items-center justify-center shadow-sm border border-gray-50">{f.icon}</div>
                <h3 className="font-bold text-sm text-gray-800">{f.title}</h3>
                <p className="text-xs font-medium text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}