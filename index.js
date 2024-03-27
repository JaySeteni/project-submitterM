const contentTransmit = document.getElementById("contentTransmit");
const transmitter = document.getElementById("transmitter");
const sendButton = document.getElementById("sendButton");
const sendArea = document.getElementById("sendArea");


sendButton.addEventListener('click', function(){
    const currentDate = new Date();
    const currentTime = currentDate.toLocaleTimeString();
    const currentDateFormatted = currentDate.toDateString();
    let message =  transmitter.value.trim();
    
    console.log(message)
    if(message){
        message =  transmitter.value.trim() + ": " + " " + currentTime + " - " + currentDateFormatted;
            contentTransmit.innerHTML = `<div> <p>${message}</p>  <button onclick="deleteMessage(this)">Delete</button></div>` +  contentTransmit.innerHTML;
            transmitter.value = "";
        }
});
function deleteMessage(button) {
    button.parentNode.remove();
}


