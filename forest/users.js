const Liana = require('forest-express-sequelize');
const models = require('../models');

Liana.collection('users', {
  // adding action that creates a new company instance in Hubspot (check file routes/companies.js for the implementation)
  actions: [{
    name: 'Add to Hubspot',
    type: 'bulk',
  }],
});
