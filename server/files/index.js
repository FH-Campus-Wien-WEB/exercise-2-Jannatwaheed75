window.onload = function () {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    const bodyElement = document.querySelector("body");
    
    if (xhr.status == 200) {
      const moviesFromServer = JSON.parse(xhr.responseText);
      
        /* Task 1.3. Add your code from exercise 1 here 
           and include a non-functional 'Edit' button
           to pass this test */
      let container = document.getElementById("movie-container");
      if (!container) {
        container = document.createElement("div");
        container.id = "movie-container";
        document.body.appendChild(container);
      }

      for (const f of moviesFromServer) { 
        let genreHTML = "";
        if (f.Genres) {
          for (const genre of f.Genres) { 
            genreHTML += '<span class="genre">' + genre + '</span>';
          }
        }

        const article = document.createElement("article");
        article.id = f.imdbID;
        article.innerHTML =
          '<h1>' + f.Title + '</h1>' + 
          '<img src="' + f.Poster + '">' + 
          '<p>' + f.Plot + '</p>' + 
          '<p class="meta-info">' +
            'Released: ' + f.Released + ' | Runtime: ' + f.Runtime + ' min | ' + 
            'IMDb: ' + f.imdbRating + ' | Metascore: ' + f.Metascore +
          '</p>' +
          '<p class="meta-info">' +
            'Directors: ' + f.Directors.join(", ") + ' | ' + 
            'Writers: ' + f.Writers.join(", ") + ' | ' +
            'Actors: ' + f.Actors.join(", ") +
          '</p>' +
          '<div>' + genreHTML + '</div>';

        const button = document.createElement("button");
        button.textContent = "Edit";
        button.className = "edit-button";
        button.onclick = function() {
          location.href = 'edit.html?imdbID=' + f.imdbID;
        };

        article.appendChild(button);
        container.appendChild(article);
      }
    } else {
      bodyElement.append("Fehler: " + xhr.status);
    }
  };  
  xhr.open("GET", "/movies");
  xhr.send();
};