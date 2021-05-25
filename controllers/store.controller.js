const StoreService = require("../services/store.service");

exports.editStore = async (req, res, next) => {
    const store_id = req.session.store_id;
    const name = req.body.name;
    const description = req.body.description;

    try {
        const updatedStore = await StoreService.editStore(name, description, store_id);
        res.status(200).json(updatedStore);
    } catch (error) {
        res.status(404).json(error.message);
    }
}

exports.getStore = async (req, res, next) => {
    const user_id = req.session.user_id;

    try {
        const store = await StoreService.getStore(user_id);
        res.status(200).json(store);
    } catch (error) {
        res.status(500).json(error.message);
    }
}