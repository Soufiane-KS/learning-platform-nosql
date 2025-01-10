// Question: Pourquoi est-il important de valider les variables d'environnement au démarrage ?
// Réponse : Pour garantir que l'application dispose de toutes les informations nécessaires avant de démarrer, évitant ainsi des erreurs à l'exécution.
// Question: Que se passe-t-il si une variable requise est manquante ?
// Réponse : L'application peut échouer à démarrer ou se comporter de manière inattendue, causant des erreurs liées à la configuration manquante.

const dotenv = require('dotenv');
dotenv.config();

const requiredEnvVars = [
  'MONGODB_URI',
  'MONGODB_DB_NAME',
  'REDIS_URI'
];

// Validation des variables d'environnement
function validateEnv() {
  requiredEnvVars.forEach((varEnv) => {
    if (!process.env[varEnv]) {
      throw new Error(`variable d'environnement manquante :${varEnv}`)
    }
});
}

module.exports = {
  mongodb: {
    uri: process.env.MONGODB_URI,
    dbName: process.env.MONGODB_DB_NAME
  },
  redis: {
    uri: process.env.REDIS_URI
  },
  port: process.env.PORT || 3000
};