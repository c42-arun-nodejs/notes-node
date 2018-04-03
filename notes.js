const fs = require('fs');

var fetchNotes = () => {
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
    var notes = fetchNotes();
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
    var notes = fetchNotes();

    // var index = notes.findIndex(n => n.title === title);

    // if (index === -1) {
    //     return false;
    // } else {
    //     notes.splice(index, 1);
    //     saveNotes(notes);
    //     return true;
    // }

    var filteredNotes = notes.filter(n => n.title !== title);
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};