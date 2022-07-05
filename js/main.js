'use strict';

const arr = [1, 2, 3, 4, 5];

const newArr = [];

let min = arr[0];

let max = 0;

const func = (array) => {
   for(let i = 0; i < array.length; i++) {
      if (array[i] < min) {
         min = array[i];
      } 
   }

   for(let i = 0; i < array.length; i++) {
      if (max < array[i]) {
         max = array[i];
      }
   }

   newArr.push(min, max)

   return newArr;
}

console.log(func(arr));