const express = require("express");

const router = express.Router();

// Import the model to use its database functions.
const db = require('../models');

// Create all our routes and set up logic within those routes where required.
router.get("/saved-games", (req, res) => {
  db.Game.findAll()
    .then(data => {
      console.log(data);
      const hbsObject = {
        games: data,
        style: 'savedGames.css'
      }
      
      console.log('hbsObject!!!!!!!!!!: ', hbsObject)
      

      res.render("savedGames", hbsObject);
    });
  });

  router.get("/random", (req, res)=>{
    
  })

module.exports = router;
