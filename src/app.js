// Question: Comment organiser le point d'entrée de l'application ?
// Reponse: Le point d'entrée de l'application (app.js) doit initialiser les services essentiels, comme les connexions aux bases de données, la configuration des middlewares et des routes, avant de démarrer le serveur. L'application doit être lancée après que toutes ces étapes soient correctement exécutées.
// Question: Quelle est la meilleure façon de gérer le démarrage de l'application ?
// Reponse: Utiliser une fonction asynchrone pour gérer les connexions et configurations (comme startServer()) avant de démarrer le serveur avec app.listen().

const express = require('express');
const config = require('./config/env');
const db = require('./config/db');

const courseRoutes = require('./routes/courseRoutes');
const studentRoutes = require('./routes/studentRoutes');

const app = express();

async function startServer() {
  try {
    await db.connectMongo()
    await db.connectRedis()
    app.use(express.json)
    app.use('/courses',courseRoutes)
    app.use('/students',studentRoutes)
    app.listen(config.port,()=>{
      console.log(`Le serveur et opperationnel sur le port ${config.port}`)
    })
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

// Gestion propre de l'arrêt
process.on('SIGTERM', async () => {
  // TODO: Implémenter la fermeture propre des connexions
});

startServer();