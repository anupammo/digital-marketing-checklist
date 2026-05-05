// background.js
chrome.runtime.onInstalled.addListener(() => {
  console.log("Digital Marketing Checklist Extension installed.");
});

// Listen for messages from popup or content scripts
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "startAudit") {
    console.log("Audit triggered from popup.");
    // Example: send message to content script
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: "scanPage" });
    });
    sendResponse({ status: "Audit started" });
  }
});
