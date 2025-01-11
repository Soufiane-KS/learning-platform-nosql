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

async function getCourse(req, res) {
  try {
    const { id } = req.params;
    const course = await mongoService.findOneById('courses', id);
    if (!course) {
      return res.status(404).json({ error: 'Cours introuvable' });
    }
    res.json(course);
  } catch (error) {
    res.status(500).json({ error: 'error' });
  }
}

async function getCourseStats(req, res) {
  try {
    const collection = db.db.collection('courses');
    const count = await collection.countDocuments();
    res.json({ totalCourses: count });// retourner le nbr total des cours
  } catch (error) {
    res.status(500).json({ error: 'Error fetching course stats' });
  }
}



// Export des contrôleurs
module.exports = {
  createCourse,
  getCourse,
  getCourseStats
};