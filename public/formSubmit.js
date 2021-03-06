
import { StripeConfig } from './StripeConfig.js';
import { SendPostRequest } from './HandleRequest.js';

/*
    important: I we make use of different instance of Stripe to generate token
    then it will throw an error, while generating the token we would have to make
    use of same stripe instance that was used to mount the card
*/

const formSubmit = () => {
    $ ('#submitForm').click (function () {
        const [paymentMethod, name, mobile] = [$('#paying-method').val (), $('#name').val (), $('#mobile').val ()];
        
        const jsonData = {
            paymentMethod,
            name,
            mobile
        }

        if (paymentMethod === '2') { // Using card method [option 2]
            let { stripe, card }= StripeConfig.getCard (); // getting the same stripe instance that was used to mount card
            const publicKey = $('#stripePublic').attr ('value'); // getting the stripe public key
            stripe.createToken (card).then ((response) => {
                if (response.error) {
                    throw new Error (response.error.message)
                }

                // adding the response.token into the jsonData
                jsonData.token = response.token;

                // sending the jsonData to '/order' endpoint
                return SendPostRequest ('POST', '/api/order', jsonData, { 'Content-Type': 'application/json' });

            }).then ((response) => {
                window.location.href = '/api/success';
            }).catch ((error) => {
                $('#error').text = error.message;
            })

        } else {
            // order with pay on delivery
            console.log ('Paying with pay on delivery');
        }

    })
}

export { 
    formSubmit
}