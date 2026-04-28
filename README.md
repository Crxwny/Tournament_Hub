# 🏆 Tournament Hub

**Tournament Hub** is a web-based tournament management platform designed for school esports and gaming events.

The system allows users to register for games individually or in teams, manage invites, generate random matchups, and track match results in real time.

---

## Overview

- [Project Goals](#-project-goals)
- [Tech Stack](#-tech-stack)
- [Authentication](#-authentication)
- [Team System](#-team-system)
- [Matchmaking & Scheduling](#-matchmaking--scheduling)
- [CMS Integration](#-cms-integration)
- [Project Management](#-project-management)
- [Notion Workspace](#-notion-workspace)

---

## 🎯 Project Goals

- **User authentication** and profile management
- **Registration** for games (individual and team-based)
- **Team management** with invite system
- **Automated random matchmaking**
- **Match scheduling** with time slots
- **Result tracking** (Win / Lose)

---

## 🛠 Tech Stack

| Area | Technology |
|------|-------------|
| **Frontend** | React 
| **Auth & Backend** | Firebase 

---

## 🔐 Authentication

- Sign in with **Email & Password**
- User profiles in Firestore (uid, username, email, gamesSignedUp, teams)

---

## 👥 Team System

For team-based games (e.g. Valorant):

- Users can **create a team**
- Each team has a **captain**
- Captains can **invite other users**
- Teams are stored in Firestore

---

## 🎲 Matchmaking & Scheduling

- **Random pairing** of players/teams
- **Time slots** for matches
- Admin controls tournament start
- Matches in Firestore with status: *Pending* → *Playing* → *Finished*
- **Win / Lose** display after completion

---

## 📊 Project Management

- **Team:** Damian (Product Owner & Scrum Master), Jayden & Leon (Developer)  
- **Dev time:** 4 h/week (SWP session)  
- **Board:** Stories → Tasks → In Progress → Verify → Done  

---

## 📌 Notion Workspace

[Tournament Hub on Notion](https://verdant-gambler-420.notion.site/Tournament-Hub-a8283e9edf1042c89d250a64486c2b0b)


