
# 📘 Taleem Player App — Usage Guide

Taleem Player App allows you to play Taleem slide decks with audio using just **two files**:

```
taleem-player-app.js
taleem-player-app.css
```

No installation required.
Just copy the files and use the template below.

---

# 📂 Step 1 — Folder Structure

Place the files like this:

```
your-project/
  index.html
  dist/
    taleem-player-app.js
    taleem-player-app.css
  decks/
    test.json
  audio/
    music.mp3
  images/
```

If you do not have your own deck yet, use:

```
decks/test.json
```

If you do not have your own audio yet, use:

```
audio/music.mp3
```

---

# 🧩 Step 2 — Copy This `index.html`

Create a file named `index.html` and paste this:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Taleem Player</title>

  <!-- Player Styles -->
  <link rel="stylesheet" href="./dist/taleem-player-app.css" />
</head>

<body>

  <!-- Player Mount -->
  <div id="app"></div>

  <!-- Basic Controls -->
  <div class="nav-test">
    <button id="play-btn">▶</button>
    <button id="pause-btn">⏸</button>
    <button id="stop-btn">⏹</button>

    <span id="time">0.0s</span>

    <div class="scrub-wrap">
      <input
        id="scrub"
        type="range"
        min="0"
        max="1"
        step="0.1"
      />
    </div>
  </div>

  <script type="module">
    import {
      createTaleemPlayer,
      resolveAssetPaths,
      resolveBackground,
      getDeckEndTime,
      createAudioTimer,
      startLoop
    } from "./dist/taleem-player-app.js";

    async function init() {

      // 🔵 CHANGE THIS to load your own deck
      const deckUrl = "/decks/test.json";

      const res = await fetch(deckUrl);
      if (!res.ok) {
        document.body.innerHTML = "<h2>Deck not found</h2>";
        throw new Error("Deck not found");
      }

      const deck = await res.json();

      // Fix image paths
      resolveAssetPaths(deck, "/images/");
      resolveBackground(deck, "/images/");

      // 🔊 Audio file (change if needed)
      const timer = createAudioTimer("/audio/music.mp3");

      // Create player
      const player = createTaleemPlayer({
        mount: "#app",
        deck
      });

      const duration = getDeckEndTime(deck);

      // Start playback
      startLoop({
        player,
        timer,
        duration,
        ui: {
          playBtn: document.getElementById("play-btn"),
          pauseBtn: document.getElementById("pause-btn"),
          stopBtn: document.getElementById("stop-btn"),
          scrub: document.getElementById("scrub"),
          timeEl: document.getElementById("time")
        }
      });
    }

    init();
  </script>

</body>
</html>
```

---

# ▶️ Step 3 — Open in Browser

Simply open `index.html` in your browser.

The player will:

* Load the deck from `/decks/test.json`
* Load the audio from `/audio/music.mp3`
* Display slides
* Sync playback with sound
* Enable play, pause, stop, and scrub

---

# 🔁 To Use Your Own Deck

1. Place your deck inside:

```
decks/
```

2. Change this line:

```js
const deckUrl = "/decks/your-file.json";
```

3. Reload the page.

---

# 🔊 To Use Your Own Audio

1. Place your audio file inside:

```
audio/
```

2. Change this line:

```js
const timer = createAudioTimer("/audio/your-audio-file.mp3");
```

3. Reload the page.

---

# 📌 Important Notes

* Always include `taleem-player-app.css`
* Make sure deck, images, and audio folders exist
* Audio is optional, but recommended
* The player works best when audio duration matches slide timing

---

# ✅ That’s It

Copy files
Copy template
Set deck path
Set audio path
Open in browser

Done. 🔥
