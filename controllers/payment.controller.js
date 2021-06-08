const stripe = require('stripe')(
    process.env.STRIPE_SECRET_KEY || 'sk_test_51J056TKarJexioXqV1TH9Ksd18RKnTsjPVw3W0xNpdE76hxoreDJBgEIpJqHF3CbaB9DehDF1ITHxjulYGYFqutR00QEUf0BiF');

exports.createPaymentIntent = async (req, res, next) => {
    try {
        console.log("working")
        console.log(req.body.total)
        const paymentIntent = await stripe.paymentIntents.create({
            amount: req.body.total,
            currency: 'aud',
            metadata: {integration_check: 'accept_a_payment'},
          });
          console.log(paymentIntent)
          req.session.payment_intent = paymentIntent
          res.status(200).json(paymentIntent.client_secret);
    } catch (error) {
        res.status(404).json(error);
    }
}