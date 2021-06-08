require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.createPaymentIntent = async (req, res, next) => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: req.body.total,
            currency: 'aud',
            metadata: {integration_check: 'accept_a_payment'},
          });
          req.session.payment_intent = paymentIntent
          res.status(200).json(paymentIntent.client_secret);
    } catch (error) {
        res.status(404).json(error);
    }
}