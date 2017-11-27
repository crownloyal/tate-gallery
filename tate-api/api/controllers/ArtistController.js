/**
 * ArtistController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    find(request, response) {
        let postId = req.params.id;

            if (!postId) return res.badRequest({ err: 'missing post_id field' });

            Post.findOne({ id: postId })
                .populate('category')
                .populate('user')
                .then(_post => {

                if (!_post) return res.notFound({ err: 'No post found' });

                return res.ok(_post);
            })
            .catch(err => res.serverError(err));
    },

    findAll(request, response) {
        Artist.find()
        .populate('artwork')
        .then(_posts => {

            if (!_posts || _posts.length === 0) {
                throw new Error('No post found');
            }
            return res.ok(_posts);

        })
        .catch(err => res.serverError(err));
    }

};

