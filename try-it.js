var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();
var server     = require('http').Server(app);
var io         = require('socket.io')(server);

server.listen(3000,function(){
	console.log('server started on port 3000');
});

/*app.get('/getPremiumDate',function(req,res){
	res.writeHead(200,{'Content-Type':'application/json'});
	res.end(JSON.stringify({"policyNumber":"9348209","policyStartDate":"27/5/2016","policyType":"yearly","policyName":"Jeevan Anandh","premiumAmount":"31,000","policyEndDate":"27/5/2019","premiumPaymentDate":"27/5/2017"}));
});*/


/*app.get('/payPremiumamount',function(req,res){
	res.writeHead(200,{'Content-Type':'application/json'});
	res.end(JSON.stringify({"policyNumber":"9348209","message":"Successfully paid the premium amount","nextPremiumDate":"27/5/2018"}));
});

app.get('/getTaxCertificate',function(req,res){
	res.writeHead(200,{'Content-Type':'application/json'});
	res.end(JSON.stringify({"policyNumber":"9348209","policyName":"Jeevan Anandh","url":"http://www.revenue.ie/images/guide-paye-employees-booklet.jpg"}));
});*/