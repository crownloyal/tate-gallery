/**
 * Artist.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    tableName: 'artist',

    attributes: {

        name : { type: 'string', required: true },
        gender: { type: 'string' },

        yearOfBirth : { type: 'number' },
        yearOfDeath : { type: 'number' },

        placeOfBirth : { type: 'string' },
        placeOfDeath : { type: 'string' },

        artworks: { collection: 'artwork', via: 'artist'}

    },

};