/**
 * ArtistController
 *
 * @description :: Server-side actions for handling incoming reqs.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    findOne(req, res) {
        let artistId = req.params.id;

        Artwork.find({ id: artistId })
        .then(artist => {
            if (!artist) return res.notFound({ error: 'No matching artist found' });
            return res.ok(artist);
        })
        .catch(err => res.serverError({ error: err }));
    },

    find(req, res) {
        Artist.find()
        .then(artist => sails.log(artist))
        .then(fetchedArtists => {
            if (!fetchedArtists || fetchedArtists.length === 0) {
                throw new Error('No artist found');
            }

            return res.ok(fetchedArtists);
        })
        .catch(err => res.serverError({ error: err }));

    }
};

