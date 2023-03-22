//HOW TO COMPARE TWO JSON HAVE THE SAME PROPERTIES WITHOUT ORDER ?
  //ANSWER:
  let  obj1 = {name:"person", age:5};
let obj2 = {age:5,name:"person"};

function isEqual(obj1,obj2){
var obj1Keys = Object.keys(obj1);
var obj2Keys = Object.keys(obj2);

if (obj1Keys.length != obj2Keys.length){
    return false
}
for (var objKey of obj2Keys) {
    console.log(obj1Keys);
    console.log(objKey);
    if (obj1[objKey] != obj2[objKey]) {
        return false;
    }
}

    return true;

}
console.log(isEqual(obj1,obj2));

//2. Use the rest countries API URL -> https://restcountries.com/v3.1/all and display all the country flags in the console

  //answer:
var xhr = new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all');
xhr.responseType = 'json';
xhr.send();
xhr.onload = function (){
var responseObj = xhr.response;
 for (var i=0;i< responseObj.length;i++){
 console.log(responseObj[i].flag) 
}
}

//3.Use the same rest countries and print all countries names, regions,sub-region and population

  //Answer:
var xhr = new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all');
xhr.responseType = 'json';
xhr.send();
xhr.onload = function (){
var responseObj = xhr.response;
 for (var i=0;i< responseObj.length;i++){
console.log("COUNTRY'S NAME:  "+ responseObj[i].name.common+".Region of the country "+responseObj[i].region+".Its sub-region is "+responseObj[i].subregion +".Its population is  "+responseObj[i].population) 
}
}
