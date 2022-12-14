const inputBox = document.querySelector(".input-text");
const result = document.querySelector(".result");
const resultBox = document.querySelector(".input");
const emoteList = document.querySelectorAll(".emote");
const emoteTitle = document.querySelector(".card__title");
const sendBtn = document.querySelector(".btn");
const errorIcon = document.querySelector(".icon-error");
const errorMessage = document.querySelector(".error-message");

function showResult() {
  resultBox.innerHTML = inputBox.value;
  result.style.display = "flex";

  if (inputBox.classList.contains("input-error")) {
    inputBox.classList.remove("input-error");
    errorIcon.classList.add("hidden");
  }
}

function removeEmoteList() {
  emoteList.forEach(function (emote) {
    emote.style.display = "none";
    emoteTitle.style.display = "none";
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
    // errorMessage.innerText = "Cannot be blank";
    errorIcon.classList.remove("hidden");
    inputBox.classList.add("input-error");
  } else {
    removeEmoteList();
    showResult();
  }
}
