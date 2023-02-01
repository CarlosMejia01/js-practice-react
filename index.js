const background = "red";
const color = "white";
const isAuthorized = true;

const button = document.createElement("button");
button.innerText = "click me";
button.style = `background: ${
  isAuthorized ? "blue" : background
}; color: ${color}`;

button.addEventListener("click", () => {
  if (isAuthorized) return alert("esta autorizado");
  alert("no esta autorizado");
});

document.body.append(button);
