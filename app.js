const express = require("express");
const sequelize = require("./config/config");
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();

const PORT = 3000;

// set engine
app.set("view engine", "ejs");
// parser
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());

// 라우터 불러오기
const indexRouter = require('./routes/index');
const signRouter = require('./routes/sign');
const letterRouter = require('./routes/letters');
const dictRouter = require('./routes/dict');

// true : 서버 실행 시 테이블 재생성
sequelize.sync({force: true}).then(() => {
  console.log("Database synced");
}).catch(err => {
  console.error("Error syncing database:", err);
});

// 모든 도메인의 요청을 허용
app.use(cors());

// public(정적 파일) 제공 설정
app.use(express.static(path.join(__dirname, "public")));

// router use()
app.use("/", indexRouter);
app.use("/sign", signRouter);
app.use('/letters', letterRouter);
app.use('/dicts', dictRouter);

app.listen(PORT, () => {
  console.log(`${PORT}포트에서 서버 실행`);
});
