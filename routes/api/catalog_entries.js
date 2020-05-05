const express = require('express');
const {getEntry} = require('../../DataAccess/catalog_entries');
const router = express.Router();

router.get('/', async function(req, res, next) {
    try {
          console.log("Got it!")
          const data = await getEntry(); 
          res.send(data);
          
    } catch (err) {
          console.log(err);
          res.send(500, "Error-Internal Server Issue. EPIC FAIL.");
    };
  });

  module.exports = router;
