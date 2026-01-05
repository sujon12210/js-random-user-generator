async function load(){
  const res = await fetch('https://randomuser.me/api/');
  const data = await res.json();
  const user = data.results[0];

  document.getElementById('avatar').src = user.picture.medium;
  document.getElementById('name').innerText =
    user.name.first + ' ' + user.name.last;
  document.getElementById('email').innerText = user.email;
}

load();
