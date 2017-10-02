var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');

var swig  = require('swig');
var React = require('react');
var Router = require('react-router');
var routes = require('./app/routes');

//ioredis config
var Redis = require ('ioredis');
var config = {
  port: 23059,          // Redis port 
  host: 'ec2-34-251-172-53.eu-west-1.compute.amazonaws.com',   // Redis host 
  family: 4,           // 4 (IPv4) or 6 (IPv6) 
  password: 'pf12010c4b34929372f6290f9e90b23091d3e36625b467558b97452ee84c47df0',
}
var redis = new Redis(config);
var redis_sub = new Redis(config);
var redis_pub = new Redis(config);

var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.route('/redis/publish').post((req,res,next)=>{
   redis.exists(req.body.name).then(async result=>{
     if (!result==0||req.body.name=='') res.status(500).end();
     else {
      await redis.pipeline().hmset(req.body.name,req.body).expire(req.body.name,10).publish('news',req.body.name).exec((err, results)=>{});
      res.status(200).end();
     }                                             
   });
});

app.use(function(req, res) {
  Router.run(routes, req.path, function(Handler) {
    var html = React.renderToString(React.createElement(Handler));
    var page = swig.renderFile('views/index.html', { html: html });
    res.send(page);
  });
});

redis_sub.subscribe('news');
redis_sub.on('message',(channel,msg)=>{
  console.log('Receive message %s from channel %s', msg, channel);
  redis.hgetall(msg,(err,result)=>{
    console.log(result);
    io.sockets.emit('news', result);
  });
});


server.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
