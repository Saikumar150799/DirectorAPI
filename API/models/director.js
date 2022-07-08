const mongoose = require('mongoose')

const DirectorSchema = new mongoose.Schema({
    directorName: {
        type: String,
        required: true,

    },
    Image: {
        type: String,
        required: true
    },

})


module.exports = mongoose.model('Director', DirectorSchema)


