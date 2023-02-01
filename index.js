const showText = () => "Hola Mundo";
const showNumber = () => 22;
const showBoolean = () => true;
const showArray = () => [1, 2, 3];
const showObject = () => ({ name: "Charly" });

console.log(showText());
console.log(showNumber());
console.log(showBoolean());
console.log(showArray());
console.log(showObject());

const button = document.createElement("button");
button.innerText = "click me";

button.addEventListener("click", () => {
  alert("click");
});

document.body.append(button);
