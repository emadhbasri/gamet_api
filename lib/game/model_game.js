const mongoose = require("mongoose");
// var autoIncrement = require("../../model/autocomplete.js");
const Game_schema = {
    name: String,
    title: String,
    desc: String,

    picture: {
        profile: String,
    },
    isTop: {type: Boolean, default: false},
    info: {
        company: String,
        year: Number,//release
        score: Number,
        gScore: Number,
        isPc: Boolean,
        isPs4: Boolean,
        isPs5: Boolean,
        isXbox: Boolean,
    },
    deleted: {type: Boolean, default: false}
};

let Game = new mongoose.Schema(Game_schema, {
    timestamps: true,
    versionKey: false,
});
// Game.plugin(autoIncrement.plugin, {
//     model: "Game",
//     field: "GameId",
// });
let GameModel = mongoose.model("Game", Game, "Game",);

module.exports = GameModel;