import React, { useState } from "react";

// Pre-populated database containing relevant curriculum material across all 23 requested subjects
const initialDatabase = [
  {
    id: "eng-lang",
    subject: "English Language",
    icon: "✍️",
    badgeBg: "bg-slate-50 text-slate-700 border-slate-100",
    topics: [
      {
        id: "eng-lang-rhetoric",
        title: "Rhetorical Devices & Analysis",
        cardCount: 3,
        updated: "Updated today",
        isPremiumShared: true,
        cards: [
          { q: "What is anaphora?", a: "The repetition of a word or phrase at the beginning of successive clauses for emphasis or rhythmic effect." },
          { q: "Define chiasmus.", a: "A rhetorical figure in which words, grammatical constructions, or concepts are repeated in reverse order ($A-B-B-A$)." },
          { q: "What is the primary objective of a structural juxtaposition?", a: "To place two contrasting elements close together so reader critical comparison highlighting differences is forced." }
        ]
      }
    ]
  },
  {
    id: "eng-lit",
    subject: "English Literature",
    icon: "📚",
    badgeBg: "bg-amber-50 text-amber-700 border-amber-100",
    topics: [
      {
        id: "eng-lit-tragedy",
        title: "Shakespearean Tragedy Conventions",
        cardCount: 3,
        updated: "Updated yesterday",
        isPremiumShared: true,
        cards: [
          { q: "Define hamartia.", a: "The fatal flaw of a tragic hero that directly leads to their ultimate downfall." },
          { q: "What is the purpose of catharsis in classical literature?", a: "The purification or purgation of pity and fear felt by the audience at the resolution." },
          { q: "Explain soliloquy.", a: "An act of speaking one's thoughts aloud when alone on stage, revealing inner psychological motives directly to the audience." }
        ]
      }
    ]
  },
  {
    id: "math",
    subject: "Mathematics",
    icon: "📐",
    badgeBg: "bg-blue-50 text-blue-700 border-blue-100",
    topics: [
      {
        id: "math-calc",
        title: "Calculus: Limits & Derivatives",
        cardCount: 3,
        updated: "Updated 2 days ago",
        isPremiumShared: true,
        cards: [
          { q: "State the Power Rule for differentiation.", a: "If $f(x) = x^n$, then $f'(x) = n \\cdot x^{n-1}$." },
          { q: "What does the first derivative of a function represent graphically?", a: "The instantaneous rate of change or the slope of the tangent line to the curve at any given point." },
          { q: "What are the criteria for a function to be continuous at a point $x=c$?", a: "1. $f(c)$ is defined; 2. $\\lim_{x \\to c} f(x)$ exists; 3. $\\lim_{x \\to c} f(x) = f(c)$." }
        ]
      }
    ]
  },
  {
    id: "bio",
    subject: "Biology",
    icon: "🧬",
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-100",
    topics: [
      {
        id: "bio-genetics",
        title: "DNA Replication Mechanisms",
        cardCount: 3,
        updated: "Updated 3 days ago",
        isPremiumShared: true,
        cards: [
          { q: "What is the function of Helicase?", a: "Unwinds and unzips the DNA double helix by breaking hydrogen bonds between complementary base pairs." },
          { q: "In which direction does DNA Polymerase synthesize the new strand?", a: "Strictly in the 5' to 3' direction." },
          { q: "What are Okazaki fragments?", a: "Short sequences of DNA nucleotides synthesized discontinuously on the lagging strand during replication." }
        ]
      }
    ]
  },
  {
    id: "chem",
    subject: "Chemistry",
    icon: "🧪",
    badgeBg: "bg-purple-50 text-purple-700 border-purple-100",
    topics: [
      {
        id: "chem-kinetics",
        title: "Chemical Equilibrium & Kinetics",
        cardCount: 3,
        updated: "Updated 4 days ago",
        isPremiumShared: true,
        cards: [
          { q: "State Le Chatelier's Principle.", a: "If a dynamic equilibrium system is subjected to a change in conditions, the system shifts to counteract that change." },
          { q: "How does a catalyst increase reaction rate?", a: "By providing an alternative reaction pathway with a lower activation energy ($E_a$)." },
          { q: "What conditions define Standard Temperature and Pressure (STP)?", a: "A temperature of 273.15 K (0°C) and an absolute pressure of exactly 1 atm (100 kPa)." }
        ]
      }
    ]
  },
  {
    id: "phys",
    subject: "Physics",
    icon: "⚡",
    badgeBg: "bg-red-50 text-red-700 border-red-100",
    topics: [
      {
        id: "phys-thermo",
        title: "Thermodynamics & Field Laws",
        cardCount: 3,
        updated: "Updated 5 days ago",
        isPremiumShared: true,
        cards: [
          { q: "State the First Law of Thermodynamics.", a: "Energy cannot be created or destroyed, only transformed; $\\Delta U = Q - W$." },
          { q: "What is Lenz's Law?", a: "The direction of an induced current always opposes the change in magnetic flux that produced it." },
          { q: "Define a blackbody radiator.", a: "An idealized physical body that absorbs all incident electromagnetic radiation perfectly, regardless of frequency." }
        ]
      }
    ]
  },
  {
    id: "comb-sci",
    subject: "Combined Science",
    icon: "🔬",
    badgeBg: "bg-cyan-50 text-cyan-700 border-cyan-100",
    topics: [
      {
        id: "comb-sci-energy",
        title: "Energy Transfer Conversions",
        cardCount: 3,
        updated: "Updated 1 week ago",
        isPremiumShared: true,
        cards: [
          { q: "Define the law of conservation of energy.", a: "The total energy of an isolated system remains constant over time." },
          { q: "What is an exothermic reaction?", a: "A chemical reaction that releases net thermal energy to its surrounding environment." },
          { q: "How is electrical efficiency calculated?", a: "$\\text{Efficiency} = \\frac{\\text{Useful Energy Output}}{\\text{Total Energy Input}} \\times 100\\%$" }
        ]
      }
    ]
  },
  {
    id: "hist",
    subject: "History",
    icon: "📜",
    badgeBg: "bg-rose-50 text-rose-700 border-rose-100",
    topics: [
      {
        id: "hist-ww1",
        title: "Treaty of Versailles Consequence",
        cardCount: 3,
        updated: "Updated 1 week ago",
        isPremiumShared: true,
        cards: [
          { q: "What clause stated Germany's total guilt for WWI?", a: "Article 231 (The War Guilt Clause)." },
          { q: "What territorial loss did Germany suffer to France?", a: "The return of the Alsace-Lorraine mineral industrial zones." },
          { q: "What financial burden was placed on Germany in 1921?", a: "Reparations fixed at approximately 132 billion gold marks." }
        ]
      }
    ]
  },
  {
    id: "geog",
    subject: "Geography",
    icon: "🌍",
    badgeBg: "bg-teal-50 text-teal-700 border-teal-100",
    topics: [
      {
        id: "geog-tectonics",
        title: "Plate Tectonics & Volcanism",
        cardCount: 3,
        updated: "Updated 1 week ago",
        isPremiumShared: true,
        cards: [
          { q: "What happens at a subduction zone?", a: "An oceanic tectonic plate sinks beneath a less dense continental plate into the mantle." },
          { q: "Name three main types of volcanic structures.", a: "Shield volcanoes, composite (strato) volcanoes, and cinder cones." },
          { q: "What is the primary driving mechanism of tectonic plate movement?", a: "Convection currents inside the Earth's asthenosphere mantle tier." }
        ]
      }
    ]
  },
  {
    id: "rs",
    subject: "Religious Studies",
    icon: "🕊️",
    badgeBg: "bg-stone-50 text-stone-700 border-stone-100",
    topics: [
      {
        id: "rs-ethics",
        title: "Ethical Philosophy Foundations",
        cardCount: 3,
        updated: "Updated 2 weeks ago",
        isPremiumShared: true,
        cards: [
          { q: "Define Utilitarianism.", a: "An ethical framework asserting actions are right if they promote the greatest happiness for the greatest number." },
          { q: "What is Deontology?", a: "An approach to ethics that judges the morality of an action based on rules, duties, and absolute obligations." },
          { q: "What is Ahimsa in Eastern faiths?", a: "The structural principle of total non-violence toward all living sentient beings." }
        ]
      }
    ]
  },
  {
    id: "french",
    subject: "French",
    icon: "🇫🇷",
    badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-100",
    topics: [
      {
        id: "french-tenses",
        title: "The Subjunctive Mood",
        cardCount: 3,
        updated: "Updated 2 weeks ago",
        isPremiumShared: true,
        cards: [
          { q: "When must you trigger the subjunctive mood?", a: "Following expressions of desire, necessity, emotion, doubt, or subjective judgment after 'que'." },
          { q: "What is the irregular subjunctive stem for the verb 'faire'?", a: "fass- (e.g., que je fasse)." },
          { q: "Translate: 'It is necessary that we leave.'", a: "'Il faut que nous partions.'" }
        ]
      }
    ]
  },
  {
    id: "spanish",
    subject: "Spanish",
    icon: "🇪🇸",
    badgeBg: "bg-orange-50 text-orange-700 border-orange-100",
    topics: [
      {
        id: "spanish-past",
        title: "Preterite vs Imperfect Mastery",
        cardCount: 3,
        updated: "Updated 2 weeks ago",
        isPremiumShared: true,
        cards: [
          { q: "When is the Preterite tense used?", a: "For completed actions in the past with specific, bounded timeframes." },
          { q: "When is the Imperfect tense used?", a: "For descriptions, continuous actions, background settings, or habitual events in the past." },
          { q: "What are the three highly irregular verbs in the imperfect tense?", a: "Ir (iba), Ser (era), and Ver (veía)." }
        ]
      }
    ]
  },
  {
    id: "comp-sci",
    subject: "Computer Science",
    icon: "💻",
    badgeBg: "bg-cyan-50 text-cyan-700 border-cyan-100",
    topics: [
      {
        id: "comp-sci-alg",
        title: "Data Structures & Time Complexity",
        cardCount: 3,
        updated: "Updated 3 weeks ago",
        isPremiumShared: true,
        cards: [
          { q: "What is the worst-case time complexity of a Binary Search?", a: "$O(\\log n)$." },
          { q: "Explain the structure of a Stack asset format.", a: "A linear data structure passing values via a Last-In, First-Out (LIFO) framework." },
          { q: "What is the difference between compiler execution and interpreter runs?", a: "Compilers translate whole code blocks into machine binary at once; interpreters translate and execute line-by-line." }
        ]
      }
    ]
  },
  {
    id: "business",
    subject: "Business",
    icon: "👔",
    badgeBg: "bg-sky-50 text-sky-700 border-sky-100",
    topics: [
      {
        id: "business-finance",
        title: "Break-Even Analytics",
        cardCount: 3,
        updated: "Updated 3 weeks ago",
        isPremiumShared: true,
        cards: [
          { q: "How is Contribution Per Unit calculated?", a: "$\\text{Selling Price Per Unit} - \\text{Variable Cost Per Unit}$." },
          { q: "State the formula for the Break-Even Point.", a: "$\\frac{\\text{Fixed Costs}}{\\text{Contribution Per Unit}}$." },
          { q: "What is the Margin of Safety?", a: "The difference between the actual or budgeted level of output and the break-even level of output." }
        ]
      }
    ]
  },
  {
    id: "economics",
    subject: "Economics",
    icon: "📈",
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-100",
    topics: [
      {
        id: "econ-market",
        title: "Market Failure & Elasticity",
        cardCount: 3,
        updated: "Updated 3 weeks ago",
        isPremiumShared: true,
        cards: [
          { q: "Define negative externalities.", a: "Spillover adverse costs imposed on third parties outside a transactional market structure." },
          { q: "State the formula for Price Elasticity of Demand (PED).", a: "$\\frac{\\% \\text{ Change in Quantity Demanded}}{\\% \\text{ Change in Price}}$." },
          { q: "What is a public good characterized by?", a: "Non-excludability and non-rivalry in consumption." }
        ]
      }
    ]
  },
  {
    id: "sociology",
    subject: "Sociology",
    icon: "👥",
    badgeBg: "bg-violet-50 text-violet-700 border-violet-100",
    topics: [
      {
        id: "soc-theory",
        title: "Structuralist Social Theories",
        cardCount: 3,
        updated: "Updated 1 month ago",
        isPremiumShared: true,
        cards: [
          { q: "What is the Marxist viewpoint on education systems?", a: "It reproduces class inequalities and legitimizes capitalist ideologies via the hidden curriculum." },
          { q: "Define anomie.", a: "A condition of instability and normlessness resulting from a breakdown of standards and values (Emile Durkheim)." },
          { q: "What is the difference between structuralism and agency perspectives?", a: "Structuralism argues institutions shape behavior; agency posits that free-willed actions construct society." }
        ]
      }
    ]
  },
  {
    id: "psychology",
    subject: "Psychology",
    icon: "🧠",
    badgeBg: "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-100",
    topics: [
      {
        id: "psych-cognitive",
        title: "Memory Processing Frameworks",
        cardCount: 3,
        updated: "Updated 1 month ago",
        isPremiumShared: true,
        cards: [
          { q: "Name the three components of Atkinson-Shiffrin's Multi-Store Model.", a: "Sensory Register, Short-Term Memory, and Long-Term Memory stores." },
          { q: "What is the operational limit capacity of working short-term memory?", a: "Approximately $7 \\pm 2$ discrete chunks of information (Miller's Law)." },
          { q: "Define proactive interference.", a: "When older memories disrupt and prevent the accurate retrieval of newly learned information." }
        ]
      }
    ]
  },
  {
    id: "pe",
    subject: "PE",
    icon: "🏃‍♂️",
    badgeBg: "bg-lime-50 text-lime-700 border-lime-100",
    topics: [
      {
        id: "pe-cardio",
        title: "Cardiovascular System Adaptation",
        cardCount: 3,
        updated: "Updated 1 month ago",
        isPremiumShared: true,
        cards: [
          { q: "Define cardiac output.", a: "The volume of blood pumped by the left ventricle per minute; $\\text{Stroke Volume} \\times \\text{Heart Rate}$." },
          { q: "What is hypertrophy in athletic training?", a: "The muscular enlargement and thickening of fibers resulting from high-intensity resistance training regimes." },
          { q: "What role does lactic acid play in anaerobic pathways?", a: "A byproduct of glycolysis under low-oxygen conditions that causes regional muscular fatigue." }
        ]
      }
    ]
  },
  {
    id: "food-prep",
    subject: "Food Preparation and Nutrition",
    icon: "🍳",
    badgeBg: "bg-yellow-50 text-yellow-700 border-yellow-100",
    topics: [
      {
        id: "food-science",
        title: "Food Chemistry & Heat Transformations",
        cardCount: 3,
        updated: "Updated 1 month ago",
        isPremiumShared: true,
        cards: [
          { q: "Explain dextrinization.", a: "The process involving the breakdown of starch molecules into smaller dextrins when subjected to dry heat, turning it brown." },
          { q: "What temperature range constitutes the food safety 'Danger Zone'?", a: "Between 4°C and 60°C (40°F to 140°F), where bacterial multiplication accelerates rapidly." },
          { q: "What is protein denaturation?", a: "The unfolding or structural alteration of protein helix strands when exposed to mechanical action, acids, or heat." }
        ]
      }
    ]
  },
  {
    id: "art-design",
    subject: "Art and Design",
    icon: "🎨",
    badgeBg: "bg-pink-50 text-pink-700 border-pink-100",
    topics: [
      {
        id: "art-principles",
        title: "Composition Theory & Elements",
        cardCount: 3,
        updated: "Updated 1 month ago",
        isPremiumShared: true,
        cards: [
          { q: "What is the Rule of Thirds?", a: "A structural grid composition technique where an image is divided into nine equal segments to balance subjects." },
          { q: "Define chiaroscuro.", a: "An artistic treatment of light and dark values to build structural weight, depth, and three-dimensional realism." },
          { q: "What are complementary colors?", a: "Color pairs directly opposite each other on the color wheel (e.g., Blue and Orange) that produce high contrast." }
        ]
      }
    ]
  },
  {
    id: "media-studies",
    subject: "Media Studies",
    icon: "🎬",
    badgeBg: "bg-zinc-50 text-zinc-700 border-zinc-100",
    topics: [
      {
        id: "media-semiotics",
        title: "Semiotics & Audience Targeting",
        cardCount: 3,
        updated: "Updated 1 month ago",
        isPremiumShared: true,
        cards: [
          { q: "Differentiate between denotation and connotation.", a: "Denotation is the literal, objective description; connotation is the secondary, culturally constructed meaning." },
          { q: "Explain Stuart Hall's Encoding/Decoding theory.", a: "Media texts are encoded by creators but decoded by audiences through dominant, negotiated, or oppositional readings." },
          { q: "What is the cultivation theory effect?", a: "Long-term exposure to media shapes how consumers perceive social realities around them." }
          ]
      }
    ]
  },
  {
    id: "drama",
    subject: "Drama",
    icon: "🎭",
    badgeBg: "bg-purple-50 text-purple-700 border-purple-100",
    topics: [
      {
        id: "drama-methods",
        title: "Stanislavski System Acting",
        cardCount: 3,
        updated: "Updated 1 month ago",
        isPremiumShared: true,
        cards: [
          { q: "What is the 'Magic If' technique?", a: "A driver strategy asking actors to imagine themselves in the character's exact fictional context to trigger realistic behaviors." },
          { q: "Define emotional memory practices.", a: "When an actor recalls personal past experiences to channel authentic internal emotions into their stage role." },
          { q: "What does the phrase 'Given Circumstances' mean?", a: "The explicit environmental, historical, and narrative facts provided directly within a script text layout." }
        ]
      }
    ]
  },
  {
    id: "music",
    subject: "Music",
    icon: "🎵",
    badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-100",
    topics: [
      {
        id: "music-theory",
        title: "Classical Form & Tonality",
        cardCount: 3,
        updated: "Updated 1 month ago",
        isPremiumShared: true,
        cards: [
          { q: "What are the three structural segments of Sonata Form?", a: "The Exposition, Development, and Recapitulation." },
          { q: "Define a cadence point.", a: "A melodic or harmonic configuration that creates a sense of resolution or pause at the end of a musical phrase." },
          { q: "What intervals construct a standard diminished triad chord?", a: "A root note stacked with a minor third and a diminished fifth." }
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

  // Creation Workspace Engine States
  const [isCreating, setIsCreating] = useState(false);
  const [selectedSubjectId, setSelectedSubjectId] = useState("eng-lang");
  const [newTopicTitle, setNewTopicTitle] = useState("");
  const [shareGlobally, setShareGlobally] = useState(false);
  const [creationCards, setCreationCards] = useState([{ q: "", a: "" }]);

  // Premium Warning Dialog Modal State
  const [showPremiumModal, setShowPremiumModal] = useState(false);

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

  const handleSaveDeck = (e) => {
    e.preventDefault();
    if (!newTopicTitle.trim()) return alert("Please specify a topic title summary label!");

    // CRITICAL: Block global sharing if premium subscription is not active
    if (shareGlobally) {
      setShowPremiumModal(true);
      return; 
    }

    // Unlimited Personal Local Core Save Workflow
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
              isPremiumShared: false,
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
    alert("🎉 Personal card deck created successfully! Kept private to your account view.");
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

      {/* HERO TITLE HEADER CONTAINER */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
        <div className="space-y-1">
          <h1 className="text-xl font-black tracking-tight text-gray-900">Flashcards</h1>
          <p className="text-xs font-medium text-gray-400">Personal study decks are completely unlimited. Go Premium to publish decks globally.</p>
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
        /* ACCORDION SUBJECT GRID CONTROLS */
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