// content.js
console.log("Digital Marketing Checklist content script loaded.");

// Listen for background messages
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "scanPage") {
    const results = {};

    // Example: detect Open Graph tags
    const ogTitle = document.querySelector("meta[property='og:title']")?.content;
    const ogDescription = document.querySelector("meta[property='og:description']")?.content;

    results.ogTitle = ogTitle || "Missing";
    results.ogDescription = ogDescription || "Missing";

    console.log("Scan results:", results);

    sendResponse({ status: "Scan complete", data: results });
  }
});
