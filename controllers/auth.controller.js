exports.getAuth = async (req, res, next) => {
    try {
        const auth = {
            userId: req.session.user_id,
            storeId: req.session.store_id
        }
        res.status(200).json(auth);
    } catch (error) {
        res.status(400).json(error);
    }
}