const TreeSpecie = require('../models/TreeSpicieModel');
const APIFeatures = require('./../utils/apiFeatures');


// i) Routes handlers
// get all TreeSpecies route handler
exports.getAllTreeSpecies = async (req, res) => {
  try {
    // EXECUTE A QUERY
    const features = new APIFeatures(TreeSpecie.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const treeSpecie = await features.query;

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: treeSpecie.length,
      data: {
        treeSpecie
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

// Get one tree specie route handler
exports.getTreeSpecie = async (req, res) => {
  try {
    const treeSpecie = await TreeSpecie.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        treeSpecie
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

// Create New Tour route handler
exports.createTreeSpecie = async (req, res) => {
  try {
    const newTreeSpecie = await TreeSpecie.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        treeSpecie: newTreeSpecie
      }
    });
  } catch (err) {
    console.error(err);
    if (err.code === 11000) {
      return res.status(400).json({ error: 'This tree specie already exists' });
    }
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

// Update a Tour route handler
exports.updateTreeSpecie = async (req, res) => {
  try {
    const treeSpecie = await TreeSpecie.findOneAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      status: 'success',
      data: {
        treeSpecie
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

// Delete a Tour route handler
exports.deleteTreeSpecie = async (req, res) => {
  try {
    await TreeSpecie.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};


