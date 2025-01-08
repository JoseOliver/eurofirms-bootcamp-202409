import mongoose from 'mongoose'
import getPosts from './getPosts.js'

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            return getPosts('6741f97a50976d72be46fe89')
                .then(posts => console.log(posts))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => console.log('the end'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())