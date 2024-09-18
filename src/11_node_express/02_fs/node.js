const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // console.log("server started");
  res.writeHead(200, {
    "Content-type": "text/html",
  });

  const urlPath = "." + url.parse(req.url, true).pathname;

  fs.readFile(urlPath, (err, data) => {
    if (err) {
      res.writeHead(404, {
        "Content-type": "text/html",
      });
      return res.end("not found");
    }
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    res.write(data);
    res.end();
  });
});

server.listen(8000);
