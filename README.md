# Projet de fin de module NoSQL

 Question: Quelles sont les informations sensibles à ne jamais commiter ?
 Réponse : Clés d'API - Identifiants de bases de données - noms d'utilisateur et mots de passe. Certificats SSL - Clés de chiffrement
 Question: Pourquoi utiliser des variables d'environnement ?
 Réponse :  Empêche l'exposition de données sensibles dans le code source - Les configurations peuvent être modifiées sans toucher au code source.
 Question : Pourquoi créer un module séparé pour les connexions aux bases de données ?
 Réponse : Pour centraliser la logique de connexion, faciliter la réutilisation et améliorer la maintenabilité du code.
 Question : Comment gérer proprement la fermeture des connexions ?
 Réponse : Utiliser des méthodes dédiées pour fermer les clients (close() pour MongoDB, disconnect() pour Redis) lors de l'arrêt du serveur 
 Question: Pourquoi est-il important de valider les variables d'environnement au démarrage ?
 Réponse : Pour garantir que l'application dispose de toutes les informations nécessaires avant de démarrer, évitant ainsi des erreurs à l'exécution.
 Question: Que se passe-t-il si une variable requise est manquante ?
 Réponse : L'application peut échouer à démarrer ou se comporter de manière inattendue, causant des erreurs liées à la configuration manquante.
 Question: Comment organiser le point d'entrée de l'application ?
 Reponse: Le point d'entrée de l'application (app.js) doit initialiser les services essentiels, comme les connexions aux bases de données, la configuration des middlewares et des routes, avant de démarrer le serveur. L'application doit être lancée après que toutes ces étapes soient correctement exécutées.
 Question: Quelle est la meilleure façon de gérer le démarrage de l'application ?
 Reponse: Utiliser une fonction asynchrone pour gérer les connexions et configurations (comme startServer()) avant de démarrer le serveur avec app listen().
 Question: Quelle est la différence entre un contrôleur et une route ?
 Réponse: Une route définit l'URL et le type de requête HTTP (GET, POST,...), tandis qu'un contrôleur contient la logique métier associée à cette route.
 Question : Pourquoi séparer la logique métier des routes ?
 Réponse : Pour améliorer la lisibilité, faciliter les tests unitaires et permettre la réutilisation de la logique métier dans d'autres parties de l'application.