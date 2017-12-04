/**
 * Artwork.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id : { type: 'number', required: true },
    accession_number : { type: 'number', required: true },
    title: { type: 'string', required: true },
    artistId : { type: 'number', required: true },
    year : { type: 'number' },
    acquisitionYear : { type: 'number' },

        width : { type: 'number' },
        height : { type: 'number' },
        depth: { type: 'number' },

        Copyright : { type: 'string' },
        thumbnailUrl : { type: 'string' },
        url : { type: 'string' },

  },

};

