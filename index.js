const contentTransmit = document.getElementById("contentTransmit");
const transmitter = document.getElementById("transmitter");
const sendButton = document.getElementById("sendButton");
const sendArea = document.getElementById("sendArea");

// function onButtonClick(){
//     contentTransmit.innerText = transmitter.value;
// };
sendButton.addEventListener('click', function(){

    contentTransmit.innerText = transmitter.value;
});


function getCurrentDateTime(){
    const now = new Date();
    const date = now.toDateString();
    const time = now.hetHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    return date + " " + time;
}
sendButton.addEventListener('click', function(){
    transmitter.value;
    let dateTime =  getCurrentDateTime();
    contentTransmit;
    contentTransmit.innerHTML += "<p>" + dateTime + " - " + transmitter.value + "</p>";
});


