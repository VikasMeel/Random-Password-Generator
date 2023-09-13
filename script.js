let password = document.getElementById("password")

function genPass() {
    let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()abcdefghijklmnopqrstuvwxyz";
    let passLength = 12;
    let password = "";

    for (let i = 0; i <= passLength; i++) {
       var randomNumber = Math.floor(Math.random() * chars.length);
       password += chars.substring(randomNumber , randomNumber +1);
    }
    
    document.getElementById("password").value = password;
}

function copyPass() {
    let copyPass = document.getElementById("password")
    copyPass.select();
    copyPass.setSelectionRange(0,999)
    document.execCommand("copy")
}