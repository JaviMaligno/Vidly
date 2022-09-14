const express = require('express')
const router = express.Router()

//const {getMovies, getMovie, saveMovie, deleteMovie} = require('./filmService');
const {getmovies, putmovie, deletemovie, getmovie} = require('./controllers')
router.route('/').get(getmovies).put(putmovie).delete(deletemovie)
router.route('/:id').get(getmovie)

module.exports = router
