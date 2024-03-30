var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", "true");
request.send();
request.onload = function () {
  var countryData = JSON.parse(this.response);
  const population = countryData.reduce((acc, element) => {
    // return acc + element.population;
  });
  //   console.log(population);
  //   console.log(acc)
  //   console.log(element);
};

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
