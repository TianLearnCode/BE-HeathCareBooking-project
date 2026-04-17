// const express = require('express')
import express from 'express';
import {engine} from 'express-handlebars'
let configViewEngine = function(app){
    app.use(express.static('./src/public'));//cấu hình các tài nguyên tĩnh
    app.engine('handlebars', engine({
        defaultLayout: 'main'
    }))
    app.set('view engine', 'handlebars')//tương tự handle bar có thể ccode được logic trong file html
    app.set('views', './src/views')

}

export default configViewEngine;