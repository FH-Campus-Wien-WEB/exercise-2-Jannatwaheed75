const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const movieModel = require('./movie-model.js');

const app = express();
app.use(bodyParser.json()); 
app.use(express.static(path.join(__dirname, 'files')));

// Configure a 'get' endpoint for all movies..
app.get('/movies', function (req, res) {
  /* Task 1.2. Remove the line below and eturn the movies from 
     the model as an array */
  res.json(Object.values(movieModel));
});

// Configure a 'get' endpoint for a specific movie
app.get('/movies/:imdbID', function (req, res) {
  /* Task 2.1. Remove the line below and add the 
    functionality here */
  const id = req.params.imdbID; // holt ID aus URL
  const movie = movieModel[id]; // sucht film im Objekt

  if (movie) {
    res.json(movie); // wenn film gefunden
  } else {
    res.sendStatus(404); // od nicht gefunden
  }
});

/* Task 3.1 and 3.2.
   - Add a new PUT endpoint
   - Check whether the movie sent by the client already exists 
     and continue as described in the assignment */
     app.put('/movies/:imdbID', function (req, res) {
      const id = req.params.imdbID;
      const movie = req.body;

    if (movieModel[id]) {
        movieModel[id] = movie; // update
        res.sendStatus(200);
    } else {
        movieModel[id] = movie; // neu erstellen
        res.status(201).json(movie);
    }
    });

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")
