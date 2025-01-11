// Question : Comment gérer efficacement le cache avec Redis ?
// Réponse : Utiliser des durées d'expiration (TTL) pour éviter un cache obsolète, invalider les données lors de mises à jour critiques, et structurer les données pour un accès rapide.
// Question: Quelles sont les bonnes pratiques pour les clés Redis ?
// Réponse : Adopter une convention de nommage claire, utiliser des clés courtes pour optimiser la mémoire, et éviter les espaces ou caractères spéciaux.

const { redisClient } = require("../config/db");

// Fonctions utilitaires pour Redis
async function cacheData(key, data, ttl) {
  try {
    await redisClient.set(key, JSON.stringify(data), 'EX',ttl)
  } catch (error) {
    console.error(error)
  }
}
  
  module.exports = {
    cacheData
  };