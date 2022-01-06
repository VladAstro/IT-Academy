document.getElementById('check').onclick = function() {
  let login = document.getElementById('login').value;
  let password = document.getElementById('password').value;

  if (login == 'ivan' && password == '334455') {
    window.location = '/homePage/home.html';
  }
  else if (login == 'alex' && password == '777') {
    window.location = '/homePage/home.html';
  }
  else if (login == 'petr' && password == '888') {
    window.location = '/homePage/home.html';
} 
else {
  alert('Incorrect login or pass: Please click the register button!');
}
};

document.getElementById('check1').onclick = function() {
  window.location = '/registerPage/register.html';
};
