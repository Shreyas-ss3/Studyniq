import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";

function Home() {
  const nav = useNavigate();

  return (
    <div className="center">
      <div className="card">
        <h1>Studyniq</h1>
        <p>Study smarter. Stay focused. Achieve top grades.</p>
        <button onClick={() => nav("/login")}>Get Started</button>
      </div>
    </div>
  );
}

function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const nav = useNavigate();

  const login = () => {
    if (!email) return;
    setUser({ email });
    nav("/app");
  };

  return (
    <div className="center">
      <div className="card">
        <h2>Login</h2>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}

function Dashboard({ user }) {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [time, setTime] = useState(1500);
  const [active, setActive] = useState(false);
  const [isPremium, setIsPremium] = useState(false);

  useEffect(() => {
    let timer;

    if (active && time > 0) {
      timer = setInterval(() => {
        setTime((t) => t - 1);
      }, 1000);
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
  }; // Fixed: Removed the duplicate closing bracket that was right below this.

  const upgrade = async () => {
    console.log("UPGRADE CLICKED");

    try {
      const res = await fetch(
        "https://focusforge-backend-ixod.onrender.com/create-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await res.json();
      console.log(data);

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Stripe session failed");
      }
    } catch (err) {
      console.error(err);
      alert("Payment error");
    }
  };

  return (
    <div className="app">
      <div className="topbar">
        <h2>Studyniq</h2>
        <p>{user?.email}</p>
      </div>

      <div className="grid">
        <div className="card">
          <h3>Tasks</h3>
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add task"
          />
          <button onClick={addTask}>Add</button>

          {tasks.map((t, i) => (
            <div key={i} className="task">
              {t}
            </div>
          ))}
        </div>

        <div className="card">
          <h3>Pomodoro</h3>
          <h1>{formatTime(time)}</h1>
          <button onClick={() => setActive(true)}>Start</button>
          <button onClick={() => setActive(false)}>Pause</button>
          <button onClick={() => setTime(1500)}>Reset</button>
        </div>

        <div className="card">
          <h3>Premium</h3>
          <p>{isPremium ? "Active" : "Free Plan"}</p>
          <button onClick={upgrade}>Upgrade £2.99/month</button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login setUser={setUser} />} />
      <Route path="/app" element={<Dashboard user={user} />} />
    </Routes>
  );
}