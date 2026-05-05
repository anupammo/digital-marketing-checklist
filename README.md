# 🚀 Digital Marketing Checklist Chrome Extension

A Chrome extension that audits **social media accounts, business listings, and SEO** using structured checklists.  
It provides **numeric scores, qualitative ratings, and exportable reports** (Markdown/PDF) for agencies, freelancers, and businesses.

---

## 📂 Project Structure

```plaintext
digital-marketing-checklist/
│
├── README.md                # Main project overview
├── LICENSE                  # MIT License file
│
├── package.json             # Dependencies & scripts
├── .gitignore               # Git ignore rules
│
├── /public                  # Static assets (icons, logos, manifest)
│   ├── icon.png
│   ├── manifest.json
│   └── index.html
│
├── /src                     # Core plugin source code
│   ├── index.js             # Entry point
│   ├── background.js        # Background tasks (scanning, reporting)
│   ├── content.js           # Content scripts for DOM scanning
│   ├── popup/               # UI for extension popup
│   │   ├── Popup.js
│   │   ├── Popup.css
│   │   └── Popup.html
│   ├── options/             # Settings page
│   │   ├── Options.js
│   │   ├── Options.css
│   │   └── Options.html
│   └── utils/               # Helper functions
│       ├── scoring.js          # Scoring model logic
│       ├── checklistLoader.js  # Loads checklist files
│       └── reportGenerator.js  # Generates reports (PDF/Markdown)
│
├── /checklists              # Platform-specific audit checklists
│   ├── facebook-page.md
│   ├── INSTAGRAM.md
│   ├── LINKEDIN.md
│   ├── YOUTUBE.md
│   ├── TIKTOK.md
│   ├── PINTEREST.md
│   ├── TWITTER-X.md
│   ├── THREADS.md
│   ├── WHATSAPP.md
│   ├── TELEGRAM.md
│   └── GBP.md               # Google Business Profile
│
├── /reports                 # Exported reports (PDF/Markdown)
│   ├── sample-report.md
│   └── audit-template.md
│
└── /tests                   # Unit & integration tests
    ├── checklist.test.js
    ├── scoring.test.js
    └── report.test.js
```

---

## ⚙️ Features

- ✅ **Platform-specific checklists** (Facebook, Instagram, LinkedIn, YouTube, TikTok, GBP, etc.)
- 📊 **Weighted scoring model** (Account Setup, Engagement, Ads, Security, Analytics)
- 📝 **Exportable reports** in Markdown or PDF
- 🔒 **Privacy-friendly** — all audits run locally in the browser
- 🎯 **Configurable options** (auto-audit, export format)

---

## 🛠️ Installation (Development)

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/digital-marketing-checklist.git
   ```
   ```bash
   cd digital-marketing-checklist
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the extension:
   ```bash
   npm run build
   ```

4. Load into Chrome:
   - Open `chrome://extensions/`
   - Enable **Developer Mode**
   - Click **Load unpacked**
   - Select the `digital-marketing-checklist/dist` folder

---

## 🧪 Testing

Run unit tests with Jest:

```bash
npm test
```

Covers:
- Scoring model (`scoring.test.js`)
- Checklist loader (`checklist.test.js`)
- Report generator (`report.test.js`)

---

## 📄 License

This project is licensed under the **MIT License**.  
See the `[Looks like the result wasn't safe to show. Let's switch things up and try something else!]` file for details.

---

## 👨‍💻 Author

Developed by **Anupam Mondal**  
Full Stack Developer & Technical Consultant  
14+ years professional experience in IT & Web Development
```

---
