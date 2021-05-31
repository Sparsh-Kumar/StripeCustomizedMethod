

const success = async (req, res) => {
    try {
        return res.status (200).send ({
            status: 'success',
            message: 'Your payment is successfully done'
        })
    } catch (error) {
        return res.status (401).send ({
            status: 'failure',
            message: error.message
        })
    }
}

module.exports = {
    success
}