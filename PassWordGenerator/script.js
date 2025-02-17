//character variables
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

//index
const passwordLength = 12;
const randomIndex = Math.floor(Math.random() * characters.length);
const randomCharacters = characters[randomIndex];
const slider = document.getElementById("lengthSlider");
const lengthDisplay = document.getElementById("lengthValue");
const generateButton = document.getElementById("generate");
const output = document.getElementById("output");

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
 const password = generateRandomPassword(12);
 document.getElementById("output").textContent = password;
});

//update length display when slider moves
slider.addEventListener("input", () => {
  LengthDisplay.textContent = slider.value;
});

generateButton.addEventListener("click", () => {
  const passwordLength = slider.value;
  const password = generateRandomPassword(passwordLength);
  output.textContent = password;
})


//length-selector tickmarks
// const slider = document.getElementById("slider");
// const sliderValue = document.getElementById("sliderValue");

// sliderValue.addEventListener("input", () => {
//   sliderValue.textContent = slider.Value;
// })

//hope it works
console.log(generateRandomPassword(12)); 