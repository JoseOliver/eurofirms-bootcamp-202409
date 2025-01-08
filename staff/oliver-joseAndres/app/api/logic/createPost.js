import { User, Post } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, NotFoundError } = errors

function createPost(userId, image, text) {
    validate.userId(userId)
    validate.image(image)
    validate.text(text)

    return User.findById(userId).lean()
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')

            return Post.create({ author: userId, image, text })
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(_ => { })
}

export default createPost
