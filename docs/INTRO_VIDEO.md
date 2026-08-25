# 60-Second Intro Video — Script & Google Flow Guide

This guide turns the hero "Watch the 60-second intro" button into a live video.
The site is already wired (drop-in ready): put your final video at
`public/intro-video.mp4` and it plays automatically. No code changes needed.

> **Why not AI-generated?** The site's whole brand is honesty — "no invented
> metrics, clients or results". An AI-generated talking head pretending to be
> Salman would mislead visitors. The video below is written so *Salman records
> it* (phone or webcam is fine) — OR you can use Google Flow to generate
> supporting B-roll clips (dashboard-style visuals, marketplace screens) and
> voice over them yourself.

---

## Option A — Record it yourself (recommended, 10 minutes)

1. Open your phone camera (or Loom on your laptop).
2. Read the script below. Don't memorise — natural is better. ~60 seconds.
3. Save the file as `intro-video.mp4` and drop it into the project's `public/` folder.
4. Done — the hero button plays it. (Ask Codebuff to verify if unsure.)

### The script (English — visitors are international clients)

```
"Hi, I'm Salman Bashir.

I started on the operations floor — running real listings, orders, and
payouts across eBay, Depop, Mercari, Etsy, and TikTok Shop. Not theory.

From that I built what holds up: marketplace operations systems, product
sourcing and freight coordination, and internal tools that make a business
actually run.

Everything I build starts with the money — profit, COGS, and the daily
workflow. If it doesn't survive real operations, I don't ship it.

Today I work as a consultant and freelancer — helping sellers run their
marketplaces and building the systems around them. And I train teams to do
the same, hands-on.

If you're running an online business, let's talk. The link is on my
website — I'm one message away."
```

Tip: record 3 takes, pick the best. Landscape (16:9) works best with the
site's player.

---

## Option B — Google Flow for B-roll (bonus polish)

Google Flow (https://labs.google/fx/tools/flow) makes short cinematic clips.
Use it for **background visuals** behind your voice-over, not for a fake
"Salman". Copy-paste prompts, generate, download, then combine with your
recorded voice in any editor (CapCut, Clipchamp, iMovie).

Suggested clips (6–10 seconds each):

1. "Dark, premium workspace with multiple monitors showing e-commerce dashboards, seller analytics and order charts, cinematic, moody lighting"
2. "Close-up of hands reviewing a spreadsheet of profit and COGS numbers, pen marking figures, dark desk, warm lamp light"
3. "Neat rows of packaged products on a warehouse shelf being prepared for shipping, cinematic depth of field"
4. "Abstract digital network of connected business systems and data flowing between nodes, dark blue and gold, premium tech aesthetic"
5. "Person at a desk recording a voice-over into a microphone with a laptop showing a marketplace listing page, professional home office"

Then: voice-over your script over these clips → export `intro-video.mp4` →
drop into `public/`.

---

---

## Urdu Version (Roman Urdu) — record karne ke liye

Same 60-second message in Roman Urdu. Read this into the mic — natural
bolo, memorise mat karo:

```
Assalam-o-Alaikum, main Salman Bashir hoon.

Maine shuruat operations floor se ki — asli listings, orders aur payouts
chalaye eBay, Depop, Mercari, Etsy aur TikTok Shop pe. Sirf theory nahi.

Usi se maine banaya jo sach mein kaam karta hai: marketplace operations
systems, product sourcing aur freight coordination, aur internal tools jo
business ko asli chalate hain.

Meri har cheez money se shuru hoti hai — profit, COGS aur roz ka
workflow. Agar real operations mein tik nahi sakta, to main ship nahi
karta.

Aaj main consultant aur freelancer hoon — sellers ko unke marketplaces
chalane mein help karta hoon aur unke around systems banata hoon. Aur
teams ko hands-on train bhi karta hoon.

Agar aap online business chala rahe hain, to baat karte hain. Link meri
website pe hai — main ek message door hoon.
```

### Google Flow B-roll prompts — Urdu mein samajhne ke liye

Google Flow prompts English mein behtar kaam karte hain, isliye English
prompt copy karo aur yeh Urdu samajhne ke liye:

| # | English prompt (copy karo) | Urdu matlab |
|---|---------------------------|-------------|
| 1 | "Dark, premium workspace with multiple monitors showing e-commerce dashboards, seller analytics and order charts, cinematic, moody lighting" | Dark premium workspace, monitors pe e-commerce dashboards aur order charts, cinematic lighting |
| 2 | "Close-up of hands reviewing a spreadsheet of profit and COGS numbers, pen marking figures, dark desk, warm lamp light" | Profit aur COGS numbers ki spreadsheet review karte haath, pen se figures mark, warm lamp light |
| 3 | "Neat rows of packaged products on a warehouse shelf being prepared for shipping, cinematic depth of field" | Warehouse shelf pe packaged products ki neat rows, shipping ke liye ready, cinematic |
| 4 | "Abstract digital network of connected business systems and data flowing between nodes, dark blue and gold, premium tech aesthetic" | Connected business systems ka digital network, data nodes ke beech flow, dark blue + gold |
| 5 | "Person at a desk recording a voice-over into a microphone with a laptop showing a marketplace listing page, professional home office" | Desk pe person microphone pe voice-over record karta hua, laptop pe marketplace listing, home office |

### Recording tip (Urdu)

- Landscape (16:9) mein record karo — site ka player isi format mein best dikhta hai
- 3 take lo, best wali rakho
- Video export karke naam rakhna: `intro-video.mp4`
- File yahan daalo: project root → `public/` folder
- Bas — hero ka button usay khud chala dega, koi code change nahi chahiye

---

## Option C — Google Vids (if you use Google Workspace)

Google Vids (workspace.google.com) has AI text-to-video powered by Veo 3.
You can paste the script above and it drafts a full 60-second video with
stock-style footage and an AI voice. Review it, export as MP4, drop into
`public/`. Still recommend using your own voice for the final cut.

---

## Where the file goes

| Step | Detail |
|------|--------|
| File name | `intro-video.mp4` |
| Location | project root → `public/intro-video.mp4` |
| Code | already wired: `src/data/content.ts` → `mp4Url: "/intro-video.mp4"` |
| Fallback | if the file is missing, the honest placeholder shows (no broken player) |

## If you'd rather use YouTube instead

1. Upload the video to YouTube (unlisted or public).
2. Open `src/data/content.ts`, find `introVideo`, set
   `youtubeUrl: "https://youtu.be/XXXX"` and clear `mp4Url` (`""`).
3. Ask Codebuff to verify the embed plays.
