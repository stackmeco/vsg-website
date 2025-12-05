// scripts/brandLint.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Scan inside client/src for brand drift
// Note: docs/brand is excluded as it contains examples of banned phrases for reference
const ROOTS = [
  path.join(__dirname, "..", "client", "src"),
];

const BANNED = [
  // Old pillar variants
  "Signal / Value / Human",
  "Signal, Value, Human",
  "Signal · Value · Human",
  "validate the signal",
  // Hypey AI language
  "AI-powered platform",
  "AI-powered",
  "revolutionary AI",
  "game-changing agents",
  "game-changing",
  "AI magic",
  // Anti-patterns
  "move fast and break things",
  "monetize users",
  "harvest data",
  // Dehumanizing language - we prefer "people", "individuals", or "personhood/dignity"
  "the human",
  // Legacy typo - VSP was a typo for VSG, not a separate venture
  "VSP ",
];

// Canonical v3.0 phrases that would otherwise be banned
// These are exact phrases from the v3.0 Brand & Voice System that must be preserved
const CANONICAL_EXCEPTIONS = [
  "Let the machine compute. Let the human connect.", // Intelligence Augmented value
];

function walk(dir, files = []) {
  if (!fs.existsSync(dir)) return files;

  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      walk(full, files);
    } else if (/\.(tsx|ts|jsx|js|md|mdx)$/.test(entry)) {
      files.push(full);
    }
  }
  return files;
}

function lint() {
  let errorCount = 0;
  const files = ROOTS.flatMap((root) => walk(root));

  for (const file of files) {
    const content = fs.readFileSync(file, "utf8");
    
    // Check for canonical exceptions - if any are found, temporarily remove them
    // so they don't trigger false positives on banned substrings
    let contentToCheck = content;
    CANONICAL_EXCEPTIONS.forEach((exception) => {
      contentToCheck = contentToCheck.split(exception).join("");
    });
    
    BANNED.forEach((phrase) => {
      if (contentToCheck.includes(phrase)) {
        console.error(`❌ Found banned phrase "${phrase}" in ${file}`);
        errorCount++;
      }
    });
  }

  if (errorCount > 0) {
    console.error(`\nBrand lint failed with ${errorCount} issue(s).`);
    process.exit(1);
  } else {
    console.log("✅ Brand lint passed (no banned phrases found).");
  }
}

lint();
