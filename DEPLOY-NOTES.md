# Lobster Condo Deploy Notes

*Updated: March 18, 2026 8 PM*

## Current State
- **Live site:** lobstercondo.net redirects to `/lander` which is a landing page builder (likely PageWiz or similar)
- **Local file:** `projects/lobster-condo/site/index.html` — fully updated with:
  - ✅ 12-month pricing (not "lifetime")
  - ✅ Softened ownership language ("member" not "owner")
  - ✅ Waitlist form (Netlify Forms configured)
  - ✅ Full pricing tiers, FAQ, story section
- **Problem:** Local file is NOT deployed. The live site is a different version.

## Netlify Status
- Site ID: `84da89f1-f800-448b-8a8b-e3f725c0600b`
- URL: `lobstercondo.netlify.app` → custom domain `lobstercondo.net`
- Forms: Empty (no form submissions — form isn't deployed)
- Team: joshbuildswithDoIt

## Deploy Options (Thursday)

### Option A: Netlify CLI Deploy (Fastest)
```bash
cd /path/to/projects/lobster-condo/site
netlify link --id 84da89f1-f800-448b-8a8b-e3f725c0600b
netlify deploy --prod --dir .
```
This will deploy `index.html` as the live site, replacing the lander redirect.

### Option B: Git Deploy
If the Netlify site is connected to a git repo, push the updated `index.html` to the correct repo/branch and it'll auto-deploy.

### Option C: Netlify Dashboard
Upload the site directory directly via the Netlify dashboard drag-and-drop interface.

## Pre-Deploy Checklist
- [ ] Verify `index.html` renders correctly locally (open in browser)
- [ ] Test Netlify Forms integration (form-name="waitlist" attribute)
- [ ] Check OG/Twitter card metadata (preview with Twitter card validator)
- [ ] Confirm Stripe plan (manual invoicing V1 is fine — no Stripe integration needed for waitlist)
- [ ] After deploy: test form submission, verify email capture works

## Post-Deploy Monitoring
- Netlify Forms dashboard: check for waitlist submissions
- `netlify api listSiteSubmissions --data '{"site_id": "84da89f1-f800-448b-8a8b-e3f725c0600b"}'`
- Set up Netlify email notification for new form submissions

## Critical Timeline
- **Thursday Mar 20:** Deploy updated site (Josh at terminal)
- **Saturday Mar 22:** Day 3 post reveals details + links to site
- **Sunday Mar 23:** Launch day — waitlist form MUST be working

**If we can't deploy Thursday, the backup is Saturday morning before the Day 3 post.**
