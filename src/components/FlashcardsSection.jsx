import React, { useState } from 'react';

export default function FlashcardsSection({ user }) {
  const [currentDeck, setCurrentDeck] = useState(0);
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  
  // Bring-Your-Own-AI state management
  const [apiKey, setApiKey] = useState(() => localStorage.getItem(`user_openai_key_${user?.uid}`) || "");
  const [aiStatus, setAiStatus] = useState("");

  // Start with an empty list so users MUST build everything themselves from scratch
  const [decks, setDecks] = useState([]);
  const [newDeckTitle, setNewDeckTitle] = useState("");
  
  // Input fields for adding cards manually to the active deck
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");

  const handleCreateDeck = (e) => {
    e.preventDefault();
    if (!newDeckTitle.trim()) return;

    const isPremium = false; 
    if (!isPremium && decks.length >= 3) {
      alert("🔒 Feature Gated: Free profiles are limited to 3 study folders/decks. Upgrade to Studyniq Premium for unlimited structures!");
      return;
    }

    // Creates a completely blank deck with no default content
    const createdDeck = { title: newDeckTitle, cards: [] };
    setDecks([...decks, createdDeck]);
    setNewDeckTitle("");
    setCurrentDeck(decks.length); // Switch view to the new deck immediately
    setCardIndex(0);
    setIsFlipped(false);
  };

  const handleAddCardManually = (e) => {
    e.preventDefault();
    if (!newQuestion.trim() || !newAnswer.trim() || decks.length === 0) return;

    const updatedDecks = [...decks];
    updatedDecks[currentDeck].cards.push({
      q: newQuestion.trim(),
      a: newAnswer.trim()
    });

    setDecks(updatedDecks);
    setNewQuestion("");
    setNewAnswer("");
  };

  const handleSaveAiKey = (val) => {
    localStorage.setItem(`user_openai_key_${user?.uid}`, val);
    setApiKey(val);
    setAiStatus("API key saved locally!");
    setTimeout(() => setAiStatus(""), 2000);
  };

  const currentActiveDeck = decks[currentDeck];
  const hasCards = currentActiveDeck && currentActiveDeck.cards.length > 0;
  const activeCard = hasCards ? currentActiveDeck.cards[cardIndex] : null;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900">Flashcards Module</h2>
        <p className="text-sm text-gray-500">Create, write, and study your own custom flashcards.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side: Creation and listing panel */}
        <div className="space-y-4">
          <form onSubmit={handleCreateDeck} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm space-y-2">
            <h4 className="text-xs font-bold text-gray-700 uppercase">Create New Deck</h4>
            <input 
              type="text" 
              placeholder="e.g., Physics Chapter 1"
              value={newDeckTitle}
              onChange={(e) => setNewDeckTitle(e.target.value)}
              className="w-full p-2 border border-gray-200 rounded-lg text-xs focus:outline-none focus:border-indigo-500"
            />
            <button type="submit" className="w-full bg-indigo-600 text-white py-1.5 text-xs font-semibold rounded-lg hover:bg-indigo-700 transition-colors">
              Add Deck ({decks.length}/3 Free Limit)
            </button>
          </form>

          {decks.length > 0 && (
            <form onSubmit={handleAddCardManually} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm space-y-2">
              <h4 className="text-xs font-bold text-indigo-600 uppercase">Add Card to "{decks[currentDeck].title}"</h4>
              <input 
                type="text" 
                placeholder="Write question..."
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
                className="w-full p-2 border border-gray-200 rounded-lg text-xs focus:outline-none focus:border-indigo-500"
              />
              <input 
                type="text" 
                placeholder="Write answer..."
                value={newAnswer}
                onChange={(e) => setNewAnswer(e.target.value)}
                className="w-full p-2 border border-gray-200 rounded-lg text-xs focus:outline-none focus:border-indigo-500"
              />
              <button type="submit" className="w-full bg-slate-800 text-white py-1.5 text-xs font-semibold rounded-lg hover:bg-slate-900 transition-colors">
                Save Card
              </button>
            </form>
          )}

          <div className="space-y-2">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Your Decks</h3>
            {decks.map((deck, idx) => (
              <div
                key={idx}
                onClick={() => { setCurrentDeck(idx); setCardIndex(0); setIsFlipped(false); }}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  currentDeck === idx 
                    ? 'bg-white border-indigo-500 shadow-sm ring-1 ring-indigo-500/10' 
                    : 'bg-white border-gray-100 hover:border-gray-300'
                }`}
              >
                <h4 className="font-semibold text-gray-900 text-sm">{deck.title}</h4>
                <p className="text-xs text-gray-400 mt-1">{deck.cards.length} cards built</p>
              </div>
            ))}
            {decks.length === 0 && (
              <p className="text-xs text-gray-400 italic p-2">No decks yet. Create one above to begin.</p>
            )}
          </div>
        </div>

        {/* Right Side: Active Card Arena & AI Configuration Panel */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex flex-col items-center justify-center bg-white border border-gray-100 rounded-2xl p-8 min-h-[300px] shadow-sm">
            {hasCards ? (
              <>
                <div
                  onClick={() => setIsFlipped(!isFlipped)}
                  className="w-full max-w-md h-44 bg-slate-50 hover:bg-slate-100/70 rounded-2xl border border-gray-200/60 p-6 flex flex-col items-center justify-center cursor-pointer relative transition-all"
                >
                  <span className="absolute top-4 left-6 text-[10px] font-bold text-indigo-600 uppercase tracking-widest">
                    {isFlipped ? "⚡ Your Answer" : "💡 Your Question"}
                  </span>
                  <p className="text-sm font-medium text-gray-800 text-center px-4">
                    {isFlipped ? activeCard.a : activeCard.q}
                  </p>
                </div>

                <div className="flex items-center gap-6 mt-4">
                  <button onClick={() => { setIsFlipped(false); setCardIndex(prev => (prev - 1 + currentActiveDeck.cards.length) % currentActiveDeck.cards.length); }} className="w-8 h-8 bg-white border rounded-full flex items-center justify-center text-xs shadow-sm">←</button>
                  <span className="text-xs font-semibold text-gray-500">Card {cardIndex + 1} of {currentActiveDeck.cards.length}</span>
                  <button onClick={() => { setIsFlipped(false); setCardIndex(prev => (prev + 1) % currentActiveDeck.cards.length); }} className="w-8 h-8 bg-white border rounded-full flex items-center justify-center text-xs shadow-sm">→</button>
                </div>
              </>
            ) : (
              <div className="text-center p-6 text-gray-400">
                <p className="text-sm font-medium">
                  {decks.length === 0 
                    ? "Create a deck folder first to start adding cards manually." 
                    : "This deck is currently empty. Use the manual form to create your own cards."}
                </p>
              </div>
            )}
          </div>

          {/* Bring-Your-Own-AI Token Configuration Box */}
          <div className="bg-white border border-gray-100 p-5 rounded-2xl shadow-sm">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-base">🤖</span>
              <h3 className="font-bold text-gray-900 text-sm">Bring-Your-Own-AI Configuration</h3>
            </div>
            <p className="text-xs text-gray-500 mb-3">Paste your personal OpenAI developer API token key below to activate integrated automated study insights. Calls run client-side directly from your web browser sandbox.</p>
            <div className="flex gap-2">
              <input 
                type="password" 
                placeholder="sk-proj-..." 
                value={apiKey}
                onChange={(e) => handleSaveAiKey(e.target.value)}
                className="flex-1 p-2 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-indigo-500 font-mono"
              />
            </div>
            {aiStatus && <p className="text-[11px] text-emerald-600 font-medium mt-1.5">{aiStatus}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}