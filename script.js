'use strict'

/* let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", " ");
let lastFilm = prompt("Один из последних просмотренных фильмов?", " ");
let grade = +prompt("На сколько оцените его?", " ")

let personalMovieDB = {
    count: numberOfFilms,
    movies:{
        film: lastFilm,
        rating: grade,
    },
    actors:{},
    genres: [],
    privat:false

}

console.log(personalMovieDB); */

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ' '),
      b = prompt('На сколько оцените его?', ' '),
      c = prompt('Один из последних просмотренных фильмов?', ' '),
      d = prompt('На сколько оцените его?', ' ');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

