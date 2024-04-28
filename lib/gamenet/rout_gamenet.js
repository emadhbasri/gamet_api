const express = require("express");
const router = express.Router();
// const controller = require('./controller_gamenet')
const model = require('../core/tools')
const gamenet = require('./model_gamenet')

router.route("/")
    .get((req, res) =>
        model.getModelList(req, res, {model: gamenet}));
    // .post((req, res) =>
    //     model.insertModel(req, res, {model: gamenet}));

router.route("/:id")
    .get((req, res) =>
        model.getModel_Id(req, res, {
            model: gamenet,
            populate: ['consule.consule', 'consule.games', 'vip.consule', 'vip.games']
        }))
    // .put((req, res) =>
    //     model.updateModel(req, res, {model: gamenet}))
    // .delete((req, res) =>
    //     model.deleteModel(req, res, {model: gamenet}));


module.exports = router;