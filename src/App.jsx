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

import "./App.css";

/* ---------------- HOME ---------------- */
function Home() {
  const nav = useNavigate();

  return (
    <div className="h-screen flex items-center justify-center bg-slate-950 text-white">
      <div className="bg-slate-900 border border-slate-700 p-10 rounded-2xl text-center w-[360px] shadow-xl">
        <h1 className="text-4xl font-bold mb-2">Studyniq</h1>
        <p className="text-slate-400 mb-6">Study smarter. Stay focused.</p>

        <button
          onClick={() => nav("/login")}
          className="bg-indigo-500 hover:bg-indigo-600 px-5 py-2 rounded-lg w-full"
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
    <div className="h-screen flex items-center justify-center bg-slate-950 text-white">
      <div className="bg-slate-900 border border-slate-700 p-6 rounded-2xl w-[320px]">
        <h2 className="text-2xl mb-4">Login</h2>

        <input
          className="w-full p-2 mb-2 bg-slate-800 rounded"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full p-2 mb-3 bg-slate-800 rounded"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={login} className="w-full bg-white text-black py-2 rounded mb-2">
          Login
        </button>

        <button onClick={signup} className="w-full bg-indigo-500 py-2 rounded mb-2">
          Sign Up
        </button>

        <button onClick={googleLogin} className="w-full bg-red-500 py-2 rounded">
          Continue with Google
        </button>
      </div>
    </div>
  );
}

/* ---------------- DASHBOARD ---------------- */
function Dashboard({ user }) {
  const nav = useNavigate();

  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const [premium] = useState(false);

  const [time, setTime] = useState(1500);
  const [running, setRunning] = useState(false);

  const [streak, setStreak] = useState(0);

  const key = user ? `tasks_${user.uid}` : null;

  const streakKey = user ? `streak_${user.uid}` : null;
  const lastLoginKey = user ? `lastLogin_${user.uid}` : null;

  /* LOAD DATA + STREAK SYSTEM */
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

  /* SAVE TASKS */
  useEffect(() => {
    if (user) {
      localStorage.setItem(key, JSON.stringify(tasks));
    }
  }, [tasks]);

  /* TIMER */
  useEffect(() => {
    let timer;

    if (running && time > 0) {
      timer = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [running, time]);

  /* ALARM WHEN TIMER HITS 0 */
  useEffect(() => {
    if (time === 0) {
      setRunning(false);

      const alarm = new Audio(
        "https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg"
      );
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
    <div className="bg-slate-950 text-white">

      <div className="flex h-screen">

        {/* SIDEBAR */}
        <div className="w-64 bg-slate-900 border-r border-slate-800 p-4">
          <h1 className="text-xl font-bold mb-6">Studyniq</h1>

          <p className="text-slate-400 text-sm mb-2">{user?.email}</p>

          <p className="text-yellow-400 mb-4">
            🔥 Streak: {streak} days
          </p>

          <button
            onClick={logout}
            className="w-full bg-red-500 py-2 rounded mb-4"
          >
            Logout
          </button>
        </div>

        {/* MAIN (UPDATED LAYOUT) */}
        <div className="flex-1 p-8 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">

          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">
              Welcome back 👋
            </h1>

            <p className="text-slate-400">
              Ready to smash your study goals today?
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">

            {/* TASKS */}
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
              <h2 className="mb-3 font-semibold">Tasks</h2>

              <input
                className="w-full p-2 mb-2 bg-slate-800 rounded"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />

              <button onClick={addTask} className="bg-indigo-500 px-3 py-1 rounded mb-3">
                Add
              </button>

              {tasks.map((t) => (
                <div key={t.id} className="flex justify-between bg-slate-800 p-2 rounded mb-2">
                  {t.text}
                  <button onClick={() => deleteTask(t.id)} className="text-red-400">
                    ✕
                  </button>
                </div>
              ))}
            </div>

            {/* POMODORO */}
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
              <h2 className="mb-3 font-semibold">Pomodoro</h2>

              <h1 className="text-5xl font-bold mb-6">
                {formatTime(time)}
              </h1>

              <div className="flex gap-2">
                <button
                  onClick={() => setRunning(true)}
                  className="bg-green-500 px-3 py-2 rounded"
                >
                  Start
                </button>

                <button
                  onClick={() => setRunning(false)}
                  className="bg-yellow-500 px-3 py-2 rounded"
                >
                  Pause
                </button>

                <button
                  onClick={() => {
                    setRunning(false);
                    setTime(1500);
                  }}
                  className="bg-red-500 px-3 py-2 rounded"
                >
                  Reset
                </button>
              </div>
            </div>

            {/* PREMIUM */}
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
              <h2 className="mb-3 font-semibold">Premium</h2>

              <button
                disabled
                className="bg-slate-700 px-3 py-2 rounded cursor-not-allowed"
              >
                Premium Coming Soon
              </button>
            </div>

          </div>

        </div>

        {/* extra closing div as requested */}
      </div>
    </div>
  );
}

/* ---------------- APP ---------------- */
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
      <div className="h-screen flex items-center justify-center bg-slate-950 text-white">
        Loading...
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