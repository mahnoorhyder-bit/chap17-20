 //// chap - 17-20
//// q-1
// let multiArray = [];
// multiArray.push([11, 12, 13]);     
// multiArray.push([14, 15, 16]);     
// multiArray.push([17, 18, 19]);      
// [
//     [11, 12, 13],
//     [14, 15, 16],
//     [17, 18, 19]
//   ]
  
//   console.log(multiArray[0][1]);  
// multiArray[1][2] = 10;            
// console.log(multiArray);        

// q-2
// let matrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
//   ];
//   console.log(matrix[0][2]); 
//   matrix[1][3] = 5; 
//   console.log(matrix); 
    
////q-3
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//   }
  
////q-4

// let num = parseInt(prompt("Enter number:"));
// let length = parseInt(prompt("Enter length of table:"));
// for (let i = 1; i <= length; i++) {
//   let result = num * i;
//   console.log(num + " x " + i + " = " + result);
// }

////q-5
// let fruit = ["apple", "banana", "mango", "orange", "strawberry"];
// for (let i = 0; i < fruit.length; i++) {
//   console.log(fruit[i]);
// }

////q-6
// console.log("Counting:");
// for (let i = 1; i <= 15; i++) {
//   console.log(i);
// }
// console.log("Reverse counting:");
// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }
// console.log("Even:");
// for (let i = 0; i <= 20; i += 2) {
//   console.log(i);
// }
// console.log("Odd:");
// for (let i = 1; i <= 19; i += 2) {
//   console.log(i);
// }
// console.log("Series:");
// for (let i = 1; i <= 10; i++) {
//   let result = 2 * i;
//   console.log(result + "k");
// }

////q-7
// let A = ["cake", "apple pie", "cookie", "chips", "patties"];
// let userInp = prompt("Enter search item:");
// let find = false;
// for (let i = 0; i < A.length; i++) {
//   if (A[i] === userInp) {
//     find = true;
//     break;
//   }
// }
// if (find) {
//   alert("Item found in list!");
// } else {
//   alert("Item not found in list!");
// }

////q-8
// let num = [24, 53, 78, 91, 12];
// let largestNum = num[0];
// for (let n = 1; n < num.length; n++) {
//   if (num[n] > largestNum) {
//     largestNum = num[n];
//   }
// }
// console.log("The Arrays largest number is: " + largestNum);

////q-9
// let num= [24, 53, 78, 91, 12];
// let smallestNum = num[0];
// for (let n = 1; n < num.length; n++) {
//   if (num[n] < smallestNum) {
//     smallestNum = num[n];
//   }
// }
// console.log("The Arrays smallest number is: " + smallestNum);

////q-10
// for (let n = 1; n <= 20; n++) {
//     let multi = 5 * n;
//     console.log(multi);
//   }
  