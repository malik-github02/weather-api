class User {
       constructor(id, name, salary) {
              this.id = id;
              this.name = name;
              this.salary = salary;
       }
}

// import calc, * as modOne from "./mod-one.js";
// console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree));

// _________________ Get Data With Normal Method ______________________
// let call = new XMLHttpRequest();
// call.open('GET', 'https://api.github.com/users/malik-github02/repos');
// call.send();
// console.log(call);
// call.onreadystatechange = function () {
//        if (call.status == 200 && call.readyState == 4) {
//               let data = JSON.parse(call.responseText);
//               console.log(data);
//        }
// };

// _________________ Get Data With Promise Method ______________________
// function getData(link) {
//        let call = new XMLHttpRequest();
//        return new Promise((res, rej) => {
//               call.onload = function () {
//                      if (call.readyState == 4 && call.status == 200) {
//                             res(JSON.parse(call.responseText));
//                      } else {
//                             rej('Bad Connect');
//                      }
//               };
//               call.open(
//                      'GET',
//                      'https://api.github.com/users/malik-github02/repos'
//               );
//               call.send();
//        });
// }
// getData('https://api.github.com/users/malik-github02/repos').then((result) => {
//        console.log(result);
// });

// _________________ Get Data With Best Fetch Modern Method ______________________

// async function getData() {
//        try {
//               let myData = await fetch(
//                      'https://api.github.com/users/malik-github02/repos'
//               );
//               console.log(await myData.json());
//        } catch {
//               (reason) => console.log('reason' + reason);
//        } finally {
//               console.log('love malik');
//        }
// }
// getData();

let country = document.querySelector('.search');
console.log(country.value);

async function getWeather(region) {
       try {
              let weather = await fetch(
                     `http://api.weatherapi.com/v1/current.json?key=60ab646b8dc547618d7134131221906&q=${region}`
              );
              weather = await weather.json();
              console.log(weather);
              document.querySelector('.result').innerHTML =
                     weather.current.temp_c;
              document.querySelector('.country span').innerHTML =
                     weather.location.name;
              document.querySelector('.icon').src =
                     weather.current.condition.icon;
              document.querySelector('.status-weather').innerHTML =
                     weather.current.condition.text;
              document.querySelector('.wind').innerHTML =
                     weather.current.wind_kph;
              document.querySelector('.humidity').innerHTML =
                     weather.current.humidity;
       } catch {
              console.log('error');
       }
}
getWeather('aleppo');

document.querySelector('.search-icon').onclick = function () {
       getWeather(country.value);
       country.value = '';
};
