
import { StripeConfig } from './StripeConfig.js';

const trackChange = () => {
    $('#paying-method').change (function () {
        let value = $('#paying-method').val ();
        if (value === "1") {
            $('#card-element').hide ();
            StripeConfig.setCard (undefined, undefined);
        }
        else if (value === "2") {
            $('#card-element').show ();
            let style = {

                base: {
                    color: '#32325d',
                    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                    fontSmoothing: 'antialiased',
                    fontSize: '20px', // increase this font size in order to increase size of card element
                    '::placeholder': {
                        color: '#aab7c4'
                    }
                },

                invalid: {
                    color: '#fa755a',
                    iconColor: '#fa755a'
                }

            }
            const publicKey = $('#stripePublic').attr ('value');
            const stripe = Stripe (publicKey);
            const elements = stripe.elements ();
            const cardElement = elements.create ('card', { style });
            cardElement.mount ('#card-element');
            StripeConfig.setCard (stripe, cardElement);
        }
    })
}

export {
    trackChange
}