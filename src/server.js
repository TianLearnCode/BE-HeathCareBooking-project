import express from 'express';
import bodyParser from 'body-parser';
import viewEngine from './config/viewEngine';
import route from './route/route';
import connectDB from './config/connectDB';
require(`dotenv`).config();
const app = express();

//cấu hình app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

viewEngine(app);
route(app);

connectDB(app);
//lấy port
const port = process.env.PORT || 8080; //nếu trong trường hợp port là undefined thì port sẽ tự động gán là 8080 

//call back
app.listen(port, () =>{
    console.log(`App listening at port: http://localhost:${port}`)
})

