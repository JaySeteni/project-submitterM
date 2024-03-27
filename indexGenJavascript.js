// document.getElementById('form').addEventListener('submit', function(event) {
//     // login javascript
//     document.getElementById('form').addEventListener('submit', function(event) {
//         const username = document.getElementById('username').value;
//         const email = document.getElementById('email').value;
//         const password = document.getElementById('password').value;
//         const confirmPassword = document.getElementById('confirmPassword').value;
    
//         if (username === '' || email === '' || password === '' || confirmPassword === '') {
//           alert('Please fill in all fields');
//           event.preventDefault();
//         } else if (password !== confirmPassword) {
//           alert('Passwords do not match');
//           event.preventDefault();
//         }else {
//             localStorage.setItem(username, password);
//             alert('Registration successful! You will now be redirected to the login page.');
//             window.location.href = 'login.html';
//           }
//       });


// // loginJavascript
// const username = document.getElementById('username').value;
// const password = document.getElementById('password').value;

// if (username === '' || password === '') {
//   alert('Please enter both username and password');
//   event.preventDefault();
// }
// });


// document.getElementById('postToLocal').addEventListener('click', function(event) {
// localStorage.setItem('username', document.getElementById('username').value);
// localStorage.setItem('password', document.getElementById('password').value);
// alert('Content posted to localStorage');
// });

// document.getElementById('form').addEventListener('submit', function(event) {
// var username = document.getElementById('username').value;
// var password = document.getElementById('password').value;

// if (localStorage.getItem(username) === password) {
//   alert('Login successful!');
// } else {
//   alert('Incorrect username or password');
//   event.preventDefault(); 
// }
// });




// //  new rendering


Here's an example of how you can create a message submitter in JavaScript that allows users to submit text and renders the submitted messages on the screen, with the latest message appearing at the top:

HTML (index.html):
html
Copy code
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Message Submitter</title>
<link rel="stylesheet" href="styles.css">
</head>
<body>
<div class="container">
  <h2>Message Submitter</h2>
  <form id="messageForm">
    <textarea id="messageInput" placeholder="Enter your message..." required></textarea>
    <button type="submit">Submit</button>
  </form>
  <div id="messageList"></div>
</div>
<script src="script.js"></script>
</body>
</html>
JavaScript (script.js):
javascript
Copy code
const messageForm = document.getElementById('messageForm');
const messageInput = document.getElementById('messageInput');
const messageList = document.getElementById('messageList');

messageForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const messageText = messageInput.value.trim();
  if (messageText === '') {
    return;
  }
  const timestamp = new Date().toLocaleString();
  const messageItem = document.createElement('div');
  messageItem.classList.add('message');
  messageItem.innerHTML = `
    <p>${messageText}</p>
    <div class="timestamp">${timestamp}</div>
  `;
  messageList.prepend(messageItem);
  messageInput.value = '';
});