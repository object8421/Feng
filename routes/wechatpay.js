var express = require('express');
var router = express.Router();
var url = require('url');
var OAuth = require('wechat-oauth');
var soap = require('soap');
var settings = require('../settings');

var initConfig = {
    appSecret: '03cab26ae6707a3b23372cc12f046afe',
    partnerKey: "Jun12345678901qazxsw23edcvfr45tg",
    appId: "wxebb66f70aa800f7f",
    mchId: "10018128",
    notifyUrl: "http://www.zsptop.cn:3333/notify/",
};

var client = new OAuth(initConfig.appId, initConfig.appSecret);
 
var middleware = require('wechat-pay').middleware;
router.post('/notify/',  middleware(initConfig).getNotify().done(function(message, req, res, next) {
  var openid = message.openid;
  var order_id = message.out_trade_no;
   console.log(req.body);
   console.log(message);
  var attach = {};
  try{
   attach = JSON.parse(message.attach);
  }catch(e){}

  /**
   * 查询订单，在自己系统里把订单标为已处理
   * 如果订单之前已经处理过了直接返回成功
   */
    var url = settings.CRMSERVICE_WSDL2;
    soap.createClient(url,function(err,client){
        var args = {};
        var off = null;
        args.entityname = 'salesorder';
        args.filter = '[{"Logical":"and","Conditions":[{"Key":"ordernumber","Operator":"=","Value":"'+message.out_trade_no+'"}]}]';
        args.fields = 'createdon,salesorderid,description';
        args.orderby = 'createdon asc';
        args.pagesize = 1;
        args.pageindex = 1;
        if(message.result_code == 'SUCCESS'){
            client.Query(args,function(err,result){
                if(err){
                    console.log(err)
                }
                var data = JSON.parse(result.QueryResult);
                var args2 = {};
                args2.entityname = 'salesorder';
                args2.data = '[{"Key":"salesorderid","Value":"'+data[0].salesorderid+'"},{"Key":"new_settlement","Value":"1"},{"Key":"new_paytype","Value":"5"},{"Key":"description","Value":"'+data[0].description+' 微信支付流水号：'+message.transaction_id+'"}]';
                client.Update(args2,function(err,result){
                    console.log(result);
                    if(!err){
                        console.log('------------------ok-----------')
                        res.reply('success');
                    }
                })
            })
        }
    })
  

  /**
   * 有错误返回错误，不然微信会在一段时间里以一定频次请求你
   * res.reply(new Error('...'))
   */
}))



;
module.exports = router;
