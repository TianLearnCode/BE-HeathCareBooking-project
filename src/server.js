import express from 'express';
import bodyParser from 'body-parser';
import viewEngine from './config/viewEngine';
import route from './route/route';
import connectDB from './config/connectDB';
import cors from 'cors';
require(`dotenv`).config();
const app = express();
// Cho phép đúng địa chỉ của React đang chạy
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
//cấu hình app

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

//cấu hình dung lượng 413 (Payload Too Large)
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

viewEngine(app);
route(app);

connectDB(app);
//lấy port
const port = process.env.PORT || 8080; //nếu trong trường hợp port là undefined thì port sẽ tự động gán là 8080 

//call back
app.listen(port, () =>{
    console.log(`App listening at port: http://localhost:${port}`)
})

