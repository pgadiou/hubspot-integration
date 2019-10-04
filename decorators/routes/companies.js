const express = require('express');
const router = express.Router();
const Liana = require('forest-express-sequelize');

// adding middleware to the create route to set the crm_id from the relationship information provided by the smart field crm id setter
// the payload sent corresponds to the one that would have been sent if the crm_id had been entered directly in the create form

router.post('/companies', Liana.ensureAuthenticated, (req, res, next) => {
    if (req.body.data.relationships) {
      req.body.data.attributes.crm_id = parseInt(req.body.data.relationships['crm id setter'].data.id)
      next();
    } else { next()}
});

router.put('/companies/:id', Liana.ensureAuthenticated, (req, res, next) => {
  console.log('test')
    if (req.body.data.relationships) {
      req.body.data.attributes.crm_id = parseInt(req.body.data.relationships['crm id setter'].data.id)
      next();
    } else { next()}
});

module.exports = router;
