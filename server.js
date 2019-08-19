const http = require("http");
const express = require("express");
const path = require("path");

const CONFIG = require("./config");

const app = express();
const server = http.createServer(app).listen(CONFIG.port || 80);

app.use("/api", require("./router/api"));
app.use(express.static(path.join(__dirname, "public")))
