const mongoose = require('mongoose')

const moviesSchema = new mongoose.Schema({
    directorId: {
        type: String,
        required: true
    },
    movieName: {
        type: String,
        required: true,

    },
    description: {
        type: String,
        required: true,
    }
})
module.exports = mongoose.model('Movie', moviesSchema)