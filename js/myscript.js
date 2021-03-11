"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms  == null || isNaN(numberOfFilms) ) {
        numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true
};

function showMyDB() {
    if(personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

showMyDB();

let questionFilm;

function writeYourGenres() {
    let count = 0;
    for(let i = 0; i < 3; i++) {
        count++;
        questionFilm = prompt('Ваш любимый жанр под номером' + count);

        console.log(questionFilm);

        personalMovieDB.genres[i] = questionFilm;
    }
}

writeYourGenres();

console.log(personalMovieDB);

// function rememberMyFilms() {
//     for (let i = 1; i <=2; i++) {
//         const q1 = prompt('Один из последних просмотренных фильмов?', ''),
//               q2 = prompt('На сколько оцените его?', '');

//         if(q1.length < 50 && q1 != null && q1 != '' && q2.length < 50 && q2 != null && q2 != '') {
//             personalMovieDB.movies[q1] = q2;
//             console.log('done');
//         } else {
//             i--;
//         }
//     }
// }

// rememberMyFilms();


// function detectPersonalLevel() {
//     if(personalMovieDB.count < 10) {
//         console.log('Просмотрено довольно мало фильмов');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count <=30) {
//         console.log('Вы классический зритель');
//     } else if (personalMovieDB.count > 30) {
//         console.log('Вы киноман');
//     } else {
//         console.log('Произошла ошибка');
//     }
// }

// detectPersonalLevel();