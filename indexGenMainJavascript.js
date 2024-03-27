const messageForm = document.getElementById('messageForm');
const messageInput = document.getElementById('messageInput');
const messageList = document.getElementById('messageList');

messageForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const message = messageInput.value.trim();
  if (message === '') {
    return;
  }
  const timestamp = new Date().toLocaleString();
  const messageItem = document.createElement('div');
  messageItem.classList.add('message');
  messageItem.innerHTML = `
    <p>${message}</p>
    <div class="timestamp">${timestamp}</div>
    <div class="actions">
      <button class="edit">Edit</button>
      <button class="delete">Delete</button>
    </div>
  `;
  messageList.appendChild(messageItem);
  messageInput.value = '';
});

messageList.addEventListener('click', function(event) {
  if (event.target.classList.contains('edit')) {
    const message = event.target.closest('.message').querySelector('p');
    const newMessage = prompt('Edit message:', message.textContent);
    if (newMessage !== null) {
      message.textContent = newMessage;
    }
  } else if (event.target.classList.contains('delete')) {
    const message = event.target.closest('.message');
    message.remove();
  }
});