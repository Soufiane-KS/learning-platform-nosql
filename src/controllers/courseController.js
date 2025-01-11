// Question: Quelle est la différence entre un contrôleur et une route ?
// Réponse: Une route définit l'URL et le type de requête HTTP (GET, POST,...), tandis qu'un contrôleur contient la logique métier associée à cette route.
// Question : Pourquoi séparer la logique métier des routes ?
// Réponse : Pour améliorer la lisibilité, faciliter les tests unitaires et permettre la réutilisation de la logique métier dans d'autres parties de l'application.

const { ObjectId } = require('mongodb');
const db = require('../config/db');
const mongoService = require('../services/mongoService');
const redisService = require('../services/redisService');

async function createCourse(req, res) {
  try {
    const { titre, description } = req.body
    if (!titre || !description) {
      return res.status(400).json({error: 'Tous les champs sont requis. '})   
    }
    const course = await mongoService.createCourse({titre,description})
    res.status(201).json(course)
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la creatio  du cours', error });
  }
}

// Export des contrôleurs
module.exports = {
  createCourse
};