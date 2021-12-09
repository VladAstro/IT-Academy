//1. Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. 
//С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'. 
//Решение продублировать с forEach

//  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
//  let newArr = '';

//    for (let i = 0; i < arr.length; i++) {
//      newArr += '-' + arr[i];
     
//    }
//    console.log( newArr + '-');

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
// let newArr = '';

// arr.forEach((item, i, array)=>{
//    newArr += '-' + item;
// });
//  console.log(newArr + '-');

//2. Написать функцию createArray(n), 
//которая создаёт массив произвольных чисел от 0 до 9 длиной n. 
//Попробовать так же найти решение от 0 до 10 включительно
 
//  function createArray(n){
  
//    let newArr = [];

//    for (let i = 0; i < n; i++) {
//     newArr.push(Math.floor(Math.random() * 10));
//    }
//    return newArr;
//  }

//  console.log(createArray(9)); 

 function createArray(n){
  
   let newArr = [];

   for (let i = 0; i < n; i++) {
    newArr.push(Math.floor(Math.random() * 10));
   }
   return newArr;
 }

 console.log(createArray(10)); 

//3. Создать массив юзеров. Поля (свойства/ключи) на усмотрение. 
//Количество юзеров тоже. Одно из полей будет age. 
//Циклов фор найти среднеарифметическое всех возрастов юзеров. Решение продублировать с forEach

//  const users = [
//   {name: 'Petr', age: 25},
//   {name: 'Dima', age: 35},
//   {name: 'Alisa', age: 45},
// ];

// let x = 0;

//  for (let i = 0; i < users.length; i++) {
//    x += users[i].age;
//  }
//  let sv = x / users.length;
// console.log(sv);
 
// FOREACH
//  const users = [
//    {name: 'Petr', age: 25},
//    {name: 'Dima', age: 35},
//    {name: 'Alisa', age: 45},
//  ];

//     let x = 0;
//     let result = 0;
    
//     users.forEach((item, i, array) => {
//       x += item.age;
//     });
//     result = x/users.length;
//     console.log(result);
   

 


