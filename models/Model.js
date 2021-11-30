
// imports
const { Schema, model } = require( 'mongoose' );


// SchemaCar
const SchemaCar = new Schema({

    name: {
        type: String,
        required: true
    },

    speed: {
        type: String,
        required: true
    },

    user: {
        type: String,
        required: true
    }

});


// exports
module.exports = model( 'car', SchemaCar );