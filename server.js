import express from "express";
import bodyParser from "body-parser";
import path from "path";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

import routes from "./router/router";

app.use("/v1", routes);
app.get("/", (req, res) => {
    res.send("<h1>Welcome to politico system.</h1>");
});

export default app;
