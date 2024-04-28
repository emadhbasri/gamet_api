const game = require("./model_game");
const config = require("../core/config")
const getGameList = async (req, res) => {

    try {
        let filter = req.body.filter ?? {};
        let page = req.body.page ?? -1;
        let projection = {};

        let options = {
            sort : req.body.sort,
            populate: [].join(" ")
        };
        if (req.body.sort !== undefined && req.body.sort!==null) {
            options.sort = req.body.sort;
        }
        if (page !== -1) {
            options.skip = page * config.Limit - config.Limit;
        }
        let list = await game.find(filter,projection,options);
        let count = await game.countDocuments(filter);
        res.send({
            status: true,
            data: list,
            pages: Math.ceil(count / config.Limit),
            count,
        });
    } catch (error) {
        res.send({
            status: false,

            data: null,

            error: `${error}`
        });
    }

};
const getGame_Id = async (req, res) => {
    try {
        let id = req.params.id;
        let options = {
            populate: [].join(" ")
        };

        const gameData = await game.findById(id, {}, options);

        res.send({
            status: true,
            data: gameData,
        });
    } catch (error) {
        res.send({
            status: false,
            data: null,
            error: `${error}`
        });
    }
};
// const getGameId = async (req, res) => {
//     try {
//         const gameData = await game.findOne({defaultId: req.query.id})
//         res.send({
//           status: true,
//           data: gameData._id,
//         });
//       } catch (error) {
//         res.send({
//             status: false,
//             data: null,
//             error: `${error}`
//           });
//       }
// };
const insertGame = async (req, res) => {

    try {
        const newGame = new game(req.body.data);
        const gameData = await newGame.save();
        res.send({
            status: true,
            data: gameData._id,
        });
    } catch (error) {
        res.send({
            status: false,
            data: null,
            error: `${error}`
        });
    }
};
const updateGame = async (req, res) => {
    try {
        let id = req.params.id;
        let data = req.body.data;
        await game.findByIdAndUpdate(id, data)
        res.send({
            status: true,
        });
    } catch (error) {
        res.send({
            status: false,
            data: null,
            error: `${error}`
        });
    }
};
const deleteGame = async (req, res) => {
    try {
        let id = req.params.id;
        await game.findByIdAndUpdate(id, {deleted: true})
        res.send({
            status: true,
        });
    } catch (error) {
        res.send({
            status: false,
            error: `${error}`
        });
    }
};

module.exports = {
    getGameList,
    getGame_Id,
    // getGameId,
    insertGame,
    updateGame,
    deleteGame,
};
