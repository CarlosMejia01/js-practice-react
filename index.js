const button = document.createElement("button");
button.innerText = "click me";

const isAuthorized = true;

button.addEventListener("click", () => {
  if (isAuthorized) return alert("esta autorizado");
  alert("no esta autorizado");
});

document.body.append(button);
