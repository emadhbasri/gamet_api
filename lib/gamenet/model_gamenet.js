const mongoose = require("mongoose");
// var autoIncrement = require("../../model/autocomplete.js");
const Gamenet_schema = {
    owner: {},
    name: String,
    phone:String,
    location: {
        lat: Number,
        lng: Number,
        address: String
    },
    picture: {
        profile: String,
        images: [String]
    },
    consule: [{
        consule: {type: mongoose.Schema.Types.ObjectId, ref: "Consule"},
        price: Number,
        games: [{type: mongoose.Schema.Types.ObjectId, ref: "Game"}]
    }],
    vip:[{
        consule: {type: mongoose.Schema.Types.ObjectId, ref: "Consule"},
        price: Number,
        games: [{type: mongoose.Schema.Types.ObjectId, ref: "Game"}]
    }],
    gScore:Number,
    deleted: {type: Boolean, default: false}
};
let Gamenet = new mongoose.Schema(Gamenet_schema, {
    timestamps: true,
    versionKey: false,
});
// Gamenet.plugin(autoIncrement.plugin, {
//     model: "Gamenet",
//     field: "GamenetId",
// });
let GamenetModel = mongoose.model("Gamenet", Gamenet, "Gamenet");

module.exports = GamenetModel;