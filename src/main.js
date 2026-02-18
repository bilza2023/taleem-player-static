// ----------------------------------
// Global styles (bundled into build)
// ----------------------------------
import "./taleem.css";
import "./app.css";

import "taleem-player/css";
import "taleem-player/css/dark";
import "katex/dist/katex.min.css";

// ----------------------------------
// Public Engine Re-Exports
// ----------------------------------
export {
  createTaleemPlayer,
  resolveAssetPaths,
  resolveBackground,
  getDeckEndTime
} from "taleem-player";

// ----------------------------------
// Timer Adapters
// ----------------------------------
export { createAudioTimer } from "./createAudioTimer.js";
export { createSilentTimer } from "./createSilentTimer.js";

// ----------------------------------
// Orchestration
// ----------------------------------
export { startLoop } from "./play.js";
