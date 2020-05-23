var notes = require('../db/db.json');
var fs = require('fs');

module.exports = function(app) {
    
    app.get('/api/notes', function(req, res) {
        res.json(notes);
    })

    app.post('/api/notes', function(req, res) {
        console.log('notes:', notes);
        notes.push(req.body);
        console.log('notes:', notes);
        for (i=0; i < notes.length; i++) {
            notes[i].id = i.toString();
        }
        notes = JSON.stringify(notes, '', 4);
        fs.writeFile('./db/db.json', notes, function(err) {
            if (err) throw err;
            res.json(JSON.stringify(notes));
        })
    })

    app.delete('/api/notes/:id', function(req, res) {
        // req.params.id
        var index = notes.map(x => {
            return x.id;
        }).indexOf(req.params.id);
        notes.splice(index, 1);

        fs.writeFile('./db/db.json', JSON.stringify(notes, '', 4), function(err) {
            if (err) throw err;
            res.json(notes);
        })
    })
}