import express,{ Request, Response, NextFunction, } from 'express';
import multer from 'multer';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
const app = express();
const port = 5000;

//application/x-www-form-urlencoded 정보를 분석
app.use(bodyParser.urlencoded({extended:true}));
//application/json 정보 분석
app.use(bodyParser.json());

app.use(cookieParser());

app.use(express.static(__dirname));

app.listen(port,()=>{
    console.log(`
      ################################################
      🛡️  Server listening on port: ${port}🛡️
      ################################################
    `);
  })
  