

const path = require ('path');

const order = async (req, res) => {

    try {

        console.log (req.body);

    } catch (error) {
        return res.status (401).send ({
            status: 'failure',
            message: error.message
        })
    }

}

module.exports = {
    order
}