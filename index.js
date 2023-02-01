const user = {
  name: "Joe",
  age: 30,
};

function printInfo(_user) {
  return "<h1>Hola " + _user.name + "</h1>";
}

console.log(printInfo(user));

document.body.innerHTML = printInfo(user);
