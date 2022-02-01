const inp_UserName = document.getElementsByClassName('form')
const btn = document.querySelector('.btn')



const clickhandler = () => {
  console.log('hello world');
}

btn.addEventListener('click', () => {
  console.log('dasdsadasd');
})

btn.onclick = () => {
  window.location = 'homepage/homepage.html'
}
