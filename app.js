var express = require('express');
var path = require('path');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var logger = require('morgan');
var settings = require('./settings');

//require route
var mobile = require('./routes/mobile');
var dopay = require('./routes/dopay');
var wechatpay = require('./routes/wechatpay');
//require api
var getCatalog_api = require('./api/catalog');
var getProduct_api = require('./api/product');
var user_api = require('./api/user');
var order_api = require('./api/order');
var wechatpay_api = require('./api/wechatpay');
var ad_api = require('./api/ad');
var alipay = require('./api/alipay');
var postage_api = require('./api/postage');
var limitbuy_api = require('./api/limitbuy');

var app = express();

//session
var session = require('express-session');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
var session    = require('express-session');
var mongoStore = require('connect-mongo')(session); 

app.use(cookieParser());
app.use(session({
    secret: 'd@deeQ45',
    name: 'zspses', 
    cookie: {maxAge: 8640000000}, //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
    resave: false,
    saveUninitialized: true,
    store: new mongoStore({  
         host: 'localhost',
        port: 27017,
        db: 'zsp_sessions'
    }) 
}));
 
app.set('views', path.join(__dirname, 'views'));
app.engine('.html',ejs.__express);
app.set('view engine', 'html');


app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


//use route
app.use('/',mobile);
app.use('/',wechatpay);

//use api
app.use('/api/getCatalog',getCatalog_api);
app.use('/api/product',getProduct_api);
app.use('/api/user',user_api);
app.use('/api/order',order_api);
app.use('/api/wechatpay',wechatpay_api);
app.use('/api/advertisement',ad_api);
//app.use('/api/alipay',alipay)
app.use('/alipay',dopay);
app.use('/api/postage',postage_api);
app.use('/api/limitbuy',limitbuy_api);
app.listen(3333);
console.log('Mobile test has been listen by 6666..');
