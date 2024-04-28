const mongoose = require("mongoose");
// var autoIncrement = require("../../model/autocomplete.js");
const game_schema = {

};

let game = mongoose.Schema(game_schema, {
    timestamps: true,
    versionKey: false,
});
// game.plugin(autoIncrement.plugin, {
//     model: "game",
//     field: "gameId",
// });
let gameModel = mongoose.model("game", game, "game",);

module.exports = gameModel;