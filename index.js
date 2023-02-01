const user = {
  name: "ryan",
  lastname: "ray",
};

const address = {
  street: "main street 123",
  city: "bogota",
};

const userInfo = {
  ...user,
  ...address,
};

console.log(userInfo);
