---
target: src/app/page.tsx
total_score: 19
max_score: 32
na_heuristics: 7,10
p0_count: 1
p1_count: 3
timestamp: 2026-08-26T14-07-51Z
slug: src-app-page-tsx
---
## Design Health Score

| # | Heuristic | Score | Key issue |
|---|---|---:|---|
| 1 | Visibility of System Status | 2/4 | The form shows loading/errors/success, but “success” only then reveals that nothing was sent; carousel position is invisible. |
| 2 | Match System / Real World | 2/4 | English-only presentation, technical stack badges, and the home-services/broad-studio mismatch weaken the Portuguese-local proposition. |
| 3 | User Control and Freedom | 3/4 | Mobile navigation closes cleanly and the form can reset; no major trap is evident. |
| 4 | Consistency and Standards | 3/4 | Components are consistent, but CTA language varies across “Contact us,” “Request a local quote,” and “Request my quote.” |
| 5 | Error Prevention | 2/4 | Inline validation helps, but requirements are hidden until submission and no real transport/failure path exists. |
| 6 | Recognition Rather Than Recall | 2/4 | Sections are labeled, but the hero lacks a direct CTA and the project carousel lacks controls, progress, or a clear swipe cue. |
| 7 | Flexibility and Efficiency | n/a | Persuade surface. |
| 8 | Aesthetic and Minimalist Design | 3/4 | The identity is coherent; repeated glass-card grids and a long middle flatten momentum. |
| 9 | Error Recognition and Recovery | 2/4 | Field errors are specific, but a real send failure and retry cannot occur; the simulated success is misleading. |
| 10 | Help and Documentation | n/a | Persuade surface; the FAQ supplies suitable pre-sales help. |
| **Total** | | **19/32** | **Needs focused improvement before release** |

## Design Specificity Verdict

**Visually authored, strategically under-authored.**

The Digital Greenhouse is recognizable: evergreen/chartreuse, mono headlines, glass layers, rounded geometry, and slow atmospheric motion give MTH Studio a coherent identity. But the page structure remains a familiar agency sequence, and “local Portuguese understanding” is asserted more than demonstrated.

The bigger problem is commercial incoherence. The hero specializes in home-service businesses, the approved product record describes a broader Portuguese software and website studio, and the portfolio spans hospitality, talent, consulting, and pet services. The look feels specific; the story could still be swapped onto many studios.

**Deterministic scan:** 0 findings in `src/app/page.tsx`; no rule violations or false positives. That clean result confirms the page avoids common mechanical anti-patterns, but it does not detect the strategic, trust, or conversion problems above.

**Visual evidence:** Desktop and mobile inspection succeeded in a fresh Chrome tab. At 1440×900, the hero and floating navigation read clearly. At 390×844, the hero becomes very tall, has no direct CTA, and the fixed floating header overlapped the upper contact-form content while scrolling. Mutable script injection was unavailable, so no reliable user-visible Impeccable overlay exists.

## Overall Impression

The page looks more considered than most small-studio sites, but its strongest visual confidence is not matched by an equally decisive proposition or conversion path. The biggest opportunity is to make the promise, proof, and primary action tell one truthful story.

## What’s Working

- The botanical palette, mono/sans pairing, frosted surfaces, and rounded geometry form a distinctive identity rather than a generic monochrome agency kit.
- Much of the copy translates implementation into outcomes: “Less time chasing details” and “A clearer working day” are concrete and buyer-oriented.
- The accessibility baseline is thoughtful: skip navigation, semantic sections, labeled inputs, visible focus, inline errors, meaningful project alt text, and reduced-motion handling.

## Priority Issues

### [P0] The primary conversion action simulates success without sending anything

**Why it matters:** Visitors complete the site’s central task, see “Your request is ready for review,” then learn that nothing was transmitted. This blocks conversion and makes the final emotional memory one of broken trust.

**Fix:** Connect the form to the approved email or CRM endpoint. Implement truthful `submitting → sent → failed` states, preserve input on failure, support retry, and provide direct email/phone fallback. Until then, do not simulate submission.

**Suggested command:** `$impeccable harden`

### [P1] Audience, language, and proof tell different stories

**Why it matters:** A home-services headline, broad software services, English-only Portuguese positioning, and cross-sector projects make prospects question whether the studio is genuinely for them.

**Fix:** Align the hero, service taxonomy, FAQ, and project evidence to the approved broad Portuguese studio position. Decide whether the public journey is English, pt-PT, or deliberately bilingual; ensure every language path is complete.

**Suggested command:** `$impeccable clarify`

### [P1] The first viewport inspires but does not provide a direct next step or credible trust bridge

**Why it matters:** The hero contains no primary action. Visitors must infer that the smaller fixed-header action is the intended path, and the next section offers technology names rather than buyer reassurance.

**Fix:** Add one chartreuse hero CTA and a secondary “See our work” path. Place approved reassurance nearby: one-business-day replies, four-to-six-week website delivery, Leiria/Portugal coverage, and real project proof. Reframe the technology strip around client safeguards and outcomes.

**Suggested command:** `$impeccable layout` or `$impeccable clarify`

### [P1] Project evidence is hidden behind an unmarked carousel

**Why it matters:** Three desktop cards conceal the fourth without arrows, dots, count, or a strong clipped-card cue. Mobile users similarly receive little indication that swiping is available.

**Fix:** Use a visible 2×2 desktop grid for the four projects. If the carousel remains, add 44px controls, position feedback, a mobile next-card peek, keyboard support, and resilient non-JavaScript reading order.

**Suggested command:** `$impeccable adapt`

### [P2] The floating header collides with mobile task content

**Why it matters:** During mobile inspection, the fixed navigation covered the upper `Name` field area. Persistent navigation becomes an obstruction exactly when the visitor begins the high-value form task.

**Fix:** Reduce or hide the floating header after downward scroll, reserve safe top spacing around anchored sections, and verify that menu/button touch targets reach 44px.

**Suggested command:** `$impeccable adapt`

## Cognitive Load

**Moderate: 2 of 8 checklist failures.**

- **Chunking fails:** six service cards, five technology badges, and six FAQ choices are exposed as flat sibling groups.
- **Minimal choices fails:** the service grid and form selector each present six options without a recommended starting path.

The overall section sequence, grouping, hierarchy, working-memory support, and progressive disclosure are otherwise sound.

## Emotional Journey

The cloud hero creates a memorable, confident opening. Outcome-oriented service language sustains early interest, but the technology strip is a weak reassurance moment and repeated card grids create a middle valley. Real project imagery should become the proof peak, yet carousel discoverability reduces its impact. The journey then ends badly: after form effort, the interface admits the message was never sent.

## Persona Red Flags

**Jordan — first-time buyer**

- Sees no direct hero action.
- Must reconcile home-service specialization with hospitality, talent, consulting, and pet-business projects.
- Encounters Next.js, Supabase, Vercel, webhooks, and Core Web Vitals before understanding the buyer benefit.
- Completes the form and discovers it did not contact anyone.

**Riley — deliberate stress tester**

- Finds a timer-driven success state with no transport, failure, or retry.
- Can enter loosely validated phone data without a clear accepted format.
- Reaches Privacy and Terms pages that remain prototype drafts.
- Reads “ready for review,” which implies receipt despite no submission.

**Casey — distracted mobile visitor**

- Has no primary CTA in the hero; it is hidden inside the menu.
- Encounters a very tall, fragmented mobile hero.
- Gets no project-carousel controls or progress cue.
- Sees the floating header overlap contact-form content while scrolling.

## Minor Observations

- “Ways of work” is unnatural; “How we work” is clearer.
- “Teams booked” can imply staffing rather than customer appointments.
- The header logo targets `#main-content` rather than the page-top/home state.
- External project links do not announce that they open a new tab.
- The select label is not explicitly associated with its trigger.
- Six FAQ questions could be grouped into fit, delivery, and ownership.
- Repeating “local” does not itself demonstrate local-market expertise.

## Questions to Consider

- If local understanding is the differentiator, where can a Portuguese buyer see evidence without reading the word “local”?
- Would one concrete project outcome build more trust than five technology badges?
- Should four projects behave as evidence to scan rather than content to discover?
- What must happen after submission for the interface to truthfully earn certainty and personal attention?
