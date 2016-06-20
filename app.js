var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/static',express.static(path.join(__dirname, 'public')));




app.get('/getPremiumDate',function(req,res){
	res.writeHead(200,{'Content-Type':'application/json'});
  /*res.end(JSON.stringify({"policies":[{"policyNumber":"19876589","policyStartDate":"2/7/2007","policyType":"Quarterly","policyName":"Abhinay","premiumAmount":"20,000","policyEndDate":"2/7/2020","policyMaturityDate":"2/7/2024","premiumPaymentDate":"12/6/2016"},{"policyNumber":"9348209","policyStartDate":"27/5/2016","policyType":"Yearly","policyName":"Jeevan Anandh","premiumAmount":"31,000","policyEndDate":"27/7/2019","premiumPaymentDate":"27/5/2017","policyMaturityDate":"27/7/2021"},{"policyNumber":"1987650","policyStartDate":"12/2/2013","policyType":"Half-yearly","policyName":"Jeevan Tarang","premiumAmount":"20,000","policyEndDate":"27/5/2018","premiumPaymentDate":"12/8/2016","policyMaturityDate":"27/5/2030"}]}));*/
  
  res.end(JSON.stringify({"policies":[{"policyNumber":"19876589","policyStartDate":"02/07/2007","policyType":"monthly","policyName":"Invest Once","investmentAmount":"20,000","policyMaturityDate":"02/07/2027","premiumPaymentDate":"","premiumAmount":"","assured":"30,000","nomineeName":"John"},{"policyNumber":"9348209","policyStartDate":"07/06/2016","policyType":"Annual","policyName":"eAajeevan Sampatti+","premiumAmount":"20,661","policyEndDate":"27/07/2031","premiumPaymentDate":"07/12/2016","policyMaturityDate":"27/07/2039","paymentTerm":"15 Years","assured":"3,75,657","nomineeName":"Edward"},{"policyNumber":"1987650","policyStartDate":"12/08/2013","policyType":"Annual","policyName":"Monthly Income+","premiumAmount":"35,715","policyEndDate":"27/05/2020","premiumPaymentDate":"12/08/2016","paymentTerm":"7 Years","policyMaturityDate":"27/05/2028","assured":"2,88,000","nomineeName":"David"}]}));
});


app.get('/payPremiumamount',function(req,res){
	res.writeHead(200,{'Content-Type':'application/json'});
	res.end(JSON.stringify({"policyNumber":"9348209","message":"Successfully paid the premium amount","nextPremiumDate":"27/05/2018"}));
});

app.get('/getTaxCertificate',function(req,res){
	res.writeHead(200,{'Content-Type':'application/json'});
	res.end(JSON.stringify({"policyNumber":"9348209","policyName":"Jeevan Anandh","url":"https://dry-falls-30126.herokuapp.com/static/certificate.png"}));

});

app.get('/getPolicyDetails/:policyId',function(req,res){
	
	res.writeHead(200,{'Content-Type':'application/json'});
	if(req.params.policyId == "9348209")
	res.end(JSON.stringify({"policyNumber":"9348209","policyStartDate":"07/06/2016","policyType":"Annual","policyName":"eAajeevan Sampatti+","premiumAmount":"20,661","policyEndDate":"27/07/2031","premiumPaymentDate":"07/12/2016","policyMaturityDate":"27/07/2039","paymentTerm":"15 Years","assured":"3,75,657","nomineeName":"Edward"}));
    else if(req.params.policyId == "1987650")
	res.end(JSON.stringify({"policyNumber":"1987650","policyStartDate":"12/08/2013","policyType":"Annual","policyName":"Monthly Income+","premiumAmount":"35,715","policyEndDate":"27/05/2020","premiumPaymentDate":"12/08/2016","paymentTerm":"7 Years","policyMaturityDate":"27/05/2028","assured":"2,88,000","nomineeName":"David"}));
    else if(req.params.policyId == "19876589")
	res.end(JSON.stringify({"policyNumber":"19876589","policyStartDate":"02/07/2007","policyType":"monthly","policyName":"Invest Once","investmentAmount":"20,000","policyMaturityDate":"02/07/2027","premiumPaymentDate":"","premiumAmount":"","assured":"30,000","nomineeName":"John"}));
    
});
   
   app.get('/dpworld',function(req,res){
	   res.writeHead(200,{'Content-Type':'application/json'});
	res.end(JSON.stringify({ results: [{"Title":"DP World HO Infrastrcuture Team"},{"Title":"DP World HO Migration Team"},{"Title":"DP World HO Infrastrcuture Team"},{"Title":"DP World HO Migration Team"},{"Title":"DP World HO Infrastrcuture Team"},{"Title":"DP World HO Migration Team"},{"Title":"DP World HO Infrastrcuture Team"},{"Title":"DP World HO Migration Team"},{"Title":"DP World HO Infrastrcuture Team"},{"Title":"DP World HO Migration Team"}]}));
   });

   app.get('/creditCards',function(req,res){
	  res.writeHead(200,{'Content-Type':'application/json'});
       res.end(JSON.stringify({
  "CCSuggest": [
    {
      "imageURL": "https://www.ocbc.com/assets/images/uploads/Cards_Images/inside_compare/card-365.png",
      "keywords": "weekend dining,online,groceries,fuel,rewards,rebate,365,allaround",
      "name": "OCBC 365 Credit Card",
      "productURL": "https://www.ocbc.com/personal-banking/cards/365card.html",
      "tagLine": "The cashback card for all your daily spend"
    },
    {
      "imageURL": "https://www.ocbc.com/assets/images/cards_compare/ge-cashflo-compare.png",
      "keywords": "privileges,rebate,health,wellness,great eastern,insurance,policy,installments,split,cashflo",
      "name": "OCBC Great Eastern Cashflo MasterCard",
      "productURL": "http://www.ocbc.com/personal-banking/cards/ge-cashflo-mastercard.html",
      "tagLine": "The only card for your health and wellness needs"
    },
    {
      "imageURL": "https://www.ocbc.com/assets/images/uploads/Cards_Images/inside_compare/card_platinum.png",
      "keywords": "earn OCBC$,20% off,children,family,enrichment,recreation,shopping,rewards,platinum",
      "name": "OCBC Platinum Credit Card",
      "productURL": "https://www.ocbc.com/personal-banking/cards/platinum-credit-mastercard.html",
      "tagLine": "Best card for all your family needs"
    },
    {
      "imageURL": "https://www.ocbc.com/assets/images/uploads/Cards_Images/inside_compare/card_best.png",
      "keywords": "rewards,discounts,rebates,electronics,computers,appliances,best denki",
      "name": "OCBC BEST Denki Credit Card",
      "productURL": "https://www.ocbc.com/personal-banking/cards/best-platinum-mastercard.html",
      "tagLine": "The best card for shopping at BEST Denki"
    },
    {
      "imageURL": "https://www.ocbc.com/assets/images/uploads/Cards_Images/inside_compare/card_titanium-new.png",
      "keywords": "miles,ocbc$,priority entry,booking,rewards,titanium",
      "name": "OCBC Titanium Credit Card",
      "productURL": "https://www.ocbc.com/personal-banking/cards/titanium-mastercard.html",
      "tagLine": "The card that earns you up to 2 miles for every spend"
    },
    {
      "imageURL": "https://www.ocbc.com/assets/images/uploads/Cards_Images/inside_compare/card_plus3.png",
      "keywords": "rebate,plus,plus!,FairPrice,Unity,Popular,fuel,petrol,esso,caltex,ntuc,supermarket,groceries,NTUC,member",
      "name": "OCBC NTUC Plus! Credit Card",
      "productURL": "https://plus.com.sg/apply/cards/ntuc-plus-visa-credit-card",
      "tagLine": "Best card to save on everything"
    },
    {
      "imageURL": "https://www.ocbc.com/assets/images/uploads/Cards_Images/inside_compare/card_plus2.png",
      "keywords": "rebate,plus,plus!,FairPrice,Unity,Popular,fuel,petrol,esso,caltex,ntuc,supermarket,groceries,NTUC",
      "name": "OCBC Plus! Credit Card",
      "productURL": "https://plus.com.sg/apply/cards/plus-visa-credit-card",
      "tagLine": "Best card to save on everything"
    }
  ]
}));  
   });



/*app.get('bharatiaxa/getPremiumDate',function(req,res){
	res.writeHead(200,{'Content-Type':'application/json'});
	res.end(JSON.stringify({"policies":[{"policyNumber":"19876589","policyStartDate":"2/7/2007","policyType":"Quarterly","policyName":"Invest Once","investmentAmount":"20,000","policyEndDate":"2/7/2017","policyMaturityDate":"2/7/2017","premiumPaymentDate":""},{"policyNumber":"9348209","policyStartDate":"7/6/2016","policyType":"Half-yearly","policyName":"eAajeevan Sampatti+","premiumAmount":"31,000","policyEndDate":"27/7/2031","premiumPaymentDate":"7/12/2016","policyMaturityDate":"27/7/2031","paymentTerm":"15Years"},{"policyNumber":"1987650","policyStartDate":"12/8/2013","policyType":"Annual","policyName":"Monthly Income+","premiumAmount":"35,715","policyEndDate":"27/5/2020","premiumPaymentDate":"12/8/2016","policyMaturityDate":"27/5/2028"}]}));
});


app.get('bharatiaxa/payPremiumamount',function(req,res){
	res.writeHead(200,{'Content-Type':'application/json'});
	res.end(JSON.stringify({"policyNumber":"9348209","message":"Successfully paid the premium amount","nextPremiumDate":"27/5/2018"}));
});

app.get('bharatiaxa/getTaxCertificate',function(req,res){
	res.writeHead(200,{'Content-Type':'application/json'});
	res.end(JSON.stringify({"policyNumber":"9348209","policyName":"Jeevan Anandh","url":"http://www.revenue.ie/images/guide-paye-employees-booklet.jpg"}));

});

app.get('bharatiaxa/getPolicyDetails/:policyId',function(req,res){
	
	res.writeHead(200,{'Content-Type':'application/json'});
	if(req.params.policyId == "9348209")
	res.end(JSON.stringify({"policyNumber":"9348209","policyStartDate":"27/5/2016","policyType":"Yearly","policyName":"Jeevan Anandh","premiumAmount":"31,000","policyEndDate":"27/7/2019","premiumPaymentDate":"27/5/2017","policyMaturityDate":"27/7/2021"}));
    else if(req.params.policyId == "1987650")
	res.end(JSON.stringify({"policyNumber":"1987650","policyStartDate":"12/2/2013","policyType":"Half-yearly","policyName":"Jeevan Tarang","premiumAmount":"20,000","policyEndDate":"27/5/2018","premiumPaymentDate":"12/8/2016","policyMaturityDate":"27/5/2030"}));
    else if(req.params.policyId == "19876589")
	res.end(JSON.stringify({"policyNumber":"19876589","policyStartDate":"2/7/2007","policyType":"Quarterly","policyName":"Abhinay","premiumAmount":"20,000","policyEndDate":"2/7/2020","policyMaturityDate":"2/7/2024","premiumPaymentDate":"12/6/2016"}));
    

});*/
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
