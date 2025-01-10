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
