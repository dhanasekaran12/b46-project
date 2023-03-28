//

// //Print odd number in an arrray
// var oddarr=[1,2,3,4,5,6,7];

// var odds = [];
// oddarr.forEach(function(num)  {
//   if (num % 2 === 1) {
//     odds.push(num);
//   }
// });
// console.log(odds);

// //Convert all the strings to title caps in a string array

// function tcap(str) {
//   return str.replace(
//     /\w\S*/g,
//     function(txt) {
//       return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//     }
//   );
// }
	
// console.log(tcap('changing all the string to title caps in a string array'));

//   //sum of all numbers in an array


//     var sumnum = [1, 2, 3, 4];
//     var sumit= sumnum.reduce(function (a, b) {
//         return a + b;
//     });
//     console.log(sumit);

 //Return all the prime number in an array

//  var primNum = [2, 3, 4, 5, 6, 7, 8, 9, 10, 13]

// 	 primNum = primNum.filter((number) => {
   
// 	for (var i = 2; i <= Math.sqrt(number); i++) {
// 	 if (number % i === 0) 
// 	 return false;
//    }
//    return true;
//  });
 
// console.log(primNum);


// //Return all the palindrome in an array

// function checkPalindrome(str) {
// 	const len = str.length;
// 	for (let i = 0; i < len / 2; i++) {
// 	  if (str[i] !== str[len - 1 - i]) {
// 		console.log("NOT a palindrome");
// 	  }else{
// 		console.log("The string is a palindrome")
// 	  }
	

// 	} 
// }
//   console.log (checkPalindrome("ara"));

// //Return median of two sorted arrays of the same size
// function getMedian(ar1, ar2, n)
// {
// let j = 0;
// let i = n - 1;
// while (ar1[i] > ar2[j] && j < n && i > -1)
// {
// 	let temp = ar1[i];
// 	ar1[i] = ar2[j];
// 	ar2[j] = temp;
// 	i--; j++;
// }
// ar1.sort(function(a, b){return a - b});
// ar2.sort(function(a, b){return a - b});
// return parseInt((ar1[n - 1] + ar2[0]) / 2, 10);
// }
 
// let ar1 = [ 10,20,30,40,50 ];
// let ar2 = [ 10,20,30,40,50 ];

// let n1 = 5;
// let n2 = 5;
// if (n1 == n2)
// console.log("Median is "+ getMedian(ar1, ar2, n1));
// else
// console.log("Doesn't work for arrays of unequal size");
 
//Remove duplicates from an array

	// var duparr = ["apple", "mango", "apple",
	// 		"orange", "mango", "mango"];
	
	// function removeDuplicates(arr) {
	// 	return arr.filter((item,
	// 		index) => duparr.indexOf(item) === index);
	// }
	
	// console.log(removeDuplicates(duparr));



//Rotate an array by k times
// let Array = [1, 2, 3, 4, 5];
// let N = Array.length;
// let K = 2;

// function RightRotate(a, n, k)
// {

// 		k = k % n;

// 	for (let i = 0; i < n; i++) {
// 		if (i < k) {
// 		console.log(a[n + i - k] + " ");
// 		}
// 		else {
// 		console.log((a[i - k]) + " ");
// 		}
// 	}
// }


// RightRotate(Array, N, K);

// Do the below programs in arrow functions.
// Print odd numbers in an array

// var  numbers = [2, 15, 13, 8, 10, 9, 13];
// var oddnum = numbers.filter((num) => num % 2 === 1);
// console.log(oddnum);


// Convert all the strings to title caps in a string array

// const str = "captain america";
// const newStr = str.split(' ')
//    .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
//    .join(' ');
// console.log(newStr);

// Sum of all numbers in an array

// let sum = [1, 2, 3,4,5,6,7,8,9,10]
// .reduce((partialSum, a) => partialSum + a);
// console.log(sum);
// Return all the prime numbers in an array



// Return all the palindromes in an array
