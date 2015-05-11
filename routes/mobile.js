/**
 * Created by feng on 2014/12/2.
 */
var express = require('express');
var router = express.Router();
var URL = require('url');
var soap = require('soap');
var Payment = require('wechat-pay').Payment;
var settings = require('../settings');
var querystring = require('querystring');
var OAuth = require('wechat-oauth');
var initConfig = {
    appSecret: '03cab26ae6707a3b23372cc12f046afe',
    partnerKey: "Jun12345678901qazxsw23edcvfr45tg",
    appId: 'wxebb66f70aa800f7f',
    mchId: '10018128',
    notifyUrl: "http://www.zsptop.cn:3333/notify/",
};
var client = new OAuth(initConfig.appId, initConfig.appSecret);

router.get('/outh2', function(req, res) {    
     client.getAccessToken(req.query.code, function(err, result) {
        req.session.openid = result.data.openid;
        return res.redirect('/');
    })
})
router.get('/', function(req, res) {
    var userAgent = req.headers['user-agent']; 
    if (userAgent.indexOf("croMessenger") > 0 &&req.session.openid == undefined) {
        var url = client.getAuthorizeURL('http://www.zsptop.cn:3333/outh2/', 'state', 'snsapi_base');//userinfo 
        return res.redirect(url);
    }
    var info = req.query;
    var orderNum = info.out_trade_no;
    var status = info.result;
    var alipayNum = info.trade_no;
    var url = settings.CRMSERVICE_WSDL2;
    soap.createClient(url, function(err, client) {
        var args = {};
        var off = null;
        args.entityname = 'salesorder';
        args.filter = '[{"Logical":"and","Conditions":[{"Key":"ordernumber","Operator":"=","Value":"' + orderNum + '"}]}]';
        args.fields = 'createdon,salesorderid,description';
        args.orderby = 'createdon asc';
        args.pagesize = 1;
        args.pageindex = 1;
        if (status == 'success') {
            client.Query(args, function(err, result) {
                if (err) {
                    console.log(err)
                }
                var data = JSON.parse(result.QueryResult);
                console.log(data);
                var args2 = {};
                args2.entityname = 'salesorder';
                args2.data = '[{"Key":"salesorderid","Value":"' + data[0].salesorderid + '"},{"Key":"new_settlement","Value":"1"},{"Key":"new_auditstatus","Value":"2"},{"Key":"new_paytype","Value":"2"},{"Key":"description","Value":"' + data[0].description + ' 支付宝流水号：' + alipayNum + '"}]';

                client.Update(args2, function(err, result) {
                    if (!err) {
                        console.log(result)
                    }
                    console.log('单号:' + orderNum + ' 使用支付宝支付成功');
                })
            })
        }
    })
    res.render('index', {})
})


//router.get('/bind',function(req,res){
//    res.render('menu',{title:'hello'})
//})

// router.get('/page',function(req,res){
//     res.render('page',{})
// })

router.get('/alipay', function(req, res) {
    var info = req.query;
    var orderNum = info.out_trade_no;
    var status = info.result;
    var alipayNum = info.trade_no;
    var url = settings.CRMSERVICE_WSDL2;
    console.log(info)
    soap.createClient(url, function(err, client) {
        var args = {};
        var off = null;
        args.entityname = 'salesorder';
        args.filter = '[{"Logical":"and","Conditions":[{"Key":"ordernumber","Operator":"=","Value":"' + orderNum + '"}]}]';
        args.fields = 'createdon,salesorderid,description';
        args.orderby = 'createdon asc';
        args.pagesize = 1;
        args.pageindex = 1;
        if (status == 'success') {
            client.Query(args, function(err, result) {
                if (err) {
                    console.log(err)
                }
                var data = JSON.parse(result.QueryResult);
                console.log(data);
                var args2 = {};
                args2.entityname = 'salesorder';
                args2.paytype = '支付宝';
                args2.data = '[{"Key":"salesorderid","Value":"' + data[0].salesorderid + '"},{"Key":"new_settlement","Value":"1"},{"Key":"new_paytype","Value":"2"},{"Key":"description","Value":"' + data[0].description + ' 支付宝流水号：' + alipayNum + '"}]';
                client.Update(args2, function(err, result) {
                    if (!err) {
                        console.log(result)
                    }
                })
            })
        }
    })
})


module.exports = router;
