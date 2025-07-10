//npm init -y
//yarn add express cors openai dotenv

import express from "express";
import cors from "cors";
import * as dotanv from "dotenv";
//   "type": "module", < 최신방식(package.json)

const app = express();
// const cors = cors();

app.use(cors());
const __dirname = path.resolve();
dotanv.config({
  path: __dirname + "/.env",
});
const port = process.env.PORT;

app.listen("8080", () => {
  //port번호 화인.
  console.log("port:", port);
});
