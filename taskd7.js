// Get all  the countries from the Asia continent/region using the Filter function

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.responseType = 'json';

xhr.send();

xhr.onload = function () { 
  var responseObj = xhr.response;
  var res = responseObj.filter(function(item){
    return item.continents == 'Asia';
  });
  console.log(res);
}
// Get all the countries with a population of less than 2 lakhs using filter function
var xhr = new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all');
xhr.responseType = 'json';

xhr.send();

xhr.onload  = function() {
    var responseObj = xhr.response;
    var res = responseObj.filter(function(item){
        return item.population<2000000;
    });

var twolakhpop=res.map(function(item){
 return item.name.common;
});
console.log(twolakhpop)
}


//Print the following details name,capital,flag,using forEach function

var xhr = new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all');
xhr.responseType = 'json';

xhr.send();

xhr.onload  = function() {
    var ncf=[];
    var responseObj = xhr.response;
    responseObj.forEach(function(item){
        ncf.push(`${item.name.common},${item.capital},${item.flag},`)
    });
console.log(ncf);
}


// print the total population of countries using reduce function

var xhr = new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all');
xhr.responseType = 'json';

xhr.send();

xhr.onload  = function() {
    var responseObj = xhr.response;
    var pop=[];
    var res = responseObj.filter(function(item){
    pop.push(`${item.population}`);
    });

    var tpop = pop.reduce(function(a,b){
      return a + b;
  });
 console.log(tpop)
}

//Print the country which uses US Dollars as currency

var xhr = new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all');
xhr.responseType = 'json';

xhr.send();

xhr.onload  = function() {
  var responseObj = xhr.response;
  let usdDollar = responseObj.filter((item) => {
    return item.currencies && item.currencies.USD;
  });
  console.log(usdDollar.map((item) => {
    return item.name.common;
  }));
}
