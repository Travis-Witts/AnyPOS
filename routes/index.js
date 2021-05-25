const router = require('express').Router();

const productRoutes = require('./productApiRoutes');
const storeRoutes = require('./storeApiRoutes');
const transactionRoutes = require('./transactionApiRoutes');
const userRoutes = require('./userApiRoutes');

router.use('/product', productRoutes);
router.use('/store', storeRoutes);
router.use('/transaction', transactionRoutes);
router.use('/user', userRoutes);


module.exports = router;