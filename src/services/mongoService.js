// Question: Pourquoi créer des services séparés ?
// Réponse: Pour centraliser la logique métier réutilisable, réduire la duplication de code, et maintenir une séparation claire entre la logique métier et les contrôleurs.

const { ObjectId } = require('mongodb');
const db = require('../config/db');

// Fonctions utilitaires pour MongoDB
async function findOneById(collection, id) {
  try {
    const collection = db.db.collection(collectionName);
    const resultat = await collection.findOne({ _id: new ObjectId(id) });
    return resultat
  } catch (error) {
    console.error('document introuvable par id', error);
  }
}

// Export des services
module.exports = {
  findOneById
};