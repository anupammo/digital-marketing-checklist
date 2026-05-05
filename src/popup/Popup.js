import React from "react";
import "./Popup.css";

function Popup() {
  const startAudit = () => {
    chrome.runtime.sendMessage({ action: "startAudit" }, (response) => {
      alert(response.status);
    });
  };

  return (
    <div className="popup-container">
      <h1>Digital Marketing Checklist</h1>
      <p>Run audits on your brand’s social media, business listings, and SEO.</p>
      <button onClick={startAudit}>Start Audit</button>
    </div>
  );
}

export default Popup;
