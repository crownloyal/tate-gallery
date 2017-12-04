/**
 * ArtistController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    find(request, response) {
        let artistId = request.params.id;

            if (!artistId) return response.badRequest({ error: 'missing artist_id' });

            Artwork.findOne({ id: artistId })
                .populate('artist')
                .then(artist => {

                if (!_artist) return response.notFound({ error: 'No matching artist found' });

                return response.ok(_artist);
            })
            .catch(err => response.serverError({ error: err }));
    },

    findAll(request, response) {
        Artist.find()
        .populate('artist')
        .then(_artists => {

            if (!_artists || _artists.length === 0) {
                throw new Error('No artist found');
            }
            return response.ok(_artists);

        })
        .catch(err => response.serverError({ error: err }));
    }
};

