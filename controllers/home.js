

const path = require ('path');
const home = async (req, res) => {

    try {

        return res.status (200).render ('layouts/home', {
            stripePublic: process.env.STRIPE_PUBLIC_API_KEY
        });

    } catch (error) {

        return res.status (401).send ({
            status: 'failure',
            message: error.message
        })

    }
}

module.exports = {
    home
}