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
  sendMail: function () {
    return "Sending Email...";
  },
};

console.log(user);
