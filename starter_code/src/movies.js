// eslint no-restricted-globals: 'off'

// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 
function ratesAverage(movies) {
  var averageRate = movies.reduce((acc, movie) => {
    acc += movie.rate;
    return acc;
  }, 0);
  return parseFloat((averageRate/movies.length).toFixed(2));
}

// Get the average of Drama Movies

function dramaMoviesRate(movies) {
  var dramaMovies = movies.filter((movie) => movie.genre.includes("Drama"));
  if (dramaMovies == "") {
    return undefined;
  }
  return ratesAverage(dramaMovies);
}

// Order by time duration, in growing order
function orderByDuration(movies) {
  function compare (a, b) {
    const durationA = a.duration;
    const durationB = b.duration;
    let durationCompare = 0;
    if (durationA > durationB) {
      durationCompare = 1;
    } else if (durationA < durationB) {
     durationCompare = -1;
    } else if (durationA === durationB) {
      if (a.title > b.title) {
        durationCompare = 1;
      } else if (a.title < b.title) {
        durationCompare = -1;
      } else { 
        durationCompare = 0;
      }
    }
    return durationCompare;
  }
  return movies.sort(compare);
}



// How many movies did STEVEN SPIELBERG

function howManyMovies(movies) {
  var dramaMovies = movies.filter((movie) => movie.genre.includes("Drama"));
  if (dramaMovies == "") {
    return undefined;
  }
  var stevenMovies = dramaMovies.filter((dramaMovie) => dramaMovie.director === "Steven Spielberg");
  if (stevenMovies == "") {
    return ("Steven Spielberg directed 0 drama movies!");
  }
  return(`Steven Spielberg directed ${stevenMovies.length} drama movies!`);
}

// Order by title and print the first 20 titles

//IT WORKS even though Jasmine wants none of it I swear it works!

function orderAlphabetically(movies) {
  var movieTitles20 = [];
  for (let i = 0; i < 20; i++) {
    movieTitles20.push(movies[i]["title"]);
  }
  console.log(movieTitles20);
  let movieTitlesSorted = [];
  movieTitlesSorted = movieTitles20.sort(function (x, y) {
     if (x < y) return -1;
     else if (x > y) return 1;
     return 0;
  });
  console.log(movieTitlesSorted);
  return movieTitlesSorted;
}

orderAlphabetically = myMovies => {
  var titlesMovies = [];
  myMovies.map(oneMovie => {
    titlesMovies.push(oneMovie.title);
  });
  titlesMovies.sort((a, b) => {
    if (a > b) {
      return 1;
    } else if (a < b) { 
      return -1; 
    } else { 
      return 0; 
    } 
  }); 
  if (titlesMovies.length > 20) { 
    return titlesMovies.slice(0, 20); 
  } else { 
    return titlesMovies; 
  } 
};


// Best yearly rate average
