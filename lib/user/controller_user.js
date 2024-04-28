const User = require('./model_user')

async function login(req, res) {
    try {
        let phone = req.params.phone;
        let options = {};
        options.populate = ['gamenet', 'game'].join(" ");

        let user = await User.findOne({phone}, {}, options);
        if (user != null) {
            res.send({
                status: true,
                data: user,
            });
        } else {
            res.send({
                status: false,
                data: null,
                error:'not found'
            });
        }

    } catch (error) {
        res.send({
            status: false,
            data: null,
            error: `${error}`
        });
    }
}

// const consule = require("./model_consule");
// const config = require("../core/config")
//
module.exports = {login};
