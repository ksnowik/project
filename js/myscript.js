"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    gender: [],
    privat: false
};

for (let i = 1; i <=2; i++) {
    
    const q1 = prompt('Один из последних просмотренных фильмов?', ''),
          q2 = prompt('На сколько оцените его?', '');


    if(q1.length < 50 && q1 != null && q1 != '' && q2.length < 50 && q2 != null && q2 != '') {
        personalMovieDB.movies[q1] = q2;
        console.log('done');
    } else {
        i--;
    }
    
}

if(personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <=30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);