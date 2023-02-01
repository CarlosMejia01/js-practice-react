const button = document.createElement("button");
button.innerText = "click me";

button.addEventListener("click", () => {
  alert("click");
});

document.body.append(button);
