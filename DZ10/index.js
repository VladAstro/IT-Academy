//1. Есть строка 55639217. переделать её в 5:563:921:7. Суть задачи сводится не к изменению конкретной строки из условия, а в том чтобы добавлять двоеточие между двумя нечётными числами. 

// const lineStr = string =>{
//   const str = string;
//   const strArr = str.split('');
//   console.log(strArr);
//   const newArr = [];
//   let newStr = '';
//   newStr = strArr;
//   for (let i = 0; i < newStr.length; i++) {
//     newArr.push(newStr[i]);
//     if (newStr[i] % 2 && newStr[i+1] % 2) {
//       newArr.push(':');
//     }  
//   }
//   newStr = newArr.join(' ');
//   return newStr;
//   }
// const test = lineStr('55639217')
// console.log(test);

//2. Напишите функцию countIdentic(arr), которая возвращает количество повторяющихся элементов в массиве.

// const arr = [1, 2, 4, 5, 1, 2, 7, 8]

// const countIdentic = (arr) => {
//   let caunter = 0;
//   let myArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (myArr.includes(arr[i])) {
//       caunter += 1
//     } else{
//       myArr.push(arr[i])
//     }
//   } 
//   return caunter;

// }

//3. Написать функцию, которая принимает массив и удаляет из него повторяющиеся элементы 

// const arr = [1, 2, 4, 5, 1, 2, 7, 8]

// const countIdentic = (arr) => {
//   let myArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!myArr.includes(arr[i])) {
//       myArr.push(arr[i])
//     } 
//   } 
//   return myArr;

// }

//   console.log(countIdentic(arr))










//2, 4, 4, 6, 8 должно стать 2, 4, 6, 8
// const arr = [2, 4, 4, 6, 8]
// const filter = (arr) =>{

//   let tmp= {};
//   return arr.filter(function (arr) {
//     return arr in tmp ? 0 : tmp[arr] = 1;оке
//   });
// }
//  console.log(filter(arr))

 
//Напишите функцию removeItem(arr, num), которая удаляет определенный элемент из массива.
 const arr = [1, 2, 4, 5, 1, 2, 7, 8]

 const removeItem = (arr, num) =>{
   const result = arr.filter(i => i !== num )
   return result;
 }

 console.log(removeItem(arr, 5))













//Напишите цикл выводящий такой треугольник
// let str = " "
// let lines = 7
// let star = '#'
// for (let i = 0; i < lines; i++) {
//   str += star;
//   console.log(str);
// }

// const arr = [2, 5, 8, 9, 4]






//4.4. Напишите функцию removeItem(arr, num), которая удаляет определенный элемент из массива.

// const removeItem = (arr, num) =>{

// }
