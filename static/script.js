const chatBox = document.querySelector(".chatBox");
const inputBox = document.querySelector(".input-text");
const emoteList = document.querySelectorAll(".emote");
const cardTitle = document.querySelector(".card__title");
const sendBtn = document.querySelector(".btn");
const errorIcon = document.querySelector(".icon-error");
const errorMessage = document.querySelector(".error-message");

function createAndShowElement(inpVal, outVal) {
  const input = document.createElement("span");
  input.className = "input";
  input.innerHTML = `Input : ${inpVal}`;

  const output = document.createElement("span");
  output.className = "output";
  output.innerHTML = `Output : ${outVal}`;

  const result = document.createElement("div");
  result.className = "result";
  result.style.display = "flex";

  result.appendChild(input);
  result.appendChild(output);
  chatBox.appendChild(result);

  chatBox.style.display = "flex";

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
    createAndShowElement(inputBox.value, chatBox.getAttribute("name"));
  }
}
