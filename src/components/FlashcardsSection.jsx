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

  // Gamified Educational Analytics States
  const [streak, setStreak] = useState(3);
  const [totalReviewed, setTotalReviewed] = useState(0);
  const [masteryRate, setMasteryRate] = useState(85);

  // Focus Timer Engine States
  const [timerSeconds, setTimerSeconds] = useState(1500); // Default 25 Mins (1500s)
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [completedCycles, setCompletedCycles] = useState(0);
  const [showTimerSetup, setShowTimerSetup] = useState(false);

  // Custom Time Manual Input State
  const [customFocusMins, setCustomFocusMins] = useState("");

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
      setTimerSeconds(1500); // Reset to default 25 mins
      triggerNotification(
        "💪 Focus Block Complete!", 
        `Great job! You finished study block #${nextCycleCount}. Resetting to next session.`, 
        "success"
      );
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerSeconds, completedCycles]);

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
    triggerNotification(
      "⏱️ Timer Updated", 
      `Configured a new ${parsedMins}-minute focus session block.`, 
      "info"
    );
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
      setActiveTopic(null);
      setStreak((prev) => prev + 1);
      triggerNotification("🎉 Deck Completed", "Study session completed! Performance data synced to your workspace account.", "success");
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
            <div className="text-base pt-0.5">
              {notification.type === "success" ? "🔔" : "⚠️"}
            </div>
            <div className="flex-1 space-y-0.5">
              <h4 className="text-xs font-black text-slate-100">{notification.title}</h4>
              <p className="text-[11px] text-slate-400 leading-normal">{notification.message}</p>
            </div>
            <button 
              onClick={() => setNotification((prev) => ({ ...prev, show: false }))}
              className="text-slate-500 hover:text-slate-300 text-xs font-bold px-1"
            >
              ✕
            </button>
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
              <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
                Creating flashcards is **100% unlimited** for your personal workspace view, but sharing your decks globally with other students requires a **Premium Account Subscription**.
              </p>
            </div>
            <div className="flex gap-2 pt-2">
              <button 
                type="button" 
                onClick={() => setShowPremiumModal(false)}
                className="flex-1 py-2.5 text-xs font-bold text-gray-500 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all"
              >
                Keep Private
              </button>
              <button 
                type="button" 
                onClick={() => { window.location.href = "https://buy.stripe.com/test_7sY9AT18a1nX2p68wZ7g400"; }}
                className="flex-1 py-2.5 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-all shadow-sm"
              >
                Go Premium • £2.99
              </button>
            </div>
          </div>
        </div>
      )}

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
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Average Subject Accuracy</p>
            <p className="text-sm font-black text-gray-900">{masteryRate}% Precision</p>
          </div>
        </div>
      </div>

      {/* HERO TITLE HEADER CONTAINER & POMODORO INTERFACE */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-white border border-gray-100 rounded-3xl p-6 shadow-sm relative">
        <div className="space-y-1">
          <h1 className="text-xl font-black tracking-tight text-gray-900">Flashcards</h1>
          <p className="text-xs font-medium text-gray-400">Personal study decks are completely unlimited. Go Premium to publish decks globally.</p>
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
                  <button onClick={() => handleSetCustomTimer(25)} className="py-1 bg-gray-50 hover:bg-indigo-50 text-gray-700 hover:text-indigo-600 text-[10px] font-bold rounded-lg transition-colors">🎯 25m</button>
                  <button onClick={() => handleSetCustomTimer(50)} className="py-1 bg-gray-50 hover:bg-indigo-50 text-gray-700 hover:text-indigo-600 text-[10px] font-bold rounded-lg transition-colors">🚀 50m</button>
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
        /* STUDY SLIDE SESSION VIEW */
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl max-w-2xl mx-auto border border-slate-800 transition-all">
          <div className="flex justify-between items-center border-b border-slate-800 pb-4 mb-6">
            <div>
              <span className="text-[10px] font-black text-indigo-400 uppercase tracking-wider">Active Study Session</span>
              <h3 className="text-xs font-bold text-slate-100 mt-0.5">{activeTopic.title}</h3>
            </div>
            <button onClick={() => setActiveTopic(null)} className="text-slate-400 hover:text-white bg-slate-800 px-3 py-1.5 rounded-xl text-[11px] font-bold transition-colors">✕ Close</button>
          </div>

          <div className="min-h-[200px] flex items-center justify-center">
            <div 
              onClick={() => setIsFlipped(!isFlipped)}
              className="w-full min-h-[180px] bg-slate-800 border border-slate-700/60 rounded-2xl p-6 flex flex-col justify-between items-center text-center cursor-pointer select-none transition-all duration-300"
            >
              <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest bg-slate-900/50 px-2 py-0.5 rounded-md">
                {isFlipped ? "💡 Core Answer Definition" : "❓ Question Prompt"}
              </div>
              <div className="my-4 px-2">
                <p className="text-sm font-bold leading-relaxed text-white">
                  {isFlipped ? activeTopic.cards[currentCardIdx].a : activeTopic.cards[currentCardIdx].q}
                </p>
              </div>
              <span className="text-[10px] font-semibold text-slate-500 italic">Click to flip card</span>
            </div>
          </div>

          {/* SPACED REPETITION STUDY EVALUATION BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between pt-6 mt-4 border-t border-slate-800">
            <span className="text-xs text-slate-400 font-bold">Card {currentCardIdx + 1} of {activeTopic.cardCount}</span>
            
            <div className="flex gap-2 w-full sm:w-auto">
              <button 
                type="button"
                onClick={() => handleCardScore(false)}
                className="flex-1 sm:flex-initial bg-rose-500/10 border border-rose-500/20 hover:bg-rose-500 text-rose-400 hover:text-white text-xs font-bold px-4 py-2 rounded-xl transition-all"
              >
                ❌ Forgot / Hard
              </button>
              <button 
                type="button"
                onClick={() => handleCardScore(true)}
                className="flex-1 sm:flex-initial bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500 text-emerald-400 hover:text-white text-xs font-bold px-4 py-2 rounded-xl transition-all"
              >
                ✅ Got It Easy
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* SUBJECT GRID AND ACCORDION WRAPPERS */
        <>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between border-b border-gray-100 pb-4">
            <div className="flex gap-1.5 bg-gray-100/80 p-1 rounded-xl w-full md:w-auto">
              <button onClick={() => setActiveViewTab("all-subjects")} className={`text-xs font-bold px-4 py-2 rounded-lg w-full md:w-auto ${activeViewTab === "all-subjects" ? "bg-white text-gray-900 shadow-sm" : "text-gray-400"}`}>By Core Subjects</button>
              <button onClick={() => setActiveViewTab("saved")} className={`text-xs font-bold px-4 py-2 rounded-lg w-full md:w-auto ${activeViewTab === "saved" ? "bg-white text-gray-900 shadow-sm" : "text-gray-400"}`}>Starred Decks</button>
            </div>

            <div className="w-full md:w-72 relative">
              <span className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-xs text-gray-400">🔍</span>
              <input 
                type="text" 
                placeholder="Search across 23 core subjects..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs font-medium pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none"
              />
            </div>
          </div>

          <div className="space-y-10">
            {filteredDatabase.map((subjectGroup) => (
              <div key={subjectGroup.id} className="space-y-4 animate-fade-in">
                
                <div className="flex items-center gap-2.5 pb-1 border-b border-gray-100/60">
                  <span className="text-sm">{subjectGroup.icon}</span>
                  <h2 className="text-xs font-black uppercase tracking-wider text-gray-900">{subjectGroup.subject}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {subjectGroup.topics.map((topic) => (
                    <div key={topic.id} className="bg-white border border-gray-100 hover:border-indigo-100 rounded-3xl p-5 shadow-sm flex flex-col justify-between min-h-[160px] group transition-all duration-200">
                      <div>
                        <div className="flex justify-between items-start">
                          <span className={`text-[9px] font-extrabold px-2 py-0.5 rounded-md uppercase border ${subjectGroup.badgeBg}`}>
                            {subjectGroup.subject}
                          </span>
                          <span className="text-[9px] font-bold text-gray-400 bg-gray-50 border border-gray-100 px-1.5 py-0.5 rounded-md">
                            {topic.isPremiumShared ? "🌍 Published" : "🔒 Local"}
                          </span>
                        </div>

                        <div className="mt-4 space-y-1">
                          <h4 className="font-extrabold text-xs text-gray-900 tracking-tight leading-snug group-hover:text-indigo-600 transition-colors">
                            {topic.title}
                          </h4>
                          <p className="text-[10px] text-gray-400 font-medium">
                            {topic.cardCount} Modular Revision Cards Loaded
                          </p>
                        </div>
                      </div>

                      <div className="mt-5 pt-3 border-t border-gray-50 flex items-center justify-between">
                        <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wide">{topic.updated}</span>
                        <button 
                          onClick={() => startReviewSession(topic)}
                          className="bg-indigo-50 hover:bg-indigo-600 text-indigo-600 hover:text-white text-[10px] font-black px-3.5 py-1.5 rounded-xl transition-all"
                        >
                          Review Deck
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}