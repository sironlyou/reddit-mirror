import express from "express";
import ReactDOM from "react-dom/server";

import { indexTemplate } from "./indexTemplate";
import { App } from "../App";
const app = express();
import axios from "axios";

app.use("/static", express.static("./dist/client"));

app.get('/auth', (req, response) => {

  response.send(
    indexTemplate(ReactDOM.renderToString(App()))
  );

});
app.get("*", (req, res) => {
  res.send(indexTemplate(ReactDOM.renderToString(App())));
});

app.listen(3000, () => {
  console.log("server started on port http://localhost:3000");
});
