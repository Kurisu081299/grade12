const loginForm = document.getElementById('loginForm');
const signupButton = document.getElementById('signupButton');
const popup = document.getElementById('popup');
const welcomeUsername = document.getElementById('welcomeUsername');

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const response = await fetch('http://localhost:5002/api/v1/user/get', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password
    })
  });


  if (response.ok) {
    const username = /* Extract username from response data */;
    welcomeUsername.textContent = username;
    popup.style.display = 'block'; // Show the popup
  }
});