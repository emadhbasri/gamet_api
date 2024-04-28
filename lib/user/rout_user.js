const express = require("express");
const router = express.Router();
// const controller = require('./controller_user')
const model = require('../core/tools')
const user = require('./model_user')
const {login} = require("./controller_user");

router.route("/")
    .get((req, res) =>
        model.getModelList(req, res, {model: user}))
    .post((req, res) =>
        model.insertModel(req, res, {model: user}))
    .get((req, res) =>
        login(req, res))

router.route("/:id")
    .put((req, res) =>
        model.updateModel(req, res, {model: user}))
    .delete((req, res) =>
        model.deleteModel(req, res, {model: user}));


module.exports = router;