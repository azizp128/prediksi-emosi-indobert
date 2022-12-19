const inputBox = document.querySelector(".input-text");
const emoteList = document.querySelectorAll(".emote");
const cardTitle = document.querySelector(".card__title");
const sendBtn = document.querySelector(".btn");
const errorIcon = document.querySelector(".icon-error");
const errorMessage = document.querySelector(".error-message");
const chatBox = document.querySelector(".chatBox");

function removeEmoteList() {
  emoteList.forEach(function (emote) {
    emote.style.display = "none";
    cardTitle.style.display = "none";
  });
}

// function createNewElements() {
//   const result = document.createElement("div");
//   result.className = "result";
//   result.style.display = "flex";

//   const input = document.createElement("span");
//   const output = document.createElement("span");

//   result.appendChild(input);
//   result.appendChild(output);
//   chatBox.appendChild(result);

//   input.className = "input";
//   output.className = "output";

//   chatBox.style.display = "flex";

//   if (inputBox.classList.contains("input-error")) {
//     inputBox.classList.remove("input-error");
//     errorIcon.classList.add("hidden");
//   }
//   input.innerHTML = `Input : ${inputBox.value}`;
//   output.innerHTML = `Output : ${myVariable}`;
// }

function validateFields() {
  // Check presence of values
  if (inputBox.value.trim() === "") {
    errorIcon.classList.remove("hidden");
    inputBox.classList.add("input-error");
  } else {
    removeEmoteList();
    createNewElements();
  }
}

inputBox.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    sendBtn.click();
  }
});

sendBtn.addEventListener("click", (e) => {
  validateFields();
  e.preventDefault();
});
