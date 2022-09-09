const fs = require('fs');
const path = require('path');

module.exports = app => {
    fs.readFile("db/db.json","utf8", (err, data) => {
        if (err) throw err;
        var notes = JSON.parse(data);

        app.get("/api/notes", function(request, response) {
            response.json(notes);
        });

        app.post("/api/notes", function(request, response) {
            let inputNote = request.body;
            notes.push(inputNote);
            db();
            return console.log(inputNote);
        });
    });
}
