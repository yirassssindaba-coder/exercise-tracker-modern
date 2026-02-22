<div align="center">

<!-- Animated Wave Header -->
<img src="https://capsule-render.vercel.app/api?type=waving&height=210&color=0:16a34a,100:22c55e&text=Exercise%20Tracker%20Modern&fontSize=56&fontColor=ffffff&animation=fadeIn&fontAlignY=35&desc=Users%20•%20Exercises%20•%20Logs%20API%20(FCC)&descAlignY=58" />

<!-- Typing SVG -->
<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=18&duration=3000&pause=700&color=16A34A&center=true&vCenter=true&width=780&lines=Create+users%2C+add+exercises%2C+get+logs+(FCC);Fast+setup+%E2%80%A2+Clean+API+%E2%80%A2+PowerShell-friendly;In-memory+store+for+local+dev+%E2%86%92+easy+to+upgrade" />

<!-- Badges -->
![node](https://img.shields.io/badge/node-%3E%3D18-16a34a?logo=node.js&logoColor=white)
![express](https://img.shields.io/badge/express-API-0ea5e9?logo=express&logoColor=white)
![fcc](https://img.shields.io/badge/freeCodeCamp-Exercise%20Tracker-0f172a?logo=freecodecamp&logoColor=white)
![windows](https://img.shields.io/badge/windows-powershell-2563eb?logo=windows&logoColor=white)
</div>

---

## Overview

🏃 **Exercise Tracker Modern** is an Express microservice that matches the FreeCodeCamp Exercise Tracker spec: create users, add exercises, and query logs.

> Note: this project uses an **in-memory store** (data resets when the server restarts). It’s perfect for local/FCC testing and easy to upgrade to MongoDB later.

---

## Features

- ✅ Create users and list all users
- ✅ Add exercises with optional date
- ✅ Get logs with `from`, `to`, and `limit` filters
- ✅ FCC-compatible responses
- ✅ Simple demo UI (`/`)

---

## API Endpoints

- `POST /api/users` — create user (`username`)
- `GET /api/users` — list users
- `POST /api/users/:_id/exercises` — add exercise (`description`, `duration`, optional `date`)
- `GET /api/users/:_id/logs?from&to&limit` — logs

---

## Quick Start

### Windows PowerShell

```powershell
cd "exercise-tracker-modern"

# install dependencies
npm install

# optional: set port (default 3000)
Copy-Item .env.example .env -ErrorAction SilentlyContinue

# run
npm start
```

Open:
- `http://localhost:3000`

---

## Environment Variables

Create `.env` (optional) to override defaults:

```env
PORT=3000
```

---

## Scripts

- `npm start` — run server
- `npm run dev` — watch mode (Node)

---

## Troubleshooting

- **Port already in use** → change `PORT` in `.env`.
- **Dates not filtering as expected** → use ISO format: `YYYY-MM-DD`.

---

## Project Structure

```text
exercise-tracker-modern/
  index.js
  public/
  views/
  README.md
```

---

## License

MIT
