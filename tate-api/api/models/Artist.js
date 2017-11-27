/**
 * Artist.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    id : { type: 'integer', required: true },
    name : { type: 'integer', required: true },
    gender: { type: 'string' },
    yearOfBirth : { type: 'integer' },
    yearOfDeath : { type: 'integer' },
    placeOfBirth : { type: 'string' },
    placeOfBirth : { type: 'url' },

  },

};