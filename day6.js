// a) Get all the countries from Asia continent /region using Filter function
// var request=new XMLHttpRequest();
// request.open('GET','https://restcountries.com/v3.1/all','true');
// request.send();
// request.onload=function (){
//     var countryData=JSON.parse(this.response);
//     const asia=countryData.filter((a)=>{
//         if(a.region==='Asia'){
//             return a.name;
//         }
//     })
//     console.log(asia);}

// b) Get all the countries with a population of less than 2 lakhs using Filter function
// var request=new XMLHttpRequest();
// request.open('GET','https://restcountries.com/v3.1/all','true');
// request.send();
// request.onload=function (){
// var countryData=JSON.parse(this.response);
// const total=countryData.filter((a)=>{
//      return a.population<200000;
// })
// console.log(total);}

// c) Print the following details name, capital, flag, using forEach function
// var request=new XMLHttpRequest();
// request.open('GET','https://restcountries.com/v3.1/all','true');
// request.send();
// request.onload=function (){
//     var countryData=JSON.parse(this.response);
//     countryData.forEach((a)=>{
//         console.log(a.name,a.capital,a.flag);
//     })}

// d) Print the total population of countries using reduce function
// var request = new XMLHttpRequest();
// request.open("GET", "https://restcountries.com/v3.1/all", "true");
// request.send();
// request.onload = function () {
//   var countryData = JSON.parse(this.response);
//   const population = countryData.reduce((a, b) => {
//     return a + b.population;
//   });
//     console.log(population);
//     console.log(acc)
//     console.log(element);
// };

// e) Print the country which use US Dollars as currency
// var request = new XMLHttpRequest();
// request.open("Get", "https://restcountries.com/v3.1/all", true);
// request.send();
// request.onload = function () {
//   var data = JSON.parse(this.response);
//   for (i = 0; i < data.length; i++) {
//     if (data[i].currencies.hasOwnProperty("USD")) {
//       console.log("name:", data[i].name.common);
//     }
//   }
// };
