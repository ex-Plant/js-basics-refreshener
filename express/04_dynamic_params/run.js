const express = require("express");

const app = express();

// app.get(`/:article/:date/title`, (req, res) => {
// });

app.get(`/`, (req, res) => {
  res.status(200).send(`👌`);
});

app.get(`/:article`, (req, res) => {
  const { article } = req.params;

  res.status(200).send(`
<div>hello world from dynamic path</div>
<div>${article}</div>
`);
});

app.get(`/:article/:id`, (req, res) => {
  const { article, id } = req.params;

  res.status(200).send(`hello from article; ${article}, id: ${id}`);
});

const port = 8000;

app.listen(port, () => {
  console.log(`Listening at: http://localhost:${port}`);
});
