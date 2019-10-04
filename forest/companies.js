const Liana = require('forest-express-sequelize');
const models = require('../models');

Liana.collection('companies', {
  fields: [{
    // adding a field that will allow to search on the smart collection hubspot_companies and return a relationship
    field: 'crm id setter',
    type: 'Number',
    reference:'hubspot_companies.id',
    },{
    // adding a field that will allow to be directed on click to the company's profile in hubspot
    field: 'crm link',
    type: 'String',
    get: (company) => {
      return company.dataValues.crm_id ? 'https://app.hubspot.com/contacts/6332498/company/' + company.dataValues.crm_id : null
      },
  }],
  // adding action that creates a new company instance in Hubspot (check file routes/companies.js for the implementation)
  actions: [{
    name: 'Create lead in Hubspot',
    type: 'single',
  }],
});
