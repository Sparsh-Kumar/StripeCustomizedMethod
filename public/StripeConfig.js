

class StripeConfig {
    
    constructor () {
        this.stripe = undefined
        this.card = undefined
    }

    static setCard (stripe = undefined, card = undefined) {
        this.stripe = stripe;
        this.card = card;
    }

    static getCard () {
        return {
            stripe: this.stripe,
            card: this.card
        }
    }

}

export {
    StripeConfig
}

