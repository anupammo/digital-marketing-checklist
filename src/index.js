import React from "react";
import { createRoot } from "react-dom/client";
import Popup from "./popup/Popup";

// Mount the popup UI into the root div in index.html
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);
