const mongoose = require('mongoose');
const slugify = require('slugify');
const validator = require('validator');
// Schema
const treeSpecieSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A tree species must have a name'], 
      unique: true,
      trim: true,
      maxlength: [10, 'A tree species name must have less or equal to 15 characters'],
      minlength: [1, 'A tree species name must have more or equal to 1 characters']
    },
    localName: {
      type: String,
      trim: true,
      maxlength: [10, 'A tour name must have less or equal to 40 characters'],
      minlength: [4, 'A tour name must have more or equal to 10 characters']
    },
    soilType: {
      type: String,
      required: [true, 'A tour must have a soil type'],
    },
    rotation: {
      type: String,
      required: [true, 'A tour must have a rotation'],
    },
    price: {
      type: Number,
      required: [true, 'A tree specie must have an export price'],
      min: [1, 'A price must be above 1.0'],
    },
    endUse: {
      type: String,
      required: [true, 'A tour must have an end use description']
    },
    imageCover: {
      type: String,
      // required: [true, 'A tree specie must have a cover image']
    },
    images: [String],
    createAt: {
      type: Date,
      default: Date.now()
      // select: false
    },
    plantingMonth: [Date],
    secetTreeSpecies: {
      type: Boolean,
      default: false
    },
    address: {
      type: String,
      required: true
    },
    location: {
      type: {
        type: String, // Don't do `{ location: { type: String } }`
        enum: ['Point'], // 'location.type' must be 'Point'
        required: true
      },
      coordinates: {
        type: [Number],
        index: '2dsphere'
      }
    }
  }
);


// Tree specie model
const TreeSpecie = mongoose.model('TreeSpecie', treeSpecieSchema);

module.exports = TreeSpecie;
