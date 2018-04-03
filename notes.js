
var addNote = (title, body) => {
    console.log(`Adding new note with title: '${title}'; body: '${body}'`);
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