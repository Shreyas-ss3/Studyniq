import React, { useState } from 'react';

export default function Login({ 
  email, 
  setEmail, 
  password, 
  setPassword, 
  onLogin, 
  onSignup, 
  onGoogleLogin, 
  onForgotPassword, 
  onNavigate 
}) {
  const [mode, setMode] = useState('login');
  const [modalContent, setModalContent] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === 'login') {
      onLogin();
    } else {
      onSignup();
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex items-center justify-center p-4 relative">
      <div className="max-w-5xl w-full bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden grid md:grid-cols-12 min-h-[640px]">
        
        {/* Left Interactive Auth Block */}
        <div className="md:col-span-6 p-10 flex flex-col justify-between space-y-8">
          <div className="flex items-center justify-between">
            <span onClick={() => onNavigate('home')} className="text-2xl font-black text-indigo-600 tracking-tight cursor-pointer">studyniq</span>
            <div className="text-xs font-bold text-gray-400">
              {mode === 'login' ? "Don't have an account? " : "Already have an account? "}
              <span 
                onClick={() => setMode(mode === 'login' ? 'signup' : 'login')} 
                className="text-indigo-600 cursor-pointer hover:underline font-bold"
              >
                {mode === 'login' ? "Sign up" : "Log in"}
              </span>
            </div>
          </div>

          <div className="max-w-sm w-full mx-auto space-y-6">
            <div className="space-y-1">
              <h2 className="text-2xl font-black text-gray-900 tracking-tight">
                {mode === 'login' ? "Welcome back!" : "Create your account"}
              </h2>
              <p className="text-xs font-semibold text-gray-400">
                {mode === 'login' ? "Log in to continue your learning journey." : "Get started with your smart study dashboard today."}
              </p>
            </div>

          <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email address</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email" 
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-semibold bg-slate-50/50 text-slate-900 placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-colors"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Password</label>
                  {mode === 'login' && (
                    <button 
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        onForgotPassword();
                      }}
                      className="text-xs font-bold text-indigo-600 hover:underline bg-transparent border-none p-0 cursor-pointer outline-none"
                    >
                      Forgot password?
                    </button>
                  )}
                </div>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={mode === 'login' ? "Enter your password" : "Create a secure password"} 
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-semibold bg-slate-50/50 text-slate-900 placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-colors"
                  required
                />            
              </div>

              <button 
                type="submit" 
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold py-3.5 rounded-xl transition-all shadow-sm shadow-indigo-100"
              >
                {mode === 'login' ? "Log In" : "Create Account"}
              </button>
            </form>

            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-gray-100"></div>
              <span className="flex-shrink mx-4 text-xs font-bold text-gray-300 uppercase tracking-widest">or</span>
              <div className="flex-grow border-t border-gray-100"></div>
            </div>

            {/* Google Authentication */}
            <div>
              <button 
                type="button"
                onClick={onGoogleLogin}
                className="w-full border border-gray-200 hover:bg-gray-50 text-gray-600 text-sm font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                🌐 {mode === 'login' ? "Continue with Google" : "Sign up with Google"}
              </button>
            </div>
          </div>

          <div className="text-[10px] font-semibold text-gray-400 text-center max-w-sm mx-auto leading-relaxed">
            By continuing, you agree to our{' '}
            <span onClick={() => setModalContent('terms')} className="text-indigo-600 hover:underline cursor-pointer font-bold">Terms of Service</span>
            {' '}and{' '}
            <span onClick={() => setModalContent('privacy')} className="text-indigo-600 hover:underline cursor-pointer font-bold">Privacy Policy</span>.
          </div>
        </div>

        {/* Right Info and Testimonials Side Banner */}
        <div className="md:col-span-6 bg-slate-50 border-l border-gray-100 p-10 flex flex-col justify-between relative overflow-hidden">
          <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm max-w-sm space-y-4">
            <h3 className="font-black text-sm text-gray-800">
              {mode === 'login' ? "Pick up where you left off" : "What you get with studyniq"}
            </h3>
            <ul className="space-y-3 text-xs font-semibold text-gray-500">
              <li>📝 Access your notes, flashcards and quizzes anytime</li>
              <li>📈 Track your progress and reach your learning goals</li>
              <li>📱 Study across all your devices seamlessly</li>
            </ul>
          </div>

          <div className="bg-indigo-600 rounded-3xl p-6 text-white max-w-sm shadow-xl space-y-4">
            <p className="text-xs font-medium leading-relaxed italic">
              "studyniq has completely changed the way I study. It's like having everything I need in one single place!"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-xs font-bold">S</div>
              <div>
                <h4 className="text-xs font-bold">Shreyas</h4>
                <p className="text-[10px] text-indigo-200">Year 11 Student</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pop-up Overlay Legal Modals */}
      {modalContent && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white border border-slate-100 rounded-3xl max-w-lg w-full p-6 space-y-4 shadow-2xl">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <h3 className="font-black text-base text-slate-900 capitalize">
                {modalContent === 'terms' ? 'Terms of Service' : 'Privacy Policy'}
              </h3>
              <button onClick={() => setModalContent(null)} className="text-slate-400 hover:text-slate-600 font-bold text-sm">✕</button>
            </div>
            <div className="text-xs text-slate-500 font-medium space-y-3 max-h-60 overflow-y-auto leading-relaxed pr-1">
              {modalContent === 'terms' ? (
                <>
                  <p className="font-bold text-slate-800">Welcome to studyniq!</p>
                  <p>By using our platform, you agree to follow our simple community standards. This application provides educational utilities including note management systems, flashcards, mock quizzes, and study progress logs.</p>
                </>
              ) : (
                <>
                  <p className="font-bold text-slate-800">Your privacy matters to us.</p>
                  <p>We capture user email credentials and session validation tokens through our secure partner connection layers to synchronize tasks, timer counters, and streak metrics smoothly.</p>
                </>
              )}
            </div>
            <button onClick={() => setModalContent(null)} className="w-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold py-2.5 rounded-xl transition-all">
              I Understand
            </button>
          </div>
        </div>
      )}
    </div>
  );
}