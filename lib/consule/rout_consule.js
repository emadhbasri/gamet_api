const express = require("express");
const router = express.Router();
// const controller = require('./controller_game')
const model = require('../core/tools')
const consule = require('./model_consule')

router.route("/")
    .get((req, res) =>
        model.getModelList(req, res, {model: consule}))
    .post((req, res) =>
        model.insertModel(req, res, {model: consule}));

router.route("/:id")
    .get((req, res) =>
        model.getModel_Id(req, res, {model: consule, populate: ['specificGames', 'games']}))
    .put((req, res) =>
        model.updateModel(req, res, {model: consule}))
    .delete((req, res) =>
        model.deleteModel(req, res, {model: consule}));


module.exports = router;