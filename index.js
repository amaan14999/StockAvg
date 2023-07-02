// Variable to track if the calculate button has been submitted
var isCalculateSubmitted = false;

function calculateSharesRequired() {
  // Get input values
  var prevShares = parseInt(document.getElementById("prevShares").value);
  var prevAvgPrice = parseFloat(document.getElementById("prevAvgPrice").value);
  var currentPrice = parseFloat(document.getElementById("currentPrice").value);
  var desiredAvgPrice = parseFloat(
    document.getElementById("desiredAvgPrice").value
  );

  // Check if all input fields are filled and the calculate button has been submitted
  if (
    isCalculateSubmitted &&
    prevShares &&
    prevAvgPrice &&
    currentPrice &&
    desiredAvgPrice
  ) {
    // Calculate shares required
    var sharesRequired = Math.ceil(
      (prevShares * prevAvgPrice - prevShares * desiredAvgPrice) /
        (desiredAvgPrice - currentPrice)
    );

    // Display result
    document.getElementById("result").textContent =
      "You should buy " + sharesRequired + " additional shares.";
  } else {
    // If any input field is empty or the calculate button has not been submitted, clear the result
    document.getElementById("result").textContent = "";
  }
}

// Event listener for the Calculate button
document
  .getElementById("shareCalculator")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    isCalculateSubmitted = true;
    calculateSharesRequired();
  });

// Event listeners for input fields
document
  .getElementById("prevShares")
  .addEventListener("input", calculateSharesRequired);
document
  .getElementById("prevAvgPrice")
  .addEventListener("input", calculateSharesRequired);
document
  .getElementById("currentPrice")
  .addEventListener("input", calculateSharesRequired);
document
  .getElementById("desiredAvgPrice")
  .addEventListener("input", calculateSharesRequired);

document
  .getElementById("shareCalculator")
  .addEventListener("reset", function (event) {
    document.getElementById("result").textContent = "";
  });
