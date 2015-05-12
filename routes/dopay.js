var express = require('express');
var router = express.Router();
var soap = require('soap');
var settings = require('../settings');

router.get('/',function(req,res){
    var info = req.params;
    var orderNum = info.out_trade_no;
    var status = info.result;
    var alipayNum = info.trade_no;
    var url = settings.CRMSERVICE_WSDL2;
    soap.createClient(url,function(err,client){
        var args = {};
        var off = null;
        args.entityname = 'salesorder';
        args.filter = '[{"Logical":"and","Conditions":[{"Key":"ordernumber","Operator":"=","Value":"'+orderNum+'"}]}]';
        args.fields = 'createdon,salesorderid,description';
        args.orderby = 'createdon asc';
        args.pagesize = 1;
        args.pageindex = 1;
        if(status == 'success'){
            client.Query(args,function(err,result){
                if(err){
                    console.log(err)
                }
                var data = JSON.parse(result.QueryResult);
                var args2 = {};
                args2.entityname = 'salesorder';
                args2.data = '[{"Key":"salesorderid","Value":"'+data[0].salesorderid+'"},{"Key":"new_settlement","Value":"已付款"},{"Key":"description","Value":"'+data[0].description+' 支付宝流水号：'+alipayNum+'"}]';
                client.Update(args2,function(err,result){
                    if(!err){
                        console.log('ok')
                    }
                })
            })
        }
    })
})

module.exports = router;
