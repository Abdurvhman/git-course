'use strict';

// С четными числами

// const func = (array) => {
//    const newArr = [];
//    for(let i = 0; i < array.length; i++) {
//       if (array[i] % 2 === 0) {
//          newArr.push(array[i]);
//       }
//    }
//       return newArr;
// }

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(func(arr));

// С нечетными числами 

// const func = (array) => {
//    const newArr = [];

//    for(let i = 0; i < array.length; i++) {
//       if (array[i] % 2 !== 0) {
//          newArr.push(arr[i]);
//       }
//    }
//    return newArr;
// }

// const arr = [1, 2, 3, 4, 5, 6, 7];

// console.log(func(arr));

// С положительными числами 

// const func = (array) => {
//    const newArr = [];

//    for(let i = 0; i < array.length; i++) {
//       if (array[i] > 0) {
//          newArr.push(array[i])
//       }
//    }
//    return newArr;
// }

// const arr = [1, -1, -4, 5];

// console.log(func(arr));


// С отрицательными числами

// const func = (array) => {
//    const newArr = [];

//    for(let i = 0; i < array.length; i++) {
//       if (array[i] < 0) {
//          newArr.push(array[i])
//       }
//    }
//    return newArr;
// }

// const arr = [1, -2, -4, 5, -10];

// console.log(func(arr));


// Со словами, длина которых больше 5 букв

// const func = (array) => {
//    const newArr = [];

//    for(let i = 0; i < arr.length; i++) {
//       if (array[i].length > 5) {
//          newArr.push(array[i]);
//       }
//    }
//    return newArr;
// }

// const arr = ['aaaaaaaa', 'bbb', 'gggggggg'];

// console.log(func(arr));



// Со словами, длина которых равняется 5 буквам

const func = (array) => {
   const newArr = [];

   for(let i = 0; i < array.length; i++) {
      if (array[i].length == 5) {
         newArr.push(array[i]);
      }
   }
   return newArr;
}

const arr = ['aaaaa', 'fff', 'eeeee', 'hhhh'];

console.log(func(arr));