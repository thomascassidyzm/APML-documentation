<template>
  <div class="manifesto" ref="pageRef">
    <!-- Grain Overlay -->
    <div class="grain"></div>

    <!-- Animated Grid Background -->
    <div class="energy-grid">
      <div class="grid-line horizontal" v-for="i in 20" :key="'h'+i" :style="{ top: (i * 5) + '%', animationDelay: (i * 0.1) + 's' }"></div>
      <div class="grid-line vertical" v-for="i in 20" :key="'v'+i" :style="{ left: (i * 5) + '%', animationDelay: (i * 0.1) + 's' }"></div>
    </div>

    <!-- Hero -->
    <section class="hero">
      <div class="hero-label">
        <span class="label-line"></span>
        <span>APML Design Principles v2.0.0</span>
        <span class="label-line"></span>
      </div>

      <h1 class="hero-title">
        <span class="title-line" data-text="DISTINCTION">DISTINCTION</span>
        <span class="title-line accent" data-text="AS PRIMITIVE">AS PRIMITIVE</span>
      </h1>

      <p class="hero-axiom">
        All distinctions cost energy.<br/>
        All observers have finite budgets.<br/>
        <span class="axiom-conclusion">Therefore: all accessible reality is effectively discrete.</span>
      </p>

      <div class="scroll-indicator">
        <span>SCROLL</span>
        <div class="scroll-line"></div>
      </div>
    </section>

    <!-- The First Rule -->
    <section class="first-rule">
      <div class="rule-number">00</div>
      <div class="rule-content">
        <h2 class="rule-label">THE FIRST RULE</h2>
        <blockquote class="rule-quote">
          These are <em>directions</em>,<br/>
          not destinations.
        </blockquote>
        <p class="rule-subtext">
          Every principle is a gradient to move toward, not a law to enforce.
          Rigid rules break; flexible directions guide.
        </p>
      </div>
    </section>

    <!-- The Physics -->
    <section class="physics">
      <div class="section-header">
        <div class="section-number">I</div>
        <h2>THE PHYSICS</h2>
        <p class="section-sub">Distinction Thermodynamics</p>
      </div>

      <div class="axioms-grid">
        <div class="axiom-card">
          <div class="axiom-num">01</div>
          <h3>All distinctions cost energy</h3>
          <p>To maintain that a system is in state A rather than state B requires energy expenditure. Making or maintaining any distinction—any boundary, any difference—is not free.</p>
        </div>
        <div class="axiom-card">
          <div class="axiom-num">02</div>
          <h3>All observers have finite budgets</h3>
          <p>Every observer-like-us operates with limited energy. No OLU has access to infinite energy. This finitude is absolute.</p>
        </div>
      </div>

      <div class="derivations-row">
        <div class="derivation" v-for="(d, i) in derivations" :key="d.name">
          <div class="deriv-icon">{{ d.icon }}</div>
          <div class="deriv-name">{{ d.name }}</div>
        </div>
      </div>
    </section>

    <!-- The 12 Directions -->
    <section class="directions" id="directions">
      <div class="section-header">
        <div class="section-number">II</div>
        <h2>THE TWELVE DIRECTIONS</h2>
        <p class="section-sub">Not rules to follow, but gradients to move toward</p>
      </div>

      <div class="directions-list">
        <div
          v-for="(dir, index) in directions"
          :key="dir.id"
          class="direction-item"
          :class="{ expanded: expandedDirection === dir.id }"
          @click="toggleDirection(dir.id)"
        >
          <div class="direction-num">{{ String(index + 1).padStart(2, '0') }}</div>

          <div class="direction-main">
            <h3 class="direction-title">{{ dir.name }}</h3>
            <p class="direction-shorthand">{{ dir.shorthand }}</p>

            <div class="direction-spectrum">
              <div class="spectrum-end toward">
                <span class="spectrum-label">TOWARD</span>
                <span class="spectrum-value">{{ dir.toward }}</span>
              </div>
              <div class="spectrum-bar">
                <div class="spectrum-gradient"></div>
                <div class="spectrum-dot"></div>
              </div>
              <div class="spectrum-end away">
                <span class="spectrum-label">AWAY FROM</span>
                <span class="spectrum-value">{{ dir.away }}</span>
              </div>
            </div>
          </div>

          <div class="direction-expand-icon">
            <svg :class="{ rotated: expandedDirection === dir.id }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M12 5v14M5 12h14"/>
            </svg>
          </div>

          <div class="direction-details" v-if="expandedDirection === dir.id">
            <div class="detail-section">
              <h4>GROUNDED IN</h4>
              <p>{{ dir.grounding }}</p>
            </div>

            <div class="detail-columns">
              <div class="detail-column toward">
                <h4>MOVING TOWARD</h4>
                <ul>
                  <li v-for="item in dir.movingToward" :key="item">{{ item }}</li>
                </ul>
              </div>
              <div class="detail-column away">
                <h4>MOVING AWAY</h4>
                <ul>
                  <li v-for="item in dir.movingAway" :key="item">{{ item }}</li>
                </ul>
              </div>
            </div>

            <div class="detail-note" v-if="dir.note">
              <h4>CONTEXTUAL NOTE</h4>
              <p>{{ dir.note }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Resources -->
    <section class="resources">
      <div class="section-header compact">
        <div class="section-number">III</div>
        <h2>DOCUMENTATION</h2>
      </div>

      <div class="resource-links">
        <a href="/specifications/APML-Design-Principles-v2.0.0.apml" class="resource-link" target="_blank">
          <span class="resource-name">Design Principles</span>
          <span class="resource-ext">.apml</span>
        </a>
        <a href="/specifications/APML-v0.9.1.apml" class="resource-link" target="_blank">
          <span class="resource-name">Language Spec v0.9.1</span>
          <span class="resource-ext">.apml</span>
        </a>
        <a href="/specifications/APML-v2.0.0.md" class="resource-link" target="_blank">
          <span class="resource-name">Full Specification</span>
          <span class="resource-ext">.md</span>
        </a>
        <a href="/language-spec.txt" class="resource-link">
          <span class="resource-name">LLM Reference</span>
          <span class="resource-ext">.txt</span>
        </a>
      </div>
    </section>

    <!-- Footer -->
    <footer class="manifesto-footer">
      <div class="footer-line"></div>
      <div class="footer-content">
        <div class="footer-credit">
          <span class="credit-label">PHILOSOPHICAL FOUNDATION</span>
          <span class="credit-value">Distinction as Primitive (TPML Module 0)</span>
        </div>
        <div class="footer-credit">
          <span class="credit-label">CONTRIBUTORS</span>
          <span class="credit-value">Tom Cassidy & Claude</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const pageRef = ref(null)
const expandedDirection = ref(null)

const toggleDirection = (id) => {
  expandedDirection.value = expandedDirection.value === id ? null : id
}

onMounted(() => {
  // Staggered reveal animation
  const elements = document.querySelectorAll('.hero-title .title-line, .hero-axiom, .scroll-indicator')
  elements.forEach((el, i) => {
    el.style.animationDelay = `${0.2 + i * 0.15}s`
  })
})

const derivations = [
  { icon: '◆', name: 'EFFECTIVE DISCRETENESS' },
  { icon: '◇', name: 'FINITUDE' },
  { icon: '○', name: 'DYNAMISM' },
  { icon: '●', name: 'RELATIONALITY' }
]

const directions = [
  {
    id: 'D01',
    name: 'Toward Parameterization',
    shorthand: 'Everything is a parameter',
    toward: 'Configuration, flexibility, tunability',
    away: 'Hardcoded values, magic numbers',
    grounding: 'Different observers need different parameters. What works at one energy budget may not work at another. Parameterization enables adaptation.',
    movingToward: ['Thresholds in config, not code', 'Behavior changeable without deployment', 'A/B testable without regeneration'],
    movingAway: ['Regex patterns embedded in schemas', 'Magic numbers in logic', "Assumptions that 'this will never change'"],
    note: 'Not everything CAN be parameterized economically. The direction is toward parameterization WHERE IT ENABLES ADAPTATION.'
  },
  {
    id: 'D02',
    name: 'Toward User Experience',
    shorthand: 'Learner experience is sacred in PLAY',
    toward: 'Uninterrupted flow, invisible complexity',
    away: 'Technical errors surfaced to users',
    grounding: 'The user is the observer we serve. Their distinction-making is the purpose. Our system exists to support their boundary-refinement process.',
    movingToward: ['Errors caught before reaching user', 'Sensible defaults when data missing', 'Flow continues despite backend issues'],
    movingAway: ['Stack traces shown to users', 'System crashes interrupt learning', 'Technical constraints become user problems'],
    note: '"In PLAY" is key. During BUILD, different rules apply. The developer IS the user during build.'
  },
  {
    id: 'D03',
    name: 'Toward Appropriate Failure',
    shorthand: 'Fail fast in BUILD, gracefully in PLAY',
    toward: 'Clarity in development, resilience in use',
    away: 'Silent build failures, runtime crashes',
    grounding: 'BUILD is distinction-CLARITY: see exactly what\'s happening. PLAY is distinction-MAINTENANCE: the show must go on.',
    movingToward: ['Validation errors halt import with clear message', 'Build fails loudly on any issue', 'Runtime recovers gracefully'],
    movingAway: ['Silently skipping invalid records', 'try/catch that swallows without logging', 'Runtime crashes on unexpected data'],
    note: 'The boundary between BUILD and PLAY isn\'t always sharp. Staging environments require judgment.'
  },
  {
    id: 'D04',
    name: 'Toward Single Truth',
    shorthand: 'APML is truth; code implements',
    toward: 'One authoritative spec, derived implementations',
    away: 'Multiple conflicting definitions',
    grounding: 'A distinction-pattern is more stable when maintained in one place. Multiple sources = more energy. Divergence is entropy.',
    movingToward: ['Schema defined in APML, SQL generated', 'Types defined once, shared everywhere', 'Reality changes → APML changes first'],
    movingAway: ['Code and spec diverge', 'Database has columns not in any spec', '"We\'ll document it later"'],
    note: 'Perfect sync is asymptotic. Sometimes code must lead spec temporarily. But the debt must be paid.'
  },
  {
    id: 'D05',
    name: 'Toward Raw Data',
    shorthand: 'Store raw, compute derived',
    toward: 'Neutral measurements, runtime interpretation',
    away: 'Pre-computed classifications',
    grounding: 'Interpretations are observer-dependent. Raw data is stable; classification is context. Storing raw enables multiple observers.',
    movingToward: ['Store word_count, compute phrase_type', 'Store timestamps, compute "recent"', 'Store measurements, compute judgments'],
    movingAway: ['Storing phrase_type, requiring regeneration to change rules', 'Pre-computing "is_important" with hardcoded threshold'],
    note: 'Performance sometimes requires caching derived values. Cache where necessary, but keep raw data as truth.'
  },
  {
    id: 'D06',
    name: 'Toward Dual Identity',
    shorthand: 'Natural keys for humans, UUIDs for machines',
    toward: 'Human-readable AND stable machine references',
    away: 'Parsing display strings, encoding meaning in IDs',
    grounding: 'Different observers access at different resolutions. Humans need semantic identifiers. Machines need collision-free stable references.',
    movingToward: ['id: UUID, seed_number: 42, display: computed', 'Natural key for uniqueness, surrogate for references'],
    movingAway: ['Regex-parsing IDs to extract semantic content', 'Using display strings as foreign keys'],
    note: 'Legacy systems may require ID parsing. The direction is toward clean separation in new design.'
  },
  {
    id: 'D07',
    name: 'Toward Reusability',
    shorthand: "Don't duplicate, reference",
    toward: 'Shared patterns, referenced resources',
    away: 'Duplicated code, copied resources',
    grounding: 'Maintaining the same distinction in multiple places costs energy. Every duplicate is entropy waiting to happen.',
    movingToward: ['Audio referenced by text+voice, shared across courses', 'Validation library used by all importers', 'Pattern abstracted when used 3+ times'],
    movingAway: ['Copy-pasting audio files per course', 'Each script has its own validation logic'],
    note: 'Premature abstraction has costs too. Wait for the pattern to emerge; then extract.'
  },
  {
    id: 'D08',
    name: 'Toward Explicitness',
    shorthand: 'No magic; if it matters, it\'s visible',
    toward: 'Declared behavior, visible state',
    away: 'Hidden defaults, implicit coupling',
    grounding: 'Implicit behavior is a hidden energy cost. Explicit declarations make distinctions visible—and visible distinctions can be maintained.',
    movingToward: ["status: 'draft' (explicit default)", 'belongs_to: Course via course_code', 'Assumptions documented'],
    movingAway: ['Null means draft (implicit)', 'Joining on matching column names'],
    note: 'Not everything needs to be explicit to the same degree. Stable conventions can remain implicit.'
  },
  {
    id: 'D09',
    name: 'Toward Idempotency',
    shorthand: 'Every operation safe to re-run',
    toward: 'Repeatable operations, stable outcomes',
    away: 'Side effects, duplicate creation',
    grounding: 'Stable distinction-patterns can be re-accessed without degradation. Idempotency is thermodynamic stability for operations.',
    movingToward: ['UPSERT with ON CONFLICT', 'Check-then-create patterns', 'Scripts that converge to same state'],
    movingAway: ['INSERT without conflict handling', 'Counters incremented without checking state'],
    note: 'Some operations are inherently non-idempotent (emails, charges). Be idempotent WHERE POSSIBLE.'
  },
  {
    id: 'D10',
    name: 'Toward Observability',
    shorthand: 'See what the system is doing',
    toward: 'Visible state, meaningful logs',
    away: 'Black boxes, silent operations',
    grounding: 'Observers need access to make distinctions. A system that hides its state is inaccessible for debugging.',
    movingToward: ["Import logs: 'Seeds: 30, LEGOs: 130'", 'Health endpoints showing status', 'Progress bars for long operations'],
    movingAway: ["'Import complete.' (How many?)", 'Background jobs with no status visibility'],
    note: 'Observability has costs. The direction is enough visibility to debug and understand.'
  },
  {
    id: 'D11',
    name: 'Toward Proper Abstractions',
    shorthand: 'Typed structures over string hacks',
    toward: 'Proper parsers, typed data',
    away: 'Regex for structured data, stringly-typed code',
    grounding: 'Proper boundaries are easier to maintain. A typed structure has clear distinctions; a string has implicit ones.',
    movingToward: ['seed_number: INTEGER stored directly', "status: ENUM('draft', 'released')", 'Parser that produces typed AST'],
    movingAway: ['Regex to extract numbers from strings', 'status: TEXT (hope nobody typos)'],
    note: 'Legacy systems may require parsing hacks. New code uses proper abstractions.'
  },
  {
    id: 'D12',
    name: 'Toward Delta Sync',
    shorthand: 'version + updated_at on everything',
    toward: 'Incremental updates, change tracking',
    away: 'Full reloads, blind overwrites',
    grounding: 'Finite energy means finite distinctions per cycle. Delta sync processes only changed distinctions—thermodynamic efficiency.',
    movingToward: ['version INTEGER, updated_at TIMESTAMPTZ', 'SELECT WHERE updated_at > :last_sync', 'Conflict resolution via version'],
    movingAway: ['No timestamps on content tables', 'Full table download on every app open'],
    note: 'Simple systems may not need delta sync. The direction matters as systems scale.'
  }
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

/* CSS Variables */
:root {
  --black: #000000;
  --white: #ffffff;
  --accent: #00fff0;
  --accent-dim: rgba(0, 255, 240, 0.15);
  --gray-100: #e5e5e5;
  --gray-300: #a3a3a3;
  --gray-500: #737373;
  --gray-700: #404040;
  --gray-900: #171717;
  --toward: #00ff88;
  --away: #ff0055;
}

.manifesto {
  min-height: 100vh;
  background: var(--black);
  color: var(--white);
  font-family: 'DM Sans', sans-serif;
  position: relative;
  overflow-x: hidden;
}

/* Grain Overlay */
.grain {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 1000;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
}

/* Energy Grid */
.energy-grid {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.grid-line {
  position: absolute;
  background: var(--accent);
  opacity: 0;
  animation: gridPulse 4s ease-in-out infinite;
}

.grid-line.horizontal {
  left: 0;
  right: 0;
  height: 1px;
}

.grid-line.vertical {
  top: 0;
  bottom: 0;
  width: 1px;
}

@keyframes gridPulse {
  0%, 100% { opacity: 0; }
  50% { opacity: 0.03; }
}

/* Hero */
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
  z-index: 1;
}

.hero-label {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 3rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--accent);
  animation: fadeSlideUp 0.8s ease forwards;
  opacity: 0;
}

.label-line {
  width: 60px;
  height: 1px;
  background: var(--accent);
}

.hero-title {
  text-align: center;
  margin: 0 0 3rem;
}

.title-line {
  display: block;
  font-family: 'Instrument Serif', serif;
  font-size: clamp(4rem, 15vw, 12rem);
  font-weight: 400;
  line-height: 0.9;
  letter-spacing: -0.03em;
  animation: fadeSlideUp 0.8s ease forwards;
  opacity: 0;
  position: relative;
}

.title-line::after {
  content: attr(data-text);
  position: absolute;
  left: 0;
  top: 0;
  color: transparent;
  -webkit-text-stroke: 1px var(--accent);
  opacity: 0;
  transform: translate(4px, 4px);
  transition: opacity 0.3s;
}

.title-line:hover::after {
  opacity: 0.5;
}

.title-line.accent {
  color: var(--accent);
  font-style: italic;
}

.hero-axiom {
  font-family: 'DM Sans', sans-serif;
  font-size: 1.125rem;
  line-height: 2;
  text-align: center;
  color: var(--gray-300);
  max-width: 500px;
  animation: fadeSlideUp 0.8s ease forwards;
  opacity: 0;
}

.axiom-conclusion {
  display: block;
  margin-top: 0.5rem;
  color: var(--white);
  font-weight: 500;
}

.scroll-indicator {
  position: absolute;
  bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem;
  letter-spacing: 0.3em;
  color: var(--gray-500);
  animation: fadeSlideUp 0.8s ease forwards;
  opacity: 0;
}

.scroll-line {
  width: 1px;
  height: 60px;
  background: linear-gradient(to bottom, var(--gray-500), transparent);
  animation: scrollPulse 2s ease-in-out infinite;
}

@keyframes scrollPulse {
  0%, 100% { transform: scaleY(1); opacity: 1; }
  50% { transform: scaleY(0.5); opacity: 0.5; }
}

@keyframes fadeSlideUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

/* First Rule */
.first-rule {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 4rem;
  padding: 8rem 4rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.rule-number {
  font-family: 'Instrument Serif', serif;
  font-size: 8rem;
  font-style: italic;
  color: var(--accent);
  line-height: 1;
  opacity: 0.3;
}

.rule-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  letter-spacing: 0.3em;
  color: var(--accent);
  margin: 0 0 1.5rem;
}

.rule-quote {
  font-family: 'Instrument Serif', serif;
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 400;
  line-height: 1.3;
  margin: 0 0 2rem;
  padding: 0;
  border: none;
}

.rule-quote em {
  font-style: italic;
  color: var(--accent);
}

.rule-subtext {
  font-size: 1rem;
  color: var(--gray-300);
  max-width: 500px;
  line-height: 1.7;
  margin: 0;
}

/* Physics Section */
.physics {
  padding: 6rem 4rem;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.section-header {
  display: flex;
  align-items: baseline;
  gap: 2rem;
  margin-bottom: 4rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--gray-700);
}

.section-number {
  font-family: 'Instrument Serif', serif;
  font-size: 3rem;
  font-style: italic;
  color: var(--accent);
  opacity: 0.5;
}

.section-header h2 {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem;
  letter-spacing: 0.3em;
  margin: 0;
}

.section-sub {
  font-size: 0.875rem;
  color: var(--gray-500);
  margin: 0;
  margin-left: auto;
}

.axioms-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.axiom-card {
  padding: 2.5rem;
  border: 1px solid var(--gray-700);
  position: relative;
  transition: border-color 0.3s;
}

.axiom-card:hover {
  border-color: var(--accent);
}

.axiom-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, var(--accent), transparent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s;
}

.axiom-card:hover::before {
  transform: scaleX(1);
}

.axiom-num {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  color: var(--accent);
  margin-bottom: 1.5rem;
  letter-spacing: 0.2em;
}

.axiom-card h3 {
  font-family: 'Instrument Serif', serif;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0 0 1rem;
}

.axiom-card p {
  font-size: 0.9rem;
  color: var(--gray-300);
  line-height: 1.7;
  margin: 0;
}

.derivations-row {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  padding: 2rem 0;
  border-top: 1px solid var(--gray-700);
}

.derivation {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.deriv-icon {
  font-size: 1.5rem;
  color: var(--accent);
}

.deriv-name {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  color: var(--gray-300);
}

/* Directions Section */
.directions {
  padding: 6rem 4rem;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.directions-list {
  display: flex;
  flex-direction: column;
}

.direction-item {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 3rem;
  padding: 2.5rem 0;
  border-bottom: 1px solid var(--gray-700);
  cursor: pointer;
  transition: background 0.3s;
}

.direction-item:hover {
  background: rgba(255, 255, 255, 0.02);
}

.direction-item.expanded {
  background: rgba(0, 255, 240, 0.02);
  border-color: var(--accent);
}

.direction-num {
  font-family: 'Instrument Serif', serif;
  font-size: 2.5rem;
  font-style: italic;
  color: var(--accent);
  opacity: 0.5;
  min-width: 60px;
  transition: opacity 0.3s;
}

.direction-item:hover .direction-num {
  opacity: 1;
}

.direction-main {
  flex: 1;
}

.direction-title {
  font-family: 'Instrument Serif', serif;
  font-size: 1.75rem;
  font-weight: 400;
  margin: 0 0 0.25rem;
}

.direction-shorthand {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  color: var(--gray-500);
  margin: 0 0 1.5rem;
  letter-spacing: 0.05em;
}

.direction-spectrum {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 1.5rem;
  align-items: center;
}

.spectrum-end {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.spectrum-end.away {
  text-align: right;
}

.spectrum-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.6rem;
  letter-spacing: 0.15em;
}

.spectrum-end.toward .spectrum-label {
  color: var(--toward);
}

.spectrum-end.away .spectrum-label {
  color: var(--away);
}

.spectrum-value {
  font-size: 0.8rem;
  color: var(--gray-300);
}

.spectrum-bar {
  width: 120px;
  height: 2px;
  background: linear-gradient(90deg, var(--toward), var(--gray-500), var(--away));
  position: relative;
}

.spectrum-dot {
  position: absolute;
  top: 50%;
  left: 25%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  background: var(--white);
  border-radius: 50%;
  box-shadow: 0 0 10px var(--accent);
}

.direction-expand-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  color: var(--gray-500);
  transition: color 0.3s;
}

.direction-item:hover .direction-expand-icon {
  color: var(--accent);
}

.direction-expand-icon svg {
  width: 20px;
  height: 20px;
  transition: transform 0.3s;
}

.direction-expand-icon svg.rotated {
  transform: rotate(45deg);
}

.direction-details {
  grid-column: 1 / -1;
  padding: 2rem 0 0;
  animation: detailsReveal 0.3s ease;
}

@keyframes detailsReveal {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

.detail-section {
  margin-bottom: 2rem;
}

.detail-section h4,
.detail-column h4,
.detail-note h4 {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.6rem;
  letter-spacing: 0.2em;
  color: var(--accent);
  margin: 0 0 0.75rem;
}

.detail-section p {
  font-size: 0.9rem;
  color: var(--gray-300);
  line-height: 1.7;
  margin: 0;
  max-width: 700px;
}

.detail-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 2rem;
}

.detail-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.detail-column li {
  font-size: 0.85rem;
  color: var(--gray-300);
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.detail-column li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 6px;
  height: 6px;
  border-radius: 50%;
}

.detail-column.toward li::before {
  background: var(--toward);
}

.detail-column.away li::before {
  background: var(--away);
}

.detail-note {
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.02);
  border-left: 2px solid var(--accent);
}

.detail-note p {
  font-size: 0.85rem;
  font-style: italic;
  color: var(--gray-300);
  margin: 0;
}

/* Resources */
.resources {
  padding: 6rem 4rem;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.section-header.compact {
  margin-bottom: 2rem;
}

.resource-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1px;
  background: var(--gray-700);
  border: 1px solid var(--gray-700);
}

.resource-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background: var(--black);
  text-decoration: none;
  color: var(--white);
  transition: all 0.3s;
}

.resource-link:hover {
  background: var(--accent-dim);
}

.resource-name {
  font-size: 0.9rem;
}

.resource-ext {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  color: var(--accent);
}

/* Footer */
.manifesto-footer {
  padding: 4rem;
  position: relative;
  z-index: 1;
}

.footer-line {
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--gray-700), transparent);
  margin-bottom: 3rem;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-credit {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.credit-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.6rem;
  letter-spacing: 0.2em;
  color: var(--gray-500);
}

.credit-value {
  font-size: 0.85rem;
  color: var(--gray-300);
}

/* Responsive */
@media (max-width: 1024px) {
  .first-rule {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 4rem 2rem;
  }

  .rule-number {
    font-size: 5rem;
  }

  .direction-item {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .direction-num {
    font-size: 1.5rem;
  }

  .direction-expand-icon {
    position: absolute;
    top: 2.5rem;
    right: 0;
  }

  .direction-spectrum {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }

  .spectrum-end,
  .spectrum-end.away {
    text-align: left;
  }

  .spectrum-bar {
    width: 100%;
  }

  .detail-columns {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .hero { padding: 1.5rem; }
  .physics, .directions, .resources { padding: 4rem 1.5rem; }
  .manifesto-footer { padding: 2rem 1.5rem; }

  .hero-label {
    gap: 1rem;
    font-size: 0.6rem;
  }

  .label-line { width: 30px; }

  .axioms-grid {
    grid-template-columns: 1fr;
  }

  .derivations-row {
    flex-wrap: wrap;
    gap: 1.5rem;
  }

  .derivation {
    flex: 1 1 40%;
  }

  .footer-content {
    flex-direction: column;
    gap: 2rem;
  }
}

@media (max-width: 480px) {
  .title-line {
    font-size: 3rem;
  }

  .rule-quote {
    font-size: 1.75rem;
  }

  .resource-links {
    grid-template-columns: 1fr;
  }
}
</style>
