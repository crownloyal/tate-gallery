/**
 * Artwork.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id : { type: 'integer', required: true },
    accession_number : { type: 'integer', required: true },
    title: { type: 'string', required: true },
    artistId : { type: 'integer', required: true },
    year : { type: 'integer' },
    acquisitionYear : { type: 'integer' },
    dimensions : {
        width : { type: 'integer' },
        height : { type: 'integer' },
        depth: { type: 'integer' },
    },
    thumbnail : {
        Copyright : { type: 'string' },
        thumbnailUrl : { type: 'string' },
        url : { type: 'string' },
    }
  },

};

