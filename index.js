const user = {
  name: "Joe",
  age: 30,
};

function printInfo({ name }) {
  return "<h1>Hola " + name + "</h1>";
}

console.log(printInfo(user));

document.body.innerHTML = printInfo(user);
