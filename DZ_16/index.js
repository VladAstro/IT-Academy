const btn = document.getElementById('btn');

btn.onclick = () => {
  if (localStorage.getItem('person')) {
    window.location = 'home/home.html';
    return;
  }
  window.location = 'auth/auth.html';
}
