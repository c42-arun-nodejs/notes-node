const fs = require('fs');

var readNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = readNotes();
    var note = {
        title,
        body
    };
    var duplicateNotes = notes.filter(n => n.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);

        return note;
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