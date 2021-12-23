const body = document.querySelector('body')
const div = document.createElement('div')
const p = document.createElement('p')

const users =
 [
  {
    name: 'Vlad',
    age: 15
  },
  {
    name: 'Galy',
    age: 16
  },
  {
    name: 'Anton',
    age: 17
  },
  {
    name: 'Alexander',
    age: 18
  }
];

users.forEach(({name, age}, index) => {
  const p = document.createElement('p');

  p.innerText = `Name: ${name}, age: ${age}.`;

  p.onclick = () => {
    users.splice(index, -1)
    body.removeChild(p)
  }
  
 body.appendChild(p)
});
