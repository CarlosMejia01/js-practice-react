const ul = document.createElement("ul");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    data.forEach(function (post) {
      const li = document.createElement("li");
      li.innerText = post.title;
      ul.append(li);
      document.body.append(ul);
    });
  });

console.log("linea 2");
