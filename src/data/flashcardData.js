// Complete production-grade curriculum database covering all 23 subjects with 10 detailed flashcards per topic.
export const initialDatabase = [
  {
    id: "eng-lang",
    subject: "English Language",
    icon: "✍️",
    badgeBg: "bg-slate-50 text-slate-700 border-slate-100",
    topics: [
      {
        id: "eng-lang-rhetoric",
        title: "Rhetorical Devices & Analysis",
        cardCount: 10,
        updated: "Updated today",
        isPremiumShared: true,
        cards: [
          { q: "What is anaphora?", a: "The repetition of a word or phrase at the beginning of successive clauses for emphasis or rhythmic effect." },
          { q: "Define chiasmus.", a: "A rhetorical figure in which words, grammatical constructions, or concepts are repeated in reverse order ($A-B-B-A$)." },
          { q: "What is the primary objective of a structural juxtaposition?", a: "To place two contrasting elements close together so the reader is forced into a critical comparison highlighting their differences." },
          { q: "What is asyndeton?", a: "The omission of conjunctions between parts of a sentence to accelerate the narrative pace." },
          { q: "Define polysyndeton.", a: "The deliberate use of multiple conjunctions in close succession to slow down the rhythm or emphasize abundance." },
          { q: "What is litotes?", a: "A form of understatement that uses a negative statement to affirm a positive sentiment (e.g., 'not bad')." },
          { q: "What is synecdoche?", a: "A figure of speech in which a part is made to represent the whole or vice versa (e.g., 'all hands on deck')." },
          { q: "Define metonymy.", a: "Replacing the name of an attribute or adjunct with that of the thing meant (e.g., 'the Crown' for royalty)." },
          { q: "What is a tricolon?", a: "A rhetorical term for a series of three parallel words, phrases, or clauses." },
          { q: "What is zeugma?", a: "A figure of speech where a word applies to multiple parts of a sentence in different senses (e.g., 'he broke her heart and the window')." }
        ]
      },
      {
        id: "eng-lang-grammar",
        title: "Advanced Syntax & Grammar Systems",
        cardCount: 10,
        updated: "Updated today",
        isPremiumShared: true,
        cards: [
          { q: "What constitutes a subordinate clause?", a: "A clause that provides additional information but cannot stand alone as a complete sentence." },
          { q: "Define the term 'nominalization'.", a: "The grammatical process of turning a verb or adjective into a noun (e.g., 'interfere' becoming 'interference')." },
          { q: "What is a dangling modifier?", a: "A word or phrase that modifies a word not clearly stated or targetable within the sentence structure." },
          { q: "What is a split infinitive?", a: "Placing an adverb or modifier between 'to' and the base verb form (e.g., 'to quickly run')." },
          { q: "Define passive voice.", a: "A sentence structure where the subject receives the action instead of performing it." },
          { q: "What is an elliptical sentence?", a: "A sentence where words are deliberately omitted because they are understood from context." },
          { q: "What is parataxis?", a: "The placing of clauses or phrases one after another without coordinating or subordinating conjunctions." },
          { q: "Define modal verbs.", a: "Auxiliary verbs that express necessity, possibility, permission, or ability (e.g., must, should, can)." },
          { q: "What is the subjunctive mood?", a: "A verb mood used to express wishes, hypothetical situations, or conditional possibilities." },
          { q: "What is apposition?", a: "A relationship where two elements, usually noun phrases, are placed side by side so one identifies or defines the other." }
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
        cardCount: 10,
        updated: "Updated yesterday",
        isPremiumShared: true,
        cards: [
          { q: "Define hamartia.", a: "The fatal flaw of a tragic hero that directly leads to their ultimate downfall." },
          { q: "What is the purpose of catharsis in classical literature?", a: "The purification or purgation of pity and fear felt by the audience at the narrative's resolution." },
          { q: "Explain soliloquy.", a: "An act of speaking one's thoughts aloud when alone on stage, revealing inner psychological motives directly to the audience." },
          { q: "What is peripeteia?", a: "A sudden reversal of fortune or change in circumstances for the protagonist." },
          { q: "What is anagnorisis?", a: "The critical moment of recognition or discovery when a character shifts from ignorance to knowledge." },
          { q: "Define hubris.", a: "Excessive pride or dangerous self-confidence that frequently causes the hero's downfall." },
          { q: "What is the function of the tragic waste?", a: "The widespread collateral damage and loss of innocent lives alongside the tragic hero's death." },
          { q: "Define dramatic irony.", a: "A plot device where the audience knows vital structural information that the characters do not." },
          { q: "What is cosmic irony?", a: "The idea that human fates are controlled by indifferent, cruel divine forces or destiny." },
          { q: "Explain the concept of foil characters.", a: "A character who contrasts sharply with another to highlight particular qualities of the protagonist." }
        ]
      },
      {
        id: "eng-lit-poetry",
        title: "Poetic Forms & Meter Analysis",
        cardCount: 10,
        updated: "Updated yesterday",
        isPremiumShared: true,
        cards: [
          { q: "What are the structural criteria for a Petrarchan Sonnet?", a: "An eight-line octave with rhyme scheme ABBAABBA, followed by a six-line sestet." },
          { q: "Define enjambment.", a: "The continuation of a sentence without a pause beyond the end of a line, couplet, or stanza." },
          { q: "What defines blank verse?", a: "Unrhymed poetry written specifically in strict iambic pentameter lines." },
          { q: "What is free verse?", a: "Poetry that does not use a consistent meter, rhythm pattern, or rhyme scheme." },
          { q: "Define caesura.", a: "A structural pause or break within a line of poetry, often dictated by natural speech rhythms." },
          { q: "What is an extended metaphor?", a: "A metaphor that stretches across long sections, stanzas, or the entirety of a poetic text." },
          { q: "Explain the term 'terza rima'.", a: "An arrangement of triplets that rhyme aba, bcb, cdc, ded, etc., famously used by Dante." },
          { q: "What is a villanelle?", a: "A nineteen-line poem consisting of five tercets and a final quatrain, using two repeating lines." },
          { q: "Define slant rhyme.", a: "A type of rhyme with words that have similar, but not identical, vowel or consonant configurations." },
          { q: "What is pastoral poetry?", a: "Poetry that romanticizes rural, agricultural, and peaceful natural settings." }
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
        cardCount: 10,
        updated: "Updated 2 days ago",
        isPremiumShared: true,
        cards: [
          { q: "State the Power Rule for differentiation.", a: "If $f(x) = x^n$, then $f'(x) = n \\cdot x^{n-1}$." },
          { q: "What does the first derivative of a function represent graphically?", a: "The instantaneous rate of change or the slope of the tangent line to the curve at any given point." },
          { q: "What are the criteria for a function to be continuous at a point $x=c$?", a: "1. $f(c)$ is defined; 2. $\\lim_{x \\to c} f(x)$ exists; 3. $\\lim_{x \\to c} f(x) = f(c)$." },
          { q: "State the Product Rule for differentiation.", a: "$\\frac{d}{dx}[u \\cdot v] = u \\cdot v' + v \\cdot u'$." },
          { q: "State the Quotient Rule for differentiation.", a: "$\\frac{d}{dx}[\\frac{u}{v}] = \\frac{v \\cdot u' - u \\cdot v'}{v^2}$." },
          { q: "What is the Chain Rule?", a: "A formula for computing the derivative of a composite function: $(f \\circ g)'(x) = f'(g(x)) \\cdot g'(x)$." },
          { q: "What is a critical point on a function graph?", a: "A point where the derivative is either zero or completely undefined." },
          { q: "State Rolle's Theorem.", a: "If $f$ is continuous on $[a,b]$, differentiable on $(a,b)$, and $f(a)=f(b)$, there exists a $c \\in (a,b)$ where $f'(c)=0$." },
          { q: "What does the Second Derivative Test determine?", a: "If $f''(c) > 0$, it is a local minimum; if $f''(c) < 0$, it is a local maximum." },
          { q: "Define an inflection point.", a: "A point on a curve at which the concavity changes from concave up to concave down, or vice versa." }
        ]
      },
      {
        id: "math-algebra",
        title: "Linear Algebra & Matrices",
        cardCount: 10,
        updated: "Updated 2 days ago",
        isPremiumShared: true,
        cards: [
          { q: "What is the identity matrix property?", a: "A square matrix with ones on the main diagonal and zeros elsewhere, acting as a multiplicative identity element." },
          { q: "How do you calculate the determinant of a $2 \\times 2$ matrix?", a: "For matrix $\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$, the determinant is calculated as $ad - bc$." },
          { q: "Define eigenvalues.", a: "Scalars $\\lambda$ associated with a linear transformation matrix $A$ such that $Av = \\lambda v$ for a non-zero vector $v$." },
          { q: "What is a singular matrix?", a: "A square matrix that does not have an inverse because its determinant is exactly zero." },
          { q: "Define orthogonal matrices.", a: "A square matrix $Q$ whose transpose is equal to its inverse: $Q^T Q = I$." },
          { q: "What is the rank of a matrix?", a: "The maximum number of linearly independent row or column vectors in the matrix configuration." },
          { q: "Explain Cramer's Rule.", a: "An explicit formula for the solution of a system of linear equations with as many equations as unknowns, using determinants." },
          { q: "What is the trace of a square matrix?", a: "The sum of all elements along the main diagonal." },
          { q: "Define symmetric matrix.", a: "A square matrix that is equal to its transpose: $A = A^T$." },
          { q: "What is row reduction (Gaussian elimination)?", a: "An algorithmic process using elementary row operations to transform a matrix into row echelon form." }
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
        cardCount: 10,
        updated: "Updated 3 days ago",
        isPremiumShared: true,
        cards: [
          { q: "What is the function of Helicase?", a: "Unwinds and unzips the DNA double helix by breaking hydrogen bonds between complementary base pairs." },
          { q: "In which direction does DNA Polymerase synthesize the new strand?", a: "Strictly in the 5' to 3' direction." },
          { q: "What are Okazaki fragments?", a: "Short sequences of DNA nucleotides synthesized discontinuously on the lagging strand during replication." },
          { q: "What role does DNA Ligase perform?", a: "Joins Okazaki fragments together on the lagging strand by catalyzing phosphodiester bond creation." },
          { q: "What is the function of Topoisomerase?", a: "Relieves overwinding strain ahead of replication forks by breaking, swiveling, and rejoining DNA strands." },
          { q: "What does RNA Primase do?", a: "Synthesizes short RNA primers that serve as starting templates for DNA polymerase extension." },
          { q: "Define semi-conservative replication.", a: "The mechanism where each newly synthesized double helix contains one original parent strand and one newly built daughter strand." },
          { q: "What is the function of Single-Strand Binding Proteins (SSBs)?", a: "Bind to and stabilize single strands of unzipped DNA to prevent them from reannealing during processing." },
          { q: "What are telomeres?", a: "Repetitive nucleotide sequences at the ends of chromosomes that protect vital genes from eroding during replication cycles." },
          { q: "What is proofreading in replication?", a: "The action of DNA polymerase tracking and replacing mismatched base matches using 3' to 5' exonuclease mechanics." }
        ]
      },
      {
        id: "bio-cells",
        title: "Cellular Respiration Pathways",
        cardCount: 10,
        updated: "Updated 3 days ago",
        isPremiumShared: true,
        cards: [
          { q: "Where does Glycolysis occur within the cell?", a: "Strictly within the cytosol / cytoplasm environment." },
          { q: "What is the net ATP yield of the Krebs Cycle per glucose molecule?", a: "Yields a net product total of 2 ATP molecules." },
          { q: "What role does oxygen serve in the electron transport chain?", a: "It acts as the final electron acceptor, combining with hydrogen ions to yield water molecules." },
          { q: "What is the total net ATP yield from one glucose molecule during aerobic respiration?", a: "Approximately 30 to 32 ATP molecules depending on transport system efficiency." },
          { q: "What byproduct is produced by anaerobic respiration in human muscle tissue?", a: "Lactic acid / Lactate." },
          { q: "What compound inputs into the Krebs Cycle from the link reaction?", a: "Acetyl Coenzyme A (Acetyl CoA)." },
          { q: "Where is the Electron Transport Chain located inside a cell?", a: "Embedded across the inner mitochondrial membrane (cristae)." },
          { q: "What driving gradient facilitates ATP production via ATP Synthase?", a: "A proton ($H^+$) electrochemical concentration gradient across the membrane space." },
          { q: "Name the two electron carriers that donate electrons to the ETC.", a: "NADH and $FADH_2$." },
          { q: "Define oxidative phosphorylation.", a: "The synthesis of ATP using energy derived from the electron transport chain reactions." }
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
        cardCount: 10,
        updated: "Updated 4 days ago",
        isPremiumShared: true,
        cards: [
          { q: "State Le Chatelier's Principle.", a: "If a dynamic equilibrium system is subjected to a change in conditions, the system shifts to counteract that change." },
          { q: "How does a catalyst increase reaction rate?", a: "By providing an alternative reaction pathway with a lower activation energy ($E_a$)." },
          { q: "What conditions define Standard Temperature and Pressure (STP)?", a: "A temperature of 273.15 K (0°C) and an absolute pressure of exactly 1 atm (100 kPa)." },
          { q: "What is the equilibrium constant expression ($K_c$)?", a: "The ratio of product concentrations to reactant concentrations, each raised to the power of their coefficients." },
          { q: "How does increasing temperature affect an exothermic equilibrium system?", a: "Shifts the equilibrium position left toward the reactants, decreasing $K_c$." },
          { q: "What defines a zero-order reaction rate dependency?", a: "The reaction rate is independent of changes in the concentration of that reactant." },
          { q: "State the Arrhenius equation.", a: "$k = A e^{-\\frac{E_a}{RT}}$, linking reaction rate constants to temperature and activation threshold energy." },
          { q: "What is a homogeneous catalyst?", a: "A catalyst that exists in the exact same physical phase or state as the reacting compounds." },
          { q: "Define half-life for a first-order chemical reaction.", a: "The time required for reactant concentration to drop by half, calculated cleanly as $t_{1/2} = \\frac{\\ln(2)}{k}$." },
          { q: "What is the reaction quotient ($Q$)?", a: "A concentration ratio index calculated using non-equilibrium concentrations to determine the shift direction." }
        ]
      },
      {
        id: "chem-organic",
        title: "Organic Chemistry Functional Groups",
        cardCount: 10,
        updated: "Updated 4 days ago",
        isPremiumShared: true,
        cards: [
          { q: "What structural group characterizes an ester?", a: "A carbonyl bound to an oxygen atom that is linked directly to an alkyl carbon chain ($-COO-$)." },
          { q: "Define electrophilic addition.", a: "A reaction mechanism where a pi bond in an alkene is broken to link with an incoming electron-deficient species." },
          { q: "What is an isomer?", a: "Molecules sharing identical chemical formulas but possessing variant structural topologies or spatial orientations." },
          { q: "What functional group forms when a primary alcohol is oxidized under reflux conditions?", a: "A carboxylic acid group ($-COOH$)." },
          { q: "What test confirms the presence of an alkene double bond carbon framework?", a: "Bromine water testing, which rapidly shifts from orange-brown to clear and colorless." },
          { q: "Define a nucleophile.", a: "An electron-rich species containing a lone pair that can donate an electron pair to form a chemical bond." },
          { q: "What is Markovnikov's rule?", a: "In additions to unsymmetrical alkenes, the acid hydrogen links to the carbon with more hydrogen attachments." },
          { q: "What product forms via the reaction of a carboxylic acid with an alcohol?", a: "An ester molecule and water, catalyzed by an acid catalyst." },
          { q: "Define chiral center.", a: "A carbon atom bound to four entirely distinct groups or atoms, causing optical isomerism." },
          { q: "What is a substitution reaction?", a: "A reaction where an atom or group of atoms in a molecule is replaced by a different atom or group." }
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
        cardCount: 10,
        updated: "Updated 5 days ago",
        isPremiumShared: true,
        cards: [
          { q: "State the First Law of Thermodynamics.", a: "Energy cannot be created or destroyed, only transformed; $\\Delta U = Q - W$." },
          { q: "What is Lenz's Law?", a: "The direction of an induced current always opposes the change in magnetic flux that produced it." },
          { q: "Define a blackbody radiator.", a: "An idealized physical body that absorbs all incident electromagnetic radiation perfectly, regardless of frequency." },
          { q: "State the Second Law of Thermodynamics.", a: "The total entropy of an isolated system always increases over time in spontaneous processes." },
          { q: "What is Coulomb's Law formula?", a: "$F = k_e \\frac{|q_1 q_2|}{r^2}$, defining electrostatic attraction forces between point charges." },
          { q: "Define magnetic flux linkage.", a: "The product of the magnetic flux passing through a coil area and the number of turns in the coil structure: $N\\Phi$." },
          { q: "State Faraday's Law of Induction.", a: "The magnitude of induced electromotive force matches the time rate of change of magnetic flux linkage." },
          { q: "What occurs at absolute zero temperature (0 K)?", a: "The temperature at which all fundamental atomic or molecular kinetic motion drops to a minimum." },
          { q: "Define an ideal gas.", a: "A theoretical gas composed of point particles that interact only through perfectly elastic collisions." },
          { q: "State Kepler's Third Law of Planetary Motion.", a: "The square of an orbit period $T^2$ is directly proportional to the cube of its semi-major axis distance $r^3$." }
        ]
      },
      {
        id: "phys-quantum",
        title: "Quantum Phenomena & Atomic Nuclear Structure",
        cardCount: 10,
        updated: "Updated 5 days ago",
        isPremiumShared: true,
        cards: [
          { q: "State the photoelectric effect equation.", a: "$E_{max} = hf - \\Phi$, where $hf$ represents photon packet energy and $\\Phi$ matches the target material work function." },
          { q: "What is wave-particle duality?", a: "The postulate that matter and light exhibit properties of both wave structures and discrete particle points depending on the experimental configuration." },
          { q: "Define half-life.", a: "The standard temporal period required for a sample mass of a radioactive isotope to drop to exactly half of its initial value count." },
          { q: "What are the constituents of an Alpha particle?", a: "Composed of two protons and two neutrons, identical to a Helium-4 nucleus frame." },
          { q: "What is a photon?", a: "A discrete packet or quantum of electromagnetic radiation carrying energy defined by $E=hf$." },
          { q: "State Heisenberg's Uncertainty Principle for position and momentum.", a: "It is impossible to simultaneously measure both properties with absolute precision: $\\Delta x \\cdot \Delta p \\geq \\frac{h}{4\\pi}$." },
          { q: "What is nuclear fission?", a: "The splitting of a heavy, unstable atomic nucleus into two or more smaller, more stable daughter nuclei, releasing energy." },
          { q: "Define nuclear fusion.", a: "A reaction where light atomic nuclei collide at high speeds to fuse into a heavier nucleus, releasing massive energy amounts." },
          { q: "What are quarks?", a: "Fundamental elementary particles that combine to form composite subatomic hadrons like protons and neutrons." },
          { q: "What is the de Broglie wavelength formula?", a: "$\\lambda = \\frac{h}{p}$, where $h$ is Planck's constant and $p$ is momentum." }
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
        cardCount: 10,
        updated: "Updated 1 week ago",
        isPremiumShared: true,
        cards: [
          { q: "Define the law of conservation of energy.", a: "The total energy of an isolated system remains constant over time." },
          { q: "What is an exothermic reaction?", a: "A chemical reaction that releases net thermal energy to its surrounding environment." },
          { q: "How is electrical efficiency calculated?", a: "$\\text{Efficiency} = \\frac{\\text{Useful Energy Output}}{\\text{Total Energy Input}} \\times 100\\%$" },
          { q: "What is gravitational potential energy formula?", a: "$GPE = mgh$, where $m$ is mass, $g$ is gravitational acceleration, and $h$ is height." },
          { q: "Define kinetic energy formula.", a: "$KE = \\frac{1}{2}mv^2$, evaluating the work tracking of an item in motion vector setups." },
          { q: "What distinguishes a renewable energy asset from a non-renewable one?", a: "Renewable energy assets replenish naturally at a rate faster than or equal to consumption speeds." },
          { q: "What is specific heat capacity?", a: "The energy mass parameter required to raise the temperature of 1 kg of a material by exactly 1°C." },
          { q: "Define thermal conduction.", a: "The process where thermal kinetic energy transfers across colliding adjacent particles within materials." },
          { q: "What is an endothermic process?", a: "A physical or chemical change that absorbs net thermal energy from its ambient environment." },
          { q: "State Ohm's Law.", a: "The current through a conductor between two points is directly proportional to the voltage across them: $V = IR$." }
        ]
      },
      {
        id: "comb-sci-ecology",
        title: "Ecosystem Interdependence & Carbon Balancing",
        cardCount: 10,
        updated: "Updated 1 week ago",
        isPremiumShared: true,
        cards: [
          { q: "What role do decomposers perform within an ecosystem?", a: "They break down dead organic matter, recycling essential chemical nutrients back directly into local soil frameworks." },
          { q: "Explain bioaccumulation.", a: "The structural accumulation of a toxic chemical or pesticide within the body tissues of an organism over its lifespan." },
          { q: "State the primary inputs for active photosynthesis.", a: "Carbon dioxide ($CO_2$), ambient liquid water ($H_2O$), and photon absorption energy from sunlight." },
          { q: "What is a trophic level?", a: "The hierarchical rank position an organism occupies within a food chain matrix or pyramid framework." },
          { q: "Define biodiversity.", a: "The complete variety of distinct living organism species interacting within a specific ecosystem zone." },
          { q: "What biological system returns carbon back to the atmosphere?", a: "Cellular respiration performed by plants, animals, and microbial organisms." },
          { q: "What is mutualism?", a: "A symbiotic relationship pattern where both interacting species gain mutual biological benefits." },
          { q: "Define quadrat sampling.", a: "An ecological technique using square grid frames to estimate population density parameters of stationary species." },
          { q: "What is eutrophication?", a: "An aquatic ecosystem crash caused by nutrient runoff leading to algal blooms that deplete dissolved oxygen levels." },
          { q: "What are the primary products of aerobic plant respiration?", a: "Carbon dioxide ($CO_2$), water ($H_2O$), and chemical energy storage packages (ATP)." }
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
        cardCount: 10,
        updated: "Updated 1 week ago",
        isPremiumShared: true,
        cards: [
          { q: "What clause stated Germany's total guilt for WWI?", a: "Article 231 (The War Guilt Clause)." },
          { q: "What territorial loss did Germany suffer to France?", a: "The return of the Alsace-Lorraine mineral industrial zones." },
          { q: "What financial burden was placed on Germany in 1921?", a: "Reparations fixed at approximately 132 billion gold marks." },
          { q: "What military limits were placed on Germany's army personnel count?", a: "Strictly limited to a maximum force layout of 100,000 soldiers." },
          { q: "What happened to the Rhineland buffer zone border section?", a: "Demilitarized permanently to protect security setups across Western Europe." },
          { q: "Which international regulatory group did the treaty construct?", a: "The League of Nations, which Germany was initially barred from joining." },
          { q: "Who were the primary 'Big Three' leaders negotiating terms?", a: "Woodrow Wilson (USA), David Lloyd George (UK), and Georges Clemenceau (France)." },
          { q: "What land strip separated East Prussia from mainland Germany?", a: "The Polish Corridor, granted to Poland to secure ocean harbor pathways." },
          { q: "What restriction applied to German heavy navy vessels?", a: "Banned from manufacturing submarines or owning modern military aircraft assets." },
          { q: "What union was explicitly prohibited by the treaty text rules?", a: "Anschluss, the political unification of Germany and Austria." }
        ]
      },
      {
        id: "hist-coldwar",
        title: "Cold War Containment Paradigms",
        cardCount: 10,
        updated: "Updated 1 week ago",
        isPremiumShared: true,
        cards: [
          { q: "What did the Marshall Plan do?", a: "An American economic initiative passed to provide comprehensive financial aid packages rebuilding Western European infrastructures to halt Soviet alignment." },
          { q: "Define the Domino Theory.", a: "The strategic political geopolitical assumption that if one nation fell to communism, surrounding territories would inevitably slide into identical states." },
          { q: "What event triggered the 1962 missile crisis?", a: "The secret installation of Soviet medium-range nuclear ballistic payloads on Cuban soil." },
          { q: "What was the core goal of the Truman Doctrine?", a: "To provide economic and military aid to any country threatened by communist expansion, specifically Greece and Turkey." },
          { q: "Define the Warsaw Pact alliance network.", a: "A collective defense treaty signed in 1955 between the Soviet Union and its satellite Eastern bloc nations." },
          { q: "What wall symbol split Berlin from 1961 to 1989?", a: "The Berlin Wall, built by East Germany to stop massive citizen brain drain to the West." },
          { q: "What is Brinkmanship?", a: "The diplomatic practice of pushing dangerous political standoffs to the absolute edge of active war to force an opponent to back down." },
          { q: "What proxy conflict split an Asian peninsula along the 38th parallel?", a: "The Korean War (1950–1953)." },
          { q: "Define Detente.", a: "A period of eased tensions and improved diplomatic relations between the US and USSR during the 1970s." },
          { q: "What treaty system capped ballistic missile arsenals in 1972?", a: "The SALT I (Strategic Arms Limitation Talks) agreement." }
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
        cardCount: 10,
        updated: "Updated 1 week ago",
        isPremiumShared: true,
        cards: [
          { q: "What happens at a subduction zone?", a: "An oceanic tectonic plate sinks beneath a less dense continental plate into the mantle." },
          { q: "Name three main types of volcanic structures.", a: "Shield volcanoes, composite (strato) volcanoes, and cinder cones." },
          { q: "What is the primary driving mechanism of tectonic plate movement?", a: "Convection currents inside the Earth's asthenosphere mantle tier." },
          { q: "What is a conservative (transform) plate boundary configuration?", a: "Where two tectonic plates slide past each other horizontally, causing earthquakes but no volcanic actions." },
          { q: "Define epicentre location metrics.", a: "The exact point on the Earth's surface directly vertical above an underground earthquake focus spot." },
          { q: "What instrument records seismic shockwave parameters?", a: "A seismometer, which tracks wave magnitude patterns." },
          { q: "What scale measures the total energy released during an earthquake?", a: "The Moment Magnitude Scale ($M_w$)." },
          { q: "What process forms fold mountain ranges like the Himalayas?", a: "The collision of two continental tectonic plates buckling rock layers upward." },
          { q: "Explain a volcanic hot spot.", a: "An area in the mantle where plumes of hot magma rise up to pierce the crust away from plate boundaries." },
          { q: "What type of lava characterizes explosive volcanic eruptions?", a: "High-viscosity, silica-rich rhyolitic or andesitic lava that traps volcanic gases." }
        ]
      },
      {
        id: "geog-urbanization",
        title: "Urbanization Dynamics & Demographics",
        cardCount: 10,
        updated: "Updated 1 week ago",
        isPremiumShared: true,
        cards: [
          { q: "Define counter-urbanization.", a: "The demographic and structural process whereby people migrate out from major urban cities into surrounding rural settlements." },
          { q: "What is a megacity?", a: "A continuous metropolitan urban agglomeration center packing a total human population exceeding 10 million residents." },
          { q: "Identify two common push factors driving rural-urban migration.", a: "Low agricultural yields/crop failure and a lack of local educational or medical infrastructures." },
          { q: "Define gentrification.", a: "The urban renewal process where a working-class neighborhood is redeveloped, attracting wealthier residents but displacing original tenants." },
          { q: "What is the rural-urban fringe zone?", a: "The transition landscape boundary area where city urban developments merge directly into open countryside territory." },
          { q: "Explain the urban heat island effect.", a: "When urban metropolitan areas experience significantly warmer temperatures than surrounding rural regions due to concrete heat retention." },
          { q: "What is urban sprawl?", a: "The uncontrolled, unorganized expansion of urban housing and commercial zones across large tracts of rural land." },
          { q: "What does the Burgess Concentric Zone model map out?", a: "An urban layout structure showing cities expanding outward in concentric rings from a Central Business District (CBD)." },
          { q: "Define brownfield sites.", a: "Abandoned or underutilized industrial plots of land inside city lines available for modern redevelopment." },
          { q: "What is sustainable urban living?", a: "Designing cities to minimize environmental footprints through green transport, waste recycling, and energy-efficient building plans." }
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
        cardCount: 10,
        updated: "Updated 2 weeks ago",
        isPremiumShared: true,
        cards: [
          { q: "Define Utilitarianism.", a: "An ethical framework asserting actions are right if they promote the greatest happiness for the greatest number." },
          { q: "What is Deontology?", a: "An approach to ethics that judges the morality of an action based on rules, duties, and absolute obligations." },
          { q: "What is Ahimsa in Eastern faiths?", a: "The structural principle of total non-violence toward all living sentient beings." },
          { q: "What is Situation Ethics?", a: "A teleological framework arguing that the morally right action depends entirely on the unique context, guided by unconditional love ($agape$)." },
          { q: "Define Virtue Ethics.", a: "An approach to norm systems emphasizing individual character excellence and moral virtues rather than rigid rule lists." },
          { q: "What is Natural Moral Law?", a: "An absolutist ethical theory stating that humans possess intrinsic values that govern our reasoning toward preserving life." },
          { q: "Differentiate between teleological and deontological ethics.", a: "Teleological systems focus on outcomes and consequences; deontological frameworks judge actions purely by duty adherence." },
          { q: "What is the Categorical Imperative?", a: "Immanuel Kant's central ethical law: act only according to maxims that you would want to become universal laws." },
          { q: "Define cultural relativism in ethics.", a: "The view that moral beliefs and rights are dependent on cultural context and are not universal truths." },
          { q: "What is the Divine Command Theory?", a: "The meta-ethical belief that an action's moral status is directly determined by whether it aligns with commands issued by God." }
        ]
      },
      {
        id: "rs-theodicy",
        title: "The Problem of Evil & Theodicies",
        cardCount: 10,
        updated: "Updated 2 weeks ago",
        isPremiumShared: true,
        cards: [
          { q: "What is the core conflict in the logical problem of evil?", a: "The contradiction of an all-powerful (omnipotent) and all-loving (omnibenevolent) deity coexisting alongside genuine suffering." },
          { q: "Summarize the Free Will Defence concept.", a: "The argument that moral evil is a necessary side effect of God granting humans genuine, authentic moral choice freedom." },
          { q: "What does the Augustinian theodicy assert?", a: "Evil is not a separate physical creation, but rather a privation or lack of goodness ($privatio boni$)." },
          { q: "What is the Irenaean (soul-making) theodicy?", a: "The belief that God created the universe with an epistemic distance so humans could experience suffering to grow and mature spiritually." },
          { q: "Define moral evil.", a: "Suffering and harm caused directly by the intentional actions or negligence of free-willed human beings." },
          { q: "Define natural evil.", a: "Suffering caused by natural processes and environmental events, such as tsunamis, volcanic eruptions, or diseases." },
          { q: "What is the evidential problem of evil?", a: "The argument that the sheer volume and pointless intensity of suffering in the world makes the existence of an all-loving God highly improbable." },
          { q: "What does omniscient mean?", a: "The attribute of being all-knowing, possessing complete understanding of all past, present, and future events." },
          { q: "Explain the term 'theodicy'.", a: "A philosophical justification or defense of God's goodness and power in the face of the existence of evil." },
          { q: "What is the process theology view on evil?", a: "The belief that God is not omnipotent in a coercive sense, but rather lures and influences a universe that contains independent forces." }
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
        cardCount: 10,
        updated: "Updated 2 weeks ago",
        isPremiumShared: true,
        cards: [
          { q: "When must you trigger the subjunctive mood?", a: "Following expressions of desire, necessity, emotion, doubt, or subjective judgment after 'que'." },
          { q: "What is the irregular subjunctive stem for the verb 'faire'?", a: "fass- (e.g., que je fasse)." },
          { q: "Translate: 'It is necessary that we leave.'", a: "'Il faut que nous partions.'" },
          { q: "What is the subjunctive stem for regular -er verbs?", a: "Derived from the third-person plural (ils/elles) present indicative form minus the -ent ending." },
          { q: "What are the subjunctive endings for je, tu, il/elle, ils/elles?", a: "-e, -es, -e, -ent." },
          { q: "What are the subjunctive endings for nous and vous?", a: "-ions and -iez (identical to the imperfect tense layout)." },
          { q: "State the irregular subjunctive forms of 'être' for 'je' and 'nous'.", a: "que je sois, que nous soyons." },
          { q: "State the irregular subjunctive forms of 'avoir' for 'tu' and 'vous'.", a: "que tu aies, que vous ayez." },
          { q: "Does the phrase 'Il est certain que' trigger the subjunctive?", a: "No, because it expresses absolute certainty, so it takes the standard indicative mood." },
          { q: "Translate: 'I want you to do your homework.'", a: "'Je veux que tu fasses tes devoirs.'" }
        ]
      },
      {
        id: "french-conditional",
        title: "Conditional Clause Structures",
        cardCount: 10,
        updated: "Updated 2 weeks ago",
        isPremiumShared: true,
        cards: [
          { q: "How do you form the stem for regular conditional tenses?", a: "Utilize the complete infinitive form of the verb (dropping the final -e for -re verbs)." },
          { q: "What are the common grammatical endings appended for conditional configurations?", a: "-ais, -ais, -ait, -ions, -iez, -aient (identical to the imperfect tense endings)." },
          { q: "Translate: 'If I had money, I would buy a car.'", a: "'Si j'avais de l'argent, j'achèterais une voiture.'" },
          { q: "What is the irregular conditional stem for the verb 'aller'?", a: "ir- (e.g., j'irais)." },
          { q: "What is the irregular conditional stem for the verb 'voir'?", a: "verr- (e.g., je verrais)." },
          { q: "What formula governs a 'si' clause expressing a future possibility?", a: "Si + Present Tense → Future Tense." },
          { q: "What formula governs a 'si' clause expressing a hypothetical present situation?", a: "Si + Imperfect Tense → Conditional Tense." },
          { q: "What formula governs a 'si' clause expressing a past unfulfilled hypothesis?", a: "Si + Pluperfect Tense → Past Conditional Tense." },
          { q: "What is the irregular conditional stem for the verb 'pouvoir'?", a: "pourr- (e.g., je pourrais)." },
          { q: "Translate: 'We would like to visit Paris.'", a: "'Nous voudrions visiter Paris.'" }
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
        cardCount: 10,
        updated: "Updated 2 weeks ago",
        isPremiumShared: true,
        cards: [
          { q: "When is the Preterite tense used?", a: "For completed actions in the past with specific, bounded timeframes." },
          { q: "When is the Imperfect tense used?", a: "For descriptions, continuous actions, background settings, or habitual events in the past." },
          { q: "What are the three highly irregular verbs in the imperfect tense?", a: "Ir (iba), Ser (era), and Ver (veía)." },
          { q: "What are the preterite endings for regular -ar verbs?", a: "-é, -aste, -ó, -amos, -asteis, -aron." },
          { q: "What are the preterite endings for regular -er and -ir verbs?", a: "-í, -iste, -ió, -imos, -isteis, -ieron." },
          { q: "State the preterite forms of 'ir' and 'ser' (they share identical forms).", a: "Fui, fuiste, fue, fuimos, fuisteis, fueron." },
          { q: "What type of time marker phrase triggers the preterite tense?", a: "An isolated date marker, such as 'ayer' (yesterday) or 'el año pasado' (last year)." },
          { q: "What type of time marker phrase triggers the imperfect tense?", a: "Phrases indicating repetition, such as 'cada día' (every day) or 'cuando era joven' (when I was young)." },
          { q: "What is the preterite root shift for 'tener'?", a: "Shifts to a 'tuv-' stem base format (e.g., tuve, tuviste)." },
          { q: "Translate: 'I was reading when the phone rang.'", a: "'Yo leía (imperfect) cuando el teléfono sonó (preterite).'" }
        ]
      },
      {
        id: "spanish-future",
        title: "Future & Perfect Tense Configurations",
        cardCount: 10,
        updated: "Updated 2 weeks ago",
        isPremiumShared: true,
        cards: [
          { q: "What auxiliary helping verb is parsed to construct the present perfect?", a: "The auxiliary verb 'Haber' (he, has, ha, hemos, habéis, han)." },
          { q: "What is the irregular past participle for the verb 'escribir'?", a: "Escrito." },
          { q: "Translate: 'We will travel tomorrow.'", a: "'Viajaremos mañana.'" },
          { q: "How are future tense endings appended to regular Spanish verbs?", a: "Added directly onto the end of the full, unmodified infinitive form." },
          { q: "What are the universal endings for the future tense?", a: "-é, -ás, -á, -emos, -éis, -án." },
          { q: "What is the irregular future stem for the verb 'hacer'?", a: "Har- (e.g., haré)." },
          { q: "What is the irregular future stem for the verb 'tener'?", a: "Tendr- (e.g., tendré)." },
          { q: "How do you form a standard regular past participle for -ar verbs?", a: "Drop the -ar ending and append '-ado' to the verb root." },
          { q: "How do you form a standard regular past participle for -er and -ir verbs?", a: "Drop the ending and append '-ido' to the verb root." },
          { q: "Translate: 'They have already eaten.'", a: "'Ellos ya han comido.'" }
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
        cardCount: 10,
        updated: "Updated 3 weeks ago",
        isPremiumShared: true,
        cards: [
          { q: "What is the worst-case time complexity of a Binary Search?", a: "$O(\\log n)$." },
          { q: "Explain the structure of a Stack asset format.", a: "A linear data structure operating on a Last-In, First-Out (LIFO) access framework." },
          { q: "What is the difference between compiler execution and interpreter runs?", a: "Compilers translate whole code blocks into machine binary at once; interpreters translate and execute line-by-line." },
          { q: "Define a Queue data structure processing pattern.", a: "A linear data structure working strictly on a First-In, First-Out (FIFO) access order." },
          { q: "What is the average time complexity of finding an item in a hash table?", a: "$O(1)$ constant time complexity under ideal index distribution." },
          { q: "What is a graph data structure composed of?", a: "A collection of nodes (vertices) connected together by system pathways (edges)." },
          { q: "Explain the main difference between an array and a linked list.", a: "Arrays use contiguous blocks of memory; linked lists use individual nodes linked via memory pointers." },
          { q: "What is the worst-case time complexity of a Bubble Sort algorithm?", a: "$O(n^2)$ due to nested loop tracking loops." },
          { q: "Define recursion in computer programming.", a: "A design technique where a method or function calls itself until it hits a defined base condition exit." },
          { q: "What type of tree guarantees $O(\\log n)$ search efficiency bounds?", a: "A Balanced Binary Search Tree (such as an AVL or Red-Black Tree)." }
        ]
      },
      {
        id: "comp-sci-networks",
        title: "Network Routing & Protocols",
        cardCount: 10,
        updated: "Updated 3 weeks ago",
        isPremiumShared: true,
        cards: [
          { q: "What core functions define the IP protocol stratum?", a: "The logical addressing and routing of discrete data packets across disparate physical network architectures." },
          { q: "Explain the difference between TCP and UDP transfers.", a: "TCP guarantees data delivery via a connection-oriented handshake; UDP is a faster connectionless protocol that does not track dropped packets." },
          { q: "What role does a DNS server fulfill?", a: "Translates human-readable domain text targets (e.g., studyniq.com) directly into machine-routable IP addresses." },
          { q: "What layer of the OSI model handles physical bits and cable specifications?", a: "Layer 1, the Physical Layer." },
          { q: "What is the purpose of the MAC address?", a: "A unique physical identifier burned onto a network interface card (NIC) to route data inside a local area network (LAN)." },
          { q: "Explain the function of a router asset.", a: "A hardware device that forwards data packets between different separate network architectures using routing tables." },
          { q: "What does the HTTP status code 404 represent?", a: "The classic client-side error indicating that the requested server resource was not found." },
          { q: "What security process does HTTPS append to standard HTTP?", a: "Data encryption layers via SSL / TLS protocols to block snooping vectors." },
          { q: "What does DHCP stand for and do?", a: "Dynamic Host Configuration Protocol; automatically assigns IP addresses to devices joining a network environment." },
          { q: "What is packet switching?", a: "Breaking digital files into separate small packets, routing them independently across pathways, and reassembling them at the destination." }
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
        cardCount: 10,
        updated: "Updated 3 weeks ago",
        isPremiumShared: true,
        cards: [
          { q: "How is Contribution Per Unit calculated?", a: "$\\text{Selling Price Per Unit} - \\text{Variable Cost Per Unit}$." },
          { q: "State the formula for the Break-Even Point.", a: "$\\frac{\\text{Fixed Costs}}{\\text{Contribution Per Unit}}$." },
          { q: "What is the Margin of Safety?", a: "The difference between the actual or budgeted level of output and the break-even level of output." },
          { q: "Define fixed costs.", a: "Business expenses that do not change based on production volume shifts, such as rent or insurance." },
          { q: "Define variable costs.", a: "Operating expenses that vary directly with output volume variations, such as raw materials and packaging." },
          { q: "How do you calculate total revenue?", a: "$\\text{Selling Price Per Unit} \\times \\text{Quantity Sold}$." },
          { q: "What happens on a break-even chart where the total revenue line crosses total costs?", a: "The break-even point output level is reached, indicating zero profit and zero loss." },
          { q: "Name one limitation of standard break-even analysis charts.", a: "Assumes selling price and variable costs per unit remain perfectly linear and constant regardless of scale." },
          { q: "How is total cost calculated?", a: "$\\text{Fixed Costs} + \\text{Total Variable Costs}$." },
          { q: "Define gross profit margin percentage.", a: "$\\frac{\\text{Gross Profit}}{\\text{Sales Revenue}} \\times 100\\%$, checking baseline manufacturing efficiency." }
        ]
      },
      {
        id: "business-marketing",
        title: "Product Life Cycle & Mix Parameters",
        cardCount: 10,
        updated: "Updated 3 weeks ago",
        isPremiumShared: true,
        cards: [
          { q: "Identify the four sequential phases of the standard product life cycle curve.", a: "Introduction, Growth, Maturity, and Decline." },
          { q: "What is price skimming?", a: "A pricing strategy where a firm sets a high initial price to target early adopters before lowering it over time." },
          { q: "Define market segmentation.", a: "Dividing a broad target market into distinct subsets of consumers sharing common needs, demographics, or behaviors." },
          { q: "What are the traditional 4 Ps of the marketing mix?", a: "Product, Price, Place, and Promotion." },
          { q: "What is penetration pricing?", a: "Setting a very low initial launch price to quickly steal market share from established competitors." },
          { q: "Explain extension strategies for a product line.", a: "Marketing steps taken during maturity phases to delay a product's slide into decline (e.g., rebranding, new features)." },
          { q: "What characterizes a 'Cash Cow' in the Boston Matrix model?", a: "A product with a high market share inside a slow-growing market sector, producing steady cash flows." },
          { q: "What is qualitative market research?", a: "Gathering in-depth consumer thoughts, motivations, and opinions using focus groups or open-ended interviews." },
          { q: "Define brand equity.", a: "The premium value added to a product line based purely on consumer brand perceptions and loyalty status." },
          { q: "What distinguishes a B2B transaction model from B2C models?", a: "B2B involves commercial transactions between two companies; B2C targets sales directly to individual end consumers." }
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
        cardCount: 10,
        updated: "Updated 3 weeks ago",
        isPremiumShared: true,
        cards: [
          { q: "Define negative externalities.", a: "Spillover adverse costs imposed on third parties outside a transactional market structure." },
          { q: "State the formula for Price Elasticity of Demand (PED).", a: "$\\frac{\\% \\text{ Change in Quantity Demanded}}{\\% \\text{ Change in Price}}$." },
          { q: "What is a public good characterized by?", a: "Non-excludability and non-rivalry in consumption." },
          { q: "What does a PED value of absolute zero indicate?", a: "Perfectly inelastic demand, meaning quantity demanded remains fixed regardless of price changes." },
          { q: "Define merit goods.", a: "Goods that are under-consumed in free markets because individuals underestimate their long-term personal benefits (e.g., healthcare)." },
          { q: "What is asymmetric information?", a: "An imbalance where one party in an economic transaction possesses more or better structural knowledge than the other." },
          { q: "What occurs during a market failure?", a: "The free market mechanism allocates scarce resources inefficiently, leading to a net loss of social welfare." },
          { q: "What is Cross Price Elasticity of Demand (XED) measuring?", a: "The responsiveness of demand for one good following a price change in another separate good." },
          { q: "If the income elasticity of demand (YED) is negative, what category does the good belong to?", a: "An inferior good, whose demand drops as consumer incomes rise." },
          { q: "What intervention remedy can fix an undersupply of merit goods?", a: "Providing government subsidies or direct state funding pipelines to lower consumer costs." }
        ]
      },
      {
        id: "econ-macro",
        title: "Macroeconomic Policy Instruments",
        cardCount: 10,
        updated: "Updated 3 weeks ago",
        isPremiumShared: true,
        cards: [
          { q: "What distinguishes fiscal policy from monetary policy instruments?", a: "Fiscal policy uses government spending and taxation; monetary policy uses interest rates and money supply adjustments controlled by central banks." },
          { q: "Define demand-pull inflation mechanics.", a: "Inflation triggered when aggregate demand outpaces the aggregate productive capacity of an economy ('too much money chasing too few goods')." },
          { q: "What metric tracks structural GDP variations over quarters?", a: "Real Gross Domestic Product adjustment tracking, which accounts for inflation changes." },
          { q: "What are the four primary macroeconomic objectives of governments?", a: "Stable economic growth, low unemployment, stable low inflation, and balanced balance of payments." },
          { q: "Define supply-side policies.", a: "Government actions designed to boost the long-run productive potential and efficiency of an economy (e.g., education investments, deregulation)." },
          { q: "What is cost-push inflation?", a: "Inflation driven by rising production costs, such as higher raw material prices or surging wages, that push up overall consumer prices." },
          { q: "What does the Phillips Curve map out?", a: "An inverse relationship showing a trade-off between the rate of inflation and the rate of unemployment." },
          { q: "What constitutes protectionism?", a: "Imposing trade barriers like tariffs or import quotas to safeguard domestic industries from foreign competition." },
          { q: "What is structural unemployment?", a: "Unemployment caused by a mismatch between the skills workers possess and the skills required by evolving labor markets." },
          { q: "What is quantitative easing?", a: "A monetary policy action where central banks buy government bonds to inject liquidity directly into financial networks." }
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
        cardCount: 10,
        updated: "Updated 1 month ago",
        isPremiumShared: true,
        cards: [
          { q: "What is the Marxist viewpoint on education systems?", a: "It reproduces class inequalities and legitimizes capitalist ideologies via the hidden curriculum." },
          { q: "Define anomie.", a: "A condition of instability and normlessness resulting from a breakdown of standards and values (Emile Durkheim)." },
          { q: "What is the difference between structuralism and agency perspectives?", a: "Structuralism argues institutions shape behavior; agency posits that free-willed actions construct society." },
          { q: "What is the organic analogy in Functionalist theory?", a: "Comparing society to a biological body, where individual institutions operate as organs working together to maintain social health." },
          { q: "Define the term 'bourgeoisie' within Marxist critique.", a: "The wealthy capitalist class who own the primary means of production in society." },
          { q: "Define the term 'proletariat' within Marxist critique.", a: "The working class who must sell their labor to capitalists in exchange for survival wages." },
          { q: "What is a feminist critique of mainstream sociology?", a: "Historically male-dominated analysis ('malestream' sociology) that ignores women's experiences and gender exploitation lines." },
          { q: "What is social solidarity?", a: "The sense of cohesion and mutual social bonding that links individuals together into a unified community framework." },
          { q: "Explain the concept of false class consciousness.", a: "When subordinate classes misinterpret their exploitation because dominant ruling ideologies mask reality." },
          { q: "What is symbolic interactionism?", a: "A micro-level theory tracking how individuals construct shared meanings through daily interactions and symbolic gestures." }
        ]
      },
      {
        id: "soc-family",
        title: "Demographic Family Evolution Analysis",
        cardCount: 10,
        updated: "Updated 1 month ago",
        isPremiumShared: true,
        cards: [
          { q: "What does the functionalist 'warm bath' theory assert?", a: "The family acts as an emotional stabilizer for adult workers, soaking away daily work stressors." },
          { q: "Define symmetrical families.", a: "A family structure where roles and responsibilities, such as housework and childcare, are shared more equally between partners." },
          { q: "How do radical feminists interpret nuclear family structures?", a: "As a primary tool of patriarchal oppression that reinforces male dominance and female economic dependency." },
          { q: "What are the four core family functions according to Murdock?", a: "Sexual control, reproduction assistance, economic stability, and primary socialization tasks." },
          { q: "Define primary socialization.", a: "The early learning process where infants absorb the language, core values, and behavior norms of their home culture." },
          { q: "What is a reconstituted family?", a: "A blended family unit formed when parents remarry or cohabit alongside children from previous relationships." },
          { q: "Explain family diversity trends.", a: "The decline of the single dominant nuclear family model in favor of lone-parent, cohabiting, same-sex, or single-person setups." },
          { q: "What is the dual burden concept?", a: "The strain on modern women who balance paid employment with unpaid household chores and emotional domestic labor." },
          { q: "Define secularization and its impact on families.", a: "The long-term decline in traditional religious authority, leading to rising divorce rates and cohabitation choices." },
          { q: "What is the 'negotiated family' model according to Beck?", a: "A modern family structure that does not follow fixed traditional rules, but adapts based on the ongoing needs of its members." }
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
        cardCount: 10,
        updated: "Updated 1 month ago",
        isPremiumShared: true,
        cards: [
          { q: "Name the three components of Atkinson-Shiffrin's Multi-Store Model.", a: "Sensory Register, Short-Term Memory, and Long-Term Memory stores." },
          { q: "What is the operational limit capacity of working short-term memory?", a: "Historically noted as $7 \\pm 2$ discrete chunks of information (Miller's Law)." },
          { q: "Define proactive interference.", a: "When older memories disrupt and prevent the accurate retrieval of newly learned information." },
          { q: "What is retroactive interference?", a: "When newly learned information conflicts with and disrupts your ability to recall previously stored historical memories." },
          { q: "What is the duration limit of Short-Term Memory without active rehearsal loops?", a: "Spans between approximately 18 and 30 seconds before trace decay occurs." },
          { q: "Name the three divisions of long-term memory proposed by Endel Tulving.", a: "Episodic memory, Semantic memory, and Procedural memory channels." },
          { q: "What role does the central executive perform in the Working Memory Model?", a: "Acts as an attention controller, monitoring and allocating processing tasks to slave sub-systems." },
          { q: "Explain retrieval failure theory.", a: "Forgetting caused by a lack of accessible memory cues or contextual triggers needed to locate information in long-term storage." },
          { q: "What is an episodic buffer?", a: "A temporary storage system inside the working memory model that integrates visual, spatial, and verbal data into single episodes." },
          { q: "Define eye-witness testimony bias.", a: "The vulnerability of event recollections to distortion from misleading post-event information or loaded interview questions." }
        ]
      },
      {
        id: "psych-behavioral",
        title: "Conditioning & Behavioral Learning Theory",
        cardCount: 10,
        updated: "Updated 1 month ago",
        isPremiumShared: true,
        cards: [
          { q: "What is classical conditioning?", a: "A learning process where an unconditioned stimulus is paired with a neutral stimulus until it elicits a conditioned response." },
          { q: "Differentiate between negative reinforcement and punishment.", a: "Negative reinforcement increases a behavior by removing an unpleasant stimulus; punishment decreases a behavior by introducing an unpleasant consequence." },
          { q: "What did Bandura's Bobo Doll experiment demonstrate?", a: "That children can acquire social behaviors, such as aggression, purely through observational learning." },
          { q: "Define operant conditioning.", a: "A learning method where voluntary behaviors are shaped and modified by their subsequent consequences (rewards or penalties)." },
          { q: "What is a continuous reinforcement schedule?", a: "Providing a reward every single time the target desired behavior is executed." },
          { q: "Explain stimulus generalization.", a: "When an organism demonstrates a conditioned response to stimuli that are similar to the original conditioned stimulus." },
          { q: "What is extinction in conditioning terms?", a: "The gradual weakening and eventual disappearance of a conditioned response when reinforcement stops." },
          { q: "Define vicarious reinforcement.", a: "Learning by watching other people receive rewards or punishments for their actions, without experiencing them firsthand." },
          { q: "What four meditational processes govern Social Learning Theory?", a: "Attention, Retention, Reproduction, and Motivation." },
          { q: "What apparatus did B.F. Skinner build to analyze rodent behaviors?", a: "The Skinner Box, used to test operant scheduling and automated reinforcement setups." }
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
        cardCount: 10,
        updated: "Updated 1 month ago",
        isPremiumShared: true,
        cards: [
          { q: "Define cardiac output.", a: "The volume of blood pumped by the left ventricle per minute; $\\text{Stroke Volume} \\times \\text{Heart Rate}$." },
          { q: "What is hypertrophy in athletic training?", a: "The muscular enlargement and thickening of fibers resulting from high-intensity resistance training regimes." },
          { q: "What role does lactic acid play in anaerobic pathways?", a: "A byproduct of glycolysis under low-oxygen conditions that causes regional muscular fatigue." },
          { q: "What is bradycardia?", a: "A resting heart rate that drops below 60 beats per minute, common in highly trained endurance athletes." },
          { q: "Define vascular shunting.", a: "The redistribution of blood flow from inactive organs to working muscles during intense physical activity." },
          { q: "What is stroke volume?", a: "The precise volume of oxygenated blood pumped out of the left ventricle during a single heartbeat contraction." },
          { q: "Explain the term $VO_2$ max.", a: "The maximum volume of oxygen an athlete can intake, transport, and utilize during incremental, maximal exercise intensity." },
          { q: "What structural change occurs in the heart due to chronic aerobic training?", a: "Cardiac hypertrophy, specifically the enlargement of the left ventricle chamber size." },
          { q: "What is gaseous exchange?", a: "The diffusion of oxygen and carbon dioxide between alveolar air spaces and capillary blood networks inside the lungs." },
          { q: "What binding protein carries oxygen throughout muscle tissues?", a: "Myoglobin." }
        ]
      },
      {
        id: "pe-biomechanics",
        title: "Levers & Biomechanical Movement",
        cardCount: 10,
        updated: "Updated 1 month ago",
        isPremiumShared: true,
        cards: [
          { q: "Describe a first-class lever layout sequence.", a: "The fulcrum sits directly in the middle, positioned between the effort force and the load mass (e.g., extension of the neck)." },
          { q: "What defines mechanical advantage in sport systems?", a: "When the effort arm of a lever system is longer than the resistance load arm, allowing heavy loads to be moved with minimal force." },
          { q: "What muscle acts as the antagonist during a standard bicep curl extension?", a: "The triceps muscle group." },
          { q: "Describe a second-class lever mechanics profile layout.", a: "The resistance load sits in the middle, flanked by the fulcrum and the effort force (e.g., jumping up on tiptoes)." },
          { q: "Describe a third-class lever mechanics profile layout.", a: "The effort force is applied in the middle, between the fulcrum and the resistance load (e.g., a standard bicep curl)." },
          { q: "What is the agonist muscle?", a: "The primary driver muscle that contracts to initiate a desired joint movement range." },
          { q: "Define an isometric contraction.", a: "A muscle contraction that generates tension without changing the overall length of the muscle or moving the joint (e.g., a plank)." },
          { q: "Define an isotonic concentric contraction.", a: "A contraction where the muscle shortens while producing force against a constant resistance load." },
          { q: "What are the structural criteria for eccentric contractions?", a: "A muscle generating protective tension while lengthening under load control (e.g., lowering down slowly from a pull-up)." },
          { q: "What plane of motion cuts the body into left and right halves?", a: "The Sagittal plane." }
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
        cardCount: 10,
        updated: "Updated 1 month ago",
        isPremiumShared: true,
        cards: [
          { q: "Explain dextrinization.", a: "The process involving the breakdown of starch molecules into smaller dextrins when subjected to dry heat, turning it brown." },
          { q: "What temperature range constitutes the food safety 'Danger Zone'?", a: "Between 4°C and 60°C (40°F to 140°F), where bacterial multiplication accelerates rapidly." },
          { q: "What is protein denaturation?", a: "The unfolding or structural alteration of protein helix strands when exposed to mechanical action, acids, or heat." },
          { q: "What is gelatinization?", a: "The process where starch granules absorb liquid, swell, burst, and thicken a liquid mixture when heated above 60°C." },
          { q: "Define enzymatic browning.", a: "A chemical reaction where oxygen reacts with enzymes in sliced fruits or vegetables, turning the exposed flesh brown." },
          { q: "What is shortened pastry shortening process mechanics?", a: "Rubbing fat into flour coats starch granules with a waterproof barrier, preventing gluten long strands from forming." },
          { q: "What occurs during caramelization?", a: "The oxidation of sugars subjected to high dry heat, producing golden color and rich flavor profiles." },
          { q: "Explain emulsion stabilization.", a: "Using an emulsifier (like lecithin in egg yolks) to bind water and oil phases together, preventing separation." },
          { q: "What temperature must cooked poultry reach to guarantee pathogen destruction?", a: "75°C core internal temperature held for at least two full minutes." },
          { q: "What gas acts as the chemical leavening driver when baking powder updates recipes?", a: "Carbon dioxide ($CO_2$) gas bubbles." }
        ]
      },
      {
        id: "food-nutrition",
        title: "Micro/Macro Nutritional Profiles",
        cardCount: 10,
        updated: "Updated 1 month ago",
        isPremiumShared: true,
        cards: [
          { q: "What metabolic defects stem from a lack of Vitamin D?", a: "Impaired bone mineralization, directly leading to structural conditions like rickets or osteomalacia." },
          { q: "What biological function do high-density lipoproteins (HDL) handle?", a: "They transport cholesterol away from body tissues back to the liver for excretion, reducing arterial plaque risks." },
          { q: "Differentiate between gelatinization and coagulation.", a: "Gelatinization is the swelling of starch granules in moist heat; coagulation is the setting of denatured protein structures." },
          { q: "Identify the primary functions of macronutrient proteins.", a: "Essential structural growth, cell repair, and hormone synthesis workflows." },
          { q: "What is a complete protein source definition?", a: "A food source that contains all nine essential amino acids that the human body cannot synthesize on its own." },
          { q: "What deficiency disease is caused by an acute lack of Vitamin C?", a: "Scurvy, which causes skin spots and bleeding gums due to impaired collagen production." },
          { q: "What are the risks of consuming high amounts of saturated fats?", a: "Elevates blood LDL levels, increasing the long-term risk of cardiovascular diseases." },
          { q: "What nutritional function does dietary fiber handle?", a: "Promotes healthy bowel peristalsis and stabilizes blood sugar spikes." },
          { q: "Name the four fat-soluble vitamins.", a: "Vitamins A, D, E, and K." },
          { q: "What mineral is required to synthesize hemoglobin for red blood cell oxygen transport?", a: "Iron." }
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
        cardCount: 10,
        updated: "Updated 1 month ago",
        isPremiumShared: true,
        cards: [
          { q: "What is the Rule of Thirds?", a: "A structural grid composition technique where an image is divided into nine equal segments to balance subjects." },
          { q: "Define chiaroscuro.", a: "An artistic treatment of light and dark values to build structural weight, depth, and three-dimensional realism." },
          { q: "What are complementary colors?", a: "Color pairs directly opposite each other on the color wheel (e.g., Blue and Orange) that produce high contrast." },
          { q: "What is atmospheric perspective?", a: "A technique to create the illusion of depth by rendering distant objects paler, less detailed, and bluer." },
          { q: "Define the term 'monochromatic'.", a: "A color scheme derived from a single base hue extended using its shades, tones, and tints." },
          { q: "What does the term 'tessellation' describe?", a: "An arrangement of shapes fitting closely together in a repeated pattern without gaps or overlapping lines." },
          { q: "What is vanishing point geometric alignment?", a: "The exact point on a horizon line where parallel perspective projection vectors converge to zero." },
          { q: "What is an asymmetrical composition balance?", a: "Arranging non-identical elements on opposite sides of a workspace while maintaining equal visual weight." },
          { q: "Define analog color groups.", a: "Colors situated adjacent to one another on the color wheel chart (e.g., Red, Orange, and Yellow)." },
          { q: "What element does dynamic line weight add?", a: "Varying line thickness to suggest light sources, physical weight, or depth across a sketch." }
        ]
      },
      {
        id: "art-movements",
        title: "Modernist Historical Art Movements",
        cardCount: 10,
        updated: "Updated 1 month ago",
        isPremiumShared: true,
        cards: [
          { q: "Identify the primary features of Analytical Cubism.", a: "Deconstructing physical structures into distinct geometric forms and viewing them simultaneously from multiple angles." },
          { q: "What values drove the Dada movement?", a: "An anti-war, anti-bourgeois artistic rebellion that rejected traditional aesthetic rationality using satire and collage." },
          { q: "What is a signature characteristic of Impasto painting techniques?", a: "Applying thick, undiluted paint layers to a canvas so tool and brush strokes remain highly visible and textured." },
          { q: "What was the core goal of Surrealism?", a: "To unlock the creative potential of the unconscious mind through dreamlike imagery and bizarre juxtapositions." },
          { q: "What defines Pointillism technique styles?", a: "Applying tiny, distinct dots of pure color in patterns so they blend optically in the viewer's eye." },
          { q: "What thematic elements define Pop Art?", a: "Drawing inspiration and visual material from mass consumer culture, comic strips, and commercial advertisements." },
          { q: "What is Abstract Expressionism?", a: "A mid-20th-century movement emphasizing spontaneous, non-representational emotional expression (e.g., Jackson Pollock's drip paintings)." },
          { q: "Describe Fauvism's defining aesthetic choice.", a: "Using vibrant, non-naturalistic, and highly subjective color choices to convey raw emotion." },
          { q: "What design philosophy anchored the Bauhaus school?", a: "Bridging the gap between fine art and functional craft, championing the principle that 'form follows function'." },
          { q: "What styles define Art Nouveau patterns?", a: "Intricate, flowing linear designs inspired by organic botanical structures and asymmetrical curves." }
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
        cardCount: 10,
        updated: "Updated 1 month ago",
        isPremiumShared: true,
        cards: [
          { q: "Differentiate between denotation and connotation.", a: "Denotation is the literal, objective description; connotation is the secondary, culturally constructed meaning." },
          { q: "Explain Stuart Hall's Encoding/Decoding theory.", a: "Media texts are encoded by creators but decoded by audiences through dominant, negotiated, or oppositional readings." },
          { q: "What is the cultivation theory effect?", a: "Long-term exposure to media shapes how consumers perceive social realities around them over time." },
          { q: "Define secondary targeting parameters.", a: "Reaching an alternate, secondary audience segment beyond the primary intended demographic." },
          { q: "Explain the Hypodermic Needle media model.", a: "An early, passive audience theory claiming media messages are injected directly into consumer minds, changing behaviors instantly." },
          { q: "What is an oppositional reading?", a: "When an audience member understands the preferred encoding of a text but completely rejects its ideological message." },
          { q: "Define demographics.", a: "Categorizing target consumers by quantitative metrics like age, gender, income, and education level." },
          { q: "What is psychographic profiling?", a: "Segmenting audiences based on psychological traits, values, interests, lifestyles, and opinions." },
          { q: "What does the term 'intertextuality' mean?", a: "When a media text references, parodies, or borrows styles from another separate media asset." },
          { q: "Explain the term 'male gaze' coined by Laura Mulvey.", a: "The practice of structuring media assets to view women from a heterosexual male perspective, objectifying them." }
        ]
      },
      {
        id: "media-industries",
        title: "Media Ownership & Regulation Dynamics",
        cardCount: 10,
        updated: "Updated 1 month ago",
        isPremiumShared: true,
        cards: [
          { q: "Define horizontal integration in media conglomerates.", a: "When a media company buys or merges with rival firms operating at the same stage of production (e.g., buying competing film studios)." },
          { q: "What role do industry regulatory bodies handle?", a: "Enforcing codes of practice regarding content age ratings, offensive material management, and copyright protections." },
          { q: "Explain the 'Uses and Gratifications' theory.", a: "An active audience model stating consumers deliberately choose media assets to satisfy specific psychological needs (e.g., surveillance, entertainment)." },
          { q: "Define vertical integration.", a: "When a single conglomerate owns multiple stages of a media asset's supply chain, spanning production, distribution, and exhibition." },
          { q: "What is a media oligopoly?", a: "A market environment where a small handful of massive corporate conglomerates dominate the media landscape." },
          { q: "Explain public service broadcasting.", a: "Media operations funded by the state or public fees (like the BBC) designed to inform, educate, and entertain without pure profit motives." },
          { q: "What is the agenda-setting function of news networks?", a: "The power of media outlets to influence what topics the public focuses on by choosing which stories to cover prominently." },
          { q: "Define media convergence.", a: "The merging of distinct media channels (print, television, radio) into single digital platforms." },
          { q: "What is cultural imperialism via media channels?", a: "When dominant global nations export their media assets, imposing their cultural values on smaller or developing countries." },
          { q: "Explain statutory regulation formats.", a: "Regulatory enforcement backed directly by government legislation rather than voluntary industry code bodies." }
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
        cardCount: 10,
        updated: "Updated 1 month ago",
        isPremiumShared: true,
        cards: [
          { q: "What is the 'Magic If' technique?", a: "A strategy asking actors to imagine themselves in the character's exact fictional context to trigger realistic behaviors." },
          { q: "Define emotional memory practices.", a: "When an actor recalls personal past experiences to channel authentic internal emotions into their stage role." },
          { q: "What does the phrase 'Given Circumstances' mean?", a: "The explicit environmental, historical, and narrative facts provided directly within a script text layout." },
          { q: "What is the character's 'Super-Objective'?", a: "The core, overarching goal or driving desire that a character pursues throughout the entire script." },
          { q: "Define subtext inside performance delivery.", a: "The underlying meaning, unspoken thoughts, and hidden motives behind the literal spoken script dialogue." },
          { q: "What does the term 'Circle of Attention' refer to?", a: "A technique where an actor focuses intently on a small physical space or object on stage to overcome stage fright." },
          { q: "What is physical action method tracking?", a: "Pursuing clear, physical objectives on stage to naturally generate authentic internal emotions." },
          { q: "What is a unit or bit of a scene?", a: "A section of a script partitioned by a shift in character motivation, objective, or topic focus." },
          { q: "Define tempo-rhythm in acting methods.", a: "The inner speed and rhythmic intensity of a character matched against their external physical pacing." },
          { q: "Explain the concept of communion between actors.", a: "The deep, active listening and authentic responsive energy exchange between performers on stage." }
        ]
      },
      {
        id: "drama-epic",
        title: "Brechtian Epic Theatre Systems",
        cardCount: 10,
        updated: "Updated 1 month ago",
        isPremiumShared: true,
        cards: [
          { q: "What is the primary goal of the Verfremdungseffekt (alienation effect)?", a: "To break the audience's emotional immersion, prompting them to think critically about the socio-political issues on stage rather than crying or laughing." },
          { q: "How are placards deployed in Epic Theatre structures?", a: "As visual signs or screens indicating scene context, themes, or narrative developments before they happen to kill dramatic suspense." },
          { q: "Define multi-roling.", a: "When an actor plays more than one character within a single performance, often changing costumes or accents in plain view of the audience." },
          { q: "What is the concept of 'Gestus' in Brechtian work?", a: "A clear physical gesture, posture, or facial expression that captures and reveals a broader social or political relationship status." },
          { q: "What character configuration distinguishes Epic Theatre narrators?", a: "A standalone figure who addresses the audience directly, breaking the fourth wall to comment objectively on scenes." },
          { q: "Why did Brecht prefer exposed lighting rigs on stage?", a: "To remind the audience that they are sitting inside a theater building watching a constructed piece of social commentary." },
          { q: "What does spass mean?", a: "Using comedy, grotesque humor, or satire to make serious socio-political messages entertaining and accessible." },
          { q: "What musical performance style characterizes Epic Theatre?", a: "Juxtaposing upbeat, cheerful melodies alongside dark, tragic lyrics to prevent pure emotional immersion." },
          { q: "How are set designs approached in Epic Theatre?", a: "Minimalist, symbolic sets using raw functional props rather than realistic, illusory designs." },
          { q: "What distinguishes the performance structure of an episodic plot?", a: "Standalone scenes or historical montages that do not rely on linear cause-and-effect transitions." }
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
        cardCount: 10,
        updated: "Updated 1 month ago",
        isPremiumShared: true,
        cards: [
          { q: "What are the three structural segments of Sonata Form?", a: "The Exposition, Development, and Recapitulation." },
          { q: "Define a cadence point.", a: "A melodic or harmonic configuration that creates a sense of resolution or pause at the end of a musical phrase." },
          { q: "What intervals construct a standard diminished triad chord?", a: "A root note stacked with a minor third and a diminished fifth." },
          { q: "What is a perfect cadence chord sequence?", a: "Moving harmonically from chord V (Dominant) directly to chord I (Tonic)." },
          { q: "Describe an interrupted cadence resolution pattern.", a: "An unexpected resolution shift where chord V moves to chord VI instead of chord I." },
          { q: "What defines homophonic musical texture?", a: "A single clear melodic voice accompanied by subordinate chordal block harmonies." },
          { q: "Explain polyphonic musical texture.", a: "Multiple independent melodic lines playing simultaneously, tracking separate rhythmic vectors." },
          { q: "What is a modulation?", a: "The process of shifting from one key center (tonality) to a different key during a composition." },
          { q: "What scale utilizes only five pitch steps per octave?", a: "The Pentatonic scale." },
          { q: "Define monophonic texture.", a: "A single, unaccompanied melodic line without any underlying chords or countermelodies." }
        ]
      },
      {
        id: "music-history",
        title: "Historical Eras & Textures",
        cardCount: 10,
        updated: "Updated 1 month ago",
        isPremiumShared: true,
        cards: [
          { q: "What musical texture dominates classical Baroque polyphony?", a: "Contrapuntal or polyphonic arrangements with independent interweaving melodic paths." },
          { q: "Identify a central performance style change of the Romantic era.", a: "An increase in emotional expressiveness, expanded orchestral sizes, and the frequent use of rubato tempo flexibility." },
          { q: "What is a leitmotif?", a: "A short, recurring musical phrase associated with a particular person, place, or idea within a composition or film score." },
          { q: "Name the historical chronological order of Western classical music eras.", a: "Renaissance, Baroque, Classical, Romantic, and Modernist/20th Century." },
          { q: "What keyboard asset anchored Baroque basso continuo groups?", a: "The Harpsichord." },
          { q: "What characterizes the Classical era's structural design ideals?", a: "A focus on clarity, symmetry, balance, and structured forms (e.g., Mozart, Haydn)." },
          { q: "What is word painting?", a: "A musical technique where the melody reflects the literal meaning of the lyrics (common in Renaissance madrigals)." },
          { q: "Define the term rubato.", a: "Disregarding strict, mechanical tempo constraints to add expressive emotional phrasing by stretching time." },
          { q: "What defines an opera aria piece?", a: "A standalone, expressive solo vocal piece with full orchestral backing inside an opera production." },
          { q: "What style characterizes 20th-century musical Impressionism?", a: "Focusing on mood and atmosphere using whole-tone scales and unresolved dissonant chords (e.g., Debussy)." }
        ]
      }
    ]
  }
];