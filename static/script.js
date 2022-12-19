const chatBox = document.querySelector(".chatBox");
const input_result = document.querySelector(".input");
const output_result = document.querySelector(".output");
const inputBox = document.querySelector(".input-text");
const emoteList = document.querySelectorAll(".emote");
const cardTitle = document.querySelector(".card__title");
const sendBtn = document.querySelector(".btn");
const errorIcon = document.querySelector(".icon-error");
const errorMessage = document.querySelector(".error-message");

function showResult() {
  input_result.innerHTML = inputBox.value;
  output_result.innerHTML = myVariable;

  chatBox.style.display = "flex";
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

function validateFields() {
  // Check presence of values
  if (inputBox.value.trim() === "") {
    errorIcon.classList.remove("hidden");
    inputBox.classList.add("input-error");
  } else {
    removeEmoteList();
    showResult();
  }
}

sendBtn.addEventListener("click", (e) => {
  validateFields();
  e.preventDefault();
});
