const missionDiv = document.getElementById("mission");
const visionDiv = document.getElementById("vision");
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const formSubmit_BTN = document.querySelector('#submitFormBtn');
console.log(formSubmit_BTN)
let currentView = "mission";

previousButton.addEventListener("click", () => {
  if (currentView === "mission") {
    missionDiv.style.display = "none";
    visionDiv.style.display = "block";
    currentView = "vision";
  } else {
    missionDiv.style.display = "block";
    visionDiv.style.display = "none";
    currentView = "mission";
  }
});

nextButton.addEventListener("click", () => {
  if (currentView === "mission") {
    missionDiv.style.display = "none";
    visionDiv.style.display = "block";
    currentView = "vision";
  } else {
    missionDiv.style.display = "block";
    visionDiv.style.display = "none";
    currentView = "mission";
  }
});
