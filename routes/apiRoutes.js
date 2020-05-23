var notes = require('../db/db.json');
var fs = require('fs');

module.exports = function(app) {
    
    app.get('/api/notes', function(req, res) {
        fs.readFile("db/db.json", "utf8", function (err, data) {
            if (err) throw err;
            res.json(notes);
        })
    })

    app.post('/api/notes', function(req, res) {
        notes.push(req.body);
        for (i=0; i < notes.length; i++) {
            notes[i].id = i.toString();
        }
        fs.writeFile('db/db.json', notes, function(err) {
            if (err) throw err;
            res.json(JSON.stringify(notes, '', 4));
        })
    })

    app.delete('/api/notes/:id', function(req, res) {
        // req.params.id
        var index = notes.map(x => {
            return x.id;
        }).indexOf(req.params.id);
        notes.splice(index, 1);

        fs.writeFile('db/db.json', JSON.stringify(notes, '', 4), function(err) {
            if (err) throw err;
            res.json(notes);
        })
    })
}