import React, { useState } from "react";

// Initial Curriculum Database Decks
const initialDatabase = [
  {
    id: "bio",
    subject: "Biology",
    color: "from-emerald-400 to-teal-500",
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-100",
    icon: "🧬",
    topics: [
      {
        id: "bio-cell",
        title: "Cell Structure & Transport",
        cardCount: 5,
        updated: "Updated 2 days ago",
        isPremiumShared: true, 
        cards: [
          { q: "What is the primary function of the mitochondria?", a: "To generate ATP through aerobic cellular respiration." },
          { q: "Define active transport.", a: "The movement of substances across a cell membrane against their concentration gradient, requiring cellular energy (ATP)." },
          { q: "What is the role of ribosomes?", a: "They serve as the site of biological protein synthesis (translation)." },
          { q: "Which organelle contains digestive enzymes to break down waste?", a: "The Lysosome." },
          { q: "What makes up the fluid mosaic model of the cell membrane?", a: "A phospholipid bilayer with embedded proteins, cholesterol, and carbohydrates." }
        ]
      }
    ]
  },
  {
    id: "chem",
    subject: "Chemistry",
    color: "from-purple-400 to-indigo-500",
    badgeBg: "bg-purple-50 text-purple-700 border-purple-100",
    icon: "🧪",
    topics: [
      {
        id: "chem-atom",
        title: "Atomic Structure & Bonding",
        cardCount: 4,
        updated: "Updated 3 days ago",
        isPremiumShared: true,
        cards: [
          { q: "What defines an isotope?", a: "Atoms of the same element with the same number of protons but different numbers of neutrons." },
          { q: "Describe a covalent bond.", a: "The chemical bond formed when two atoms share pairs of electrons." },
          { q: "What is electronegativity?", a: "A measure of the tendency of an atom to attract a bonding pair of electrons." },
          { q: "Why do ionic compounds have high melting points?", a: "Due to the strong electrostatic forces of attraction holding the 3D crystal lattice together." }
        ]
      }
    ]
  }
];

export default function FlashcardsSection() {
  const [database, setDatabase] = useState(initialDatabase);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeViewTab, setActiveViewTab] = useState("all-subjects"); 
  const [activeTopic, setActiveTopic] = useState(null);
  const [currentCardIdx, setCurrentCardIdx] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Creation Panel State (Unlimited local creation model)
  const [isCreating, setIsCreating] = useState(false);
  const [selectedSubjectId, setSelectedSubjectId] = useState("bio");
  const [newTopicTitle, setNewTopicTitle] = useState("");
  const [shareGlobally, setShareGlobally] = useState(false);
  
  // Custom interactive card pair builder states
  const [creationCards, setCreationCards] = useState([{ q: "", a: "" }]);

  // Premium Warning Popup Overlay Toggle state
  const [showPremiumModal, setShowPremiumModal] = useState(false);

  const handleAddCardSlot = () => {
    setCreationCards([...creationCards, { q: "", a: "" }]);
  };

  const handleCardInputChange = (index, field, value) => {
    const updated = [...creationCards];
    updated[index][field] = value;
    setCreationCards(updated);
  };

  // 🛠️ Core Custom Creation Architecture (Enforces Unlimited Local Storage vs Premium Global Share)
  const handleSaveDeck = (e) => {
    e.preventDefault();
    if (!newTopicTitle.trim()) return alert("Please specify a topic title summary banner label!");

    // If trying to publish to the world without premium subscription capabilities
    if (shareGlobally) {
      setShowPremiumModal(true);
      return; 
    }

    // Process local addition securely (Unlimited Local Flashcard Pipeline)
    const updatedDb = database.map((sub) => {
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
              isPremiumShared: false, // Local vision mode only
              cards: creationCards
            }
          ]
        };
      }
      return sub;
    });

    setDatabase(updatedDb);
    setIsCreating(false);
    setNewTopicTitle("");
    setCreationCards([{ q: "", a: "" }]);
    alert("🎉 Card Deck created successfully! Kept private to your workspace account view.");
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
    <div className="space-y-8 animate-fade-in w-full pb-12 relative">
      
      {/* 💳 PREMIUM ERROR DIALOG MODAL CAPABILITY */}
      {showPremiumModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
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
                className="flex-1 py-2 text-xs font-bold text-gray-500 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all"
              >
                Keep Private
              </button>
              <button 
                type="button" 
                onClick={() => {
                  window.location.href = "https://buy.stripe.com/test_7sY9AT18a1nX2p68wZ7g400";
                }}
                className="flex-1 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-all shadow-sm"
              >
                Go Premium • £2.99
              </button>
            </div>
          </div>
        </div>
      )}

      {/* HEADER SECTION BLOCK */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
        <div className="space-y-1.5">
          <h1 className="text-2xl font-black tracking-tight text-gray-900">Flashcards</h1>
          <p className="text-xs font-medium text-gray-400">Personal study decks are completely unlimited. Go Premium to publish decks globally.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsCreating(!isCreating)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-5 py-3 rounded-xl transition-all shadow-sm flex items-center gap-2"
          >
            {isCreating ? "📋 View All Decks" : "➕ Create Unlimited Decks"}
          </button>
        </div>
      </div>

      {/* UNLIMITED DOCK DECK CREATION TEMPLATE ENGINE */}
      {isCreating ? (
        <form onSubmit={handleSaveDeck} className="bg-white border border-gray-100 p-6 sm:p-8 rounded-3xl max-w-2xl mx-auto space-y-6 shadow-sm animate-in slide-in-from-bottom-4 duration-200">
          <div>
            <h2 className="text-base font-black text-gray-900">Deck Creator Engine</h2>
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
                <option value="bio">Biology 🧬</option>
                <option value="chem">Chemistry 🧪</option>
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

          {/* Premium Visibility Configuration Switcher toggles warning pop-ups */}
          <div className="p-4 bg-slate-50 border border-gray-100 rounded-2xl flex items-center justify-between">
            <div className="space-y-0.5 max-w-md">
              <h5 className="text-xs font-bold text-gray-800 flex items-center gap-1.5">
                🌍 Publish to Global Community Database 
              </h5>
              <p className="text-[10px] text-gray-400 leading-normal">Allows other students on studyniq to view, search, and practice your deck parameters globally.</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer select-none">
              <input 
                type="checkbox" 
                checked={shareGlobally}
                onChange={(e) => setShareGlobally(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600"></div>
            </label>
          </div>

          {/* Interactive Dynamic Prompt Form Array Rows */}
          <div className="space-y-3 pt-2">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Flashcards Prompts Context Pairs</label>
            
            {creationCards.map((card, idx) => (
              <div key={idx} className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 bg-gray-50/50 rounded-2xl border border-gray-50 relative">
                <input 
                  placeholder={`Question Prompt #${idx + 1}`}
                  value={card.q}
                  onChange={(e) => handleCardInputChange(idx, "q", e.target.value)}
                  className="p-2.5 bg-white border border-gray-100 text-xs font-medium rounded-xl focus:outline-none focus:border-indigo-500"
                />
                <input 
                  placeholder={`Answer Definition #${idx + 1}`}
                  value={card.a}
                  onChange={(e) => handleCardInputChange(idx, "a", e.target.value)}
                  className="p-2.5 bg-white border border-gray-100 text-xs font-medium rounded-xl focus:outline-none focus:border-indigo-500"
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

          <button 
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs py-3 rounded-xl transition-all shadow-sm"
          >
            Save Flashcard Deck Setup
          </button>
        </form>
      ) : activeTopic ? (
        /* STUDY INTERFACE CANTON PANEL PLAYBACK MODAL */
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl max-w-3xl mx-auto border border-slate-800 transition-all duration-300">
          <div className="flex justify-between items-center border-b border-slate-800 pb-4 mb-6">
            <div>
              <span className="text-[10px] font-black text-indigo-400 uppercase tracking-wider">Active Study Session</span>
              <h3 className="text-sm font-bold text-slate-100 mt-0.5">{activeTopic.title}</h3>
            </div>
            <button onClick={() => setActiveTopic(null)} className="text-slate-400 hover:text-white bg-slate-800 p-2 rounded-xl text-xs font-bold transition-colors">✕ Exit</button>
          </div>

          <div className="min-h-[240px] flex items-center justify-center">
            <div 
              onClick={() => setIsFlipped(!isFlipped)}
              className="w-full min-h-[220px] bg-slate-800 border border-slate-700/60 rounded-2xl p-6 flex flex-col justify-between items-center text-center cursor-pointer select-none transition-all duration-300 transform"
            >
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-900/50 px-2.5 py-1 rounded-md">
                {isFlipped ? "💡 Core Answer Definition" : "❓ Question Prompt"}
              </div>
              <div className="my-6 px-4">
                <p className="text-sm sm:text-base font-bold leading-relaxed tracking-wide text-white">
                  {isFlipped ? activeTopic.cards[currentCardIdx].a : activeTopic.cards[currentCardIdx].q}
                </p>
              </div>
              <span className="text-[10px] font-semibold text-slate-500 italic">Click to flip card</span>
            </div>
          </div>

          <div className="flex justify-between items-center pt-6 mt-4 border-t border-slate-800">
            <span className="text-xs text-slate-400 font-bold">Card {currentCardIdx + 1} of {activeTopic.cardCount}</span>
            <div className="flex gap-2">
              <button 
                disabled={currentCardIdx === 0}
                onClick={() => { setCurrentCardIdx(prev => prev - 1); setIsFlipped(false); }}
                className="bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-white text-xs font-bold px-4 py-2 rounded-xl"
              >
                ◀ Back
              </button>
              <button 
                onClick={() => {
                  if (currentCardIdx < activeTopic.cardCount - 1) {
                    setCurrentCardIdx(prev => prev + 1);
                    setIsFlipped(false);
                  } else {
                    setActiveTopic(null);
                    alert("Study session completed successfully! 🎉");
                  }
                }}
                className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-4 py-2 rounded-xl"
              >
                {currentCardIdx === activeTopic.cardCount - 1 ? "Complete 🎉" : "Next ▶"}
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* STANDARD SUBJECT LISTING GRID DASHBOARD */
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
                placeholder="Search subjects or modules..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs font-medium pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none"
              />
            </div>
          </div>

          <div className="space-y-10">
            {filteredDatabase.map((subjectGroup) => (
              <div key={subjectGroup.id} className="space-y-4">
                
                <div className="flex items-center gap-2.5 pb-1 border-b border-gray-100/60">
                  <span className="text-base">{subjectGroup.icon}</span>
                  <h2 className="text-sm font-black uppercase tracking-wider text-gray-900">{subjectGroup.subject}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {subjectGroup.topics.map((topic) => (
                    <div key={topic.id} className="bg-white border border-gray-100 hover:border-indigo-100 rounded-3xl p-5 shadow-sm flex flex-col justify-between min-h-[170px] group transition-all">
                      <div>
                        <div className="flex justify-between items-start">
                          <span className={`text-[9px] font-extrabold px-2 py-0.5 rounded-md uppercase border ${subjectGroup.badgeBg}`}>
                            {subjectGroup.subject}
                          </span>
                          {/* Visual configuration indicator banner */}
                          <span className="text-[9px] font-bold text-gray-400 bg-gray-50 border border-gray-100 px-1.5 py-0.5 rounded-md">
                            {topic.isPremiumShared ? "🌍 Global Shared" : "🔒 Local View Only"}
                          </span>
                        </div>

                        <div className="mt-4 space-y-1">
                          <h4 className="font-extrabold text-xs text-gray-900 tracking-tight leading-snug group-hover:text-indigo-600 transition-colors">
                            {topic.title}
                          </h4>
                          <p className="text-[10px] text-gray-400 font-medium">
                            {topic.cardCount} Interactive Revision Knowledge Cards
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