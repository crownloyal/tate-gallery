/**
 * ArtistController
 *
 * @description :: Server-side actions for handling incoming reqs.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    findOne(req, res) {
        let artistId = req.params.id;

        Artist.find({ id: artistId })
        .then(artist => {

            if (!artist) return res.notFound({ error: 'No matching artist found' });
            return res.ok(artist);
        })
        .catch(err => res.serverError({ error: err }));
    },

    findAll(req, res) {
        let page = req.param('page');

        Artist.count()
        .exec((error, total) => {

            Artist.find()
            .paginate({ page, limit: 25 })
            .then(fetchedArtists => {

                if (!fetchedArtists || fetchedArtists.length === 0) {
                    throw new Error('No artist found');
                }

                return res.json({ ...fetchedArtists, total });
            })
            .catch(err => res.serverError({ error: err }));
        });
    },

    findAllArtwork(req, res) {
        let artistId = req.params.id;

        Artist.find({ id: artistId })
            .populate('artworks')
            .then(allArtwork => {
                if(!allArtwork) {
                    throw new Error(`No artwork found for artist ${artistId}.`);
                }

                return res.ok(allArtwork);
            })
            .catch(err => res.serverError({ error: err }));
    }
};

