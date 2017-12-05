/**
 * ArtworkController
 *
 * @description :: Server-side actions for handling incoming reqs.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    findOne(req, res) {
        let artworkId = req.params.id;

        if (!artworkId) return res.badRequest({ err: 'missing artwork_id field' });

        Artwork.findOne({ id: artworkId })
            .populate('artwork')
            .then(artwork => {
                if (!artwork) return res.notFound({ err: 'No artwork found' });
                return res.ok(artwork);
            })
        .catch(err => res.serverError({ error: err }));
    },

    find(req, res) {
        Artwork.find({})
        .then(artwork => sails.log(artwork))
        .then(fetchedArtworks => {

            if (!fetchedArtworks || fetchedArtworks.length === 0) {
                throw new Error('No artwork found');
            }

            return res.ok(fetchedArtworks);
        })
        .catch(err => res.serverError({ error: err }));
    }
};

