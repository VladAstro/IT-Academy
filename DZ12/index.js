//1.Напишите функцию getFirst(array, n), которая возвращает фрагмент массива, содержащий первые 'n' элементов массива. Повторить через map

// function getFirst(array, n) {
  
// return array.slice(0, n);
// }

// console.log(getFirst([5,54,23,6,35,35,1231], 3));

//Повторить через map:

// function getFirst(array, n) {
// const newArray = [];

// array.map((item, index) => {
// if (index < n) {
// newArray.push(item);
// }
// return item;
// });
// return newArray

// }
// console.log(getFirst([6,67,23,23,35,7,1231], 3));

//2. Напишите функцию getLast(array, n), которая возвращает фрагмент массива, содержащий последние 'n' элементов массива. Повторить через map

// function getLast(array, n) {
// return array.slice(n * -1);
// }
// console.log(getLast([6,67,23,23,35,7,1231], 3));

//Повторить через map

// function getLast(array, n) {
// const newArray = [];
// array.reverse().map((item, index) => {
// if (index < n) {
// newArray.push(item);
// }
// return item;
// });
// return newArray.reverse()
// }
// console.log(getLast([6,67,23,23,35,7,1231], 3));

// //3.Напишите функцию arrayFilled(len, value), которая возвращает массив с заданным количеством len элементов value.

// function arrayFilled(length, value) {
// return Array.from({length}, () => value)
// }
// console.log(arrayFilled(5, 4));

// //4. Напишите функцию generateNumbers(start, len), которая генерирует массив заданной длины len, заполненный целыми числами, где каждое число больше предыдущего на единицу.

// function generateNumbers(length) {
// return Array.from({length}, (_, index) => index)
// }
// console.log(generateNumbers(5));

// //5. Перед вами переменная, содержащая строку. Напишите код, создающий массив, который будет состоять из первых букв слов строки str. "Каждый охотник желает знать, где сидит фазан." => [‘K’, ‘о’, ‘ж’, ‘з’, ‘г’, ‘с’, ‘ф’]

// const str = 'Каждый охотник желает знать где сидит фазан'
// function getFirstLettersArray() {
// return str.split(' ').map((item) => item.substr(0, 1))
// }
// console.log(getFirstLettersArray());
