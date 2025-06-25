# 🧠 Mini Bids Backend (Kuupanda Technical Test)

Ce projet est une API HTTP codée en Node.js + TypeScript **sans Express.js** pour la gestion d'enchères simples. Il a été réalisé dans le cadre d’un test technique pour Kuupanda.

## 🎯 Objectif

Permettre à des utilisateurs identifiés via une clé de session (`sessionKey`) de soumettre des enchères sur des articles et de consulter les meilleures offres.

---

## 📁 Structure du projet

bid_app/
├── src/
│ ├── controllers/ # Gestion des routes (postBid, getTopBids)
│ ├── services/ # Logique métier (bids, sessions)
│ ├── routes/ # Définition des routes HTTP
│ ├── utils/ # Fonctions utilitaires
│ └── tests/ # Tests unitaires avec Jest
├── dist/ # Code compilé en JavaScript
├── package.json
├── tsconfig.json
└── README.md


---

## 🚀 Lancer le projet

### 1. Cloner le dépôt

git clone <url-du-depot>
cd bid_app

### 2. Installer les dependances
npm install

### 3. Lancer le serveur
npm run build
npm start

Le serveur demarre par defaut sur le port 4336.

📮 Endpoints disponibles

GET pour recuperer le userId
curl -X GET "http://localhost:4336/5/login"

POST pour soumettre une enchere
curl -X POST "http://localhost:4336/2/bid?sessionKey=Q4P0VLHG" -H "Content-Type: text/plain" -d "1.1"

GET pour recuperer les 15 meilleures encheres
curl -X GET "http://localhost:4336/5/topBidList"

🧪 Lancer les tests
Les tests sont écrits avec Jest et couvrent les cas principaux.

Installer les types manquants (si besoin)
npm install --save-dev @types/jest @types/supertest

Exécuter les tests
npm test

Couverture testée

-Enchères valides

-ID d'article invalide

-Session expirée ou invalide

-Récupération des meilleures offres

-Multiples enchères sur le même article

⚙️ Technologies
Node.js

TypeScript

Jest + Supertest (tests)

Framework web (Express)

In-memory storage (Map) pour les sessions et les enchères

🧠 À retenir
Les sessions expirent après 10 minutes.

Un utilisateur peut proposer plusieurs enchères, seule la plus haute est conservée.

Le serveur est optimisé pour supporter plusieurs requêtes simultanées (accès thread-safe via Map).

👩‍💻 Auteur
Projet réalisé par Laura Nunez Torres pour Kuupanda - Juin 2025.

---

# 🧠 Mini Bids Backend (Kuupanda Technical Test)

This project is a lightweight HTTP API built in **Node.js + TypeScript** (⚠️ without Express.js) to manage a simple auction system. It was developed as part of a technical test for **Kuupanda**.

---

## 🎯 Purpose

The API allows users to:
- **Log in** via a session key,
- **Submit bids** for specific items,
- **Retrieve the top 15 bids** for any item.

---

## 📁 Project Structure

bid_app/
├── src/
│ ├── controllers/ # Route logic (bid submissions, top bids)
│ ├── services/ # Business logic (bids, sessions)
│ ├── routes/ # Route definitions
│ ├── utils/ # Utility functions
│ └── tests/ # Unit tests (Jest)
├── dist/ # Compiled JavaScript (from TypeScript)
├── package.json
├── tsconfig.json
└── README.md


---

## 🚀 Getting Started

### 1. Clone the repository

git clone <your-repo-url>
cd bid_app

2. Install dependencies
npm install

3. Run the server
npm run build
npm start

The server runs on http://localhost:4336 by default.

📮 Available Endpoints

GET to get userId
curl -X GET "http://localhost:4336/5/login"

POST to send a bid
curl -X POST "http://localhost:4336/2/bid?sessionKey=Q4P0VLHG" -H "Content-Type: text/plain" -d "1.1"

GET to get the top 15 bids
curl -X GET "http://localhost:4336/5/topBidList"

🧪 Running Tests

 Install missing type definitions
 npm install --save-dev @types/jest @types/supertest

Run tests
npm test

Covered scenarios

-Valid bid submission

-Invalid item ID

-Invalid or expired session

-Multiple bids on the same item

-Retrieving top bids

⚙️ Tech Stack
Node.js

TypeScript

Jest + Supertest

Web framework (Express)

In-memory storage using Map for sessions and bids

🧠 Notes
Sessions expire after 10 minutes.

Only the highest bid per user per item is stored.

The server is optimized to handle multiple simultaneous requests in memory safely and efficiently.

👩‍💻 Author
Project by Laura Nunez Torres - June 2025
For Kuupanda Technical Test.