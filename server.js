var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

require('./routes/apiRoutes')(app);
require('./routes/htmlroutes')(app);

app.listen(PORT, function() {
    console.log(`we good on port: ${PORT}`);
});