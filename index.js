const user = {
  name: "Joe",
  age: 30,
};

function printInfo(user) {
  let { name, age } = user;
  console.log(name, age);
  return "<h1>Hola " + name + "</h1>";
}

console.log(printInfo(user));

document.body.innerHTML = printInfo(user);
