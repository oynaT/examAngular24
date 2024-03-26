const { getById } = require("../services/item");



module.exports = () => async (req, res, next) => {
    const id = req.params.id;
    try {
        const item = await getById(id).lean();
        item._ownerId = item.owner;
        //TODO: Change name of variable depending on project
        res.locals.item = item;
        next();
    } catch (err) {
        res.status(404).json({ message: 'Record not found'});
    }
};
