/**
 * Checklist Loader
 * Loads Markdown checklist files and parses them into structured JSON.
 * Each checklist item is represented as { text: string, completed: boolean }.
 */

export async function loadChecklist(filePath) {
  try {
    const response = await fetch(chrome.runtime.getURL(filePath));
    const text = await response.text();

    // Parse Markdown checklist items
    const lines = text.split("\n");
    const items = [];

    lines.forEach((line) => {
      const match = line.match(/-\[( |x)\](.+)/i);
      if (match) {
        items.push({
          text: match[2].trim(),
          completed: match[1].toLowerCase() === "x"
        });
      }
    });

    return items;
  } catch (error) {
    console.error("Error loading checklist:", error);
    return [];
  }
}

/**
 * Calculate completion ratio for a checklist
 * @param {Array} items - Checklist items
 * @returns {Number} Completion ratio (0–1)
 */
export function getCompletionRatio(items) {
  if (!items.length) return 0;
  const completed = items.filter((item) => item.completed).length;
  return completed / items.length;
}
