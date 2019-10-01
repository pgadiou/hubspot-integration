const Liana = require('forest-express-sequelize');
const express = require('express');
const router = express.Router();
const models = require('../models');
const P = require('bluebird');
const JSONAPISerializer = require('jsonapi-serializer').Serializer;
const superagent = require('superagent');

router.get('/hubspot_companies', Liana.ensureAuthenticated, (req, res, next) => {

  // set pagination parameters when exist (default limit is 250 as it is the max allowed by Hubspot)
  let limit = 250
  let offset = 0
  req.query.page ? limit = parseInt(req.query.page.size) : limit
  req.query.page ? offset = (parseInt(req.query.page.number) - 1) * limit : offset

  // set search terms when exist
  let search = null
  req.query.search ? search = req.query.search : search

  // define the serializer used to format the payload
  const hubspotCompaniesSerializer = new JSONAPISerializer('hubspotCompanies', {
    attributes: ['name'],
    keyForAttribute: 'underscore_case',
    id: 'companyId',
    transform: function (record) {
      record.name = record['properties']['name']['value'];
      return record;
    }
  });

  // implement function to call hubspot API and return companies
  async function getCompanies() {
    return hubspot_companies = await superagent
    .get(`https://api.hubapi.com/companies/v2/companies/paged?hapikey=${process.env.HUBSPOT_API}&properties=name&limit=${limit}&offset=${limit}`)
    .then(response => {
      // parsing the answer from the API
      companiesJSON = JSON.parse(response.res.text).companies
      // serializing the companies to comply with the format expected by the Forest server
      serializedCompanies = hubspotCompaniesSerializer.serialize(companiesJSON)
      // return all data or data with a name containing the searched terms from the companies fetched
      if (search) {
        serializedCompanies.data = serializedCompanies.data.filter(function(item) {
          return item.attributes.name.toUpperCase().includes(search.toUpperCase());
        });
        return serializedCompanies
      } else {
        return serializedCompanies
      }
    })
  }


  async function sendCompaniesPayload() {
    let hubspotCompanies = await getCompanies()
    // defining the count of companies fetched
    let count = hubspotCompanies.data.length
    return res.send({...hubspotCompanies, meta:{ count: count }})
  }

  sendCompaniesPayload()

});


module.exports = router;
