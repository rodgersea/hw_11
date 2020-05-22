var notes = require('../db/db.json');

module.exports = function(app) {
    app.get('/api/notes', function(req, res) {
        res.json(notes);
    })

    app.post('/api/notes', function(req, res) {
        notes.push(req.body);
        console.log('notes', notes);
        for (i=0; i < notes.length; i++) {
            notes[i].id = i.toString();
            console.log(notes[i]);
        }
    })

    app.delete('/api/notes/:id', function(req, res) {
        console.log('id:', req.params.id);
        var index = notes.map(x => {
            return x.id;
        }).indexOf(req.params.id);

        console.log('index', index);
        console.log('notes0', notes);
        notes.splice(index, 1);
        console.log('notes1', notes);
    })
}