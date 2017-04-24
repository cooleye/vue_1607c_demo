require('./check-versions')()
var fs = require('fs')
var bodyParser = require('body-parser');
var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

var apiRoutes = express.Router()
// var homeRoute = express.Router();
// homeRoute.get('ddd',function(){})

// app.use('home',homeRoute)
apiRoutes.get('/users', function(req, res) {
    var appData = require('../static/data.json')
    // console.log('data:' + appData)
    res.json(appData)
})
apiRoutes.get('/removeuser', function(req, res) {

      var appData = require('../static/data.json')
      var users = appData.users;

      var id = req.query.id;
      for(let i = 0;i < users.length;i++){
        if(users[i].id == id){
          users.splice(i,1)
        }
      }
    var str = JSON.stringify({"users":users});

    fs.writeFile('./static/data.json',str,function(err){
      if(err)console.log(err)
      else console.log('数据保存成功');
      res.redirect('/api/users');
    })
})

apiRoutes.post('/adduser', function(req, res) {

    var id = req.body.id;
    var name = req.body.name;
    // console.log(id + '--' + name)
    var appData = require('../static/data.json')
    var users = appData.users;
    users.push({id:id,name:name});
    var str = JSON.stringify({"users":users});
    console.log(str)
    fs.writeFile('./static/data.json',str,function(err){
      if(err)console.log(err)
      else console.log('数据保存成功');
      res.redirect('/api/users');
    })
})

apiRoutes.get('/swiperdata', function(req, res) {
    var appData = require('../static/swiper.json')
    res.json(appData)
})

app.use('/api', apiRoutes)






var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

devMiddleware.waitUntilValid(function () {
  console.log('> Listening at ' + uri + '\n')
})

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }

  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
})
