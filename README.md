# 🧠 Mini Bids Backend (Kuupanda Technical Test)

Ce projet est une API HTTP codée en **Node.js + TypeScript** pour la gestion d'enchères simples.

## 🎯 Objectif

Permettre à des utilisateurs identifiés via une clé de session (`sessionKey`) de soumettre des enchères sur des articles et de consulter les meilleures offres.

---

## 🚀 Lancer le projet

### 1. Cloner le dépôt

git clone <url-du-depot> bid_app puis cd bid_app

### 2. Installer les dependances

npm install

### 3. Lancer le serveur

npm run build puis npm start

Le serveur demarre par defaut sur le port 4336.

📮 Endpoints disponibles

GET pour recuperer le userId : curl -X GET "http://localhost:4336/userId/login"

POST pour soumettre une enchere : curl -X POST "http://localhost:4336/itemID/bid?sessionKey=<SECRET_KEY>" -H "Content-Type: text/plain" -d "bidValue"

GET pour recuperer les 15 meilleures encheres : curl -X GET "http://localhost:4336/itemID/topBidList"

### 4. Lancer les tests

Les tests sont écrits avec Jest et couvrent les cas principaux.

+ Installer les types manquants (si besoin)

npm install --save-dev @types/jest @types/supertest

+ Exécuter les tests

npm test

+ Couverture testée :

-Enchères valides

-ID d'article invalide

-Session expirée ou invalide

-Récupération des meilleures offres

-Multiples enchères sur le même article

⚙️ Technologies

- Node.js
- TypeScript
- Jest + Supertest (tests)
- Framework web (Express)

🧠 À retenir

Les sessions expirent après 10 minutes.
Un utilisateur peut proposer plusieurs enchères, seule la plus haute est conservée.
Le serveur est optimisé pour supporter plusieurs requêtes simultanées (accès thread-safe via Map).

👩‍💻 Auteur

Projet réalisé par Laura Nunez Torres pour Kuupanda - Juin 2025.

---

(English version below)

---

# 🧠 Mini Bids Backend (Kuupanda Technical Test)

This project is a lightweight HTTP API built in **Node.js + TypeScript** to manage a simple bidding system.

---

## 🎯 Purpose

The API allows users to:
- **Log in** via a session key,
- **Submit bids** for specific items,
- **Retrieve the top 15 bids** for any item.

---

## 🚀 Getting Started

### 1. Clone the repository

git clone <your-repo-url> bid-app then cd bid_app

### 2. Install dependencies

npm install

### 3. Run the server

npm run build then npm start

The server runs on http://localhost:4336 by default.

📮 Available Endpoints

GET to get userId : curl -X GET "http://localhost:4336/userId/login"

POST to send a bid : curl -X POST "http://localhost:4336/itemID/bid?sessionKey=<SECRET_KEY>" -H "Content-Type: text/plain" -d "bidValue"

GET to get the top 15 bids : curl -X GET "http://localhost:4336/itemID/topBidList"

### 4.  Running tests

Tests were done using Jest and include the main cases.

+ Install missing type definitions

npm install --save-dev @types/jest @types/supertest

+ Run tests

npm test

+ Covered scenarios

-Valid bid submission

-Invalid item ID

-Invalid or expired session

-Multiple bids on the same item

-Retrieving top bids

⚙️ Tech Stack

- Node.js
- TypeScript
- Jest + Supertest
- Web framework (Express)

🧠 Notes

Sessions expire after 10 minutes.
Only the highest bid per user per item is stored.
The server is optimized to handle multiple simultaneous requests in memory safely and efficiently.

👩‍💻 Author

Project by Laura Nunez Torres for Kuupanda Technical Test - June 2025