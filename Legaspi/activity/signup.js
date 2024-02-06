const signupForm = document.getElementById('signupForm');
const loginButton = document.getElementById('loginButton');

signupForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const response = await fetch('http://localhost:5002/api/v1/user/post', {
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
    window.location.href = 'login.html'; // Redirect to login page on success
  }
});
