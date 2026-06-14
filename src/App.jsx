import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import FlashcardsSection from "./components/FlashcardsSection";

import "./App.css";

/* ---------------- HOME ---------------- */
function Home() {
  const nav = useNavigate();

  return (
    <div className="h-screen flex items-center justify-center bg-[#F8FAFC] text-gray-800">
      <div className="bg-white border border-gray-100 p-10 rounded-2xl text-center w-[380px] shadow-xl shadow-indigo-100/40">
        <h1 className="text-4xl font-extrabold mb-2 text-indigo-600 tracking-tight">studyniq</h1>
        <p className="text-gray-500 mb-6 font-medium">Learn smarter. Achieve more.</p>

        <button
          onClick={() => nav("/login")}
          className="bg-indigo-600 hover:bg-indigo-700 font-semibold text-white px-5 py-2.5 rounded-xl w-full transition-colors shadow-sm"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

/* ---------------- LOGIN ---------------- */
function Login() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      nav("/app");
    } catch (e) {
      alert(e.message);
    }
  };

  const signup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      nav("/app");
    } catch (e) {
      alert(e.message);
    }
  };

  const googleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      nav("/app");
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[#F8FAFC] text-gray-800">
      <div className="bg-white border border-gray-100 p-8 rounded-2xl w-[350px] shadow-xl shadow-indigo-100/30">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome back</h2>

        <input
          className="w-full p-3 mb-2.5 bg-gray-50 border border-gray-200 text-sm rounded-xl focus:outline-none focus:border-indigo-500 transition-colors"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full p-3 mb-4 bg-gray-50 border border-gray-200 text-sm rounded-xl focus:outline-none focus:border-indigo-500 transition-colors"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={login} className="w-full bg-indigo-600 text-white font-semibold py-2.5 rounded-xl mb-2 hover:bg-indigo-700 transition-colors shadow-sm">
          Login
        </button>

        <button onClick={signup} className="w-full bg-gray-100 text-gray-700 font-semibold py-2.5 rounded-xl mb-3 hover:bg-gray-200 transition-colors">
          Sign Up
        </button>

        <div className="relative flex py-2 items-center mb-3">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="flex-shrink mx-4 text-gray-400 text-xs uppercase font-bold">Or</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>

        <button onClick={googleLogin} className="w-full bg-white border border-gray-200 text-gray-700 font-medium py-2.5 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
          <span>🌐</span> Continue with Google
        </button>
      </div>
    </div>
  );
}

/* ---------------- DASHBOARD ---------------- */
function Dashboard({ user }) {
  const nav = useNavigate();

  const [activeTab, setActiveTab] = useState('dashboard');
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [time, setTime] = useState(1500);
  const [running, setRunning] = useState(false);
  const [streak, setStreak] = useState(0);

  const key = user ? `tasks_${user.uid}` : null;
  const streakKey = user ? `streak_${user.uid}` : null;
  const lastLoginKey = user ? `lastLogin_${user.uid}` : null;

  /* ---------------- LOAD DATA + STREAK ---------------- */
  useEffect(() => {
    if (!user) return;

    const savedTasks = localStorage.getItem(key);
    if (savedTasks) setTasks(JSON.parse(savedTasks));

    const savedStreak = parseInt(localStorage.getItem(streakKey)) || 0;
    const lastLogin = localStorage.getItem(lastLoginKey);

    const today = new Date().toDateString();

    if (lastLogin !== today) {
      const newStreak = lastLogin ? savedStreak + 1 : 1;
      setStreak(newStreak);
      localStorage.setItem(streakKey, newStreak);
      localStorage.setItem(lastLoginKey, today);
    } else {
      setStreak(savedStreak);
    }
  }, [user, key, streakKey, lastLoginKey]);

  /* ---------------- SAVE TASKS ---------------- */
  useEffect(() => {
    if (user && key) {
      localStorage.setItem(key, JSON.stringify(tasks));
    }
  }, [tasks, user, key]);

  /* ---------------- TIMER ---------------- */
  useEffect(() => {
    let timer;
    if (running && time > 0) {
      timer = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [running, time]);

  /* ---------------- ALARM ---------------- */
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
    <div className="bg-[#F8FAFC] text-gray-800 antialiased min-h-screen flex">
      {/* 🧩 Component: Left Navigation Sidebar */}
      <Sidebar 
        user={user} 
        streak={streak} 
        onLogout={logout} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />

      {/* Main Container Core Workspace Frame */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* 🧩 Component: Topbar Header Panel */}
        <Topbar user={user} streak={streak} />

        {/* Inner Scrolling Area */}
        <main className="flex-1 overflow-y-auto p-8 max-w-6xl w-full mx-auto">
          
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              {/* Modern Blue Gradient Hero Banner Section */}
              <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-indigo-800 text-white rounded-3xl p-8 shadow-sm flex justify-between items-center relative overflow-hidden">
                <div className="space-y-2 z-10">
                  <h1 className="text-3xl font-bold tracking-tight">Learn smarter. Achieve more.</h1>
                  <p className="text-indigo-200 text-sm max-w-sm font-medium">Your all-in-one study platform to learn, practice and master any topic effectively.</p>
                  <div className="pt-2 flex gap-3">
                    <button onClick={() => setActiveTab('flashcards')} className="bg-white text-indigo-900 text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-indigo-50 transition-colors">
                      Start studying
                    </button>
                  </div>
                </div>
                <div className="hidden md:block bg-indigo-700/30 border border-indigo-500/20 rounded-2xl p-4 text-center backdrop-blur-sm">
                  <span className="block text-2xl">🔥</span>
                  <span className="block font-bold text-lg mt-1">{streak} Days</span>
                  <span className="text-[10px] text-indigo-200 font-semibold uppercase tracking-wider">Current Streak</span>
                </div>
              </div>

              {/* Grid Contents */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* 📝 Task Card Container */}
                <div className="bg-white border border-gray-100 p-5 rounded-2xl shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-1.5 text-sm">
                      📋 Continue Studying (Tasks)
                    </h3>
                    <div className="flex gap-2 mb-4">
                      <input
                        placeholder="Add a task item..."
                        className="flex-1 p-2 border border-gray-200 text-xs bg-gray-50 rounded-xl focus:outline-none focus:border-indigo-500"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                      />
                      <button
                        onClick={addTask}
                        className="bg-indigo-600 text-white px-3 text-xs font-bold rounded-xl hover:bg-indigo-700 transition-colors"
                      >
                        Add
                      </button>
                    </div>

                    <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                      {tasks.map((t) => (
                        <div key={t.id} className="flex justify-between items-center bg-gray-50 border border-gray-100 p-2.5 rounded-xl text-xs font-medium">
                          <span className="text-gray-700">{t.text}</span>
                          <button onClick={() => deleteTask(t.id)} className="text-gray-400 hover:text-red-500 transition-colors font-bold">
                            ✕
                          </button>
                        </div>
                      ))}
                      {tasks.length === 0 && (
                        <p className="text-xs text-gray-400 italic text-center py-4">No tasks pending! Nice work.</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* ⏱️ Pomodoro Timer Card Container */}
                <div className="bg-white border border-gray-100 p-5 rounded-2xl shadow-sm text-center flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-gray-900 text-left mb-4 flex items-center gap-1.5 text-sm">
                      ⏱️ Pomodoro Timer
                    </h3>
                    <h1 className="text-5xl font-black text-gray-900 tracking-tight my-2">
                      {formatTime(time)}
                    </h1>
                  </div>

                  <div className="flex gap-2 justify-center mt-4">
                    <button onClick={() => setRunning(true)} className="bg-emerald-50 text-emerald-600 border border-emerald-100 font-semibold text-xs px-4 py-2 rounded-xl hover:bg-emerald-100 transition-colors">
                      Start
                    </button>
                    <button onClick={() => setRunning(false)} className="bg-amber-50 text-amber-600 border border-amber-100 font-semibold text-xs px-4 py-2 rounded-xl hover:bg-amber-100 transition-colors">
                      Pause
                    </button>
                    <button onClick={() => { setRunning(false); setTime(1500); }} className="bg-gray-50 text-gray-600 border border-gray-200 font-semibold text-xs px-4 py-2 rounded-xl hover:bg-gray-100 transition-colors">
                      Reset
                    </button>
                  </div>
                </div>

                {/* 🚀 Feature Highlights */}
                <div className="bg-white border border-gray-100 p-5 rounded-2xl shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-1.5 text-sm">
                      📈 Topics Mastered
                    </h3>
                    <div className="space-y-3 pt-2">
                      <div>
                        <div className="flex justify-between text-xs font-semibold text-gray-600 mb-1">
                          <span>Cell Biology</span>
                          <span>14/16</span>
                        </div>
                        <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                          <div className="bg-emerald-500 h-full rounded-full" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs font-semibold text-gray-600 mb-1">
                          <span>Algebra Principles</span>
                          <span>20/24</span>
                        </div>
                        <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                          <div className="bg-indigo-500 h-full rounded-full" style={{ width: '78%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {activeTab === 'flashcards' && <FlashcardsSection />}
          
          {(activeTab === 'quizzes' || activeTab === 'notes') && (
            <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm text-center text-gray-400">
              <p className="text-sm font-medium">This interface layout module is ready to build!</p>
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

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });

    return () => unsub();
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#F8FAFC] text-indigo-600 font-semibold text-sm">
        Loading studyniq...
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/app" element={<Dashboard user={user} />} />
    </Routes>
  );
}