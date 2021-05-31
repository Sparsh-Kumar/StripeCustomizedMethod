

const mongoose = require ('mongoose');
const path = require ('path');
const uniqueValidator = require ('mongoose-unique-validator');

const CardSchema = new mongoose.Schema ({

    // we have not done any other restrictions regarding validating the length and alphanumeric values of name, mobile etc
    // but you should do that in a real situation.

    name: {
        type: String,
        trim: true
    },

    mobile: {
        type: String,
        trim: true
    },

    token: {
        
        id: {
            type: String,
            trim: true
        },

        object: {
            type: String,
            trim: true
        },

        card: {
            
            id: {
                type: String,
                trim: true
            },

            object: {
                type: String,
                trim: true,
            },

            address_city: {
                type: String,
                trim: true
            },

            address_country: {
                type: String,
                trim: true
            },

            address_line1: {
                type: String,
                trim: true
            },

            address_line1_check: {
                type: String,
                trim: true
            },

            address_line2: {
                type: String,
                trim: true
            },

            address_state: {
                type: String,
                trim: true
            },

            address_zip: {
                type: String,
                trim: true
            },

            address_zip_check: {
                type: String,
                trim: true
            },

            brand: {
                type: String,
                trim: true
            },

            country: {
                type: String,
                trim: true
            },

            cvc_check: {
                type: String,
                trim: true
            },

            dynamic_last4: {
                type: String,
                trim: true
            },

            exp_month: {
                type: Number
            },

            exp_year: {
                type: Number
            },

            funding: {
                type: String,
                trim: true
            },

            last4: {
                type: String,
                trim: true
            },

            name: {
                type: String,
                trim: true
            },

            tokenization_method: {
                type: String,
                trim: true
            },
        },

        client_ip: {
            type: String,
            trim: true
        },

        created: {
            type: Number
        },

        livemode: {
            type: Boolean,
            default: false
        },

        type: {
            type: String,
            trim: true
        },

        used: {
            type: Boolean,
            default: false
        }
    }

}, { timestamps: true });

CardSchema.plugin (uniqueValidator);
const Card = mongoose.model ('cards', CardSchema);
module.exports = {
    Card
}