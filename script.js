let slide = document.getElementById("range");
let rangeVal = document.getElementById("rangeVal");
let passbox = document.getElementById("passbox");
let uppercase = document.getElementById("check1");
let lowercase = document.getElementById("check2");
let numbers = document.getElementById("check3");
let symbols = document.getElementById("check4");
let button = document.querySelector("button");
let copyIcon = document.getElementById("copy-icon");
let copied = document.getElementById("copied");




rangeVal.textContent = slide.value;       // for showing range value
slide.addEventListener('input', () => {

    rangeVal.textContent = slide.value;      // for changing range value
})


button.addEventListener('click', () => {        // for generating password into passbox
    passbox.value = generatePassword();
})

// define values 
let upperchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerchars = "abcdefghijklmnopqrstuvwxyz";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*";

// function to generate password
function generatePassword() {
    let genPassword = "";   // for storing password
    let allchars = "";        // for storing all characters (including alphabates numbers and symbols)

    // using conditional statement (can be used if else)
    allchars += uppercase.checked ? upperchars : "";//if lowercase box is checked then store lowerchars and not checked so pass empty string
    allchars += lowercase.checked ? lowerchars : "";//if uppercase box is checked then store upperchars and not checked so pass empty string
    allchars += numbers.checked ? allNumbers : "";//if number box is checked then store allnumbers and not checked so pass empty string
    allchars += symbols.checked ? allSymbols : "";//if symbols box is checked then store allsymbols and not checked so pass empty string


    let i = 1;
    while (i <= slide.value) {  // loop is applying 1 to slide value (which we will select in range)

        // generate random number (Math.random() generates random number with floating but wrapping into math.floor() function we can find only natural num )
        genPassword += allchars.charAt(Math.floor(Math.random() * allchars.length)); // it provides only one value at a time so have to apply loop
        i++;
    }

    return genPassword;
}




// clicking on copy icon will be copied passbox value (generated password)  
copyIcon.addEventListener('click', () => {
    // password will be copied when value is not empty or length of value greater than 1 
    if (passbox.value != "" || passbox.value.length >= 1) {
        navigator.clipboard.writeText(passbox.value);   // for copying value navigator


        //copyIcon.title = "Copied";       // after copying password it will show copied 

        setTimeout(() => {
            passbox.value = "";
            copyIcon.style.display = "none";
            copied.style.scale = "1";

        }, 1000)

    }

})