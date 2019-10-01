const express = require('express');
const router = express.Router();
const Liana = require('forest-express-sequelize');
const models = require('../models');
const P = require('bluebird');

router.post('/actions/create-lead-in-Hubspot', Liana.ensureAuthenticated,
  (req, res) => {
    const companyId = req.body.data.attributes.ids[0];
    console.log(companyId)
    console.log(models.companies)
    const companyModel = models.companies
    return P
    .all([
        companyModel.findOne({where: {id: companyId}})
      ])
    .then(company => {console.log(company)})

    // return models.companies
    //   .update({ status: 'live' }, { where: { id: companyId }})
    //   .then(() => {
    //     res.send({ success: 'Company is now live!' });
    //   });
});

module.exports = router;
