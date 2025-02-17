//character variables
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

//random index
const passwordLength = 12;
const randomIndex = Math.floor(Math.random() * characters.length);
const randomCharacters = characters[randomIndex];

//random password Generation
function generateRandomPassword(passwordLength) {
    let password = "";
    for (let i = 0; i < passwordLength; i++){
    password += randomCharacters;

  }
  return password;
}

//password Generator
document.getElementById("generate").addEventListener("click", () => {
 const password = generateRandomPassword(12);
 document.getElementById("output").textContent = password;
});

//hope it works
console.log(generateRandomPassword(characters));