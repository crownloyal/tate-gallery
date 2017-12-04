/**
 * ArtworkController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    find(request, response) {
        let artworkId = request.params.id;

            if (!artworkId) return response.badRequest({ err: 'missing post_id field' });

            Artwork.findOne({ id: artworkId })
                .populate('category')
                .populate('user')
                .then(_artwork => {

                if (!_artwork) return response.notFound({ err: 'No post found' });

                return response.ok(_artwork);
            })
            .catch(err => response.serverError({ error: err }));
    },

    findAll(request, response) {
        Artwork.find()
        .populate('artwork')
        .then(_artworks => {

            if (!_artworks || _artworks.length === 0) {
                throw new Error('No post found');
            }
            return response.ok(_artworks);

        })
        .catch(err => response.serverError({ error: err }));
    }
};

