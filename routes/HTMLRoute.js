const path = require('path');

module.exports = (app) => {
  app.get("/notes", (request, response) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });
  app.get("*", (request, response) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  })
};