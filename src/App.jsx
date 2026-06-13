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

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) nav("/app");
    });
    return () => unsub();
  }, [nav]);

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
  const [premium, setPremium] = useState(false);

  const key = `tasks_${user?.uid}`;
  const premKey = `premium_${user?.uid}`;

  /* load saved data */
  useEffect(() => {
    const saved = localStorage.getItem(key);
    const prem = localStorage.getItem(premKey);

    if (saved) setTasks(JSON.parse(saved));
    if (prem) setPremium(true);
  }, [user]);

  useEffect(() => {
    if (user) localStorage.setItem(key, JSON.stringify(tasks));
  }, [tasks]);

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

  const upgrade = () => {
    setPremium(true);
    localStorage.setItem(premKey, "true");
  };

  return (
    <div className="flex h-screen bg-slate-950 text-white">

      {/* SIDEBAR */}
      <div className="w-64 bg-slate-900 border-r border-slate-800 p-4">
        <h1 className="text-xl font-bold mb-6">Studyniq</h1>

        <p className="text-slate-400 text-sm mb-4">{user.email}</p>

        <button
          onClick={logout}
          className="w-full bg-red-500 py-2 rounded mb-4"
        >
          Logout
        </button>

        <div className="text-sm text-slate-400">
          {premium ? "💎 Premium Active" : "Free Plan"}
        </div>
      </div>

      {/* MAIN */}
      <div className="flex-1 p-6 grid grid-cols-3 gap-6">

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

        {/* TIMER */}
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
          <h2 className="mb-3 font-semibold">Pomodoro</h2>

          <p className="text-slate-400">25:00 timer placeholder</p>
        </div>

        {/* PREMIUM */}
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
          <h2 className="mb-3 font-semibold">Premium</h2>

          {!premium ? (
            <>
              <p className="text-slate-400 mb-3">
                Unlock themes + advanced tools
              </p>

              <button
                onClick={upgrade}
                className="bg-gradient-to-r from-indigo-500 to-purple-500 px-3 py-2 rounded"
              >
                Upgrade (Free Demo)
              </button>
            </>
          ) : (
            <p className="text-green-400">Premium unlocked 🎉</p>
          )}
        </div>
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
      <Route path="/app" element={user ? <Dashboard user={user} /> : <Login />} />
    </Routes>
  );
}