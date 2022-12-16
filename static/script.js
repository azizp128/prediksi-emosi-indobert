const chatBox = document.querySelector(".chatBox");
const result = document.querySelector(".result");
const inputText = document.querySelector(".input_text");
const outputText = document.querySelector(".output_text");
const inputBox = document.querySelector(".input-text");
const emoteList = document.querySelectorAll(".emote");
const cardTitle = document.querySelector(".card__title");
const sendBtn = document.querySelector(".btn");
const errorIcon = document.querySelector(".icon-error");
const errorMessage = document.querySelector(".error-message");

function createAndShowElement(inpVal, outVal) {
  inputText.innerHTML = `Input : ${inpVal}`;
  outputText.innerHTML = `Output : ${outVal}`;

  chatBox.style.display = "flex";
  result.style.display = "flex";

  if (inputBox.classList.contains("input-error")) {
    inputBox.classList.remove("input-error");
    errorIcon.classList.add("hidden");
  }
}

function removeEmoteList() {
  emoteList.forEach(function (emote) {
    emote.style.display = "none";
    cardTitle.style.display = "none";
  });
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

function validateFields() {
  // Check presence of values
  if (inputBox.value.trim() === "") {
    errorIcon.classList.remove("hidden");
    inputBox.classList.add("input-error");
  } else {
    removeEmoteList();
    createAndShowElement(inputBox.value, inputBox.valut);
  }
}
