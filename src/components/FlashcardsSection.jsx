import React, { useState } from 'react';

export default function FlashcardsSection() {
  const [currentDeck, setCurrentDeck] = useState(0);
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const sampleDecks = [
    {
      title: "Biology - Cell Structure",
      count: 3,
      cards: [
        { q: "What is the primary function of Mitochondria?", a: "Generates chemical energy needed to power the cell's biochemical reactions (Powerhouse of the cell)." },
        { q: "Which organelle contains digestive enzymes to break down waste materials?", a: "Lysosomes." },
        { q: "What structural feature separates plant cells from animal cells?", a: "A rigid outer Cell Wall and the presence of Chloroplasts." }
      ]
    },
    {
      title: "Maths - Quadratic Equations",
      count: 2,
      cards: [
        { q: "What is the standard form of a quadratic equation?", a: "ax² + bx + c = 0" },
        { q: "What does a negative discriminant (b² - 4ac < 0) indicate?", a: "The equation has two complex (imaginary) roots and no real roots." }
      ]
    }
  ];

  const currentActiveDeck = sampleDecks[currentDeck];
  const activeCard = currentActiveDeck.cards[cardIndex];

  const handleNextCard = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCardIndex((prev) => (prev + 1) % currentActiveDeck.cards.length);
    }, 150);
  };

  const handlePrevCard = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCardIndex((prev) => (prev - 1 + currentActiveDeck.cards.length) % currentActiveDeck.cards.length);
    }, 150);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900">Flashcards</h2>
        <p className="text-sm text-gray-500">Master your course content using interactive spaced repetition cards.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Available Decks Panel */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Your Decks</h3>
          {sampleDecks.map((deck, idx) => (
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
              <p className="text-xs text-gray-400 mt-1">{deck.count} Flashcards available</p>
            </div>
          ))}
        </div>

        {/* Dynamic Card Flip Display */}
        <div className="lg:col-span-2 flex flex-col items-center justify-center bg-white border border-gray-100 rounded-2xl p-8 min-h-[360px] shadow-sm">
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="w-full max-w-md h-52 bg-slate-50 hover:bg-slate-100/70 rounded-2xl border border-gray-200/60 p-6 flex flex-col items-center justify-center cursor-pointer relative transition-all duration-200"
          >
            <span className="absolute top-4 left-6 text-[10px] font-bold text-indigo-600 uppercase tracking-widest">
              {isFlipped ? "⚡ Answer Concept" : "💡 Question"}
            </span>

            <p className="text-base font-medium text-gray-800 text-center px-4 leading-relaxed">
              {isFlipped ? activeCard.a : activeCard.q}
            </p>

            <span className="absolute bottom-4 text-xs text-gray-400 font-medium">
              Click anywhere on card to flip
            </span>
          </div>

          {/* Pagination Navigation Controls */}
          <div className="flex items-center gap-6 mt-6">
            <button
              onClick={handlePrevCard}
              className="w-9 h-9 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50 text-gray-600 font-bold transition-all"
            >
              ←
            </button>
            <span className="text-xs font-semibold text-gray-500">
              Card {cardIndex + 1} of {currentActiveDeck.cards.length}
            </span>
            <button
              onClick={handleNextCard}
              className="w-9 h-9 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50 text-gray-600 font-bold transition-all"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}