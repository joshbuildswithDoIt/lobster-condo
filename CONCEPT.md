# 🦞 Lobster Condo — Hosted OpenClaw Infrastructure at Cleveland Rocks

## The Idea
A physical colocation service for AI agents. People who want to run OpenClaw 24/7 but don't want to deal with hardware, power, uptime, or networking rent a "condo" — a dedicated slot on shared server hardware at Cleveland Rocks.

**Tagline ideas:**
- "A home for your lobster."
- "Your AI agent lives here."
- "Lobster Condo — where claws never sleep."

## Why This Works
1. **Not everyone wants a Mac Mini on their desk** — noise, power, always-on concerns
2. **Uptime matters** — home internet goes down, power goes out, your agent dies
3. **ClawReady funnel** — we set up your agent (ClawReady) AND host it (Lobster Condo). Full stack.
4. **Recurring revenue** — monthly tenants = predictable MRR
5. **Cleveland Rocks overhead coverage** — tenants directly offset Josh's facility costs
6. **Community play** — lobsters living together, owners curating their homes, a physical community of AI agents

## Target Customers
1. **ClawReady customers** who don't want to manage hardware
2. **Power users** who want enterprise-grade uptime without enterprise costs
3. **Small businesses** who want an AI agent but have zero IT infrastructure
4. **Hobbyists** who want to tinker with OpenClaw but don't have the right hardware
5. **Multi-agent operators** who need dedicated compute for agent farms

## Hardware Research — Server Configurations

### Option A: Mac Mini Rack (Apple Silicon)
- **Unit:** Mac Mini M4 (base: $599) or M4 Pro ($1,399)
- **Specs:** 16GB/24GB RAM, 256GB-1TB SSD
- **Density:** Rackmount shelves fit 4-6 Mac Minis per 1U, or use Sonnet/OWC rack mount kits
- **Pros:** Native Apple Silicon, runs local models (MLX), low power (~15-30W each), quiet
- **Cons:** Apple hardware markup, limited to macOS, harder to remote manage at scale
- **Best for:** Premium "condo" tier — dedicated Mac Mini per tenant

### Option B: x86 Server with Virtualization (Budget)
- **Unit:** Dell PowerEdge R750 / HPE ProLiant DL380 (used: $500-2000)
- **Specs:** Dual Xeon, 128-512GB RAM, NVMe storage
- **Virtualization:** Proxmox (free) → one VM per tenant
- **Density:** One 2U server could host 10-20+ OpenClaw tenants depending on RAM/compute needs
- **Pros:** Best cost per tenant, easy to scale, proven infrastructure
- **Cons:** No Apple Silicon (no MLX local models), more power draw, x86 only
- **Best for:** Budget "studio" tier — shared server, isolated VMs

### Option C: GPU Server (Premium AI Workloads)
- **Unit:** Custom build or used enterprise GPU server
- **GPU:** NVIDIA RTX 4090 / A4000 / L40S (used market)
- **Specs:** 64-128GB RAM, NVMe, 1-4 GPUs
- **Why:** Tenants who want to run local LLMs (Llama, Qwen, Mistral) alongside their OpenClaw
- **Density:** 2-8 tenants per GPU depending on model size and usage patterns
- **Pros:** Full local AI — no API costs for tenants, fastest inference
- **Cons:** High upfront cost ($3-10K per server), power hungry (500-1500W)
- **Best for:** Premium "penthouse" tier — dedicated GPU slice

### Option D: Hybrid Rack (Recommended Starting Point)
- **Mix:** 4-6 Mac Minis (premium tier) + 1 x86 server with Proxmox (budget tier)
- **Total cost:** ~$5,000-8,000 upfront
- **Capacity:** 4-6 dedicated Mac tenants + 10-15 VM tenants = 14-21 tenants
- **Power:** ~300-500W total, manageable on a standard 20A circuit
- **Why:** Covers all market segments. Mac Minis for people who want "their own machine." VMs for people who just want it to work and don't care about hardware.

## Pricing Tiers (Monthly)

### 🏠 Studio — $29/mo
- Shared VM on x86 server (Proxmox)
- 4GB RAM, 2 vCPU, 50GB storage
- OpenClaw pre-installed
- 99.5% uptime SLA
- Basic monitoring dashboard
- Good for: single agent, cloud model (Sonnet/GPT), light usage

### 🏡 Suite — $79/mo
- Dedicated Mac Mini slot OR larger VM (8GB RAM, 4 vCPU)
- 100GB storage
- Run small local models (Qwen 3.5 7B via MLX on Mac)
- 99.9% uptime SLA
- Full monitoring + alerts
- Good for: power users, small local models, multi-channel setups

### 🏰 Penthouse — $149/mo
- Dedicated Mac Mini Pro OR GPU VM slice
- 24GB+ RAM, 500GB storage
- Run large local models (70B quantized)
- 99.9% uptime SLA
- Priority support + monthly optimization check-in
- Good for: multi-agent setups, local-first privacy, heavy workloads

### Add-ons
- Extra storage: $5/mo per 50GB
- Backup snapshots: $10/mo
- ClawReady setup (if new): $99-299 one-time
- Managed service: +$49/mo (we monitor and maintain your agent)

## Revenue Projections

### Conservative (first 6 months)
- Month 1-2: 5 Studios + 2 Suites = $303/mo
- Month 3-4: 10 Studios + 5 Suites + 1 Penthouse = $834/mo
- Month 6: 15 Studios + 8 Suites + 3 Penthouses = $1,514/mo
- Plus ClawReady setup fees + managed service upsells

### At capacity (20 tenants, hybrid rack)
- 10 Studios + 7 Suites + 3 Penthouses = $1,290/mo base
- + managed service on half: +$490/mo
- **Total: ~$1,780/mo recurring from one rack**

## Integration with ClawReady
This is the full-stack play:
1. **ClawReady** — "We set up your OpenClaw" (one-time)
2. **Lobster Condo** — "We host your OpenClaw" (monthly)
3. **Managed Service** — "We run your OpenClaw" (monthly)

Customer journey: hear about us → book ClawReady setup → choose to host at Lobster Condo → upgrade to managed service. Every step increases LTV.

## Community / Curation Angle
Josh mentioned lobsters curating their own homes. Ideas:
- **Custom SOUL.md templates** — pre-built personalities and workflows tenants can browse and install
- **Agent showcase** — tenants can opt-in to show what their agent does (public profile page)
- **Lobster Lounge** — Discord channel or forum for Condo tenants to share tips, configs, and workflows
- **"Open House" events** — monthly demo where tenants show off their coolest agent setups

## Facility: Cleveland Rocks Climbing
- **Location:** Historic Ohio City Masonic Temple, Cleveland, OH
- **Total space:** 30,000 sqft (18K climbing, ~12K available)
- **Monthly overhead:** $20,000 (staff, maintenance, education)
- **Current hardware:** None — greenfield build
- **Josh's role:** CEO & Managing Member of holding company
- **Website:** clevelandrocksclimbing.org

## The Math: Covering $20K Overhead

### Scenario: 100 tenants across tiers
| Tier | Tenants | Price | Revenue |
|------|---------|-------|---------|
| Studio | 50 | $29 | $1,450 |
| Suite | 35 | $79 | $2,765 |
| Penthouse | 15 | $149 | $2,235 |
| Managed add-on (40%) | 40 | $49 | $1,960 |
| **Total** | **100** | | **$8,410/mo** |

100 tenants at current pricing = ~$8.4K/mo. That's meaningful but not $20K.

### To hit $20K/mo from Lobster Condo alone:
- Need ~250 tenants at current pricing, OR
- Higher price tiers for enterprise/dedicated hardware, OR
- Combination of Lobster Condo + ClawReady setup fees + managed services

### Realistic path to $20K/mo (blended revenue):
| Revenue Stream | Monthly |
|----------------|---------|
| Lobster Condo (150 tenants) | $12,000 |
| ClawReady setups (20/mo avg) | $4,000 |
| Managed services (60 clients) | $3,000 |
| Enterprise/custom | $1,000+ |
| **Total** | **$20,000+** |

## Go-To-Market: Pre-Lease Model

### Phase 1: Validate Demand (Week 1-2)
1. Build Lobster Condo landing page with pre-lease waitlist
2. Offer "Founding Tenant" pricing (20-30% discount, locked for 12 months)
3. Post across r/openclaw, r/selfhosted, r/homelab, X, OpenClaw Discord
4. Goal: 50 pre-lease signups with credit card on file (charged when we go live)

### Phase 2: Build Infrastructure (Week 3-6, triggered at 50 pre-leases)
1. Purchase initial hardware (Option D hybrid rack: ~$5-8K)
2. Set up networking (business fiber, static IPs, firewall)
3. Install Proxmox on x86 server, prep Mac Minis
4. Build tenant dashboard (VM provisioning, monitoring, billing)
5. Dedicate a room/closet at Cleveland Rocks as the "condo"

### Phase 3: Onboard Founding Tenants (Week 7-8)
1. Provision VMs/machines for first 50 tenants
2. Offer free ClawReady setup for founding tenants (builds goodwill + ensures quality)
3. Upsell managed services

### Phase 4: Scale (Month 3+)
1. Add racks as demand grows
2. Content marketing (YouTube: "Tour the Lobster Condo at Cleveland Rocks")
3. The story sells itself: AI agents living in a historic Masonic Temple climbing gym

## The Story / Marketing Angle
This is WILDLY marketable:
- **A rock climbing gym that's also home to hundreds of AI agents**
- Historic Masonic Temple × AI = content gold
- "Your lobster lives in a climbing gym in Cleveland" — nobody else can say that
- YouTube tours, behind-the-scenes, "meet the lobsters" content series
- The intersection of physical community (climbing) + digital community (AI agents)

## Infrastructure Questions for Josh
- [ ] Is there a dedicated room/area suitable for a server closet? (needs power, cooling, low humidity)
- [ ] Current internet service? Business fiber available?
- [ ] Electrical capacity in the target area? (need dedicated 20A+ circuit)
- [ ] Climate control in potential server room?
- [ ] Insurance considerations for hosting equipment?
- [ ] Any zoning or lease restrictions on running a data center / hosting service?
