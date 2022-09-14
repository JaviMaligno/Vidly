//import * as genresAPI from "./genreService";
const {genres} = require('./genreService')

const movies = [
    {
      _id: "5b21ca3eeb7f6fbccd471815",
      title: "Terminator",
      genre: "Action" ,
      numberInStock: 6,
      dailyRentalRate: 2.5,
      publishDate: "2018-01-03T19:04:28.809Z"
    },
    {
      _id: "5b21ca3eeb7f6fbccd471816",
      title: "Die Hard",
      genre:  "Action" ,
      numberInStock: 5,
      dailyRentalRate: 2.5
    },
    {
      _id: "5b21ca3eeb7f6fbccd471817",
      title: "Get Out",
      genre: "Thriller" ,
      numberInStock: 8,
      dailyRentalRate: 3.5
    },
    {
      _id: "5b21ca3eeb7f6fbccd471819",
      title: "Trip to Italy",
      genre: "Comedy",
      numberInStock: 7,
      dailyRentalRate: 3.5
    },
    {
      _id: "5b21ca3eeb7f6fbccd47181a",
      title: "Airplane",
      genre: "Comedy",
      numberInStock: 7,
      dailyRentalRate: 3.5
    },
    {
      _id: "5b21ca3eeb7f6fbccd47181b",
      title: "Wedding Crashers",
      genre: "Comedy",
      numberInStock: 7,
      dailyRentalRate: 3.5
    },
    {
      _id: "5b21ca3eeb7f6fbccd47181e",
      title: "Gone Girl",
      genre: "Thriller",
      numberInStock: 7,
      dailyRentalRate: 4.5
    },
    {
      _id: "5b21ca3eeb7f6fbccd47181f",
      title: "The Sixth Sense",
      genre: "Thriller",
      numberInStock: 4,
      dailyRentalRate: 3.5
    },
    {
      _id: "5b21ca3eeb7f6fbccd471821",
      title: "The Avengers",
      genre: "Action",
      numberInStock: 7,
      dailyRentalRate: 3.5
    }
  ];
  
   function getMovies() {
    return movies;
  }
  
   function getMovie(id) {
    return movies.find(m => m._id == id);
  }
  
 function saveMovie(movie) {
    let movieInDb = movies.find(m => m._id == movie._id) || {};
    movieInDb.title = movie.title;
    movieInDb.genre = genres.find(g => g.name == movie.genre); //maybe I want to add the genre if it doesn't exist
    movieInDb.numberInStock = movie.numberInStock;
    movieInDb.dailyRentalRate = movie.dailyRentalRate;
  
    if (!movieInDb._id) {
      movieInDb._id = Date.now();
      movies.push(movieInDb);
    }
  
    return movieInDb;
  }
  
   function deleteMovie(id) {
    let movieInDb = movies.find(m => m._id == id);
    movies.splice(movies.indexOf(movieInDb), 1);
    return movieInDb;
  }

  module.exports = {getMovie, getMovies, deleteMovie, saveMovie
  }