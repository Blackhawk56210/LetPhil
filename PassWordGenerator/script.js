//character variables
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

//index
const passwordLength = 8;
const randomIndex = Math.floor(Math.random() * characters.length);
const randomCharacters = characters[randomIndex];
const slider = document.getElementById("lengthSlider");
const lengthDisplay = document.getElementById("lengthValue");
const generateButton = document.getElementById("generate");
const output = document.getElementById("output");
const lengthSelector = document.querySelector("#length-selector")

//random password Generation
function generateRandomPassword(passwordLength) {
    let password = "";
    for (let i = 0; i < passwordLength; i++){
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
  }
  return password; 
}

//password Generator button
document.getElementById("generate").addEventListener("click", () => {
 const password = generateRandomPassword(passwordLength);
 document.getElementById("output").textContent = password;
});

//update length display when slider moves
// slider.addEventListener("click", () => {
//   lengthDisplay.textContent = slider.value;
// });

generateButton.addEventListener("click", () => {
  const passwordLength = lengthSelector.value;
  const password = generateRandomPassword(passwordLength);
  output.textContent = password;
});

//function to get length of password



function sliderChange(){
  length = lengthSelector.value;
  console.log(length);
  passwordLength = lengthSelector.value
}

lengthSelector.addEventListener("click",sliderChange)



//length-selector tickmarks
// const slider = document.getElementById("slider");
// const sliderValue = document.getElementById("sliderValue");

// sliderValue.addEventListener("input", () => {
//   sliderValue.textContent = slider.Value;
// })

//hope it works
console.log(generateRandomPassword(12)); 