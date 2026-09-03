# 🚍 Greenline Express — Scroll-Scrubbed 3D World(live demo:https://3dbuslandingpage.netlify.app/)

An immersive, scroll-driven "fly-through-the-world" web experience for **Greenline Express** luxury coach services. As visitors scroll, a continuous camera descends into miniature clay diorama islands, explores the executive terminal and luxury double-decker sleeper cabin, cruises across a scenic bridge, and arrives at the city center plaza with zero visible cuts.

Built with **React 18**, **Vite**, **Tailwind CSS**, and powered by the **`lets-scroll`** continuous camera scrub engine.

---

## 🌟 Visual Journey (The 4 Scenes)

| Scene | Stage | Visual Description | Transition |
| :--- | :--- | :--- | :--- |
| **01** | **VIP Terminal Lounge** | Executive glass pavilion, illuminated boarding bay, passengers with luggage, and sleek green coach. | ✈️ **Aerial Connector 1** (`conn1.mp4`) |
| **02** | **Sleeper Suite Cabin** | Double-decker cross-section diorama with emerald-green plush recliners, wood finishes, and media screens. | ✈️ **Aerial Connector 2** (`conn2.mp4`) |
| **03** | **Scenic Bridge Cruise** | Cable-stayed bridge diorama over a tranquil river, sunset reflections, and express highway lanes. | ✨ **Micro-Crossfade** (Graceful fallback) |
| **04** | **Grand City Arrival** | Contemporary transit terminal plaza, illuminated clock tower monument, concierge, and booking CTA. | 🏁 **Final Destination** |

---

## 🛠️ How It Works (The `lets-scroll` Architecture)

### 1. Scroll-to-Video Scrubbing
Unlike standard autoplaying background videos, video playback time (`currentTime`) is mathematically driven by the visitor's scroll position:
* **rAF Smoothing**: A continuous `requestAnimationFrame` lerp loop smoothly interpolates the video's playhead to eliminate scroll stutter.
* **Seek Coalescing**: Prevents decoders from choking when users flick or fast-scroll by waiting for seeking operations to resolve before dispatching the next timestamp.
* **In-Memory Blob Playback**: Static hosts often fail to support HTTP byte-range requests, pinning HTML5 `<video>` seek ranges to zero. The engine fetches each MP4 as a `Blob` and mounts it via an in-memory object URL for unrestricted random-access seeking.

### 2. The Seamless Seam Law (Frame Matching)
To avoid jarring jump-cuts ("pops") between AI-generated clips:
* Connector clips do not start or end on static prompt stills.
* **Start Frame** of Connector $i$ = **Exact rendered last frame** of Dive $i$ (extracted with `ffmpeg`).
* **End Frame** of Connector $i$ = **Exact rendered first frame** of Dive $i+1$.
* A short, imperceptible micro-crossfade dissolves between neighboring clips.

### 3. Graceful Connector Fallbacks
If a connector cannot be rendered (e.g. credit limits or content filters), the engine supports setting that connector slot to `null`. The engine automatically dissolves directly between the two adjacent dives without breaking the scroll chain.

---

## 🎨 Brand Design Tokens

* **Background**: `#F6F4EE` *(Warm Ivory / Cream)*
* **Primary Brand**: `#0D4A36` *(Deep Forest Emerald)*
* **Accent Glow**: `#10B981` *(Mint Lime / Badges)*
* **Text & Frame**: `#1E2522` *(Asphalt Charcoal)*
* **Secondary Text**: `#5A6B65` *(Soft Slate)*
* **Highlight**: `#E5A93C` *(Sunset Amber / Gold)*

---

## 🚀 Quick Start

### Prerequisites
* Node.js (v18+)
* npm

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your browser.

### 3. Production Build
```bash
npm run build
```
Creates an optimized production bundle in `dist/`.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📂 Project Structure

```
GreenLine/
├── public/
│   └── assets/
│       ├── img/               # Optimized WebP scene posters (~200KB each)
│       │   ├── terminal.webp
│       │   ├── cabin.webp
│       │   ├── highway.webp
│       │   └── arrival.webp
│       └── vid/               # Scrub-optimized H.264 MP4 clips (GOP 8)
│           ├── terminal.mp4
│           ├── conn1.mp4
│           ├── cabin.mp4
│           ├── conn2.mp4
│           ├── highway.mp4
│           └── arrival.mp4
├── src/
│   ├── components/
│   │   ├── LetsScrollWorld.jsx  # React wrapper for the scrub engine
│   │   ├── BookingModal.jsx     # Interactive ticket booking modal
│   │   └── FleetModal.jsx       # Luxury coach fleet specs modal
│   ├── lib/
│   │   └── scrub-engine.js      # Core scroll engine (lifecycle-hardened)
│   ├── App.jsx                  # Main application state & journey config
│   ├── main.jsx                 # React root entry point
│   └── index.css                # Tailwind directives & custom animations
├── lets-scroll-work/            # Raw AI stills, prompts & scratch assets
│   ├── still_*.png              # 1536x1024 3:2 master stills
│   ├── dive_*.mp4               # Raw generated dive clips
│   ├── conn*.mp4                # Raw generated connector clips
│   └── extract_frames.py        # Frame boundary extraction script
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 🎞️ Video Encoding Specifications

All videos in `public/assets/vid/` are encoded using FFmpeg specifically for browser scrubbing:

```bash
ffmpeg -y -i input.mp4 -an -vf "unsharp=5:5:0.8:5:5:0.0" \
  -c:v libx264 -preset fast -crf 20 -pix_fmt yuv420p \
  -g 8 -keyint_min 8 -sc_threshold 0 \
  -movflags +faststart output.mp4
```

* **`-g 8`**: Sets keyframe interval to every 8 frames (~0.33s), enabling instantaneous seeking with minimal decoding latency.
* **`-an`**: Strips unused audio tracks to save bandwidth.
* **`+faststart`**: Moves the MP4 `moov` atom to the front of the file for immediate streaming.
* **`unsharp`**: Compensates for AI video codec softness.

---

## 📱 Mobile & Accessibility Hardening

* **iOS Safari Priming**: Muted play-then-pause on first touch gesture to allow iOS Safari to render seeked frames without blank black screens.
* **Safe-Area Insets**: Uses `env(safe-area-inset-bottom)` and `dvh` units so titles and CTAs never collide with home indicators or collapsible browser bars.
* **Resize Stabilization**: Ignores height-only touch resizes caused by mobile address bars sliding in/out.
* **`prefers-reduced-motion`**: Automatically disables video scrub and particle drift, falling back to gentle cross-dissolving poster stills.

---

## 📄 License
MIT License. Built with the `lets-scroll` skill for Greenline Bus.
