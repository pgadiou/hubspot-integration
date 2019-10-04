const express = require('express');
const router = express.Router();
const Liana = require('forest-express-sequelize');
const models = require('../models');
const P = require('bluebird');
const superagent = require('superagent');

router.post('/actions/add-to-Hubspot', Liana.ensureAuthenticated,
  (req, res) => {
    const userId = req.body.data.attributes.ids[0];

    // asynchronous function that returns the user's sequelize object
    async function setUser() {
      let user =  await models.users.findOne({where: {id: userId}})
      console.log(user)
      return user
    }

    setUser()

    // async function postLead() {
    //   // set the company object
    //   const company = await setCompany()
    //   // send the proper values formatted to fit the hubspot API expectations at the API endpoint
    //   return await superagent
    //   .post(`https://api.hubapi.com/companies/v2/companies?hapikey=${process.env.HUBSPOT_API}`)
    //   .send({"properties": [
    //     {
    //       "name":"name",
    //       "value":company.dataValues.name,
    //     },
    //     {
    //       "name":"description",
    //       "value": company.dataValues.description,
    //     },
    //     {
    //       "name":"city",
    //       "value": company.dataValues.city,
    //     },
    //     {
    //       "name":"industry",
    //       "value": company.dataValues.industry,
    //     },
    //     ]})
    //   .then(response => {
    //     res.send({ success: 'Lead is created!' })
    //   })
    // }

    // postLead()

});

module.exports = router;
