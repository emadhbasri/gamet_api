const mongoose = require("mongoose");
// var autoIncrement = require("../../model/autocomplete.js");
const User_schema = {
    name: String,
    family: String,
    phone: String,
    sex: Boolean,
    gamenet: [{type: mongoose.Schema.Types.ObjectId, ref: "Gamenet"}],
    game: [{type: mongoose.Schema.Types.ObjectId, ref: "Game"}],
    deleted: {type: Boolean, default: false}
};

let User = new mongoose.Schema(User_schema, {
    timestamps: true,
    versionKey: false,
});
// User.plugin(autoIncrement.plugin, {
//     model: "User",
//     field: "UserId",
// });
let UserModel = mongoose.model("User", User, "User",);

module.exports = UserModel;