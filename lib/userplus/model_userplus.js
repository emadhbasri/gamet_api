const mongoose = require("mongoose");
// var autoIncrement = require("../../model/autocomplete.js");
const Userplus_schema = {
    name: String,
    family: String,
    phone: String,
    sex: Boolean,
    gamenet: [{type: mongoose.Schema.Types.ObjectId, ref: "Gamenet"}],
    deleted: {type: Boolean, default: false}
};

let Userplus = new mongoose.Schema(Userplus_schema, {
    timestamps: true,
    versionKey: false,
});
// Userplus.plugin(autoIncrement.plugin, {
//     model: "Userplus",
//     field: "UserplusId",
// });
let UserplusModel = mongoose.model("Userplus", Userplus, "Userplus",);

module.exports = UserplusModel;