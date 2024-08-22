const showPass = document.querySelector("#showPass");
const passLength = document.querySelector("#passLength");
const uppercase = document.querySelector("#uppercase");
const lowercase = document.querySelector("#lowercase");
const numbers = document.querySelector("#numbers");
const symbols = document.querySelector("#symbol");
const genBtn = document.querySelector("#genBtn");
const copyIcon = document.querySelector("#copyIcon");

// creating strings to use in passwords
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const allNumbers = "0123456789";
const allSymbols = "*#%&@!";


genBtn.addEventListener("click", () => {
    showPass.value = generatePassword(); // display generate password
});

// function to generate password
function generatePassword() {
    let allChars = ""; // initialize all charcters as empty
    allChars += lowercase.checked ? lowerCase : ""; // updating all characters by checking it is selected or not
    allChars += uppercase.checked ? upperCase : ""; // updating all characters by checking it is selected or not
    allChars += symbols.checked ? allSymbols : ""; // updating all characters by checking it is selected or not
    allChars += numbers.checked ? allNumbers : ""; // updating all characters by checking it is selected or not

    let genPass = ""; //initailizing generated password

    for (i = 1; i <= passLength.value; i++) { 
        genPass += allChars.charAt(Math.floor(Math.random() * allChars.length)); // update genPass till length value
    }

    return genPass; // returning generated password
}


// working mechanism of copy icon
copyIcon.addEventListener("click", () => {
    if (showPass.value != "" || showPass.value >= 1) {
        navigator.clipboard.writeText(showPass.value); // it will copy the showpass.value
        copyIcon.innerText = "check"; // check mark
        copyIcon.title = "copied"; // hover copied

        setTimeout(() => {
            copyIcon.innerText = "content_copy";
            copyIcon.title = "";
        }, 3000); // after 3sec automatically default values
    }
});