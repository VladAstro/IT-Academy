//1.Напишите функцию propertyValue(array, key), которая принимает в качестве аргументов массив объектов и имя свойства, 
//а затем возвращает все значения данного свойства из массива объектов.

// const arr = [ 
//   {
//      name: 'Petya',
//      age: 25
//   },
//   {
//     name: 'Galya',
//     age: 35
//   },
//   {
//     name: 'Anton',
//     age: 25
//   },
//   {
//     name: 'Vlad',
//     age: 24
//   }
// ]

// function properyValue(array, key) {
//   return array
//   .filter((item) => Object.keys(item).includes(key))
//   .map((item) => item[key])
//   }
  
//   console.log(properyValue(arr, 'name'));

  //2. Напишите функцию removeItem(arr, num), 
  //которая удаляет определенный элемент из массива. FILTER

  // function removeItem(arr, num) {

  //   return arr.filter((item, index) => index !== num);
  //   }
  //   console.log(removeItem([553,546,44,45,56756786,7,56], 2));
    
  //3.Используя метод reduce() напишите код, который получает 
  //из массива строк новый массив, содержащий их длины

  // const getLength = arr => arr.reduce((acc, item) => [...acc, item.length],[]);

  // console.log(getLength(['Австралия', 'Евразия', 'СевернаяАмерика','ЮжнаяАмерика']));

  //вопрос
  // function getLength (arr) {  

  //   arr.reduce((acc, item) =>{
  //  return [...acc, item.length];
  //   },[]);
   
  // }

  // console.log(getLength['Австралия', 'Евразия', 'СевернаяАмерика','ЮжнаяАмерика']);

//4.Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. Использую метод reduce() напишите функцию currentSums(numbers), 
//которая возвращает новый массив из такого же числа элементов, в котором на каждой позиции будет находиться сумма элементов массива numbers до этой позиции включительно.

// function currentSums(numbers) {
//   return numbers.reduce((acc, item, i) => {
//     if (i === 0) {
//   return [item];
//   }
//     return [...acc, item + acc[i - 1]];
//   }, [])
//   }
//   console.log(currentSums([2, 3, 5, 7, 11, 13, 17, 19])) 