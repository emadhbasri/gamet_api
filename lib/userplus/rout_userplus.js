const express = require("express");
const router = express.Router();
// const controller = require('./controller_userplus')
const model = require('../core/tools')
const userplus = require('./model_userplus')

router.route("/")
    .get((req, res) =>
        model.getModelList(req, res, {model: userplus}))
    .post((req, res) =>
        model.insertModel(req, res, {model: userplus}));

router.route("/:id")
    .get((req, res) =>
        model.getModel_Id(req, res, {model: userplus, populate: ['gamenet']}))
    .put((req, res) =>
        model.updateModel(req, res, {model: userplus}))
    .delete((req, res) =>
        model.deleteModel(req, res, {model: userplus}));


module.exports = router;