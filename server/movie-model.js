/* Task 1.1. Add your movie data here 
   and export it so it's available in server.js */
   const movies = {
  tt1: {
    imdbID: "tt1",
    Title: "Dune: Part Two",
    Released: "2024-03-01",
    Runtime: 166,
    Genres: ["Action", "Adventure", "Sci-Fi"],
    Directors: ["Denis Villeneuve"],
    Writers: ["Denis Villeneuve", "Jon Spaihts"],
    Actors: ["Timothée Chalamet", "Zendaya", "Austin Butler"],
    Plot: "Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, he endeavors to prevent a terrible future only he can foresee.",
    Poster: "https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
    Metascore: 79,
    imdbRating: 8.8
  },
  tt2: {
    imdbID: "tt2",
    Title: "Oppenheimer",
    Released: "2023-07-21",
    Runtime: 180,
    Genres: ["Biography", "Drama"],
    Directors: ["Christopher Nolan"],
    Writers: ["Christopher Nolan"],
    Actors: ["Cillian Murphy"],
    Plot: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb. The film explores his brilliant mind, the intense pressure of the Manhattan Project, and the moral consequences that followed the birth of the nuclear age.",
    Poster: "https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg",
    Metascore: 88,
    imdbRating: 8.4
  },
  tt3: {
    imdbID: "tt3",
    Title: "Barbie",
    Released: "2023-07-21",
    Runtime: 114,
    Genres: ["Comedy"],
    Directors: ["Greta Gerwig"],
    Writers: ["Greta Gerwig"],
    Actors: ["Margot Robbie"],
    Plot: "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
    Poster: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
    Metascore: 80,
    imdbRating: 6.9
  }
};

module.exports = movies;