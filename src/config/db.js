// Question : Pourquoi créer un module séparé pour les connexions aux bases de données ?
// Réponse : Pour centraliser la logique de connexion, faciliter la réutilisation et améliorer la maintenabilité du code.
// Question : Comment gérer proprement la fermeture des connexions ?
// Réponse : Utiliser des méthodes dédiées pour fermer les clients (close() pour MongoDB, disconnect() pour Redis) lors de l'arrêt du serveur 

const { MongoClient } = require('mongodb');
const redis = require('redis');
const config = require('./env');

let mongoClient, redisClient, db;

async function connectMongo() {
  try{
    mongoClient = new MongoClient(config.mongodb.uri)
    await mongoClient.connect()
    db = mongoClient.db(config.mongodb.dbName)
  }catch(e){
      console.error(e)
  }
  finally{
    mongoClient.close()
  }
}

async function connectRedis() {
  try {
    redisClient = new redisClient(config.redis.uri)
    redisClient.connect()
  } catch (error) {
    console.error(error)
  }finally{
    redisClient.quit()
  }
}

// Export des fonctions et clients
module.exports = {
  connectMongo,
  connectRedis,
  db,
  redisClient
};


connectMongo().catch(console.error)