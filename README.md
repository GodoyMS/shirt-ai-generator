# Clothe AI — 3D AI-Powered Shirt Customizer

An interactive 3D shirt customization tool powered by OpenAI DALL-E 3. Users can personalize a real-time 3D shirt model with custom colors, uploaded images, or AI-generated artwork from text prompts, then download the result as a PNG.

---

## Table of Contents

- [Demo & Features](#demo--features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the App](#running-the-app)
- [API Reference](#api-reference)
- [Architecture Overview](#architecture-overview)
- [Deployment](#deployment)
- [Contributing](#contributing)

---

## Demo & Features

| Feature | Description |
|---|---|
| **3D Shirt Preview** | Real-time interactive 3D model with orbit controls and dynamic lighting |
| **Color Picker** | Change shirt base color with a full-spectrum color wheel |
| **File Upload** | Apply any image as a small chest logo or a full-body print |
| **AI Image Generation** | Type a prompt and generate artwork via DALL-E 3 applied as logo or full print |
| **Camera Angles** | Switch between left, center, and right viewpoints |
| **Download** | Export the current 3D render as a PNG file |

---

## Tech Stack

### Frontend
| Tool | Version | Purpose |
|---|---|---|
| React | 18.2 | UI framework |
| Vite | 4 | Build tool & dev server |
| Three.js | 0.151 | 3D graphics engine |
| @react-three/fiber | 8 | React renderer for Three.js |
| @react-three/drei | 9 | Three.js helpers & abstractions |
| Framer Motion | 10 | Page and component animations |
| Valtio | 1.10 | Global state management |
| Tailwind CSS | 3 | Utility-first styling |
| react-color | 2.19 | Color picker component |

### Backend
| Tool | Version | Purpose |
|---|---|---|
| Node.js / Express | 4.18 | REST API server |
| OpenAI SDK | 4+ | DALL-E 3 image generation |
| dotenv | 16 | Environment variable loading |
| CORS | 2.8 | Cross-origin request handling |
| Nodemon | 2 | Auto-restart during development |

---

## Project Structure

```
clothe-ai/
├── client/                         # React + Vite frontend
│   ├── public/
│   │   └── shirt_baked.glb         # 3D shirt model
│   └── src/
│       ├── canvas/                 # Three.js scene components
│       │   ├── index.jsx           # Canvas setup, lighting, controls
│       │   ├── Shirt.jsx           # 3D shirt mesh with decal support
│       │   ├── CameraRig.jsx       # Responsive camera positioning
│       │   └── Backdrop.jsx        # Shadow + lighting environment
│       ├── components/             # Reusable UI components
│       │   ├── AIPicker.jsx        # Prompt input + generate buttons
│       │   ├── ColorPicker.jsx     # Sketch color picker
│       │   ├── FilePicker.jsx      # Image file upload
│       │   ├── CustomButton.jsx    # Styled button with contrast color
│       │   ├── Tab.jsx             # Editor/filter tab buttons
│       │   ├── DirectionTabs.jsx   # Camera angle controls
│       │   └── DownloadTab.jsx     # Download render button
│       ├── config/
│       │   ├── config.js           # Backend URL & API key config
│       │   ├── constants.js        # Tab definitions & decal types
│       │   ├── helpers.js          # downloadCanvasToImage, reader, getContrastingColor
│       │   └── motion.js           # Framer Motion animation variants
│       ├── pages/
│       │   ├── Home.jsx            # Landing page with intro animation
│       │   └── Customizer.jsx      # Main editor interface
│       ├── store/
│       │   └── index.js            # Valtio global state proxy
│       ├── App.jsx
│       ├── main.jsx
│       └── index.css
│
└── server/                         # Express backend
    ├── routes/
    │   ├── dalle.routes.js         # POST /api/v1/dalle — image generation
    │   └── serverAlive.routes.js   # Ping endpoint for uptime
    └── index.js                    # Server entry point
```

---

## Getting Started

### Prerequisites

- **Node.js** v18 or later
- **npm** v8 or later
- An **OpenAI API key** with access to the Images API (DALL-E 3)

### Installation

Clone the repository and install dependencies for both the client and server:

```bash
git clone https://github.com/GodoyMS/clothe-ai.git
cd clothe-ai

# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

### Environment Variables

**Server** — create `server/.env`:

```env
OPENAI_API_KEY=sk-...your-openai-key...
```

**Client** — create `client/.env`:

```env
VITE_BACKEND_URL=http://localhost:8080
VITE_OPENAI_API_KEY=sk-...your-openai-key...
```

> `VITE_BACKEND_URL` should point to your server. In production, replace with the deployed server URL.

### Running the App

Start the server and client in separate terminals:

```bash
# Terminal 1 — backend (port 8080)
cd server
npm start

# Terminal 2 — frontend (port 5173)
cd client
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## API Reference

### Base URL

```
http://localhost:8080
```

### Endpoints

#### `GET /ping`
Health check. Returns HTTP 200 to keep the server alive on free hosting tiers.

**Response:**
```
pong
```

---

#### `GET /api/v1/dalle`
Confirms the DALL-E route is reachable.

**Response:**
```json
{ "message": "Hello from DALL.E ROUTES" }
```

---

#### `POST /api/v1/dalle`
Generates an image from a text prompt using DALL-E 3 and returns it as a base64-encoded PNG.

**Request body:**
```json
{
  "prompt": "a colorful galaxy pattern"
}
```

**Response:**
```json
{
  "photo": "<base64-encoded PNG string>"
}
```

**Error response:**
```json
{
  "message": "Something went wrong"
}
```

> The returned base64 string can be set directly as the `src` of an `<img>` tag:
> `data:image/png;base64,<photo>`

---

## Architecture Overview

```
Browser
  │
  ├── Home page (Framer Motion intro)
  │
  └── Customizer
        ├── 3D Canvas (React Three Fiber)
        │     ├── CameraRig — responsive camera + mouse tracking
        │     ├── Backdrop — shadow accumulation
        │     └── Shirt — GLB model + logo/full decals
        │
        ├── Editor Tabs (ColorPicker / FilePicker / AIPicker)
        │     └── AIPicker → POST /api/v1/dalle → OpenAI DALL-E 3
        │
        ├── Filter Tabs (Logo / Full texture toggle)
        ├── Direction Tabs (camera left / center / right)
        └── Download Tab (canvas → PNG export)

Global State (Valtio)
  └── { intro, color, isLogoTexture, isFullTexture, logoDecal, fullDecal, cameraDirection }
```

The 3D shirt uses Three.js **Decal** geometry to overlay images onto the mesh surface. Toggling `isLogoTexture` / `isFullTexture` in the Valtio store shows or hides each decal in real time.

---

## Deployment

### Frontend (Vercel / Netlify)

```bash
cd client
npm run build
# Deploy the generated dist/ folder
```

Set the environment variable `VITE_BACKEND_URL` to your production server URL in the hosting dashboard.

### Backend (Render)

The server includes a self-ping mechanism on the `/ping` route to prevent Render's free tier from spinning down due to inactivity. No extra configuration is needed beyond setting `OPENAI_API_KEY` in the service environment variables.

```bash
cd server
# Start command: npm start
# Environment variable: OPENAI_API_KEY=sk-...
```

---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

*Built by [GodoyMS](https://github.com/GodoyMS)*
