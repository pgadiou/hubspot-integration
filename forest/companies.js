const Liana = require('forest-express-sequelize');
const models = require('../models');

Liana.collection('companies', {
  fields: [{
    field: 'crm id setter',
    type: 'Number',
    reference:'hubspot_companies.id',
    get: (company) => {
      return company.crm_id
    },
    set: (company, crmId) => {
      company.crm_id = crmId
      return company
    }
  }],
  actions: [
  {
    name: 'Create lead in Hubspot',
    type: 'single',
  },
  {
    name: 'add hubspot company',
    type: 'bulk',
    fields: [{
      field:'hubspot id',
      type: 'Number',
      reference: 'hubspot_companies.id',
    }]
  }],
});
