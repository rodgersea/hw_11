
var express = require('express');
var app = express();
var path = require("path");
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static(__dirname + "/public"))

require('./routes/apiRoutes')(app);
require('./routes/htmlroutes')(app);

app.listen(PORT, function() {
    console.log(`Successfully initialized server on PORT: ${PORT}`);
});
