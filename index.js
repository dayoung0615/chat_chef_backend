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

//프론트에서 받은 json 형태의 데이터를 객체로 피싱(변환)하여 사용하도록 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//테스트용 API
app.get("/test", async (req, res) => {
  try {
    res.json({
      data: "Chutzrit",
    });
  } catch (error) {
    console.log(error);
  }
});

app.post("/massage", async (req, res) => {
  const massage = req.body.massage;
  console.log("🚀 ~ app.post ~ massage:", massage);
  try {
    res.json({
      id: Date.now(),
      massage: massage,
    });
  } catch (error) {
    console.log(error);
  }
});

//최하단
const port = process.env.PORT || 8080;
app.listen(port);
