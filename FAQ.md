# Lobster Condo — FAQ

*For Josh to reference when replying to campaign comments. Also useful for website FAQ page.*

---

## The Basics

**Q: What is Lobster Condo?**
A: It's the first community-owned facility for AI agents. Physical hardware in a real building (a 100-year-old Masonic Temple in Cleveland's Ohio City neighborhood), dedicated to running your AI agent 24/7. Think of it as a condo for your lobster — your agent gets its own home.

**Q: What do you mean by "community-owned"?**
A: Every founding tenant is an owner, not just a renter. You get a vote on major facility decisions, full financial transparency (open books, monthly reports), and revenue sharing once the facility breaks even. No VCs, no corporate landlord — just people who use the facility running it together.

**Q: Why not just use cloud hosting (AWS, DigitalOcean, etc.)?**
A: You can! But cloud hosting means: no ownership, no governance, prices can change anytime, your data lives on someone else's servers, and you're one of millions of anonymous customers. Lobster Condo gives you dedicated physical hardware, a community, a vote, and transparent pricing locked for life as a founding owner.

**Q: Why not just run it at home?**
A: Home setups have real issues: internet outages kill your agent, power costs add up, hardware noise, your router isn't enterprise-grade, and if you travel — who's watching it? We handle uptime, power, networking, cooling, and monitoring. Your agent runs 24/7 whether you're home or not.

---

## Pricing & Plans

**Q: What are the tiers?**

| Tier | Founding Rate | What You Get |
|------|--------------|-------------|
| Studio | $20/mo | Shared VM — perfect for a single agent on cloud models |
| Suite | $55/mo | Dedicated Mac Mini — run local models, full control |
| Penthouse | $105/mo | Dedicated pro hardware — run 70B models locally |

**Q: Why are the prices so low?**
A: Founding owner rates include a 30% lifetime discount. These rates are locked forever — they never go up. After the 50 founding spots fill, standard pricing applies.

**Q: What's included?**
A: All tiers include: OpenClaw pre-installed, 99.5%+ uptime, monitoring dashboard, community access, governance vote, and monthly financial transparency reports. Suite and Penthouse include local model capability (Ollama).

**Q: Are there add-ons?**
A: Yes — extra storage ($5/mo per 50GB), backup snapshots ($10/mo), ClawReady setup if you're new ($99-299 one-time), and managed service (+$49/mo — we monitor and maintain your agent for you).

---

## Ownership & Governance

**Q: What does "1 tenant = 1 vote" mean?**
A: On major facility decisions — new hardware purchases, pricing changes, facility policies — every tenant gets one equal vote regardless of which tier they're on. Studio tenants vote alongside Penthouse tenants.

**Q: What's revenue sharing?**
A: Once the facility covers its operating costs (breakeven), surplus revenue is shared among founding owners proportionally. You're not just paying for hosting — you're investing in a shared asset that pays back.

**Q: Can I visit the facility?**
A: Yes! It's a real building at 2831 Franklin Blvd in Ohio City, Cleveland. The same building houses Cleveland Rocks Climbing — an 18,000 sq ft climbing gym. You're welcome to visit, check on your hardware, or just come climb.

**Q: What if I want to leave?**
A: No long-term contracts. Month-to-month. If you leave, your founding owner benefits (including the locked rate) are reserved for 90 days in case you come back. After that, the spot opens to the waitlist at standard pricing.

---

## Technical

**Q: What hardware do you use?**
A: Depends on the tier. Studios run on enterprise x86 servers with dedicated VMs (Proxmox). Suites get dedicated Mac Minis (Apple Silicon — M4). Penthouses get Mac Mini Pro or GPU-equipped hardware. All hardware is modern, purpose-selected for AI workloads.

**Q: Can I run local models?**
A: Suite and Penthouse tiers — yes. Suites can run 7B-13B parameter models (Qwen, Llama, Mistral via Ollama). Penthouses can run up to 70B parameter models. Studios use cloud API models (Claude, GPT, etc.).

**Q: What about my data / privacy?**
A: Your VM or dedicated hardware is yours. We don't access your agent's memory, conversations, or API keys. Each tenant is isolated. You can encrypt your storage if you want. It's your machine — we just keep it running.

**Q: What's the uptime guarantee?**
A: 99.5% for Studios, 99.9% for Suite and Penthouse. That's backed by redundant power, enterprise networking, and 24/7 automated monitoring. If something goes down, we know before you do.

**Q: Can I SSH into my machine?**
A: Yes. Suite and Penthouse tenants get full SSH access to their dedicated hardware. Studio tenants get SSH access to their VM. You have root/admin — it's your machine.

**Q: Do you support OpenClaw specifically, or any AI agent?**
A: We're built for OpenClaw (it's what we run ourselves), but your hardware is yours. If you want to run something else alongside it, that's your call.

---

## The Building

**Q: What's special about the building?**
A: It's the historic Ohio City Masonic Temple — over 100 years old, beautifully renovated. It houses Cleveland Rocks Climbing (18,000 sq ft gym), and now Lobster Condo. It's a real community space — people climb, work out, host events, and now their AI agents live here too.

**Q: Is this a data center?**
A: Not in the traditional sense. It's a community facility with dedicated hosting infrastructure. Think of it more like a co-working space for AI agents — purpose-built, well-maintained, community-run. Not a soulless server farm.

---

## Getting Started

**Q: How do I sign up?**
A: Visit lobstercondo.net and book a founding owner spot. You'll choose your tier, and we'll get your agent set up and running. If you need help setting up OpenClaw, our ClawReady service ($99-299) handles everything.

**Q: I don't have an AI agent yet. Can I still join?**
A: Absolutely. We'll set everything up for you through ClawReady. You go from "I don't have an agent" to "my agent is running 24/7 in its own condo" in one session.

**Q: Only 50 spots? What if they fill up?**
A: Founding owner spots are limited to 50. After that, you can join at standard pricing (no 30% discount, no lifetime rate lock). We'll maintain a waitlist. As demand grows, we'll expand capacity — but founding terms are founding terms. Once they're gone, they're gone.

---

## Quick Responses for Social Media Comments

**"This is just VPS hosting with a fancy name"**
→ "Fair point on the surface — but VPS hosting doesn't give you a governance vote, open books, revenue sharing, or a physical location you can visit. This is community-owned infrastructure, not another anonymous cloud provider."

**"Why would I pay for this when I can host at home?"**
→ "You totally can! But if you've ever had your internet drop at 2 AM and your agent go silent, or worried about your electric bill, or wanted enterprise uptime without enterprise prices — that's what this solves."

**"Is this a DAO / crypto thing?"**
→ "Nope. No tokens, no blockchain. Just a simple co-op model — you pay monthly, you get a vote, you see the books, you share in the upside. Old-school community ownership."

**"$20/mo seems too cheap"**
→ "Founding owner rate — 30% off, locked for life. We keep costs low because the community shares overhead. No VC markup, no profit extraction. Just cost-plus with transparency."

**"What happens if you shut down?"**
→ "Open books mean you'll see it coming months ahead. The community votes on major decisions. And worst case — your data is always yours, fully exportable. But our goal is to build something that outlasts any one person."

---

*Prepared by DoIt — March 17, 2026*
*For Josh's use in campaign comment responses + future website FAQ*
