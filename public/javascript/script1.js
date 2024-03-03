const whoDiv = document.getElementById("who-container");
const visionDiv = document.getElementById("what-container");
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const formSubmit_BTN = document.querySelector('#submitFormBtn');
console.log(formSubmit_BTN)
let currentView = "who-container";

previousButton.addEventListener("click", () => {
  if (currentView === "who-container") {
    whoDiv.style.display = "none";
    visionDiv.style.display = "block";
    currentView = "what-container";
  } else {
    whoDiv.style.display = "block";
    visionDiv.style.display = "none";
    currentView = "who-container";
  }
});

nextButton.addEventListener("click", () => {
  if (currentView === "who-container") {
    whoDiv.style.display = "none";
    visionDiv.style.display = "block";
    currentView = "what-container";
  } else {
    whoDiv.style.display = "block";
    visionDiv.style.display = "none";
    currentView = "who-container";
  }
});
