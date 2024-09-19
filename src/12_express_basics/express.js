const express = require(`express`);

const app = express();

app.get("/", (req, res) => {
  console.log(req.url);
  res.status(200).send(`hello world`);
});

let port = 8000;

app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
});
