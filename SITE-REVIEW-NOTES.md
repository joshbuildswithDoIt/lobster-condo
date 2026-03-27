# Lobster Condo Site Review — March 18, 2026

## Status
- Local HTML has full site with waitlist form (Netlify Forms)
- Live site redirects to `/lander` — may be a different deploy than this version
- Need to confirm: is the current local `site/index.html` what's deployed?

## Issues Found

### 1. ⚠️ Pricing Inconsistency
- **Hero badge:** "30% OFF LOCKED FOR **LIFE**"
- **Pricing section note:** "locked for **LIFE**" (in subtitle)
- **Waitlist CTA:** "Lock in 30% off for **12 months**"
- **Campaign copy:** "30% off locked for **12 months**"
- **Pick one:** "Life" is a much bigger promise than "12 months." If we mean life, all copy should say life. If we mean 12 months, hero needs to change.
- **Recommendation:** Go with "12 months" — it's safer and still compelling. Creates natural renewal upsell.

### 2. ⚠️ Ownership/Legal Implications
The site uses heavy ownership language:
- "Community-owned facility"
- "Governance vote" — 1 tenant, 1 vote
- "Revenue share after breakeven"
- "Founding Owner" (not just "founding tenant")
- "Not just hosting. Ownership."

**This implies a legal co-op or LLC structure** with members. If Josh means this literally, it needs:
- Operating agreement with member provisions
- Revenue sharing formula documented
- Governance bylaws
- Securities law review (revenue sharing + investment = possible securities offering)

**If it's more marketing language**, we should soften to avoid legal risk:
- Change "Owner" → "Tenant" or "Member"
- Change "Revenue share" → "Loyalty rewards" or "founding member perks"
- Change "Governance vote" → "Founding member council" (advisory, not binding)

**Recommendation:** Ask Josh which direction before launch. This is a real legal question.

### 3. ✅ Waitlist Form
- Netlify Forms configured with honeypot spam protection
- Email capture → success message
- Working correctly in code
- Need to verify it's deployed and Netlify is processing submissions

### 4. Minor Copy Suggestions
- FAQ says "4-6 weeks from hitting milestone" — should match campaign urgency
- Phone number in footer (Google Voice) — fine for now
- ClawReady cross-link is good for funnel
- Free ClawReady setup for founding tenants — great bundle, need to make sure ClawReady can handle volume

## Deploy Checklist (Before Launch Sunday)
- [ ] Confirm current site version is deployed to Netlify
- [x] Resolve pricing duration → **12 months** (Josh confirmed March 18)
- [x] Resolve ownership language → **Softened** (member, not owner; community-driven, not community-owned; shared upside, not revenue share; founding member council, not governance vote)
- [ ] Test Netlify Forms submission flow
- [ ] Connect Stripe (or defer to manual invoicing for V1)
- [ ] Verify OG/Twitter card metadata renders correctly
