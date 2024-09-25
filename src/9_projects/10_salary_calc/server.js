const http = require(`http`);
const fs = require("fs").promises;
const path = require(`path`);
const server = http.createServer(async (req, res) => {
  res.setHeader("Content-type", "text/html");

  if (req.url === "/") {
    try {
      const data = await fs.readFile(path.join(process.cwd(), `index.html`));
      res.write(data);
      res.status = 200;
      res.end();
    } catch (err) {
      console.log(err);
      res.status = 500;

      res.end("An error occurred");

      return;
    }
  } else {
    res.status = 404;
    res.write(`not found!`);
  }
});

const port = 8080;

server.listen(port, () => console.log(`Listening on port:`, port));
