const names = ["ryan", "joe", "maria"];

// for (let i = 0; i < names.length; i++) {
//   const element = names[i];
//   console.log(element);
// }

const newNames = names.map(function (name) {
  return `Hola ${name}`;
});
console.log(newNames);

//array find
const nameFound = names.find(function (name) {
  if (name == "joe") {
    return name;
  }
});

console.log(findName);
