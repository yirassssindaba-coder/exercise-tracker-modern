<div align="center">

<!-- Animated Wave Header -->
<img src="https://capsule-render.vercel.app/api?type=waving&height=210&color=0:16a34a,100:22c55e&text=Exercise%20Tracker&fontSize=56&fontColor=ffffff&animation=fadeIn&fontAlignY=35&desc=Users%20•%20Exercises%20•%20Logs%20API%20(FCC)&descAlignY=58" />

<!-- Typing SVG -->
<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=18&duration=3000&pause=700&color=16A34A&center=true&vCenter=true&width=780&lines=Users • Exercises • Logs API (FCC);Fast setup • Clean API • PowerShell-friendly;FreeCodeCamp-ready (modern README)" />

<!-- Badges -->
![node](https://img.shields.io/badge/node-%3E%3D18-16a34a?logo=node.js&logoColor=white) ![express](https://img.shields.io/badge/express-API-0ea5e9?logo=express&logoColor=white) ![fcc](https://img.shields.io/badge/freeCodeCamp-ready-0f172a?logo=freecodecamp&logoColor=white) ![windows](https://img.shields.io/badge/windows-powershell-2563eb?logo=windows&logoColor=white)
</div>

---

## Overview

**🏃 Exercise Tracker: create users, add exercises, and get logs 📒. Express API, clean UI demo, FCC-ready ✅, easy run ⚡.**

---

## Features

- Create users and list them (`/api/users`)
- Add exercises with optional date (`/api/users/:_id/exercises`)
- Get logs with `from`, `to`, and `limit` filters
- In-memory storage for simple local dev (easy to upgrade to MongoDB)
- Static demo UI included

---

## Tech Stack

- Node.js
- Express
- dotenv
- cors

---

## API Routes

- `POST /api/users`
- `GET /api/users`
- `POST /api/users/:_id/exercises`
- `GET /api/users/:_id/logs`

---

## Quick Start

### Windows PowerShell

```powershell
cd "exercise-tracker-modern"
npm install
Copy-Item .env.example .env -ErrorAction SilentlyContinue
npm start
```

---

## Environment Variables

Create `.env` from `.env.example` (or `sample.env`) and edit values:

```env
PORT=3000
```

---

## Scripts

- `npm run start` — Run server
- `npm run dev` — Dev mode with Node watch

---

## Troubleshooting

- If `date` is empty, the API uses today’s date automatically (FCC behavior).
- If you want persistence, connect MongoDB and replace the in-memory Map.

---

## Project Structure

```text
exercise-tracker-modern/
  index.js
  public/
  views/
  package.json
```

---

## License

MIT
