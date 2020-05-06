const express = require('express');
const {createEntry} = require('../../DataAccess/catalog_entries');
const {getEntry} = require('../../DataAccess/catalog_entries');
//const {updateEntry} = require('../../DataAccess/catalog_entries');
const {deleteEntry} = require('../../DataAccess/catalog_entries');
const router = express.Router();


router.post('/', async function(req, res, next) {
      console.log(req.body);
         try {
               const data = await createEntry(req.body); 
               res.send(data);
               // do I need to make changes for new data type/array?
         } catch (err) {
               console.log(err);
               res.status(500).send  ("Error-Internal Server Issue. A total failure.");
    };
});

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

router.put('/:id', async function(req, res, next) {
      console.log(req.body);
         try {
               const data = await updateEntry(req.params.id, req.body); 
               res.send(data);
               
         } catch (err) {
               console.log(err);
               res.status(500).send  ("Error-Internal Server Issue. A total failure.");
         };
});

router.delete('/:id', async function(req, res, next) { 
console.log(req.body);
   try {
         const data = await deleteEntry(req.params.id); 
         res.send(data);
   } catch (err) {
            console.log(err);
            res.status(500).send  ("Error-Internal Server Issue. A total failure.");
   };
});


module.exports = router;
