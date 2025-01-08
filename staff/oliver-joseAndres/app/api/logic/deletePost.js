import { User, Post } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, NotFoundError, OwnershipError } = errors

function deletePost(userId, postId) {
    validate.userId(userId)
    validate.postId(postId)

    return Promise.all([
        User.findById(userId).lean(),
        Post.findById(postId).lean()
    ])
        .catch(error => { throw new SystemError(error.message) })
        .then(userAndPost => {
            const [user, post] = userAndPost

            if (!user) throw new NotFoundError('user not found')
            if (!post) throw new NotFoundError('post not found')

            if (post.author.toString() !== userId) throw new OwnershipError('user is not author of post')

            return Post.deleteOne({ _id: post._id })
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(_ => { })
}

export default deletePost
