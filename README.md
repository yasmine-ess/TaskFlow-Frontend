# TaskFlow Frontend 🖥️

> Frontend Angular du projet **TaskFlow** — SPA connectée à une API ASP.NET Core sécurisée par JWT.

---

## 🛠️ Stack technique

| Technologie | Usage |
|---|---|
| Angular | Framework frontend |
| TypeScript | Langage principal |
| HTML / CSS | Templates et styles |
| Angular Router | Navigation entre pages |
| HttpClient | Appels API REST |

---

## ✅ Fonctionnalités implémentées

- [x] Création du projet Angular (standalone components)
- [x] Routing (Login → Dashboard)
- [x] Service d'authentification (`auth.service.ts`)
- [x] Formulaire de connexion
- [x] Appel API Login vers ASP.NET Core
- [x] Récupération et stockage du JWT
- [x] Dashboard (composant standalone)

## 🔜 À venir

- [ ] Auth Guard (protection des routes privées)
- [ ] Interceptor JWT (injection automatique du token)
- [ ] Logout
- [ ] Liste des tâches
- [ ] Création / modification / suppression de tâche
- [ ] Gestion des rôles Admin / User côté UI
- [ ] Interface responsive
- [ ] Angular Material

---

## 🔄 Flux d'authentification

```
Utilisateur → Formulaire Login
     ↓
Angular (auth.service.ts) → POST /api/Auth/login
     ↓
API ASP.NET Core valide les credentials
     ↓
Retour du JWT
     ↓
Angular stocke le token
     ↓
Accès au Dashboard
```

---

## 🏗️ Structure du projet

```
src/app/
├── pages/
│   ├── login/          # Page de connexion
│   └── dashboard/      # Page principale (post-login)
├── services/
│   └── auth.service.ts # Gestion de l'authentification
├── app.routes.ts       # Configuration du routing
├── app.config.ts       # Configuration Angular
└── app.ts              # Composant racine
```

---

## 🚀 Lancement

**Prérequis :** Node.js, Angular CLI

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
ng serve
```

**Application disponible sur :** `http://localhost:4200`

> ⚠️ Le backend doit être lancé avant le frontend.
> **Backend :** `https://localhost:7243/api`

---

## 🎯 Objectif du projet

Projet réalisé pour approfondir et démontrer mes compétences en :
- Développement SPA avec Angular et TypeScript
- Authentification JWT côté frontend
- Communication Angular ↔ API REST ASP.NET Core
- Architecture Full Stack moderne

**Backend associé :** [TaskFlow API](https://github.com/yasmine-ess/TaskFlow)
