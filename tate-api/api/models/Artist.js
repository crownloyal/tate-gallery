/**
 * Artist.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    id : { type: 'number', required: true },
    name : { type: 'number', required: true },
    gender: { type: 'string' },

    yearOfBirth : { type: 'number' },
    yearOfDeath : { type: 'number' },

    placeOfBirth : { type: 'string' },
    placeOfDeath : { type: 'string' }

  },

};