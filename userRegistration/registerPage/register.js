const nameUser = document.getElementById('name');
const password = document.getElementById('password');
const btn = document.getElementById('btn');

btn.onclick = () => {
  const user = {
    login:nameUser.value,
    pass:password.value
  };

  localStorage.setItem('person', JSON.stringify(user));
  window.location = '../homePage/home.html';
};
