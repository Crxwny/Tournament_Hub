# 🏆 Tournament Hub

**Tournament Hub** is a web-based tournament management platform designed for school esports and gaming events.

The system allows users to register for games individually or in teams, manage invites, and track tournaments. It is built as a simple, easy-to-understand React + Firebase project for the SWP class.

---

## Overview

- [Project Goals](#-project-goals)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Firebase Setup](#-firebase-setup)
- [Progressive Delivery](#-progressive-delivery)
- [Features](#-features)
- [Project Management](#-project-management)
- [Notion Workspace](#-notion-workspace)

---

## 🎯 Project Goals

- **User authentication** with email & password
- **Roles** for `user` and `admin`
- **Tournaments** that admins create and manage
- **Teams** that users create and captains manage
- **Invites** so captains can invite players to their team

---

## 🛠 Tech Stack

| Area | Technology |
|------|-------------|
| **Frontend** | React 19 + TypeScript + Vite |
| **Routing** | React Router v6 |
| **Auth & Backend** | Firebase Auth + Firestore |

---

## 📂 Project Structure

```
src/
├── App.tsx                  # Routes
├── main.tsx                 # Entry (BrowserRouter + AuthProvider)
├── styles.css               # Global styles
├── firebase.ts              # Firebase init (placeholders here!)
├── types.ts                 # Shared types
├── components/
│   ├── Navbar.tsx           # Top navigation
│   ├── ProtectedRoute.tsx   # Auth / admin guard
│   └── ConfigBanner.tsx     # Warns when firebase isn't set up
├── contexts/
│   └── AuthContext.tsx      # Current user + profile
├── services/                # Thin wrappers around Firebase
│   ├── auth.ts
│   ├── users.ts
│   ├── teams.ts
│   ├── tournaments.ts
│   └── invites.ts
└── pages/                   # One file per page
    ├── HomePage.tsx
    ├── LoginPage.tsx
    ├── RegisterPage.tsx
    ├── TournamentsPage.tsx
    ├── TournamentDetailPage.tsx
    ├── TeamsPage.tsx
    ├── TeamDetailPage.tsx
    ├── InvitesPage.tsx
    └── AdminPage.tsx
```

The idea is that each Firestore collection has **one** matching service file, and each page is a small self-contained component that uses those services. Nothing fancy: no Redux, no complex state libraries.

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173.

You will see a yellow banner at the top until you complete the Firebase setup. The pages render, but login/register/team creation will fail because there is no backend yet.

Other scripts:

```bash
npm run build      # type-check + production build
npm run preview    # preview the production build locally
```

---

## 🔥 Firebase Setup

The app expects a real Firebase project. **You must do this manually** before login, registration, or any database action will work.

See **[`FIREBASE_SETUP.md`](./FIREBASE_SETUP.md)** for the full step-by-step guide. The short version:

1. Create a Firebase project at <https://console.firebase.google.com>.
2. Enable **Authentication → Email/Password**.
3. Enable **Firestore Database** (start in test mode while developing).
4. Copy the web app config from project settings.
5. Paste the values into `src/firebase.ts` (replace every `YOUR_*` placeholder).
6. Promote at least one user to admin by editing their `users/<uid>` document and setting `role: "admin"` in the Firestore console.

---

## 🛤 Progressive Delivery

This repo is set up so you can **release one user story per commit**. The Foundation commit ships only the scaffold (auth provider, navbar skeleton, Firebase placeholders, docs). All feature pages (`RegisterPage`, `LoginPage`, `TeamsPage`, …) and most service files are listed in `.gitignore` and waiting on disk to be released.

To release a story you:

1. Open **[`IMPLEMENTATION_ORDER.md`](./IMPLEMENTATION_ORDER.md)** and find the next story.
2. Remove the matching lines from `.gitignore`.
3. Apply the small code snippets to `src/App.tsx` / `src/components/Navbar.tsx` / the relevant page file.
4. `git add . && git commit` with the suggested message.

Locally you only ever see the features you have already released — exactly mirroring the state of the Scrum board.

The full list of stories (in German, „Ich als Benutzer, möchte …"-Schema) lives in **[`SCRUM_STORIES.md`](./SCRUM_STORIES.md)**.

---

## 🧩 Features

### For everyone
- Browse the tournament list and view tournament details.

### For logged-in users
- Create a team — you automatically become its captain.
- Invite other users (by username) to your team.
- Accept or decline incoming invites.
- Sign one of your teams up for an open tournament.

### For admins
- Create new tournaments (name, game, description).
- Move a tournament between `open → in_progress → finished`.
- Delete tournaments.
- View every team and every user in the system.
- Delete any team.

The data model is intentionally simple:

| Collection | Document fields |
|---|---|
| `users` | `uid, email, username, role, createdAt` |
| `tournaments` | `name, game, description, status, createdBy, participatingTeamIds[], createdAt` |
| `teams` | `name, captainUid, memberUids[], tournamentId, createdAt` |
| `invites` | `teamId, teamName, fromUid, fromUsername, toUid, status, createdAt` |

---

## 📊 Project Management

- **Team:** Damian (Product Owner & Scrum Master), Jayden & Leon (Developer)
- **Dev time:** 4 h/week (SWP session)
- **Board:** Stories → Tasks → In Progress → Verify → Done
- **Stories:** see [`SCRUM_STORIES.md`](./SCRUM_STORIES.md) — ready to copy into the board.
- **Release plan:** see [`IMPLEMENTATION_ORDER.md`](./IMPLEMENTATION_ORDER.md) — one commit per story.

---

## 📌 Notion Workspace

[Tournament Hub on Notion](https://verdant-gambler-420.notion.site/Tournament-Hub-a8283e9edf1042c89d250a64486c2b0b)
