# MEMBER'S ELITE — Sports Performance + Management Operating System

Status: PRE-WEBSITE OPERATIONS LOCK

## Positioning
Member's Elite is an athlete-development and sports-management ecosystem. Basketball and Football launch first. Training is the acquisition layer; assessments, recurring memberships, measurable development, camps/showcases, recruiting/NIL support, and qualified management candidates form the lifecycle.

Core lifecycle: TRAIN → DEVELOP → MEASURE → SHOWCASE → RECRUIT → REPRESENT → PLACE → MANAGE.

## Basketball
Head trainer: Coach Tae — active international professional athlete.
Products: $75 assessment; $125 private; 4/$450, 8/$800, 12/$1,050 private packs; semi-private $85/player for 2 or $65/player for 3–4; group $40; Shooting Lab $50; Pro Experience $175; Pro Basketball Camp launch price $249.

## Football
Head trainer: Coach Justin.
Products: $75 assessment; $125 private; 4/$450, 8/$800, 12/$1,050 private packs; Position Academy $40; Speed + Agility $40; Combine Prep $75; 4-week Combine Program $499; Football Elite Camp launch price $199.

## Cross-sport
Saturday Skills Camp $75; Elite One-Day Camp $149; Two-Day Elite Camp $249; Three-Day Elite Academy $349; Team Session $350; 4-pack $1,200; 8-pack $2,200. Season contracts are custom starting at $5,000.

## Memberships
Rookie $149/mo: 4 group sessions, athlete profile, progress tracking, member camp pricing.
Starter $249/mo: 8 group sessions, monthly assessment, performance tracking, athlete profile, member camp pricing.
Elite $399/mo: 8 group + 2 private, monthly assessment, development plan, film review, tracking, priority booking.
Pro $649/mo: 8 group + 4 private, monthly assessment, film analysis, IDP, recruiting/profile consultation, priority booking, camp/showcase discounts.

## Booking Rules
Sport → Program → Athlete → Trainer → Location → Date/Time → Payment → Waiver → Confirmation → Session → Trainer Report → Rebook/Membership.
Assessments are the preferred first purchase. $75 assessment may be credited toward membership when converted within 48 hours. Exact gym/field inventory and coach availability must be configured before calendars are published.

## CRM Pipeline
New Lead → Assessment Offered → Assessment Booked → Assessment Completed → Program Recommended → Trial/First Session → Membership Offered → Active Athlete → Development Tracking → Recruiting Candidate → Management Candidate → Alumni/Pro.
Basketball and Football communications remain isolated branches.

## Required Automations
1. New lead: immediate acknowledgement + assessment CTA.
2. Assessment booked: confirmation, waiver, intake, reminders.
3. No-show: recovery sequence + rebook link.
4. Assessment completed: trainer recommendation + membership offer.
5. First session completed: 2-hour thank-you + 24-hour membership conversion.
6. Active athlete: session reminders + monthly progress review.
7. Package low balance: trigger at 1 session remaining.
8. Inactive athlete: 14/30/60-day reactivation.
9. Recruiting candidate: document/profile checklist and internal review.
10. Management candidate: internal qualification only; no promise of representation.

## Intake Fields
Athlete name, DOB, guardian name/contact when minor, sport, position, school/team, graduation year, experience level, goals, injuries/limitations disclosure, emergency contact, media consent, waiver acceptance, recruiting status, referral source.

## QA / Compliance
No booking is confirmed without payment status and waiver status. Minor athletes require guardian workflow. Coach capacity and location capacity are enforced. Trainer reports are due after each session. Formal agent/contract representation is not marketed as available unless applicable licensing/certification and legal requirements are satisfied.

## Data Source
Canonical sports catalog and operational records are stored in Supabase KOLLECTIVE BOH using the me_* tables. Website implementation must consume the catalog rather than hard-code conflicting prices.