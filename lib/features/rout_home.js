
const express = require("express");
const router = express.Router();
const model = require('../core/tools')
const Consule = require('../consule/model_consule')
const Game = require('../consule/model_consule')


router.get('/',async (req,res)=>{
//     closeEst gameNet
//
// Top Games searchGameNet for
//
// Consules searchGameNet for

    let listGames = await Game.find({isTop:true});
    let listConsules = await Consule.find({}).limit(10);

});

module.exports = router;