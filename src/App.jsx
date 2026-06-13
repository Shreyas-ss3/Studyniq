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
  const [firstVisit, setFirstVisit] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem("studyniq_seen");
    setFirstVisit(!seen);
  }, []);

  const handleStart = () => {
    localStorage.setItem("studyniq_seen", "true");
    nav("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-10 text-center text-white w-[350px]">
        <h1 className="text-5xl font-bold mb-4">Studyniq</h1>

        <p className="text-white/80 mb-6">
          Study smarter. Stay focused. Achieve top grades.
        </p>

        {firstVisit && (
          <button
            onClick={handleStart}
            className="bg-white text-black px-6 py-2 rounded-xl font-semibold"
          >
            Get Started
          </button>
        )}
      </div>
    </div>
  );
}

/* ---------------- LOGIN ---------------- */
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      nav("/app");
    } catch (err) {
      alert(err.message);
    }
  };

  const signup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      nav("/app");
    } catch (err) {
      alert(err.message);
    }
  };

  const googleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      nav("/app");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-6 rounded-2xl w-[300px]">

        <h2 className="text-2xl mb-4">Studyniq</h2>

        <input
          className="w-full p-2 mb-3 rounded bg-white/10 border border-white/20"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full p-2 mb-3 rounded bg-white/10 border border-white/20"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={login} className="w-full bg-white text-black py-2 rounded mb-2">
          Login
        </button>

        <button onClick={signup} className="w-full bg-purple-500 py-2 rounded mb-2">
          Sign Up
        </button>

        <button
          onClick={googleLogin}
          className="w-full bg-red-500 py-2 rounded"
        >
          Continue with Google
        </button>

      </div>
    </div>
  );
}

/* ---------------- DASHBOARD ---------------- */
function Dashboard({ user }) {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [time, setTime] = useState(1500);
  const [active, setActive] = useState(false);

  const nav = useNavigate();

  useEffect(() => {
    if (!user) nav("/login");
  }, [user]);

  useEffect(() => {
    let timer;
    if (active && time > 0) {
      timer = setInterval(() => setTime((t) => t - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [active, time]);

  const addTask = () => {
    if (!task) return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const formatTime = (t) => {
    const m = Math.floor(t / 60);
    const s = t % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const logout = async () => {
    try {
      await signOut(auth);
      nav("/login");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">

      <div className="flex justify-between mb-6">
        <h2 className="text-2xl font-bold">Studyniq</h2>

        <div className="flex gap-4 items-center">
          <p className="text-white/60">{user?.email}</p>

          <button onClick={logout} className="bg-red-500 px-3 py-1 rounded">
            Logout
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">

        {/* TASKS */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-4">
          <h3 className="mb-3">Tasks</h3>

          <input
            className="w-full p-2 mb-2 bg-white/10 border border-white/20 rounded"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />

          <button onClick={addTask} className="bg-white text-black px-3 py-1 rounded">
            Add
          </button>

          {tasks.map((t, i) => (
            <div key={i} className="mt-2 bg-white/10 p-2 rounded">
              {t}
            </div>
          ))}
        </div>

        {/* TIMER */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-4 text-center">
          <h3>Pomodoro</h3>
          <h1 className="text-4xl my-4">{formatTime(time)}</h1>

          <button onClick={() => setActive(true)} className="bg-green-500 px-2 py-1 rounded m-1">
            Start
          </button>
          <button onClick={() => setActive(false)} className="bg-yellow-500 px-2 py-1 rounded m-1">
            Pause
          </button>
          <button onClick={() => setTime(1500)} className="bg-red-500 px-2 py-1 rounded m-1">
            Reset
          </button>
        </div>

        {/* PREMIUM */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-4">
          <h3>Premium</h3>
          <p className="text-white/60 mb-3">Free Plan</p>

          <button className="bg-gradient-to-r from-pink-500 to-purple-500 px-3 py-2 rounded">
            Upgrade £2.99/month
          </button>
        </div>

      </div>
    </div>
  );
}

/* ---------------- APP ROUTES ---------------- */
export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });

    return () => unsub();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/app"
        element={user ? <Dashboard user={user} /> : <Login />}
      />
    </Routes>
  );
}