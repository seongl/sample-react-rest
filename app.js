var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

var photoRouter = express.Router();
photoRouter.route('/Photos/:photoId')
	.get(function(req, res) {
		res.sendFile('/home/seongl/nodepractice/images/' + req.params.photoId + '.jpg');
	});
app.use('/api', photoRouter);

app.get('/', function(req, res) {
	res.send('Node is up!');
});

app.listen(port, function() {
	console.log('Running on PORT: ' + port);
});
