const user = {
  name: "ryan",
  lastname: "perez",
  age: 30,
  address: {
    country: "Colombia",
    city: "Bogota",
    street: "main street 123",
  },
  friends: ["brandon", "elena"],
  active: true,
  sendMail() {
    return "Sending Email...";
  },
};

console.log(user.name);
console.log(user.address.city);
console.log(user.friends);
console.log(user.sendMail());
