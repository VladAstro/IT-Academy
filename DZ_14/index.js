// // Программа сама создаёт число 0 - 9. Пользователь вводит в инпут число. Если больше заданного,
// //  вывести на страницу что "Вы ввели больше заданного числа" (или как-нибудь иначе). Если меньше 
// //  - соответственно. Если угадал - сообщение о победе и КОЛИЧЕСТВЕ ПОПЫТОК
const body = document.querySelector('body');
const div  = document.createElement('div');
const p1 = document.createElement('p')
const p2 = document.createElement('p')
const p3 = document.createElement('p')
const input = document.createElement('input')
const btn = document.createElement('button')
let caunter = 0

body.appendChild(div)
div.appendChild(p1)
div.appendChild(input)
div.appendChild(btn)
div.appendChild(p2)
div.appendChild(p3)

div.classList.add('wrapper')
p1.classList.add('p1')
input.classList.add('input')
p2.classList.add('p2')
p3.classList.add('p3')


p1.innerText = 'Введите число:'
btn.innerText = 'Начать'
p3.innerText = 'Количество попыток:' + caunter
randomNumber = Math.floor(Math.random() * 10)
console.log(randomNumber);

 btn.addEventListener('click', () => {
  f1()
 });

 function f1() {

  let getValue = +input.value 
  
   if (getValue == randomNumber) {
     p2.innerText = 'Вы угадали!!!';
     caunter += 1
     p3.innerText = 'Количесво попыток:' + caunter
     
   } 
   else if (getValue > randomNumber) {
    p2.innerText = 'Вы ввели число больше чем нужно попробуйте еще раз';
     caunter += 1
     p3.innerText = 'Количесво попыток:' + caunter
   }
   else if (getValue < randomNumber)  {
    p2.innerText ='Вы ввели число меньше чем нужно, попробуйте еще раз ';
    caunter += 1
    p3.innerText = 'Количесво попыток:' + caunter
   }
  }

