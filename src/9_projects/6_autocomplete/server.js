const http = require(`http`);
const fs = require("fs").promises;
const path = require(`path`);

console.log(`app started`);

const cwd = process.cwd();
const pageFile = path.join(cwd, "index.html");
const jsFile = path.join(cwd, "code.js");
const cssFile =
  "/Users/konradantonik/WebstormProjects/nauka_2024/src/output.css";

async function serveFile(res, filePath, contentType) {
  try {
    const data = await fs.readFile(filePath);
    res.writeHead(200, { "Content-type": contentType });
    res.write(data);
    res.end();
  } catch (e) {
    console.log(e);
    res.statusCode = 500;
    res.setHeader(`Content-type`, "text/plain");
    res.end(`Something went wrong`);
  }
}

const server = http.createServer(async (req, res) => {
  switch (req.url) {
    case "/":
      await serveFile(res, pageFile, "text/html");
      break;

    case "/code.js":
      await serveFile(res, jsFile, "application/javascript");
      break;

    case "/output.css":
      await serveFile(res, cssFile, "text/css");
      break;
    default:
      res.writeHead(404, {
        "Content-type": "text/plain",
      });
      res.write("not found");
      res.end();
  }
});

const port = 8000;

server.listen(port, () => {
  console.log(`Listening on: http://localhost:${port}`);
});
