import React, { useState } from "react";
import "./Options.css";

function Options() {
  const [exportFormat, setExportFormat] = useState("markdown");
  const [autoAudit, setAutoAudit] = useState(false);

  const saveSettings = () => {
    chrome.storage.sync.set(
      {
        exportFormat,
        autoAudit
      },
      () => {
        alert("Settings saved!");
      }
    );
  };

  return (
    <div className="options-container">
      <h1>Extension Settings</h1>

      <div className="option-item">
        <label>Export Format:</label>
        <select
          value={exportFormat}
          onChange={(e) => setExportFormat(e.target.value)}
        >
          <option value="markdown">Markdown (.md)</option>
          <option value="pdf">PDF</option>
        </select>
      </div>

      <div className="option-item">
        <label>
          <input
            type="checkbox"
            checked={autoAudit}
            onChange={(e) => setAutoAudit(e.target.checked)}
          />
          Run audit automatically on page load
        </label>
      </div>

      <button onClick={saveSettings}>Save Settings</button>
    </div>
  );
}

export default Options;
