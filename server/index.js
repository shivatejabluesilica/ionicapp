
var logger = require('morgan'),
cors = require('cors'),
http = require('http'),
express = require('express'),
errorhandler = require('errorhandler'),
bodyParser = require('body-parser'),
mongoose = require('mongoose'),
helmet = require('helmet'),
config = require('./config.json');
var shortid = require('shortid');

var app = express();
app.use(helmet())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

if (process.env.NODE_ENV === 'development') {
app.use(logger('dev'));
app.use(errorhandler())
}

var port = process.env.PORT || 3001;

mongoose.Promise = global.Promise;
mongoose.connect(config.database,{useMongoClient: true});

//app.use(require('./todo-routes'));
app.use(require('./login'));
app.use(require('./signin'));

http.createServer(app).listen(port, function (err) {
console.log('listening in http://localhost:' + port);
});