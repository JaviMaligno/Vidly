const genres = [
    {  name: "Action" },
    {  name: "Comedy" },
    { name: "Thriller" }
  ];
  
function getGenres() {
    return genres.filter(g => g);
  }

module.exports = {genres, getGenres}