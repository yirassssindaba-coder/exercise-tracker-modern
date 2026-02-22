<div align="center">

<!-- Animated Wave Header -->
<img src="https://capsule-render.vercel.app/api?type=waving&height=210&color=0:0ea5e9,100:22c55e&text=Request%20Header%20Parser&fontSize=54&fontColor=ffffff&animation=fadeIn&fontAlignY=35&desc=Express%20Microservice%20%7C%20IP%20%2B%20Language%20%2B%20User-Agent%20(API)&descAlignY=58" />

<!-- Typing SVG -->
<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=18&duration=2600&pause=650&color=22C55E&center=true&vCenter=true&width=920&lines=FCC%20APIs%20%26%20Microservices%20Project;GET%20%2Fapi%2Fwhoami%20%E2%86%92%20ipaddress%20%2B%20language%20%2B%20software;Fast%2C%20minimal%2C%20deployable%20in%20minutes" />

<p>
  <img src="https://img.shields.io/badge/Node.js-18%2B-339933?logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express-4-111827?logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/freeCodeCamp-Ready-0A0A23?logo=freecodecamp&logoColor=white" />
  <img src="https://img.shields.io/badge/License-MIT-22c55e" />
</p>

<p align="center">
  🛰️ <b>Request Header Parser</b> adalah microservice kecil yang mengembalikan metadata request: <b>IP</b>, <b>bahasa</b>, dan <b>User-Agent</b>.
</p>

</div>

---

## Overview

Project ini adalah implementasi **Request Header Parser Microservice** (freeCodeCamp).  
Kamu cukup jalankan server, lalu akses endpoint:

- `GET /api/whoami` → `{ ipaddress, language, software }`

---

## Features

- ✅ Endpoint `GET /api/whoami` sesuai requirement FCC
- ✅ Output JSON yang simpel dan konsisten
- ✅ CORS enabled (remote testable)
- ✅ `trust proxy` enabled supaya `req.ip` tetap benar di environment cloud/proxy

---

## API

## `GET /api/whoami`

**Response (contoh):**
```json
{
  "ipaddress": "::1",
  "language": "en-US,en;q=0.9,id;q=0.8",
  "software": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) ..."
}
```

## `GET /api/hello` (opsional)

**Response:**
```json
{ "greeting": "hello API" }
```

---

## Quick Start

## Windows PowerShell (VS Code)

```powershell
cd "C:\Users\ASUS\Desktop\Proyek\headerparser-main"   # sesuaikan folder hasil extract
npm install
npm start
```

Buka:
- `http://localhost:3000/`
- `http://localhost:3000/api/whoami`

## macOS / Linux

```bash
npm install
npm start
```

---

## Project Structure

```text
.
├─ index.js          # Express server + routes
├─ public/           # Static assets
├─ views/            # Landing page
├─ sample.env        # Example env
└─ package.json
```

---

## Troubleshooting

## Port already in use

Ganti port sementara (PowerShell):
```powershell
$env:PORT="3001"
npm start
```

## `curl` di PowerShell

Di Windows PowerShell, `curl` kadang alias untuk `Invoke-WebRequest`.  
Alternatif:
```powershell
Invoke-RestMethod http://localhost:3000/api/whoami
```

---

## License

MIT
