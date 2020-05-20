var notes = require('../db/db.json');
var idCount = 0;

module.exports = function(app) {
    app.get('/api/notes', function(req, res) {
        res.json(notes);
    })

    app.post('/api/notes', function(req, res) {
        notes.id = toString(idCount);
        idCount ++;
        notes.push(req.body);
    })
}