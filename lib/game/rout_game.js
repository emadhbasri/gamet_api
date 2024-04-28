const express = require("express");
const router = express.Router();
// const controller = require('./controller_game')
const model = require('../core/tools')
const game = require('./model_game')

router.route("/")
    .get((req, res) =>
        model.getModelList(req, res, {model: game}))
    .post((req, res) =>
        model.insertModel(req, res, {model: game}));

router.route("/:id")
    .get((req, res) =>
        model.getModel_Id(req, res, {model: game}))
    .put((req, res) =>
        model.updateModel(req, res, {model: game}))
    .delete((req, res) =>
        model.deleteModel(req, res, {model: game}));



module.exports = router;