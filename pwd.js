const pwdLength = 12;
const inputBox = document.getElementById('password');
const copiedMsgStyle = document.querySelector('.copied-msg').style;

function generatePwd(){

    copiedMsgStyle.display = 'None'

    let password = '';

    let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    let numbers = '0123456789';
    let specialChars = '!@#$%^&*';

    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += numbers[Math.floor(Math.random()*numbers.length)];
    password += specialChars[Math.floor(Math.random()*specialChars.length)];

    let allChars = upperCase + lowerCase + numbers + specialChars;
    
    while(password.length<=pwdLength){
        password += allChars[Math.floor(Math.random()*allChars.length)];
    }

    inputBox.value = password;
}

document.querySelector('.js-pwd-btn').addEventListener('click',() => {
    generatePwd();
});

document.querySelector('.js-copy-img').addEventListener('click', () => {
    if(inputBox.value){
        navigator.clipboard.writeText(inputBox.value);
        copiedMsgStyle.display = 'block';
    }
});