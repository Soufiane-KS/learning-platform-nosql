# Projet de fin de module NoSQL

## Table des matières
- [Installation](#installation)
- [Structure du projet](#structure-du-projet)
- [Choix techniques](#choix-techniques)
- [Réponses aux questions](#réponses-aux-questions)

---

## Installation

### Prérequis :
Assurez-vous d'avoir installé les éléments suivants sur votre machine :
- Node.js 
- MongoDB
- Redis 

### Étapes pour installer et exécuter le projet :

1. Clonez le repository :
   ```bash
   git clone https://github.com/Soufiane-KS/learning-platform-nosql.git
   cd learning-platform
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```

3. Créez un fichier `.env` à la racine du projet et définissez les variables d'environnement suivantes :
   ```bash
   MONGODB_URI=mongodb://localhost:27017
   MONGODB_DB_NAME=learning_platform
   REDIS_URI=redis://localhost:6379
   PORT=3000
   ```

4. Lancez l'application :
   ```bash
   npm start
   ```

L'application sera disponible sur `http://localhost:3000`.

---

## Structure du projet

```
learning-platform/
├── config/
│   ├── db.js                # Logique de connexion MongoDB et Redis
│   ├── env.js               # Validation des variables d'environnement
├── controllers/
│   └── courseController.js  # Logique métier liée aux cours
├── routes/
│   └── courseRoutes.js      # Routes pour la gestion des cours
├── services/
│   ├── mongoService.js      # Fonctions utilitaires pour MongoDB
│   └── redisService.js      # Fonctions utilitaires pour Redis
├── app.js                   # Point d'entrée de l'application
├── .env                     # Fichier des variables d'environnement (ne pas committer)
└── README.md                # Documentation du projet
```

---

## Choix techniques

1. **Node.js** :  
   Nous avons choisi Node.js pour sa structure asynchrone et basée sur des événements, idéale pour gérer les opérations I/O comme les interactions avec les bases de données et les requêtes API.

2. **Express** :  
   Express a été sélectionné pour gérer le routage grâce à sa simplicité et sa flexibilité pour créer des API REST.

3. **MongoDB** :  
   MongoDB est utilisé pour stocker les données des cours, car il permet de stocker des documents structurés sans besoin de schémas préalables, ce qui est utile dans des applications dynamiques comme celle-ci.

4. **Redis** :  
   Redis est utilisé pour mettre en cache les données, offrant un stockage en mémoire rapide pour améliorer les temps de réponse des données fréquemment accédées (par exemple, les statistiques des cours).

5. **Séparation des préoccupations** :  
   - **Les contrôleurs** gèrent la logique de l'application.
   - **Les services** sont utilisés pour les interactions avec la base de données, séparant ainsi la logique pour différents systèmes (MongoDB, Redis).
   - **Les routes** définissent les points de terminaison et délèguent aux contrôleurs.

---

## Réponses aux questions

### **Question: Quelles sont les informations sensibles à ne jamais commiter ?**
**Réponse** :  
Les clés d'API, les identifiants de bases de données, les noms d'utilisateur et mots de passe, les certificats SSL, et les clés de chiffrement.

### **Question: Pourquoi utiliser des variables d'environnement ?**
**Réponse** :  
Les variables d'environnement permettent d'éviter l'exposition de données sensibles dans le code source. Elles permettent aussi de configurer facilement l'application sans avoir à toucher au code.

### **Question: Pourquoi créer un module séparé pour les connexions aux bases de données ?**
**Réponse** :  
Cela permet de centraliser la logique de connexion, de faciliter la réutilisation du code et d'améliorer la maintenabilité du projet.

### **Question: Comment gérer proprement la fermeture des connexions ?**
**Réponse** :  
Il est nécessaire d'utiliser des méthodes dédiées pour fermer les clients, comme `close()` pour MongoDB et `quit()` pour Redis, lors de l'arrêt du serveur (géré dans `app.js` avec l'événement `SIGTERM`).

### **Question: Pourquoi est-il important de valider les variables d'environnement au démarrage ?**
**Réponse** :  
Cela permet de garantir que l'application dispose de toutes les informations nécessaires avant de démarrer, évitant ainsi des erreurs à l'exécution.

### **Question: Que se passe-t-il si une variable requise est manquante ?**
**Réponse** :  
L'application peut échouer à démarrer ou se comporter de manière inattendue, causant des erreurs liées à la configuration manquante.

### **Question: Comment organiser le point d'entrée de l'application ?**
**Réponse** :  
Le point d'entrée (fichier `app.js`) doit initialiser les services essentiels comme les connexions aux bases de données, la configuration des middlewares et des routes, avant de démarrer le serveur.

### **Question: Quelle est la meilleure façon de gérer le démarrage de l'application ?**
**Réponse** :  
Utiliser une fonction asynchrone, comme `startServer()`, pour gérer les connexions et configurations avant de démarrer le serveur avec `app.listen()`.

### **Question: Quelle est la différence entre un contrôleur et une route ?**
**Réponse** :  
Une route définit l'URL et le type de requête HTTP (GET, POST, etc.), tandis qu'un contrôleur contient la logique métier associée à cette route.

### **Question: Pourquoi séparer la logique métier des routes ?**
**Réponse** :  
Cela permet d'améliorer la lisibilité, de faciliter les tests unitaires et de permettre la réutilisation de la logique métier dans d'autres parties de l'application.

### **Question: Pourquoi créer des services séparés ?**
**Réponse** :  
Pour centraliser la logique métier réutilisable, réduire la duplication de code et maintenir une séparation claire entre la logique métier et les contrôleurs.