

const path = require ('path');
const { Card } = require (path.resolve (__dirname, '..', 'Database', 'Models', 'Card'));
const _ = require ('lodash');
const Stripe = require ('stripe');
const stripe = Stripe (process.env.STRIPE_SECRET_API_KEY);

// Defining the order controller
const order = async (req, res) => {

    try {

        const {
            
            name,
            mobile,
            token

        } = _.pick (req.body, ['name', 'mobile', 'token']);

        if (!name || !mobile || !token) { throw new Error ('please enter all the required values'); }


        // inserting the card into the database

        Card.create ({
            
            name,
            mobile,
            token

        }).then ((createdCard) => {

            // when the card is inserted into the database, 
            // charge the card

            return stripe.charges.create ({

                amount: 1000 * 100,
                source: createdCard.token.id,
                currency: 'usd',
                description: 'the tip amount has been charged'

            })

        }).then ((createdCharge) => {

            return res.status (200).send ({
                status: 'success',
                createdCharge
            })
            
        }).catch ((error) => {

            return res.status (401).send ({
                status: 'failure',
                message: error.message
            })

        })

    } catch (error) {
        console.log (error.message);
        return res.status (401).send ({
            status: 'failure',
            message: error.message
        })
    }

}

module.exports = {
    order
}