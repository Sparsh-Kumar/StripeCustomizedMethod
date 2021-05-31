

const path = require ('path');
const { Card } = require (path.resolve (__dirname, '..', 'Database', 'Models', 'Card'));
const _ = require ('lodash');

const order = async (req, res) => {

    try {

        const {
            
            name,
            mobile,
            token

        } = _.pick (req.body, ['name', 'mobile', 'token', 'client_ip', 'created', 'livemode', 'type', 'used']);

        Card.create ({
            
            name,
            mobile,
            token

        }).then ((createdCard) => {

            return res.status (200).send ({
                status: 'success',
                createdCard
            })

        }).catch ((error) => {

            console.log (error.message);
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