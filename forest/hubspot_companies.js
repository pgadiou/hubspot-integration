const Liana = require('forest-express-sequelize');
const models = require('../models');

Liana.collection('hubspot_companies', {
  isSearchable: true,
  fields: [{
      field: 'id',
      type:'Number',
    }, {
      field: 'name',
      type: 'String',
    }],
});
