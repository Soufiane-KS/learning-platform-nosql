// Question: Pourquoi séparer les routes dans différents fichiers ?
// Réponse : Pour organiser le code de manière modulaire, faciliter la lecture et la maintenance, et permettre le travail en équipe sur des modules indépendants.
// Question : Comment organiser les routes de manière cohérente ?
// Réponse: Grouper les routes par fonctionnalité (cours, étudiants) dans des fichiers distincts et utiliser un routeur central pour les importer dans l'application.

const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

// Routes pour les cours
router.post('/', courseController.createCourse);
router.get('/:id', courseController.getCourse);
router.get('/stats', courseController.getCourseStats);

module.exports = router;