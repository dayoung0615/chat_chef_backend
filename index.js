//npm init -y
//yarn add express cors openai dotenv

import express from "express";
import cors from "cors";
import * as dotanv from "dotenv";
import path from "path";

//   "type": "module", < 최신방식(package.json)

const app = express();
// const cors = cors();

app.use(cors());
const __dirname = path.resolve();
dotanv.config({
  path: __dirname + "/.env",
});

//테스트용 API
app.get("/test", async (req, res) => {
  try {
    res.json({
      data: "Chatzrit",
    });
  } catch (error) {
    console.log(error);
  }
});

//최하단
const port = process.env.PORT || 8080;
app.listen(port);
