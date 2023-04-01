// DOM elements
const loginbtn = document.getElementById('login');
const pass = document.getElementById('password');
const email = document.getElementById('email');

// Encrypted HTML Pages
const mail = "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";

// Hashed Credentials
const pwd = "29595cfeff2834b0916f80fa345b44d4475a381f4dbf984738ff7bbee092038da587e3316c6e9a42b1bcd60df299eb23aa3ec2f8fc2fb2a61aeb3fe421553a5b";

// Renders HTML after decrypting it using the given password
function render(encryptedPage, password) {
    htmlCode = CryptoJS.AES.decrypt(encryptedPage, password).toString(CryptoJS.enc.Utf8);
    document.open();
    document.write(htmlCode);
    document.close();
}

// Hashing the credentials given by the user
function calculateHash(text){
    return CryptoJS.SHA512(text).toString();
}

// To render the mails page
function showmails() {
    if (calculateHash(pass.value) === pwd){
        render(mail, pass.value);
    }
}

// Event listeners
loginbtn.addEventListener("click", showmails);
