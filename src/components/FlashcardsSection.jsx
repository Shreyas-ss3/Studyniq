import React, { useState, useEffect } from "react";
// Import the fully pre-populated database containing all 23 subjects and 10 cards per topic
import { initialDatabase } from "../data/flashcardData";

export default function FlashcardsSection() {
  const [database, setDatabase] = useState(initialDatabase);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeViewTab, setActiveViewTab] = useState("all-subjects"); 
  const [activeTopic, setActiveTopic] = useState(null);
  const [currentCardIdx, setCurrentCardIdx] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Core Educational Metrics States
  const [streak, setStreak] = useState(4);
  const [totalReviewed, setTotalReviewed] = useState(12);
  const [masteryRate, setMasteryRate] = useState(88);

  // Continuous Focus Timer Engine States
  const [timerSeconds, setTimerSeconds] = useState(1500);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [completedCycles, setCompletedCycles] = useState(0);
  const [showTimerSetup, setShowTimerSetup] = useState(false);
  const [customFocusMins, setCustomFocusMins] = useState("");

  // ADVANCED FEATURE 1: Smart Study Mode Toggle ('flashcard' or 'quiz')
  const [studyMode, setStudyMode] = useState("flashcard");
  const [selectedQuizOption, setSelectedQuizOption] = useState(null);
  const [quizScore, setQuizScore] = useState(0);
  const [isQuizSubmitted, setIsQuizSubmitted] = useState(false);
  const [generatedDistractors, setGeneratedDistractors] = useState([]);

  // ADVANCED FEATURE 2: Persistent Scratchpad Notepad
  const [studyNotes, setStudyNotes] = useState(() => {
    return localStorage.getItem("studyniq_workspace_notes") || "";
  });
  const [showNotepad, setShowNotepad] = useState(false);

  // ADVANCED FEATURE 3: Global Student Mock Leaderboard Data
  const leaderboardMock = [
    { rank: 1, name: "Alex W.", XP: 2450, badge: "👑 Pro" },
    { rank: 2, name: "Sarah K.", XP: 2120, badge: "⚡ Streak Master" },
    { rank: 3, name: "You", XP: streak * 150 + totalReviewed * 10, badge: "🎯 Rising Star", isUser: true },
    { rank: 4, name: "David M.", XP: 1100, badge: "📝 Scholar" }
  ];

  // Custom Application Notification Toast State
  const [notification, setNotification] = useState({ show: false, title: "", message: "", type: "info" });

  // Creation Workspace Engine States
  const [isCreating, setIsCreating] = useState(false);
  const [selectedSubjectId, setSelectedSubjectId] = useState("eng-lang");
  const [newTopicTitle, setNewTopicTitle] = useState("");
  const [shareGlobally, setShareGlobally] = useState(false);
  const [creationCards, setCreationCards] = useState([{ q: "", a: "" }]);

  // Premium Warning Dialog Modal State
  const [showPremiumModal, setShowPremiumModal] = useState(false);

  // Save notepad updates to storage
  useEffect(() => {
    localStorage.setItem("studyniq_workspace_notes", studyNotes);
  }, [studyNotes]);

  // Trigger custom in-app banner notifications
  const triggerNotification = (title, message, type = "info") => {
    setNotification({ show: true, title, message, type });
    setTimeout(() => {
      setNotification((prev) => ({ ...prev, show: false }));
    }, 4500);
  };

  // Focus Timer Logic Loop
  useEffect(() => {
    let interval = null;
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0) {
      setIsTimerRunning(false);
      const nextCycleCount = completedCycles + 1;
      setCompletedCycles(nextCycleCount);
      setTimerSeconds(1500);
      triggerNotification(
        "💪 Focus Block Complete!", 
        `Great job! You finished study block #${nextCycleCount}. Resetting to next session.`, 
        "success"
      );
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerSeconds, completedCycles]);

  // Generate dynamic quiz options combining correct answer with distractors from the same deck
  useEffect(() => {
    if (activeTopic && studyMode === "quiz") {
      const correctAnswer = activeTopic.cards[currentCardIdx]?.a || "";
      const otherAnswers = activeTopic.cards
        .filter((_, idx) => idx !== currentCardIdx)
        .map(c => c.a);
      
      const options = [correctAnswer, ...otherAnswers.slice(0, 3)];
      setGeneratedDistractors(options.sort(() => Math.random() - 0.5));
      setSelectedQuizOption(null);
      setIsQuizSubmitted(false);
    }
  }, [activeTopic, currentCardIdx, studyMode]);

  const formatTimer = () => {
    const mins = Math.floor(timerSeconds / 60);
    const secs = timerSeconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleSetCustomTimer = (minutes) => {
    const parsedMins = parseInt(minutes, 10);
    if (isNaN(parsedMins) || parsedMins <= 0) {
      return triggerNotification("⚠️ Invalid Time", "Please specify a positive number of minutes.", "error");
    }
    setTimerSeconds(parsedMins * 60);
    setIsTimerRunning(false);
    setShowTimerSetup(false);
    triggerNotification("⏱️ Timer Updated", `Configured a new ${parsedMins}-minute focus session.`, "info");
  };

  const handleAddCardSlot = () => {
    setCreationCards([...creationCards, { q: "", a: "" }]);
  };

  const handleCardInputChange = (index, field, value) => {
    const updated = [...creationCards];
    updated[index][field] = value;
    setCreationCards(updated);
  };

  const startReviewSession = (topic) => {
    setActiveTopic(topic);
    setCurrentCardIdx(0);
    setIsFlipped(false);
    setQuizScore(0);
    setIsQuizSubmitted(false);
  };

  const handleCardScore = (isCorrect) => {
    setTotalReviewed((prev) => prev + 1);
    if (isCorrect) {
      setMasteryRate((prev) => Math.min(100, Math.round(prev + 1)));
    }
    
    if (currentCardIdx < activeTopic.cardCount - 1) {
      setCurrentCardIdx((prev) => prev + 1);
      setIsFlipped(false);
    } else {
      const grade = masteryRate > 90 ? "A" : masteryRate > 75 ? "B" : "C";
      setActiveTopic(null);
      setStreak((prev) => prev + 1);
      triggerNotification(`🎉 Session Complete (Grade ${grade})`, "Performance logged into your learning matrix.", "success");
    }
  };

  const handleQuizSubmit = () => {
    if (!selectedQuizOption || isQuizSubmitted) return;
    
    const isCorrect = selectedQuizOption === activeTopic.cards[currentCardIdx].a;
    if (isCorrect) setQuizScore(prev => prev + 1);
    setIsQuizSubmitted(true);
    setTotalReviewed(prev => prev + 1);
    setMasteryRate(prev => Math.min(100, Math.round(isCorrect ? prev + 1.5 : prev - 1)));
  };

  const advanceQuizNext = () => {
    if (currentCardIdx < activeTopic.cardCount - 1) {
      setCurrentCardIdx(prev => prev + 1);
    } else {
      triggerNotification("🏆 Assessment Complete", `Quiz Finished! Score: ${quizScore}/${activeTopic.cardCount}`, "success");
      setActiveTopic(null);
      setStreak(prev => prev + 1);
    }
  };

  const handleSaveDeck = (e) => {
    e.preventDefault();
    if (!newTopicTitle.trim()) return alert("Please specify a topic title summary label!");

    if (shareGlobally) {
      setShowPremiumModal(true);
      return; 
    }

    let updatedDb = [...database];

    if (selectedSubjectId === "custom-subject") {
      const userSubjectName = prompt("Enter your custom subject name:")?.trim();
      if (!userSubjectName) return;

      const newSubjectId = `custom-sub-${Date.now()}`;

      updatedDb.push({
        id: newSubjectId,
        subject: userSubjectName,
        icon: "📝",
        badgeBg: "bg-gray-50 text-gray-700 border-gray-100",
        topics: [
          {
            id: `custom-topic-${Date.now()}`,
            title: newTopicTitle,
            cardCount: creationCards.length,
            updated: "Created just now",
            isPremiumShared: false,
            cards: creationCards
          }
        ]
      });
    } else {
      updatedDb = database.map((sub) => {
        if (sub.id === selectedSubjectId) {
          return {
            ...sub,
            topics: [
              ...sub.topics,
              {
                id: `custom-${Date.now()}`,
                title: newTopicTitle,
                cardCount: creationCards.length,
                updated: "Created just now",
                isPremiumShared: false,
                cards: creationCards
              }
            ]
          };
        }
        return sub;
      });
    }

    setDatabase(updatedDb);
    setIsCreating(false);
    setNewTopicTitle("");
    setCreationCards([{ q: "", a: "" }]);
    triggerNotification("📁 Local Save Successful", "Personal card deck added directly to your dashboard.", "success");
  };

  const filteredDatabase = database.map((subjectGroup) => {
    const matchedTopics = subjectGroup.topics.filter(
      (topic) =>
        topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        subjectGroup.subject.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return { ...subjectGroup, topics: matchedTopics };
  }).filter((subjectGroup) => subjectGroup.topics.length > 0);

  return (
    <div className="space-y-8 animate-fade-in w-full pb-12 relative text-left">
      
      {/* NOTIFICATION HUD TOAST POPUP */}
      {notification.show && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-[100] w-full max-w-sm p-4 animate-in slide-in-from-top-8 duration-300">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-2xl flex gap-3 items-start">
            <div className="text-base pt-0.5">{notification.type === "success" ? "🔔" : "⚠️"}</div>
            <div className="flex-1 space-y-0.5">
              <h4 className="text-xs font-black text-slate-100">{notification.title}</h4>
              <p className="text-[11px] text-slate-400 leading-normal">{notification.message}</p>
            </div>
            <button onClick={() => setNotification((prev) => ({ ...prev, show: false }))} className="text-slate-500 hover:text-slate-300 text-xs font-bold px-1">✕</button>
          </div>
        </div>
      )}

      {/* PREMIUM UPGRADE MODAL */}
      {showPremiumModal && (
        <div className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full text-center border border-gray-100 shadow-xl space-y-4 animate-in zoom-in-95 duration-150">
            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 text-xl rounded-2xl flex items-center justify-center mx-auto">🌍</div>
            <div>
              <h3 className="font-black text-gray-900 text-sm">Publishing Requires Premium</h3>
              <p className="text-xs text-gray-400 mt-1.5 leading-relaxed font-medium">
                Creating flashcards is <span className="font-bold text-indigo-600">100% unlimited</span> for your personal workspace view, but sharing your decks globally with other students requires a Premium Account Subscription.
              </p>
            </div>
            <div className="flex gap-2 pt-2">
              <button type="button" onClick={() => setShowPremiumModal(false)} className="flex-1 py-2.5 text-xs font-bold text-gray-500 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all">Keep Private</button>
              <button type="button" onClick={() => { window.location.href = "https://buy.stripe.com/test_7sY9AT18a1nX2p68wZ7g400"; }} className="flex-1 py-2.5 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-all shadow-sm">Go Premium • £2.99</button>
            </div>
          </div>
        </div>
      )}

      {/* ANCHOR FLOATING PERSISTENT WORKSPACE NOTEPAD */}
      <div className="fixed bottom-6 right-6 z-40">
        <button 
          onClick={() => setShowNotepad(!showNotepad)}
          className="w-12 h-12 rounded-full bg-slate-900 hover:bg-indigo-600 text-white shadow-xl flex items-center justify-center transition-all text-sm"
          title="Open Revision Notebook"
        >
          {showNotepad ? "✕" : "📝"}
        </button>
        {showNotepad && (
          <div className="absolute bottom-14 right-0 w-80 bg-white border border-gray-100 rounded-2xl shadow-2xl p-4 space-y-2 animate-in slide-in-from-bottom-4 duration-200">
            <div className="flex justify-between items-center border-b border-gray-50 pb-2">
              <h5 className="text-[10px] font-black uppercase tracking-wider text-gray-400">Scratchpad Workspace (Auto-saved)</h5>
            </div>
            <textarea 
              value={studyNotes}
              onChange={(e) => setStudyNotes(e.target.value)}
              placeholder="Jot down formulas, keywords, and study pointers here during your live loops..."
              className="w-full h-44 p-2.5 bg-gray-50 text-xs rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 text-gray-700 resize-none"
            />
          </div>
        )}
      </div>

      {/* EDUCATIONAL METRICS DASHBOARD BANNER */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white border border-gray-100 p-4 rounded-2xl shadow-sm flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center text-lg">🔥</div>
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Daily Revision Streak</p>
            <p className="text-sm font-black text-gray-900">{streak} Days Consistent</p>
          </div>
        </div>
        <div className="bg-white border border-gray-100 p-4 rounded-2xl shadow-sm flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-500 flex items-center justify-center text-lg">📊</div>
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Total Cards Processed</p>
            <p className="text-sm font-black text-gray-900">{totalReviewed} Reviews Logged</p>
          </div>
        </div>
        <div className="bg-white border border-gray-100 p-4 rounded-2xl shadow-sm flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-500 flex items-center justify-center text-lg">🎯</div>
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Workspace Performance</p>
            <p className="text-sm font-black text-gray-900">{masteryRate}% Accuracy Rating</p>
          </div>
        </div>
      </div>

      {/* HERO TITLE HEADER CONTAINER & POMODORO INTERFACE */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-white border border-gray-100 rounded-3xl p-6 shadow-sm relative">
        <div className="space-y-1">
          <h1 className="text-xl font-black tracking-tight text-gray-900">Studyniq Hub</h1>
          <p className="text-xs font-medium text-gray-400">Engage structured spaced-repetition loops or generate randomized mock exam tests.</p>
        </div>

        {/* FOCUS TIMER CONTROLLER HUB */}
        <div className="flex items-center gap-3 bg-gray-50 border border-gray-100 p-2 px-3.5 rounded-2xl relative">
          <div className="text-left">
            <span className="text-[8px] font-black uppercase tracking-widest block text-indigo-500">
              Focus Block #{completedCycles + 1}
            </span>
            <span className="text-xs font-mono font-black text-gray-800">{formatTimer()}</span>
          </div>

          <button 
            type="button"
            onClick={() => setIsTimerRunning(!isTimerRunning)}
            className={`px-3 py-1.5 rounded-xl text-[10px] font-extrabold text-white transition-colors shadow-sm ${isTimerRunning ? 'bg-amber-500 hover:bg-amber-600' : 'bg-indigo-600 hover:bg-indigo-700'}`}
          >
            {isTimerRunning ? "⏸ Pause" : "▶ Start"}
          </button>

          <button 
            type="button"
            onClick={() => setShowTimerSetup(!showTimerSetup)}
            className="p-1.5 hover:bg-gray-200/60 rounded-lg text-gray-400 hover:text-gray-600 transition-colors text-xs"
            title="Configure intervals"
          >
            ⚙️
          </button>

          {/* TIMER SELECTION DROPDOWN POPUP */}
          {showTimerSetup && (
            <div className="absolute top-full mt-2 right-0 bg-white border border-gray-100 shadow-xl rounded-2xl p-4 z-30 min-w-[200px] space-y-3 animate-in fade-in zoom-in-95 duration-100">
              <div className="space-y-1.5">
                <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-wider px-1">Focus Duration</h4>
                <div className="grid grid-cols-2 gap-1.5">
                  <button type="button" onClick={() => handleSetCustomTimer(25)} className="py-1 bg-gray-50 hover:bg-indigo-50 text-gray-700 hover:text-indigo-600 text-[10px] font-bold rounded-lg transition-colors">🎯 25m</button>
                  <button type="button" onClick={() => handleSetCustomTimer(50)} className="py-1 bg-gray-50 hover:bg-indigo-50 text-gray-700 hover:text-indigo-600 text-[10px] font-bold rounded-lg transition-colors">🚀 50m</button>
                </div>
                <div className="flex gap-1 pt-0.5">
                  <input 
                    type="number" 
                    placeholder="Custom mins..." 
                    value={customFocusMins}
                    onChange={(e) => setCustomFocusMins(e.target.value)}
                    className="w-full text-[10px] p-1.5 bg-gray-50 border border-gray-100 rounded-lg outline-none focus:border-indigo-500 text-gray-700"
                  />
                  <button 
                    type="button"
                    onClick={() => { handleSetCustomTimer(customFocusMins); setCustomFocusMins(""); }}
                    className="bg-indigo-600 text-white text-[10px] px-2.5 font-bold rounded-lg hover:bg-indigo-700"
                  >
                    Set
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsCreating(!isCreating)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-5 py-3 rounded-xl transition-all shadow-sm flex items-center gap-2"
          >
            {isCreating ? "📋 View All Subjects" : "➕ Create Decks (Unlimited)"}
          </button>
        </div>
      </div>

      {/* DECK CREATOR INTERFACE */}
      {isCreating ? (
        <form onSubmit={handleSaveDeck} className="bg-white border border-gray-100 p-6 sm:p-8 rounded-3xl max-w-2xl mx-auto space-y-6 shadow-sm animate-in slide-in-from-bottom-4 duration-200">
          <div>
            <h2 className="text-sm font-black text-gray-900">Deck Creator Engine</h2>
            <p className="text-[11px] text-gray-400 mt-0.5">Build exhaustive flashcard systems. Local storage mounts are unlimited.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Target Subject Heading</label>
              <select 
                value={selectedSubjectId}
                onChange={(e) => setSelectedSubjectId(e.target.value)}
                className="w-full text-xs font-semibold p-2.5 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-indigo-500"
              >
                {database.map((sub) => (
                  <option key={sub.id} value={sub.id}>{sub.subject} {sub.icon}</option>
                ))}
                <option value="custom-subject">✏️ Custom Subject...</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Topic Deck Title</label>
              <input 
                type="text"
                placeholder="e.g. Enzyme Kinetics Mechanics"
                value={newTopicTitle}
                onChange={(e) => setNewTopicTitle(e.target.value)}
                className="w-full text-xs font-semibold p-2.5 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-indigo-500 placeholder-gray-400"
              />
            </div>
          </div>

          <div className="p-4 bg-slate-50 border border-gray-100 rounded-2xl flex items-center justify-between">
            <div className="space-y-0.5 max-w-md">
              <h5 className="text-xs font-bold text-gray-800 flex items-center gap-1.5">🌍 Publish to Global Community Database</h5>
              <p className="text-[10px] text-gray-400 leading-normal">Allows other students on studyniq to view, search, and practice your deck parameters globally.</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer select-none">
              <input 
                type="checkbox" 
                checked={shareGlobally}
                onChange={(e) => setShareGlobally(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-9 h-5 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600"></div>
            </label>
          </div>

          <div className="space-y-3 pt-2">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Flashcard Prompt Pairs</label>
            {creationCards.map((card, idx) => (
              <div key={idx} className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 bg-gray-50/50 rounded-2xl border border-gray-50">
                <input 
                  placeholder={`Question Prompt #${idx + 1}`}
                  value={card.q}
                  onChange={(e) => handleCardInputChange(idx, "q", e.target.value)}
                  className="p-2.5 bg-white border border-gray-100 text-xs font-medium rounded-xl focus:outline-none"
                />
                <input 
                  placeholder={`Answer Definition #${idx + 1}`}
                  value={card.a}
                  onChange={(e) => handleCardInputChange(idx, "a", e.target.value)}
                  className="p-2.5 bg-white border border-gray-100 text-xs font-medium rounded-xl focus:outline-none"
                />
              </div>
            ))}
            <button 
              type="button"
              onClick={handleAddCardSlot}
              className="w-full text-center py-2 text-xs font-bold border border-dashed border-gray-200 text-gray-400 hover:text-indigo-600 hover:border-indigo-200 rounded-xl transition-all"
            >
              ➕ Append Another Study Card
            </button>
          </div>

          <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs py-3 rounded-xl transition-all shadow-sm">
            Save Flashcard Deck Setup
          </button>
        </form>
      ) : activeTopic ? (
        
        /* POWERFUL ADVANCED INTERACTIVE ACTIVE RECALL HUB */
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl max-w-2xl mx-auto border border-slate-800 transition-all">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-800 pb-4 mb-6 gap-3">
            <div>
              <span className="text-[10px] font-black text-indigo-400 uppercase tracking-wider">Active Module &gt; {activeTopic.title}</span>
              <div className="flex gap-2 mt-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800/80">
                <button type="button" onClick={() => setStudyMode("flashcard")} className={`text-[10px] font-bold px-3 py-1 rounded-lg ${studyMode === "flashcard" ? "bg-indigo-600 text-white" : "text-slate-400"}`}>🎴 Flashcard Flip</button>
                <button type="button" onClick={() => setStudyMode("quiz")} className={`text-[10px] font-bold px-3 py-1 rounded-lg ${studyMode === "quiz" ? "bg-indigo-600 text-white" : "text-slate-400"}`}>🎯 Quiz Practice</button>
              </div>
            </div>
            <button type="button" onClick={() => setActiveTopic(null)} className="text-slate-400 hover:text-white bg-slate-800 px-3 py-1.5 rounded-xl text-[11px] font-bold self-end sm:self-auto">✕ Exit Mode</button>
          </div>

          {studyMode === "flashcard" ? (
            /* SLIDE 1: STANDARD RECALL DESIGN */
            <div className="space-y-6">
              <div onClick={() => setIsFlipped(!isFlipped)} className="w-full min-h-[180px] bg-slate-800 border border-slate-700/60 rounded-2xl p-6 flex flex-col justify-between items-center text-center cursor-pointer select-none">
                <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest bg-slate-900 px-2 py-0.5 rounded-md">
                  {isFlipped ? "💡 Core Definition Answer" : "❓ Question Prompt"}
                </div>
                <p className="text-sm font-bold leading-relaxed text-white my-4">
                  {isFlipped ? activeTopic.cards[currentCardIdx]?.a : activeTopic.cards[currentCardIdx]?.q}
                </p>
                <span className="text-[10px] text-slate-500">Click card body to invert view</span>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-slate-800">
                <span className="text-xs text-slate-400 font-bold">Card {currentCardIdx + 1} of {activeTopic.cardCount}</span>
                <div className="flex gap-2">
                  <button type="button" onClick={() => handleCardScore(false)} className="bg-rose-500/10 text-rose-400 text-xs font-bold px-4 py-2 rounded-xl border border-rose-500/20 hover:bg-rose-500 hover:text-white">❌ Hard</button>
                  <button type="button" onClick={() => handleCardScore(true)} className="bg-emerald-500/10 text-emerald-400 text-xs font-bold px-4 py-2 rounded-xl border border-emerald-500/20 hover:bg-emerald-500 hover:text-white">✅ Got It</button>
                </div>
              </div>
            </div>
          ) : (
            /* SLIDE 2: MULTIPLE CHOICE GENERATOR MODAL */
            <div className="space-y-6">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <span className="text-[9px] text-indigo-400 uppercase font-black tracking-wide block mb-1">Question evaluation:</span>
                <p className="text-xs font-bold text-slate-100">{activeTopic.cards[currentCardIdx]?.q}</p>
              </div>

              <div className="grid grid-cols-1 gap-2.5">
                {generatedDistractors.map((option, index) => {
                  const isCorrectAnswer = option === activeTopic.cards[currentCardIdx]?.a;
                  let btnStyle = "bg-slate-800 border-slate-700 hover:bg-slate-700 text-slate-200";
                  
                  if (isQuizSubmitted) {
                    if (isCorrectAnswer) btnStyle = "bg-emerald-500/20 border-emerald-500 text-emerald-400 font-black";
                    else if (selectedQuizOption === option) btnStyle = "bg-rose-500/20 border-rose-500 text-rose-400 line-through";
                  } else if (selectedQuizOption === option) {
                    btnStyle = "bg-indigo-600 border-indigo-500 text-white font-bold";
                  }

                  return (
                    <button 
                      key={index} 
                      type="button"
                      disabled={isQuizSubmitted}
                      onClick={() => setSelectedQuizOption(option)}
                      className={`w-full text-left p-3 rounded-xl border text-xs transition-all ${btnStyle}`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-slate-800">
                <span className="text-xs font-bold text-slate-400">Score Tracker: {quizScore} / {activeTopic.cardCount}</span>
                {!isQuizSubmitted ? (
                  <button 
                    type="button"
                    onClick={handleQuizSubmit} 
                    disabled={!selectedQuizOption}
                    className="bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white text-xs font-bold px-5 py-2 rounded-xl shadow-sm"
                  >
                    Confirm Selection
                  </button>
                ) : (
                  <button 
                    type="button"
                    onClick={advanceQuizNext} 
                    className="bg-slate-100 text-slate-900 hover:bg-white text-xs font-bold px-5 py-2 rounded-xl"
                  >
                    {currentCardIdx === activeTopic.cardCount - 1 ? "Complete Quiz" : "Next Question →"}
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      ) : (
        /* STANDARD NAVIGATION AND SPLIT VIEW WITH SIDEBAR COMPETITIVE LEADERBOARDS */
        <>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between border-b border-gray-100 pb-4">
            <div className="flex gap-1.5 bg-gray-100/80 p-1 rounded-xl w-full md:w-auto">
              <button type="button" onClick={() => setActiveViewTab("all-subjects")} className={`text-xs font-bold px-4 py-2 rounded-lg w-full md:w-auto ${activeViewTab === "all-subjects" ? "bg-white text-gray-900 shadow-sm" : "text-gray-400"}`}>Core Course Curriculums</button>
            </div>
            <div className="w-full md:w-72 relative">
              <span className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-xs text-gray-400">🔍</span>
              <input type="text" placeholder="Search parameters across categories..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full text-xs font-medium pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            {/* LEFT 3 COLUMNS: GRID CARD GROUPS */}
            <div className="lg:col-span-3 space-y-10">
              {filteredDatabase.map((subjectGroup) => (
                <div key={subjectGroup.id} className="space-y-4">
                  <div className="flex items-center gap-2.5 pb-1 border-b border-gray-100/60">
                    <span className="text-sm">{subjectGroup.icon}</span>
                    <h2 className="text-xs font-black uppercase tracking-wider text-gray-900">{subjectGroup.subject}</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    {subjectGroup.topics.map((topic) => (
                      <div key={topic.id} className="bg-white border border-gray-100 hover:border-indigo-100 rounded-3xl p-5 shadow-sm flex flex-col justify-between min-h-[150px] group transition-all">
                        <div>
                          <span className={`text-[8px] font-extrabold px-2 py-0.5 rounded-md border ${subjectGroup.badgeBg}`}>{subjectGroup.subject}</span>
                          <h4 className="font-extrabold text-xs text-gray-900 tracking-tight mt-3 group-hover:text-indigo-600 transition-colors">{topic.title}</h4>
                          <p className="text-[10px] text-gray-400 mt-0.5">{topic.cardCount} Concept Sets Installed</p>
                        </div>
                        <div className="mt-4 pt-3 border-t border-gray-50 flex items-center justify-between">
                          <span className="text-[9px] font-bold text-gray-400 uppercase">{topic.updated}</span>
                          <button type="button" onClick={() => startReviewSession(topic)} className="bg-indigo-50 hover:bg-indigo-600 text-indigo-600 hover:text-white text-[10px] font-black px-4 py-1.5 rounded-xl transition-all">Launch</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT COLUMN: HIGH QUALITY EDUCATIONAL SOCIAL LEADERBOARD WIDGET */}
            <div className="bg-white border border-gray-100 p-5 rounded-3xl shadow-sm space-y-4">
              <div>
                <h3 className="text-xs font-black text-gray-900 tracking-tight flex items-center gap-2">🏅 Studyniq Leaderboard</h3>
                <p className="text-[10px] text-gray-400 mt-0.5">Rank shifts dynamically based on study streak consistency and review counts.</p>
              </div>

              <div className="space-y-2.5">
                {leaderboardMock.map((student) => (
                  <div key={student.rank} className={`p-3 rounded-xl flex items-center justify-between border ${student.isUser ? "bg-indigo-50/70 border-indigo-100" : "bg-gray-50/50 border-gray-50"}`}>
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-black w-4 text-center ${student.rank === 1 ? "text-amber-500" : "text-gray-400"}`}>{student.rank}</span>
                      <div>
                        <h5 className={`text-xs font-bold ${student.isUser ? "text-indigo-950" : "text-gray-800"}`}>{student.name}</h5>
                        <span className="text-[8px] font-medium text-gray-400 block">{student.badge}</span>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-black text-gray-900">{student.XP} XP</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}