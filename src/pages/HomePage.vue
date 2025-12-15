<template>
  <div class="principles-page">
    <!-- Hero: The Primitive -->
    <section class="hero">
      <div class="hero-content">
        <div class="version-badge">
          <span class="badge-dot"></span>
          <span>Design Principles v2.0.0</span>
        </div>

        <h1 class="hero-title">
          <span class="title-small">APML is grounded in</span>
          <span class="title-main">Distinction<br/>as Primitive</span>
        </h1>

        <p class="hero-philosophy">
          All distinctions cost energy. All observers have finite budgets.<br/>
          Therefore: all accessible reality is effectively discrete.
        </p>

        <div class="hero-cta">
          <a href="#directions" class="btn-explore">
            <span>Explore the 12 Directions</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </a>
        </div>
      </div>

      <div class="hero-visual">
        <div class="distinction-orb">
          <div class="orb-ring ring-1"></div>
          <div class="orb-ring ring-2"></div>
          <div class="orb-ring ring-3"></div>
          <div class="orb-core"></div>
        </div>
      </div>
    </section>

    <!-- The Meta-Principle -->
    <section class="meta-principle">
      <div class="meta-content">
        <div class="meta-label">The First Rule</div>
        <blockquote class="meta-quote">
          "These are <em>directions</em>, not destinations.<br/>
          Every principle is a gradient to move toward,<br/>
          not a law to enforce."
        </blockquote>
        <p class="meta-explanation">
          AI contributions are non-deterministic. Human judgment is contextual.
          Rigid rules break; flexible directions guide.
        </p>
      </div>
    </section>

    <!-- The Physics -->
    <section class="physics">
      <div class="physics-header">
        <h2>The Physics</h2>
        <p class="physics-subtitle">From TPML Module 0.3: Distinction Thermodynamics</p>
      </div>

      <div class="axioms">
        <div class="axiom">
          <div class="axiom-number">I</div>
          <div class="axiom-content">
            <h3>All distinctions cost energy</h3>
            <p>To maintain that a system is in state A rather than state B requires energy expenditure. Making or maintaining any distinction is not free.</p>
          </div>
        </div>

        <div class="axiom">
          <div class="axiom-number">II</div>
          <div class="axiom-content">
            <h3>All observers have finite budgets</h3>
            <p>Every observer-like-us operates with limited energy. No OLU has access to infinite energy. This finitude is absolute.</p>
          </div>
        </div>
      </div>

      <div class="derivations">
        <div class="derivation" v-for="d in derivations" :key="d.name">
          <div class="derivation-icon">{{ d.icon }}</div>
          <div class="derivation-text">
            <h4>{{ d.name }}</h4>
            <p>{{ d.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- The 12 Directions -->
    <section id="directions" class="directions">
      <div class="directions-header">
        <h2>The Twelve Directions</h2>
        <p>Not rules to follow, but gradients to move toward</p>
      </div>

      <div class="directions-grid">
        <div
          v-for="(direction, index) in directions"
          :key="direction.id"
          class="direction-card"
          :class="{ expanded: expandedDirection === direction.id }"
          @click="toggleDirection(direction.id)"
        >
          <div class="direction-number">{{ String(index + 1).padStart(2, '0') }}</div>

          <div class="direction-header">
            <h3 class="direction-name">{{ direction.name }}</h3>
            <p class="direction-shorthand">{{ direction.shorthand }}</p>
          </div>

          <div class="direction-gradient">
            <div class="gradient-toward">
              <span class="gradient-label">Toward</span>
              <span class="gradient-value">{{ direction.toward }}</span>
            </div>
            <div class="gradient-arrow">
              <svg viewBox="0 0 100 20" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#10b981"/>
                    <stop offset="50%" stop-color="#6b7280"/>
                    <stop offset="100%" stop-color="#ef4444"/>
                  </linearGradient>
                </defs>
                <line x1="5" y1="10" x2="95" y2="10" stroke="url(#arrowGradient)" stroke-width="2"/>
                <polygon points="5,10 12,6 12,14" fill="#10b981"/>
                <polygon points="95,10 88,6 88,14" fill="#ef4444"/>
              </svg>
            </div>
            <div class="gradient-away">
              <span class="gradient-label">Away from</span>
              <span class="gradient-value">{{ direction.away }}</span>
            </div>
          </div>

          <div class="direction-details" v-if="expandedDirection === direction.id">
            <div class="grounding">
              <h4>Grounded in</h4>
              <p>{{ direction.grounding }}</p>
            </div>

            <div class="indicators">
              <div class="indicator-column toward">
                <h5>Moving Toward</h5>
                <ul>
                  <li v-for="item in direction.movingToward" :key="item">{{ item }}</li>
                </ul>
              </div>
              <div class="indicator-column away">
                <h5>Moving Away</h5>
                <ul>
                  <li v-for="item in direction.movingAway" :key="item">{{ item }}</li>
                </ul>
              </div>
            </div>

            <div class="contextual-note" v-if="direction.note">
              <h5>Contextual Note</h5>
              <p>{{ direction.note }}</p>
            </div>
          </div>

          <div class="direction-expand">
            <span>{{ expandedDirection === direction.id ? 'Collapse' : 'Expand' }}</span>
            <svg :class="{ rotated: expandedDirection === direction.id }" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </div>
        </div>
      </div>
    </section>

    <!-- Resources -->
    <section class="resources">
      <h2>Documentation</h2>
      <div class="resource-grid">
        <a href="/specifications/APML-Design-Principles-v2.0.0.apml" class="resource-card" target="_blank">
          <div class="resource-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14,2 14,8 20,8"/>
            </svg>
          </div>
          <h3>Design Principles</h3>
          <p>Full APML specification with all 12 directions</p>
        </a>

        <a href="/specifications/APML-v0.9.1.apml" class="resource-card" target="_blank">
          <div class="resource-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
            </svg>
          </div>
          <h3>Language Spec v0.9.1</h3>
          <p>Complete APML language specification</p>
        </a>

        <a href="/language-spec.txt" class="resource-card">
          <div class="resource-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
              <line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
          </div>
          <h3>LLM Reference</h3>
          <p>Plain text for AI context windows</p>
        </a>

        <a href="/specifications/APML-v2.0.0.md" class="resource-card" target="_blank">
          <div class="resource-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
          </div>
          <h3>Full Specification v2.0.0</h3>
          <p>Comprehensive markdown documentation</p>
        </a>
      </div>
    </section>

    <!-- Footer Attribution -->
    <section class="attribution">
      <p>
        <span class="attr-label">Philosophical Foundation:</span>
        Distinction as Primitive (TPML Module 0)
      </p>
      <p>
        <span class="attr-label">Contributors:</span>
        Tom Cassidy & Claude
      </p>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const expandedDirection = ref(null)

const toggleDirection = (id) => {
  expandedDirection.value = expandedDirection.value === id ? null : id
}

const derivations = [
  {
    icon: '◈',
    name: 'Effective Discreteness',
    description: 'No continuous quantity can be accessed. Infinite precision requires infinite energy.'
  },
  {
    icon: '◇',
    name: 'Finitude',
    description: 'Only finitely many distinctions can be maintained. Prioritization is necessary.'
  },
  {
    icon: '◎',
    name: 'Dynamism',
    description: 'Distinctions require continuous investment. Without energy, boundaries decay.'
  },
  {
    icon: '◉',
    name: 'Relationality',
    description: 'No isolated systems. All observers must draw energy from environment.'
  }
]

const directions = [
  {
    id: 'D01',
    name: 'Toward Parameterization',
    shorthand: 'Everything is a parameter',
    toward: 'Configuration, flexibility, tunability',
    away: 'Hardcoded values, magic numbers, embedded assumptions',
    grounding: 'Different observers need different parameters. What works at one energy budget may not work at another. Parameterization enables adaptation.',
    movingToward: [
      'Thresholds in config, not code',
      'Behavior changeable without deployment',
      'A/B testable without regeneration'
    ],
    movingAway: [
      'Regex patterns embedded in schemas',
      'Magic numbers in logic',
      "Assumptions that 'this will never change'"
    ],
    note: 'Not everything CAN be parameterized economically. The direction is toward parameterization WHERE IT ENABLES ADAPTATION.'
  },
  {
    id: 'D02',
    name: 'Toward User Experience',
    shorthand: 'Learner experience is sacred in PLAY',
    toward: 'Uninterrupted user flow, graceful handling, invisible complexity',
    away: 'Technical errors surfaced to users, broken flows, confusion',
    grounding: 'The user is the observer we serve. Their distinction-making is the purpose. Our system exists to support their boundary-refinement process.',
    movingToward: [
      'Errors caught before reaching user',
      'Sensible defaults when data missing',
      'Flow continues despite backend issues'
    ],
    movingAway: [
      'Stack traces shown to users',
      'System crashes interrupt learning',
      'Technical constraints become user problems'
    ],
    note: '"In PLAY" is key. During BUILD, different rules apply. The developer IS the user during build.'
  },
  {
    id: 'D03',
    name: 'Toward Appropriate Failure',
    shorthand: 'Fail fast in BUILD, gracefully in PLAY',
    toward: 'Clarity during development, resilience during use',
    away: 'Silent build failures, runtime crashes',
    grounding: 'BUILD is distinction-CLARITY: see exactly what\'s happening. PLAY is distinction-MAINTENANCE: the show must go on.',
    movingToward: [
      'Validation errors halt import with clear message',
      'Build fails loudly on any issue',
      'Runtime recovers gracefully, logs for later'
    ],
    movingAway: [
      'Silently skipping invalid records',
      'try/catch that swallows without logging',
      'Runtime crashes on unexpected data'
    ],
    note: 'The boundary between BUILD and PLAY isn\'t always sharp. Staging environments require judgment.'
  },
  {
    id: 'D04',
    name: 'Toward Single Truth',
    shorthand: 'APML is truth; code implements',
    toward: 'One authoritative specification, derived implementations',
    away: 'Multiple conflicting definitions, code-as-spec',
    grounding: 'A distinction-pattern is more stable when maintained in one place. Multiple sources = more energy. Divergence is entropy.',
    movingToward: [
      'Schema defined in APML, SQL generated',
      'Types defined once, shared everywhere',
      'Reality changes → APML changes first'
    ],
    movingAway: [
      'Code and spec diverge',
      'Database has columns not in any spec',
      '"We\'ll document it later"'
    ],
    note: 'Perfect sync is asymptotic. Sometimes code must lead spec temporarily (discovery). But the debt must be paid.'
  },
  {
    id: 'D05',
    name: 'Toward Raw Data',
    shorthand: 'Store raw, compute derived',
    toward: 'Neutral measurements, runtime interpretation',
    away: 'Pre-computed classifications, embedded interpretations',
    grounding: 'Interpretations are observer-dependent. Raw data is stable; classification is context. Storing raw enables multiple observers.',
    movingToward: [
      'Store word_count, compute phrase_type',
      'Store timestamps, compute "recent"',
      'Store measurements, compute judgments'
    ],
    movingAway: [
      'Storing phrase_type, requiring regeneration to change rules',
      'Pre-computing "is_important" with hardcoded threshold'
    ],
    note: 'Performance sometimes requires caching derived values. Cache where necessary, but keep raw data as truth.'
  },
  {
    id: 'D06',
    name: 'Toward Dual Identity',
    shorthand: 'Natural keys for humans, UUIDs for machines',
    toward: 'Human-readable identifiers AND stable machine references',
    away: 'Parsing display strings, encoding meaning in IDs',
    grounding: 'Different observers access at different resolutions. Humans need semantic identifiers. Machines need collision-free stable references.',
    movingToward: [
      'id: UUID, seed_number: 42, display: computed',
      'Natural key for uniqueness, surrogate key for references'
    ],
    movingAway: [
      'Regex-parsing IDs to extract semantic content',
      'Using display strings as foreign keys'
    ],
    note: 'Legacy systems may require ID parsing. The direction is toward clean separation in new design.'
  },
  {
    id: 'D07',
    name: 'Toward Reusability',
    shorthand: "Don't duplicate, reference",
    toward: 'Shared patterns, referenced resources, general utilities',
    away: 'Duplicated code, copied resources, project-specific hacks',
    grounding: 'Maintaining the same distinction in multiple places costs energy. Every duplicate is entropy waiting to happen.',
    movingToward: [
      'Audio sample referenced by text+voice, shared across courses',
      'Validation library used by all importers',
      'Pattern abstracted when used 3+ times'
    ],
    movingAway: [
      'Copy-pasting audio files per course',
      'Each script has its own validation logic'
    ],
    note: 'Premature abstraction has costs too. Wait for the pattern to emerge; then extract.'
  },
  {
    id: 'D08',
    name: 'Toward Explicitness',
    shorthand: 'No magic; if it matters, it\'s visible',
    toward: 'Declared behavior, visible state, documented assumptions',
    away: 'Convention-over-configuration, hidden defaults, implicit coupling',
    grounding: 'Implicit behavior is a hidden energy cost. Explicit declarations make distinctions visible—and visible distinctions can be maintained.',
    movingToward: [
      "status: 'draft' (explicit default in schema)",
      'belongs_to: Course via course_code (explicit)',
      'Assumptions documented, not just coded'
    ],
    movingAway: [
      'Null means draft (implicit)',
      'Joining on matching column names (implicit)'
    ],
    note: 'Not everything needs to be explicit to the same degree. Stable conventions can remain implicit; surprising behavior should be explicit.'
  },
  {
    id: 'D09',
    name: 'Toward Idempotency',
    shorthand: 'Every operation safe to re-run',
    toward: 'Repeatable operations, upsert semantics, stable outcomes',
    away: 'Side effects, duplicate creation, order-dependent results',
    grounding: 'Stable distinction-patterns can be re-accessed without degradation. Idempotency is thermodynamic stability for operations.',
    movingToward: [
      'UPSERT with ON CONFLICT',
      'Check-then-create patterns',
      'Scripts that converge to same state'
    ],
    movingAway: [
      'INSERT without conflict handling',
      'Counters incremented without checking state'
    ],
    note: 'Some operations are inherently non-idempotent (emails, charges). Be idempotent WHERE POSSIBLE.'
  },
  {
    id: 'D10',
    name: 'Toward Observability',
    shorthand: 'See what the system is doing',
    toward: 'Visible state, meaningful logs, progress indicators',
    away: 'Black boxes, silent operations, hidden state',
    grounding: 'Observers need access to make distinctions. A system that hides its state is inaccessible for debugging.',
    movingToward: [
      "Import logs: 'Seeds: 30, LEGOs: 130, PASS'",
      'Health endpoints showing status',
      'Progress bars for long operations'
    ],
    movingAway: [
      "'Import complete.' (How many? Was it successful?)",
      'Background jobs with no status visibility'
    ],
    note: 'Observability has costs. The direction is enough visibility to debug and understand.'
  },
  {
    id: 'D11',
    name: 'Toward Proper Abstractions',
    shorthand: 'Typed structures over string hacks',
    toward: 'Proper parsers, typed data, clean transformations',
    away: 'Regex for structured data, stringly-typed code, clever hacks',
    grounding: 'Proper boundaries are easier to maintain. A typed structure has clear distinctions; a string has implicit ones.',
    movingToward: [
      'seed_number: INTEGER stored directly',
      "status: ENUM('draft', 'released')",
      'Parser that produces typed AST'
    ],
    movingAway: [
      'Regex to extract numbers from formatted strings',
      'status: TEXT (hope nobody typos)'
    ],
    note: 'Legacy systems may require parsing hacks. New code uses proper abstractions; legacy interfaces get explicit adapters.'
  },
  {
    id: 'D12',
    name: 'Toward Delta Sync',
    shorthand: 'version + updated_at on everything',
    toward: 'Incremental updates, change tracking, efficient sync',
    away: 'Full reloads, re-fetching everything, blind overwrites',
    grounding: 'Finite energy means finite distinctions per cycle. Delta sync processes only changed distinctions—thermodynamic efficiency.',
    movingToward: [
      'version INTEGER, updated_at TIMESTAMPTZ on all content',
      'SELECT WHERE updated_at > :last_sync',
      'Conflict resolution via version comparison'
    ],
    movingAway: [
      'No timestamps on content tables',
      'Full table download on every app open'
    ],
    note: 'Simple systems may not need delta sync. The direction matters as systems scale and go offline-first.'
  }
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=Space+Mono:wght@400;700&display=swap');

.principles-page {
  min-height: 100vh;
  background: #0c0c0c;
  color: #e8e4df;
  font-family: 'Crimson Pro', Georgia, serif;
  font-size: 18px;
  line-height: 1.7;
}

/* Hero Section */
.hero {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 4rem;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 30% 50%, rgba(212, 175, 55, 0.08) 0%, transparent 50%),
    radial-gradient(ellipse at 70% 80%, rgba(212, 175, 55, 0.04) 0%, transparent 40%);
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 600px;
}

.version-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(212, 175, 55, 0.1);
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-radius: 2px;
  font-family: 'Space Mono', monospace;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #d4af37;
  margin-bottom: 2rem;
}

.badge-dot {
  width: 6px;
  height: 6px;
  background: #d4af37;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

.hero-title {
  margin: 0 0 2rem;
}

.title-small {
  display: block;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #8a8580;
  margin-bottom: 0.5rem;
}

.title-main {
  display: block;
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 300;
  line-height: 1.1;
  background: linear-gradient(135deg, #e8e4df 0%, #d4af37 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-philosophy {
  font-size: 1.25rem;
  font-style: italic;
  color: #a09a94;
  margin-bottom: 3rem;
  padding-left: 1.5rem;
  border-left: 2px solid rgba(212, 175, 55, 0.3);
}

.btn-explore {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: transparent;
  border: 1px solid rgba(212, 175, 55, 0.5);
  color: #d4af37;
  text-decoration: none;
  font-family: 'Crimson Pro', serif;
  font-size: 1rem;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
}

.btn-explore:hover {
  background: rgba(212, 175, 55, 0.1);
  border-color: #d4af37;
}

.btn-explore svg {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(4px); }
  60% { transform: translateY(2px); }
}

/* Distinction Orb */
.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.distinction-orb {
  position: relative;
  width: 400px;
  height: 400px;
}

.orb-ring {
  position: absolute;
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: 50%;
  animation: orbit 20s linear infinite;
}

.ring-1 {
  inset: 0;
  animation-duration: 20s;
}

.ring-2 {
  inset: 50px;
  animation-duration: 15s;
  animation-direction: reverse;
}

.ring-3 {
  inset: 100px;
  animation-duration: 10s;
}

@keyframes orbit {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.orb-core {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 120px;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.3) 0%, transparent 70%);
  border-radius: 50%;
  box-shadow:
    0 0 60px rgba(212, 175, 55, 0.2),
    0 0 120px rgba(212, 175, 55, 0.1);
}

/* Meta Principle */
.meta-principle {
  background: linear-gradient(180deg, #0c0c0c 0%, #141210 100%);
  padding: 8rem 4rem;
  text-align: center;
}

.meta-content {
  max-width: 800px;
  margin: 0 auto;
}

.meta-label {
  font-family: 'Space Mono', monospace;
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #d4af37;
  margin-bottom: 2rem;
}

.meta-quote {
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-weight: 300;
  font-style: italic;
  line-height: 1.5;
  margin: 0 0 2rem;
  padding: 0;
  border: none;
}

.meta-quote em {
  font-style: normal;
  color: #d4af37;
}

.meta-explanation {
  font-size: 1.125rem;
  color: #8a8580;
  max-width: 500px;
  margin: 0 auto;
}

/* Physics Section */
.physics {
  padding: 6rem 4rem;
  background: #0c0c0c;
}

.physics-header {
  text-align: center;
  margin-bottom: 4rem;
}

.physics-header h2 {
  font-size: 2.5rem;
  font-weight: 300;
  margin: 0 0 0.5rem;
}

.physics-subtitle {
  font-family: 'Space Mono', monospace;
  font-size: 0.875rem;
  color: #6a6560;
  margin: 0;
}

.axioms {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto 4rem;
}

.axiom {
  display: flex;
  gap: 1.5rem;
  padding: 2rem;
  background: rgba(212, 175, 55, 0.03);
  border: 1px solid rgba(212, 175, 55, 0.1);
}

.axiom-number {
  font-family: 'Crimson Pro', serif;
  font-size: 3rem;
  font-weight: 300;
  color: #d4af37;
  line-height: 1;
}

.axiom-content h3 {
  font-size: 1.25rem;
  font-weight: 500;
  margin: 0 0 0.75rem;
  color: #e8e4df;
}

.axiom-content p {
  margin: 0;
  color: #a09a94;
  font-size: 1rem;
}

.derivations {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
}

.derivation {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.derivation-icon {
  font-size: 1.5rem;
  color: #d4af37;
  line-height: 1;
}

.derivation-text h4 {
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  color: #e8e4df;
}

.derivation-text p {
  font-size: 0.875rem;
  color: #8a8580;
  margin: 0;
}

/* Directions Section */
.directions {
  padding: 6rem 4rem;
  background: linear-gradient(180deg, #0c0c0c 0%, #0f0e0c 100%);
}

.directions-header {
  text-align: center;
  margin-bottom: 4rem;
}

.directions-header h2 {
  font-size: 2.5rem;
  font-weight: 300;
  margin: 0 0 0.5rem;
}

.directions-header p {
  font-style: italic;
  color: #8a8580;
  margin: 0;
}

.directions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 1.5rem;
  max-width: 1400px;
  margin: 0 auto;
}

.direction-card {
  background: rgba(20, 18, 16, 0.8);
  border: 1px solid rgba(212, 175, 55, 0.1);
  padding: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.direction-card:hover {
  border-color: rgba(212, 175, 55, 0.3);
  background: rgba(25, 23, 20, 0.9);
}

.direction-card.expanded {
  border-color: rgba(212, 175, 55, 0.4);
  grid-column: 1 / -1;
}

.direction-number {
  font-family: 'Space Mono', monospace;
  font-size: 0.75rem;
  color: #d4af37;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
}

.direction-header {
  margin-bottom: 1.5rem;
}

.direction-name {
  font-size: 1.25rem;
  font-weight: 500;
  margin: 0 0 0.25rem;
  color: #e8e4df;
}

.direction-shorthand {
  font-family: 'Space Mono', monospace;
  font-size: 0.8rem;
  color: #8a8580;
  margin: 0;
}

.direction-gradient {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1.5rem;
}

.gradient-toward, .gradient-away {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.gradient-away {
  text-align: right;
}

.gradient-label {
  font-family: 'Space Mono', monospace;
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.gradient-toward .gradient-label {
  color: #10b981;
}

.gradient-away .gradient-label {
  color: #ef4444;
}

.gradient-value {
  font-size: 0.875rem;
  color: #a09a94;
}

.gradient-arrow {
  width: 80px;
}

.gradient-arrow svg {
  width: 100%;
  height: 20px;
}

.direction-details {
  padding-top: 1.5rem;
  border-top: 1px solid rgba(212, 175, 55, 0.1);
  margin-top: 0.5rem;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

.grounding {
  margin-bottom: 1.5rem;
}

.grounding h4,
.indicators h5,
.contextual-note h5 {
  font-family: 'Space Mono', monospace;
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #d4af37;
  margin: 0 0 0.75rem;
}

.grounding p {
  margin: 0;
  color: #a09a94;
  font-size: 1rem;
}

.indicators {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 1.5rem;
}

.indicator-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.indicator-column li {
  position: relative;
  padding-left: 1.25rem;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: #8a8580;
}

.indicator-column li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.5em;
  width: 6px;
  height: 6px;
  border-radius: 50%;
}

.indicator-column.toward li::before {
  background: #10b981;
}

.indicator-column.away li::before {
  background: #ef4444;
}

.contextual-note {
  padding: 1rem;
  background: rgba(212, 175, 55, 0.05);
  border-left: 2px solid rgba(212, 175, 55, 0.3);
}

.contextual-note p {
  margin: 0;
  font-size: 0.875rem;
  font-style: italic;
  color: #a09a94;
}

.direction-expand {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: 'Space Mono', monospace;
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #6a6560;
  margin-top: 1rem;
}

.direction-expand svg {
  transition: transform 0.3s ease;
}

.direction-expand svg.rotated {
  transform: rotate(180deg);
}

/* Resources Section */
.resources {
  padding: 6rem 4rem;
  background: #0c0c0c;
}

.resources h2 {
  text-align: center;
  font-size: 2rem;
  font-weight: 300;
  margin: 0 0 3rem;
}

.resource-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
}

.resource-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  background: rgba(20, 18, 16, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.05);
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
}

.resource-card:hover {
  border-color: rgba(212, 175, 55, 0.3);
  background: rgba(25, 23, 20, 0.8);
}

.resource-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  color: #d4af37;
}

.resource-card h3 {
  font-size: 1rem;
  font-weight: 500;
  margin: 0 0 0.5rem;
  color: #e8e4df;
}

.resource-card p {
  font-size: 0.875rem;
  color: #6a6560;
  margin: 0;
}

/* Attribution */
.attribution {
  padding: 3rem 4rem;
  text-align: center;
  background: rgba(10, 10, 10, 0.8);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.attribution p {
  margin: 0.5rem 0;
  font-size: 0.875rem;
  color: #6a6560;
}

.attr-label {
  font-family: 'Space Mono', monospace;
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #4a4540;
  margin-right: 0.5rem;
}

/* Responsive */
@media (max-width: 1024px) {
  .hero {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 3rem 2rem;
    min-height: auto;
  }

  .hero-content {
    max-width: none;
  }

  .hero-visual {
    display: none;
  }

  .hero-philosophy {
    border-left: none;
    padding-left: 0;
    border-top: 2px solid rgba(212, 175, 55, 0.3);
    border-bottom: 2px solid rgba(212, 175, 55, 0.3);
    padding: 1.5rem 0;
  }

  .directions-grid {
    grid-template-columns: 1fr;
  }

  .direction-card.expanded {
    grid-column: auto;
  }
}

@media (max-width: 768px) {
  .principles-page {
    font-size: 16px;
  }

  .hero, .meta-principle, .physics, .directions, .resources {
    padding: 3rem 1.5rem;
  }

  .axioms {
    grid-template-columns: 1fr;
  }

  .axiom {
    flex-direction: column;
    gap: 1rem;
  }

  .direction-gradient {
    grid-template-columns: 1fr;
    gap: 0.75rem;
    text-align: center;
  }

  .gradient-toward, .gradient-away {
    text-align: center;
  }

  .gradient-arrow {
    width: 100%;
    transform: rotate(90deg);
    height: 40px;
  }

  .indicators {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .title-main {
    font-size: 2.5rem;
  }

  .meta-quote {
    font-size: 1.25rem;
  }

  .resource-grid {
    grid-template-columns: 1fr;
  }
}
</style>
