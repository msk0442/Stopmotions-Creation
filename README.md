<div align="center">

# 🎥 Stopmotions Creation
**The $100M SaaS-Quality Open-Source Stop-Motion Generator**

An elite, Next.js 14-powered Web App that transforms simple text directly into stunning Stopmotion Animations. Featuring an "Apple-meets-Linear" aesthetic, buttery-smooth Framer Motion animations, and absolute privacy via a **Bring Your Own Key (BYOK)** architecture.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmsk0442%2FStopmotions-Creation)

[![Next.js](https://img.shields.io/badge/Next.js_14-black?style=for-the-badge&logo=next.js&logoColor=white)](#)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](#)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)](#)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](#)
[![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen.svg?style=for-the-badge)](#)

</div>

<br/>

## 🎯 What Does This App Do?
**Stopmotions Creation** is a specialized tool designed to democratize animation. It uses advanced Generative AI models to plan a storyboard and generate hyper-consistent, frame-by-frame images based on a user's text prompt. Once the frames are generated, the app compiles them into a seamless, cinematic **stop-motion video** right in your browser, ready to be downloaded and shared. 

Whether you're a storyteller, marketer, or educator, you can create immersive visual narratives in seconds without needing a production studio!

---

## ✨ Core Features
- **Modern & Immersive UI**: Complete Dark-Mode-First approach utilizing Glassmorphism and Neon accents. Feel the $100M UX.
- **Micro-Interactions Built-in**: Every hover, click, and page load features carefully tuned Framer Motion 3D transforms.
- **BYOK (Bring Your Own Key)**: Zero hardcoded keys. Connect your Gemini API securely. Keys never leave your local browser storage.
- **Modular Architecture**: Ultra-clean DRY codebase structure with decoupled logic and atomic React custom hooks. 

---

## 🧸 For Everyone: A Simple Guide
_Not a developer? No problem! Here's how to use this like a magic wand:_

1. **Deploy It!** Click that big "Deploy with Vercel" button at the top! 🚀
2. **Get Your Key** Head over to Google's Gemini Console and get a free API Key. It's like a VIP pass for the AI. 🎟️
3. **Open Settings** In the top right corner of our app, click the `Settings` button.
4. **Paste and Save** Drop your VIP pass (API key) right in there. It stays strictly on your computer! 🔒
5. **Magic Time** Type what you want to see (e.g., "A ninja cat baking cookies"), and click Generate. 🎬 

---

## 💻 Project Structure
We keep things clean, separated, and highly scalable.

```text
📦 Stopmotions-Creation
 ┣ 📂 src
 ┃ ┣ 📂 app              # Next.js 14 App Router (Page, Layout)
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📂 ui           # Atomic Shadcn Components (Buttons, Dialogs)
 ┃ ┃ ┗ 📜 theme-provider.tsx # Dark Mode Configuration
 ┃ ┣ 📂 hooks            # Reusable Actions (BYOK API Storage)
 ┃ ┗ 📂 lib              # Utilities (Tailwind merge config)
 ┣ 📜 .env.example       # Example variables for forks
 ┣ 📜 tailwind.config.ts # Global theme config
 ┗ 📜 package.json       # Dependencies & Scripts
```

---

## 🛠️ Developer Setup
Want to run it locally or contribute? Let's get building.

**1. Clone the repository**
```bash
git clone https://github.com/msk0442/Stopmotions-Creation.git
cd Stopmotions-Creation
```

**2. Copy Environment template**
```bash
cp .env.example .env.local
```

**3. Install Dependencies**
```bash
npm install
```

**4. Start the Dev Server**
```bash
npm run dev
```

Visit `http://localhost:3000` to see your studio.

---

## 👨‍💻 Meet the Developer

Handcrafted with passion and a pixel-perfect ethos by **Muhammad Schees**, an expert **GenAI Professional**.

- GitHub: [msk0442](https://github.com/msk0442)
- LinkedIn: [Muhammad Schees](https://www.linkedin.com/in/muhammadschees/)
- Focus: GenAI Professional, Senior Full-Stack Engineering, Core UX/UI Architectural Design.

---

## 📄 License
This ultimate UI kit is fully Open-Source under the **MIT License**. Use it, learn from it, and build the future!
