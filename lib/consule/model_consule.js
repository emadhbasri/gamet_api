const mongoose = require("mongoose");
// var autoIncrement = require("../../model/autocomplete.js");
const Consule_schema = {
    name: String,
    title: String,
    desc: String,
    picture: {
        profile: String,
        images: [String]
    },
    priceD:Number,
    priceR:Number,
    info:{
        isPc: Boolean,
        isPs4: Boolean,
        isPs5: Boolean,
        isXbox: Boolean,
        nintendo:Boolean,
        other:Boolean,
    },
    specificGames:[{type: mongoose.Schema.Types.ObjectId, ref: "Game"}],
    games:[{type: mongoose.Schema.Types.ObjectId, ref: "Game"}],
    deleted: {type: Boolean, default: false}
};

let Consule = mongoose.Schema(Consule_schema, {
    timestamps: true,
    versionKey: false,
});
// Consule.plugin(autoIncrement.plugin, {
//     model: "Consule",
//     field: "ConsuleId",
// });
let ConsuleModel = mongoose.model("Consule", Consule, "Consule",);

module.exports = ConsuleModel;