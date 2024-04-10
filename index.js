// main project javascripting
const contentTransmit = document.getElementById("contentTransmit");
const transmitter = document.getElementById("transmitter");
const sendButton = document.getElementById("sendButton");
const sendArea = document.getElementById("sendArea");

sendButton.addEventListener('click', function(){
    const currentDate = new Date();
    const currentTime = currentDate.toLocaleTimeString();
    const currentDateFormatted = currentDate.toDateString();
    let message =  transmitter.value.trim();

    console.log(message);
    if(message){
        message =  transmitter.value.trim() + " " + " (" + currentTime + " - " + currentDateFormatted + ")";
           contentTransmit.innerHTML = `<div class="contentNbutton"> <p class="contentNdelete">${message}</p> <button id="deleteButton" onclick="deleteMessage(this)">Delete</button></div>` + contentTransmit.innerHTML;
           transmitter.value = "";
        }
    });

    function deleteMessage(button) {
    button.parentNode.remove();
}


// const myForm = document.getElementById('myForm');
// const inputName = myForm['name'].value;
// const fNameInput = document.getElementById('fName');
// const lNameInput = document.getElementById('lName');
// const emailReg = document.getElementById('emailReg');
// const phoneNo = document.getElementById('phoneNo');
// const helpField = document.getElementById('helpField');
// const submitBtn = document.getElementById('submitBtn');
// const pwdReg = document.getElementById('pwdReg')


// const storage = (,userNameInput,emailReg,pwdReg) =>{
// fNameInput.innertext = "firstName: " + fNameInput.value;
// lNameInput.innertext = "lastName: " + lNameInput.value;
// emailReg.innertext = "Email: " + emailReg.value;
// pwdReg.innertext = "password: " + pwdReg.value;

// }

// localStorage.setItem("stored", JSON.stringify('storage'));

