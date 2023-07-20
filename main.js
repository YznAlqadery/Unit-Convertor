const convertButton = document.getElementById("convert-btn");
const inputField = document.getElementById("input-field");
const lengthParagraph = document.getElementById("conv-length");
const volumeParagraph = document.getElementById("conv-volume");
const massParagraph = document.getElementById("conv-mass");
const resetButton = document.getElementById("reset-btn");

convertButton.addEventListener("click", function () {
  const value = inputField.value;
  renderApp(value);
});

resetButton.addEventListener("click", function () {
  lengthParagraph.textContent = `${0} meters = ${Number(0).toFixed(
    3
  )} feet | ${0} feet = ${Number(0).toFixed(3)} meters`;

  volumeParagraph.textContent = `${0} liters = ${Number(0).toFixed(
    3
  )} gallons | ${0} gallons = ${Number(0).toFixed(3)} liters`;

  massParagraph.textContent = `${0} kilos = ${Number(0).toFixed(
    3
  )} pounds | ${0} pounds = ${Number(0).toFixed(3)} kilos`;
});
function covertLength(valueOfInput) {
  const meterToFeet = valueOfInput * 3.28084;
  const feetToMeter = valueOfInput / 3.281;

  lengthParagraph.textContent = `${valueOfInput} meters = ${Number(
    meterToFeet
  ).toFixed(3)} feet | ${valueOfInput} feet = ${Number(feetToMeter).toFixed(
    3
  )} meters`;
}
function convertVolume(valueOfInput) {
  const litersToGallons = valueOfInput / 3.785;

  const gallonsToLiters = valueOfInput * 3.785;

  volumeParagraph.textContent = `${valueOfInput} liters = ${Number(
    litersToGallons
  ).toFixed(3)} gallons | ${valueOfInput} gallons = ${Number(
    gallonsToLiters
  ).toFixed(3)} liters`;
}
function convertMass(valueOfInput) {
  const kilosToPounds = valueOfInput * 2.205;
  const poundsToKilos = valueOfInput / 2.205;
  massParagraph.textContent = `${valueOfInput} kilos = ${Number(
    kilosToPounds
  ).toFixed(3)} pounds | ${valueOfInput} pounds = ${Number(
    poundsToKilos
  ).toFixed(3)} kilos`;
}
function renderApp(valueOfInput) {
  covertLength(valueOfInput);
  convertVolume(valueOfInput);
  convertMass(valueOfInput);
}
