'use strict'

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};



function rememberMyFilms () {
    for (let i = 0; i < 2; i++){
        const a = prompt('Один из последних просмотренных фильмов?', ' '),
              b = prompt('На сколько оцените его?', ' ');
    
        if(a != null && b != null && a != '' && b != '' && a.length < 50 ){
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }              
    }
}
rememberMyFilms ();

/*  let i = 0;
while(i < 2){
    
    const a = prompt('Один из последних просмотренных фильмов?', ' '),
    b = prompt('На сколько оцените его?', ' ');
    i++;

if(a != null && b != null && a != '' && b != '' && a.length < 50 ){
  personalMovieDB.movies[a] = b;
  console.log('done');
} else {
  console.log('error');
  i--;
}   
} */


function detectPersonalLevel () {
    if (personalMovieDB.count < 10){
        alert("Просмотренно довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        alert(" Вы класический зритель");
    } else if (personalMovieDB.count >= 30){
        alert("Вы киноман!");
    }else {
        console.log('Произошла ошибка');
    }
}
detectPersonalLevel ();

// 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
// false - выводит в консоль главный объект программы

function showMyDB () {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    } else {
        alert('Access is denied');
    }
}
showMyDB ();

/* 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres */

function writeYourGenres() {
    for (let i = 0; i < 3; i++){
        let a = prompt(`Ваш любимый жанр под номером ${i}`, " ");
        personalMovieDB.genres[i] = a; 
    }
}
writeYourGenres();


