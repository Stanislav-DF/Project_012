'use strict'

let numberOfFilms;
let personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};

// 1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
// перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
// Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы



function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

personalMovieDB.start = start;
personalMovieDB.start();



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
personalMovieDB.rememberMyFilms = rememberMyFilms;
personalMovieDB.rememberMyFilms ();

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

personalMovieDB.detectPersonalLevel = detectPersonalLevel;
personalMovieDB.detectPersonalLevel ();

// 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
// false - выводит в консоль главный объект программы

// 2.1) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
// переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

function showMyDB () {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    } else {
        alert('Access is denied');
    }
}
personalMovieDB.showMyDB = showMyDB;
personalMovieDB.showMyDB ();

function toggleVisibleMyDB () {
    if (personalMovieDB.privat == false){
        personalMovieDB.privat = true;
    } else if (personalMovieDB.privat == true) {
        personalMovieDB.privat = false 
    }
}

personalMovieDB.toggleVisibleMyDB = toggleVisibleMyDB;
personalMovieDB.toggleVisibleMyDB();

/* 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres */

// 3.1) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
// Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
// при помощи метода forEach вывести в консоль сообщения в таком виде:
// "Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"

function writeYourGenres() {
    for (let i = 1; i <= 3; i++){
        let a = prompt(`Ваш любимый жанр под номером ${i}`, " ");
        personalMovieDB.genres[i - 1] = a;
        if ( a == " " && a != false) {
            i--;
        }else {
            console.log("I'm here")
        }
    }       
}
personalMovieDB.writeYourGenres = writeYourGenres;
personalMovieDB.writeYourGenres ();







