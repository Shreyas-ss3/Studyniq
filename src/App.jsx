import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";

// Component Structural Shells
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import FlashcardsSection from "./components/FlashcardsSection";

// Beautiful New Mockup Views
import Home from "./pages/Home";
import Login from "./pages/Login";

import "./App.css";

/* ---------------- AUTH WRAPPER (LOGIN SCREEN CONTAINER) ---------------- */
function LoginWrapper() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      nav("/app");
    } catch (e) {
      alert(e.message);
    }
  };

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      nav("/app");
    } catch (e) {
      alert(e.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      nav("/app");
    } catch (e) {
      alert(e.message);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      alert("Please enter your email address first so we know where to send the reset link!");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      alert(`Password reset link has been sent to ${email}! Check your inbox.`);
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <Login 
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      onLogin={handleLogin}
      onSignup={handleSignup}
      onGoogleLogin={handleGoogleLogin}
      onForgotPassword={handleForgotPassword}
      onNavigate={(destination) => nav(destination === 'home' ? '/' : `/${destination}`)}
    />
  );
}

/* ---------------- WORKSPACE CORE DASHBOARD ---------------- */
function Dashboard({ user }) {
  const nav = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Real working data synchronization hooks
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [time, setTime] = useState(1500);
  const [running, setRunning] = useState(false);
  const [streak, setStreak] = useState(7); 

  const key = user ? `tasks_${user.uid}` : null;
  const streakKey = user ? `streak_${user.uid}` : null;
  const lastLoginKey = user ? `lastLogin_${user.uid}` : null;

  useEffect(() => {
    if (!user) return;
    const savedTasks = localStorage.getItem(key);
    if (savedTasks) setTasks(JSON.parse(savedTasks));

    const savedStreak = parseInt(localStorage.getItem(streakKey)) || 7;
    const lastLogin = localStorage.getItem(lastLoginKey);
    const today = new Date().toDateString();

    if (lastLogin !== today) {
      const newStreak = lastLogin ? savedStreak + 1 : 7;
      setStreak(newStreak);
      localStorage.setItem(streakKey, newStreak);
      localStorage.setItem(lastLoginKey, today);
    } else {
      setStreak(savedStreak);
    }
  }, [user, key, streakKey, lastLoginKey]);

  useEffect(() => {
    if (user && key) {
      localStorage.setItem(key, JSON.stringify(tasks));
    }
  }, [tasks, user, key]);

  useEffect(() => {
    let timer;
    if (running && time > 0) {
      timer = setInterval(() => { setTime((prev) => prev - 1); }, 1000);
    }
    return () => clearInterval(timer);
  }, [running, time]);

  useEffect(() => {
    if (time === 0) {
      setRunning(false);
      const alarm = new Audio("https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg");
      alarm.play();
    }
  }, [time]);

  const addTask = () => {
    if (!task.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: task }]);
    setTask("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const logout = async () => {
    await signOut(auth);
    nav("/login");
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="antialiased min-h-screen flex bg-[#F8FAFC] text-gray-800">
      <Sidebar 
        user={user}
        streak={streak}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onLogout={logout} 
        onNavigateLanding={() => nav("/")} 
      />

      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* 🔌 Connected Topbar hooks to control user logouts and account configuration views */}
        <Topbar 
          user={user} 
          streak={streak} 
          onLogout={logout} 
          setActiveTab={setActiveTab} 
        />

        <main className="flex-1 overflow-y-auto p-8 max-w-7xl w-full mx-auto space-y-8">
          
          {/* Main Dashboard Panel Layout */}
          {activeTab === 'dashboard' && (
            <>
              {/* Top Row Hero Grid Banner & Metric Column */}
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                <div className="xl:col-span-2 bg-gradient-to-r from-slate-900 via-indigo-950 to-indigo-900 text-white rounded-3xl p-8 flex flex-col justify-between min-h-[220px]">
                  <div className="space-y-2 max-w-md">
                    <h1 className="text-4xl font-extrabold tracking-tight">Learn smarter.<br />Achieve <span className="text-indigo-400">more.</span></h1>
                    <p className="text-indigo-200/80 text-xs font-medium leading-relaxed pt-1">Your all-in-one study platform to learn, practice and master any topic.</p>
                  </div>
                  <div className="flex gap-2.5 pt-4">
                    <button onClick={() => setActiveTab('flashcards')} className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all">
                      Start studying
                    </button>
                    <button className="bg-white/10 hover:bg-white/15 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all">
                      Create a study set
                    </button>
                  </div>
                </div>

                {/* Progress Metric Block */}
                <div className="bg-white border border-gray-100 rounded-3xl p-6 flex items-center justify-between shadow-sm">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Weekly progress</span>
                    <h3 className="text-sm font-bold text-gray-800">Hours studied</h3>
                    <div className="text-2xl font-black text-gray-900 pt-2">12.4 <span className="text-emerald-500 text-xs font-bold">↑ 24%</span></div>
                  </div>
                  <div className="w-20 h-20 rounded-full border-4 border-indigo-600 flex items-center justify-center font-black text-sm text-gray-900 shadow-inner">
                    76%
                  </div>
                </div>
              </div>

              {/* Study Tools Layout Cluster */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Study Tools</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
                  {[
                    { id: "flashcards", title: "Flashcards", desc: "Learn and revise with spaced repetition", icon: "📇", color: "bg-blue-50 text-blue-600" },
                    { id: "quizzes", title: "Quizzes", desc: "Test your knowledge with interactive quizzes", icon: "❓", color: "bg-emerald-50 text-emerald-600" },
                    { id: "practice", title: "Exam Practice", desc: "Practice exam-style questions", icon: "✍️", color: "bg-amber-50 text-amber-600" },
                    { id: "papers", title: "Past Papers", desc: "Access past papers and mark schemes", icon: "📄", color: "bg-purple-50 text-purple-600" },
                    { id: "ai-tutor", title: "AI Tutor", desc: "Get explanations and help instantly", icon: "🤖", color: "bg-cyan-50 text-cyan-600" },
                    { id: "notes", title: "Notes", desc: "Create, organise and revise your notes", icon: "📝", color: "bg-pink-50 text-pink-600" },
                  ].map((tool, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => setActiveTab(tool.id)}
                      className="bg-white border border-gray-50 hover:border-gray-200 p-4 rounded-2xl flex flex-col justify-between min-h-[140px] transition-all cursor-pointer shadow-sm"
                    >
                      <div className={`w-8 h-8 rounded-lg ${tool.color} flex items-center justify-center text-base font-bold`}>{tool.icon}</div>
                      <div className="mt-4">
                        <h4 className="font-bold text-xs text-gray-900">{tool.title}</h4>
                        <p className="text-[10px] text-gray-400 mt-1 leading-tight">{tool.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Functional Dashboard Content Grid Columns */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* 1. Working Continue Studying Task Panel */}
                <div className="bg-white border border-gray-100 p-5 rounded-2xl shadow-sm flex flex-col justify-between min-h-[260px]">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-1.5 text-xs uppercase tracking-wider">
                      📋 Continue Studying (Tasks)
                    </h3>
                    <div className="flex gap-2 mb-4">
                      <input
                        placeholder="Add a task item..."
                        className="flex-1 p-2 border border-gray-200 text-xs bg-gray-50 rounded-xl focus:outline-none focus:border-indigo-500"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                      />
                      <button onClick={addTask} className="bg-indigo-600 text-white px-3 text-xs font-bold rounded-xl hover:bg-indigo-700">
                        Add
                      </button>
                    </div>

                    <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
                      {tasks.map((t) => (
                        <div key={t.id} className="flex justify-between items-center bg-gray-50 border border-gray-100 p-2.5 rounded-xl text-xs font-semibold">
                          <span>{t.text}</span>
                          <button onClick={() => deleteTask(t.id)} className="text-gray-400 hover:text-red-500 font-bold">✕</button>
                        </div>
                      ))}
                      {tasks.length === 0 && (
                        <p className="text-xs text-gray-400 italic p-1">No active items. Add a topic above to begin tracking.</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* 2. Working Pomodoro Timer Column */}
                <div className="bg-white border border-gray-100 p-5 rounded-2xl shadow-sm text-center flex flex-col justify-between min-h-[260px]">
                  <div>
                    <h3 className="font-bold text-gray-900 text-left mb-4 flex items-center gap-1.5 text-xs uppercase tracking-wider">
                      ⏱️ Pomodoro Timer
                    </h3>
                    <h1 className="text-5xl font-black text-gray-900 tracking-tight my-4">
                      {formatTime(time)}
                    </h1>
                  </div>
                  <div className="flex gap-2 justify-center mt-2">
                    <button onClick={() => setRunning(true)} className="bg-emerald-50 text-emerald-600 border border-emerald-100 px-4 py-2 rounded-xl text-xs font-bold hover:bg-emerald-100/60 transition-colors">Start</button>
                    <button onClick={() => setRunning(false)} className="bg-amber-50 text-amber-600 border border-amber-100 px-4 py-2 rounded-xl text-xs font-bold hover:bg-amber-100/60 transition-colors">Pause</button>
                    <button onClick={() => { setRunning(false); setTime(1500); }} className="bg-gray-50 text-gray-600 border border-gray-100 px-4 py-2 rounded-xl text-xs font-bold hover:bg-gray-100 transition-colors">Reset</button>
                  </div>
                </div>

                {/* 3. Topics Progress Metric Display */}
                <div className="bg-white border border-gray-100 p-5 rounded-2xl shadow-sm flex flex-col justify-between min-h-[260px]">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-1.5 text-xs uppercase tracking-wider">
                      📈 Topics Mastered
                    </h3>
                    <div className="space-y-3.5 pt-2">
                      <div>
                        <div className="flex justify-between text-xs font-semibold mb-1 text-gray-700">
                          <span>Cell Biology</span>
                          <span className="text-gray-400">14/16</span>
                        </div>
                        <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                          <div className="bg-emerald-500 h-full rounded-full" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs font-semibold mb-1 text-gray-700">
                          <span>Organic Chemistry</span>
                          <span className="text-gray-400">11/16</span>
                        </div>
                        <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                          <div className="bg-purple-500 h-full rounded-full" style={{ width: '68%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </>
          )}

          {/* Flashcards View Route */}
          {activeTab === 'flashcards' && <FlashcardsSection user={user} />}
          
          {/* ⚙️ Account Settings Panel Layout Content View */}
          {activeTab === 'settings' && (
            <div className="bg-white border border-gray-100 p-8 rounded-3xl max-w-2xl space-y-6 shadow-sm">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Account Settings</h2>
                <p className="text-xs text-gray-400 mt-1">Manage your studyniq account configurations and app preferences.</p>
              </div>
              
              <hr className="border-gray-100" />
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-1">
                  <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Email Address</label>
                  <input 
                    disabled 
                    value={user?.email || ''} 
                    className="p-2.5 bg-gray-50 border border-gray-100 text-xs font-medium text-gray-500 rounded-xl max-w-md cursor-not-allowed focus:outline-none"
                  />
                </div>

                <div className="pt-2">
                  <h4 className="text-xs font-bold text-gray-800">Study Preferences</h4>
                  <label className="flex items-center gap-2 mt-2.5 cursor-pointer select-none">
                    <input type="checkbox" defaultChecked className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 h-3.5 w-3.5" />
                    <span className="text-xs text-gray-600 font-medium">Receive daily streak notifications and study reminders</span>
                  </label>
                </div>
              </div>
            </div>
          )}
          
          {/* Dynamic Module Fallback Shell Container */}
          {activeTab !== 'dashboard' && activeTab !== 'flashcards' && activeTab !== 'settings' && (
            <div className="bg-white text-gray-800 border border-gray-100 p-12 rounded-3xl text-center text-gray-400 font-medium text-sm">
              <p>The workspace container view for the "{activeTab}" module is ready to accept custom layouts.</p>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}

/* ---------------- APP ROUTER CONTAINER ---------------- */
export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const nav = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  // Halts router evaluation entirely until Firebase finishes loading the active session state
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#F8FAFC] text-indigo-600 font-semibold text-sm">
        Loading studyniq...
      </div>
    );
  }

  return (
    <Routes>
      <Route 
        path="/" 
        element={user ? <Navigate to="/app" replace /> : <Home onNavigate={(dest) => nav(dest === 'login' ? '/login' : '/')} />} 
      />
      <Route 
        path="/login" 
        element={user ? <Navigate to="/app" replace /> : <LoginWrapper />} 
      />
      
      {/* Protected application router scope */}
      <Route 
        path="/app" 
        element={user ? <Dashboard user={user} /> : <Navigate to="/login" replace />} 
      />
    </Routes>
  );
}