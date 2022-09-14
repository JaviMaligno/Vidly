const express = require("express");
const app = express()
const getGenres = require('./genreService')
//const {getMovies, getMovie, saveMovie, deleteMovie} = require('./filmService');
const { json } = require("express");

const routermovies = require('./router-movies')

app.use(json())

app.get('/', (req, res) => {
    res.write('<h1>Welcome to the Home Page</h1>')
    res.write('Click below')
    res.end()
})

app.get('/genres', (req, res) => {
    const genres = getGenres()
    res.send(genres)
})


//I will use router to group things like /movies

/* app.get('/movies', (req, res) => {
    const movies = getMovies()
    res.send(movies)
}) */

/* app.put('/movies', (req, res) =>{ //put creates if it doesn't exist
    const movie = req.body
    const movies = getMovies()
    saveMovie(movie)
    res.json([{success: true, ...movies}])
}) */

/* app.delete('/movies', (req, res) => {
    const {_id} = req.body
    const movies = getMovies()
    deleteMovie(_id)
    res.json([{success: true, ...movies}])
}) */

/* app.get('/movies/:id', (req, res) => {
    const {id} = req.params
    const movie = getMovie(id)
    if(!movie){
       return res.status(404).send('Movie not Found')
    }
    res.status(200).send(movie)
}) */


app.use('/movies', routermovies)

app.listen(5000, () => {
    console.log('Listening on port 5000...')
})

//sending request from front in the html is a bit too complex and probably too much front for me
//I will only do the basic to show the list of movies and genres