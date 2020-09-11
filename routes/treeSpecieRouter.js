const express = require('express');
const treeSpecieController = require('../controllers/treeSpecieController');

// i)SiTE MATCH routes definitions
const router = express.Router();

//1. '/api/v1/tours'
router
  .route('/')
  .get(treeSpecieController.getAllTreeSpecies)
  .post(treeSpecieController.createTreeSpecie);

//2. '/api/v1/tours/:id'
router
  .route('/:id')
  .get(treeSpecieController.getTreeSpecie)
  .patch(treeSpecieController.updateTreeSpecie)
  .delete(treeSpecieController.deleteTreeSpecie);

module.exports = router;