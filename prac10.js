const express = require("express");
const users = require("./MOCK_DATA.json");
const port = 2000;
const app = express();

app.get("/users", (req, res) => {
  const html = `
 <ul>
 ${users.map((users) => ` <li>${users.first_name}</li>`).join("")}
 </ul>
 `;
  res.send(html);
});

// json of the whole data
app.get("/api/users", (req, res) => {
  return res.json(users);
});

// specific users

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .post((req, res) => {
    return res.json({ status: "Pending" });
  })
  .patch((req, res) => {
    return res.json({ status: "Pending" });
  })
  .delete((req, res) => {
    return res.json({ status: "Pending" });
  });

  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
