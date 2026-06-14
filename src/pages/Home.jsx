import React from 'react';

export default function Home({ onNavigate }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans antialiased text-gray-800">
      {/* Header Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-40">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-2xl font-black text-indigo-600 tracking-tight cursor-pointer">studyniq</span>
          
          <nav className="hidden md:flex items-center gap-8 text-xs font-bold text-gray-500 uppercase tracking-wider">
            <button onClick={() => scrollToSection('features')} className="hover:text-indigo-600 transition-colors">Features</button>
            <button onClick={() => scrollToSection('subjects')} className="hover:text-indigo-600 transition-colors">Subjects</button>
            <button onClick={() => scrollToSection('pricing')} className="hover:text-indigo-600 transition-colors">Pricing</button>
          </nav>

          <button 
            onClick={() => onNavigate('login')}
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all shadow-sm shadow-indigo-100"
          >
            Sign In
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tight leading-none">
          The ultimate smart <br />
          <span className="text-indigo-600">study companion.</span>
        </h1>
        <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto font-medium leading-relaxed">
          Master your courses with AI-powered flashcards, custom practice exams, and automated productivity tracking tools.
        </p>
        <div className="pt-4">
          <button 
            onClick={() => onNavigate('login')}
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold px-8 py-4 rounded-2xl transition-all shadow-md shadow-indigo-100"
          >
            Get Started Free
          </button>
        </div>
      </section>

      {/* Features Section Container */}
      <section id="features" className="py-20 bg-white border-t border-b border-gray-100 px-6 scroll-mt-16">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Platform Features</span>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">Everything you need to ace your exams</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 bg-slate-50 rounded-3xl border border-gray-100 space-y-4 overflow-hidden flex flex-col justify-between">
              <div className="space-y-3">
                <img 
                  src="https://images.unsplash.com/photo-1513258496099-48168024aec0?w=500&auto=format&fit=crop&q=60" 
                  alt="Spaced Repetition Flashcards" 
                  className="w-full h-36 object-cover rounded-2xl shadow-inner bg-slate-200"
                />
                <h3 className="font-bold text-gray-900 pt-1">Spaced Repetition</h3>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">Our algorithmic flashcard tool prompts revision topics right before you are likely to forget them.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="p-6 bg-slate-50 rounded-3xl border border-gray-100 space-y-4 overflow-hidden flex flex-col justify-between">
              <div className="space-y-3">
                <img 
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&auto=format&fit=crop&q=60" 
                  alt="Focus Pomodoro Timers" 
                  className="w-full h-36 object-cover rounded-2xl shadow-inner bg-slate-200"
                />
                <h3 className="font-bold text-gray-900 pt-1">Focus Timers</h3>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">Integrated custom Pomodoro timers sync automatically to dynamic daily progress scoreboards.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="p-6 bg-slate-50 rounded-3xl border border-gray-100 space-y-4 overflow-hidden flex flex-col justify-between">
              <div className="space-y-3">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60" 
                  alt="Analytics Data Logs" 
                  className="w-full h-36 object-cover rounded-2xl shadow-inner bg-slate-200"
                />
                <h3 className="font-bold text-gray-900 pt-1">Analytics Logs</h3>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">Track metrics across subjects and visualize study habit trends using streak milestone metrics.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Section Container */}
      <section id="subjects" className="py-20 px-6 scroll-mt-16">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Supported Subjects</span>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">Tailored revision modules</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {['🧬 Biology', '🧪 Chemistry', '📐 Mathematics', '🌍 Geography', '🏛️ History', '💻 Computer Science', '📚 English Lit', '📊 Economics'].map((subject, i) => (
              <div key={i} className="p-4 bg-white border border-gray-100 rounded-xl font-bold text-xs text-gray-700 shadow-sm shadow-slate-100">
                {subject}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section Container */}
      <section id="pricing" className="py-20 bg-slate-900 text-white rounded-[3rem] mx-4 mb-8 px-6 scroll-mt-16">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <div className="space-y-2">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Simple Pricing</span>
            <h2 className="text-3xl font-black tracking-tight">Free while in beta testing</h2>
          </div>
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl max-w-sm mx-auto space-y-6">
            <h3 className="font-bold text-lg">Beta Explorer</h3>
            <div className="text-4xl font-black">$0 <span className="text-xs text-indigo-300 font-medium">/ forever</span></div>
            <p className="text-xs text-gray-400 font-medium leading-relaxed">Enjoy unconditional access to all revision structures, flashcards, timers, and metrics during early development.</p>
            <button 
              onClick={() => onNavigate('login')}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold py-3 rounded-xl transition-all"
            >
              Join the Beta Profile
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}