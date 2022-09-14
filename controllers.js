const {getMovies, getMovie, saveMovie, deleteMovie} = require('./filmService');

const getmovies = (req, res) => {
    const movies = getMovies()
    res.send(movies)}

const putmovie = (req, res) =>{ //put creates if it doesn't exist
    const movie = req.body
    const movies = getMovies()
    saveMovie(movie)
    res.json([{success: true, ...movies}])
}

const deletemovie =  (req, res) => {
    const {_id} = req.body
    const movies = getMovies()
    deleteMovie(_id)
    res.json([{success: true, ...movies}])
}

const getmovie = (req, res) => {
    const {id} = req.params
    const movie = getMovie(id)
    if(!movie){
       return res.status(404).send('Movie not Found')
    }
    res.status(200).send(movie)
}

module.exports = {getmovies, putmovie, deletemovie, getmovie}

