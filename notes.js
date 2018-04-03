const fs = require('fs');

var addNote = (title, body) => {
    var notes = [];
    var note = {
        title,
        body
    };

    try {
        var notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    } catch (e) {
        console.log(`An error occurred, but ignoring: ${e}`);
    }

    var duplicateNotes = notes.filter(n => n.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    } else {
        console.log('Title already exists');
    }
};

var getAll = () => {
    console.log("Getting all notes...");
};

var getNote = (title) => {
    console.log(`Reading note with title '${title}'`);
};

var removeNote = (title) => {
    console.log(`Removing note with title '${title}'`)
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};