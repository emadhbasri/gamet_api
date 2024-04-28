const config = require("../core/config")

const getModelList = async (req, res, obj) => {
    try {
        let filter = {};
        if (obj.filter !== undefined) filter = obj.filter;
        if (req.body.filter !== undefined) filter = req.body.filter;
        let page = req.body.page ?? -1;
        let projection = obj.projection ?? {};

        let options = {};

        if (obj.sort !== undefined) options.sort = obj.sort;
        if (req.body.sort !== undefined) options.sort = req.body.sort;

        if (obj.populate !== undefined) options.populate = obj.populate.join(" ");
        if (req.body.populate !== undefined) options.populate = req.body.populate.join(" ");


        if (page !== -1) {
            options.skip = page * config.Limit - config.Limit;
        }
        let list = await obj.model.find(filter, projection, options);
        let count = await obj.model.countDocuments(filter);
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

const getModel_Id = async (req, res, obj) => {
    try {
        let id = req.params.id;
        let projection = obj.projection ?? {};
        let options = {};
        if (obj.populate !== undefined) options.populate = obj.populate.join(" ");
        if (req.body.populate !== undefined) options.populate = req.body.populate.join(" ");

        const modelData = await obj.model.findById(id, projection, options);

        res.send({
            status: true,
            data: modelData,
        });
    } catch (error) {
        res.send({
            status: false,
            data: null,
            error: `${error}`
        });
    }
};

const insertModel = async (req, res, obj) => {

    try {
        const newModel = new obj.model(req.body);
        const modelData = await newModel.save();
        res.send({
            status: true,
            data: modelData._id,
        });
    } catch (error) {
        res.send({
            status: false,
            data: null,
            error: `${error}`
        });
    }
};

const updateModel = async (req, res, obj) => {
    try {
        let id = req.params.id;
        let data = req.body;
        await obj.model.findByIdAndUpdate(id, data)
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

const deleteModel = async (req, res, obj) => {
    try {
        let id = req.params.id;
        await obj.model.findByIdAndUpdate(id, {deleted: true})
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
    getModelList,
    getModel_Id,
    insertModel,
    updateModel,
    deleteModel,
};
