const express = require('express')
const router = express.Router()
const Director = require('../models/director')
const Movie = require('../models/movie')


// get all directors
router.get('/', async (req, res) => {
    const directors = await Director.find()
        .then((director) => {
            res.json(director)
        }).catch((err) => {
            res.status(404).send(err)
        })

})

// get all the movies
router.get('/movies', async (req, res) => {
    const movies = await Movie.find()
        .then((movie) => {
            res.json(movie)
        }).catch((err) => {
            res.status(404).send(err)
        })

})

// post a single movie
router.post('/movies', async (req, res) => {
    const movie = new Movie({
        directorId: req.body.directorId,
        movieName: req.body.movieName,
        description: req.body.description
    })
    const movie1 = await movie.save()
        .then((movie) => {
            res.json(movie)
        }).catch((err) => {
            res.status(404).send(err)
        })
})


// post director
router.post('/', async (req, res) => {
    const director = new Director({
        directorName: req.body.directorName,
        Image: req.body.Image
    })

    const director1 = await director.save()
        .then((director) => {
            res.json(director)
        }).catch((err) => {
            res.status(404).send(err)
        })
})

// get single director
router.get('/:id', async (req, res) => {
    const directors = await Director.findById(req.params.id)
        .then((director) => {
            res.json(director)
        }).catch((err) => {
            res.status(404).send(err)
        })

})

// update the single director
router.patch('/:id', async (req, res) => {
    const director = await Director.findById(req.params.id)
    director.directorName = req.body.directorName //what to update mention here,for now i am updating directorname only
    const director1 = await director.save()
        .then((director) => {
            res.json("updated director")
        }).catch((err) => {
            res.status(400).send(err)
        })
})

// router.patch('/movies/:id',async(req,res)=>{
//     const movie=await Movie.findById(req.params.id)
//     movie.movieName=req.body.movieName //what to update mention here,for now i am updating moviename only
//     const movie1=await movie.save()
//     .then((movie)=>{
//         res.json("updated movie")
//     }).catch((err)=>{
//         res.status(400).send(err)
//     })
// })


// delete the single director
router.delete('/:id', async (req, res) => {
    const director = await Director.findById(req.params.id)  // for deleting we can use inbuilt method findByIdAndDelete instead findById and remove()
    const director1 = await director.remove()
        .then((director) => {
            res.json("director deleted!!!")
        }).catch((err) => {
            res.status(400).send(err)
        })
})

// delete the movie
router.delete('/movies/:id', async (req, res) => {
    const movie = await Movie.findById(req.params.id)
    const movie1 = await movie.remove()
        .then((movie) => {
            res.json("movie deleted!!!")
        }).catch((err) => {
            res.status(400).send(err)
        })
})

// get all the movies of single director


module.exports = router