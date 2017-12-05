/**
 * Artist.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    id : { type: 'string', required: true, columnName: '_id' },
    name : { type: 'string', required: true },
    gender: { type: 'string' },

    yearOfBirth : { type: 'number' },
    yearOfDeath : { type: 'number' },

    placeOfBirth : { type: 'string' },
    placeOfDeath : { type: 'string' }

  },

};