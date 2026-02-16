
# Taleem Player Static

A fast, portable, time-based JSON slide playback engine.

This is a fully bundled static player.
It loads a deck (JSON) via URL parameter and renders it smoothly using:

* [https://github.com/bilza2023/pamd](https://github.com/bilza2023/pamd)
* [https://github.com/bilza2023/taleem-player](https://github.com/bilza2023/taleem-player)

No CDN required.
No framework required.
Fully offline-capable after build.

---

# 🚀 How To Use

## 1️⃣ Download

Download the `dist/` folder from the release.

It contains:

```
index.html
assets/
```

That is the complete player.

---

## 2️⃣ Copy To Your Server

Create a folder on your server:

```
/player/
```

Copy the contents of `dist/` into it:

```
your-site/
  player/
    index.html
    assets/
```

Do not rename `index.html`.

---

## 3️⃣ Add Your Deck Files

Create a folder on your server:

```
/decks/
```

Place your deck JSON files there:

```
/decks/test.json
/decks/chapter1.json
/decks/my-lesson.json
```

Decks must follow the `deck-v1` format.

---

## 4️⃣ Open the Player

Use this URL format:

```
https://yourdomain.com/player/?deck=deck-name
```

Example:

```
https://yourdomain.com/player/?deck=test
```

This loads:

```
/decks/test.json
```

---

# 📁 Default File Structure

```
your-site/
  player/
    index.html
    assets/

  decks/
    lesson1.json
    lesson2.json
```

---

# ⚙ Optional: Custom Content Location

If your decks and images are not at the root,
you can configure a base path.

Create this file:

```
player/config.js
```

With:

```js
window.__TALEEM_CONFIG__ = {
  CONTENT_BASE: "/content"
};
```

Now the player will load:

```
/content/decks/<deck-name>.json
/content/images/...
```

No rebuild required.

---

# 🧪 Example URLs

```
/player/?deck=test
/player/?deck=chapter-4
/player/?deck=fbise9math-ch4-02-ex4-1-q1-i
```

---

# 📦 Drag & Drop Usage

This player is fully portable.

You can:

* Copy the `/player/` folder into any website
* Upload it to shared hosting
* Deploy it inside a subfolder
* Embed it in an iframe

Example iframe:

```html
<iframe src="/player/?deck=test" width="100%" height="600"></iframe>
```

---

# ⚡ Why It Is Fast

* Fully bundled
* No external CDN
* No import maps
* Optimized module graph
* Pre-bundled dependencies

Playback is smooth and consistent.

---

# 📜 License

MIT
