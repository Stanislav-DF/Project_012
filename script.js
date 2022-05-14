'use strict'

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};

// 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла


for (let i = 0; i <= numberOfFilms  ; i++){
    let a = prompt('Один из последних просмотренных фильмов?', ' '),
        b = prompt('На сколько оцените его?', ' ');
        
    
/* 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять */

        if (!a || !b){
            alert("Напишите название фильма!");
            a = prompt('Один из последних просмотренных фильмов?', ' '),
            b = prompt('На сколько оцените его?', ' ');
        } else if(a.length >= 50){
            alert("Слишком длинное название");
        } /* else {
            personalMovieDB.movies[a] = b;
            --numberOfFilms;
        } */
    personalMovieDB.movies[a] = b;
}    


/* 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка" */

if (personalMovieDB.count < 10){
    alert("Просмотренно довольно мало фильмов");
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30){
    alert(" Вы класический зритель");
} else if (personalMovieDB.count > 30){
    alert("Ва киноман!");
}
console.log(personalMovieDB);
