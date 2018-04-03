const fs = require('fs');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
var command = argv._[0];

console.log('Yargs', argv);


if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);

    if (note) {
        console.log('Note created');
        notes.logNote(note);
    } else {
        console.log('Note title taken');
    }
} else if (command === 'list') {
    var allNotes = notes.getAll();

    console.log(`Fetched ${allNotes.length} note(s).`);

    allNotes.forEach(n => notes.logNote(n)); 

} else if (command === 'read') {
    var note = notes.getNote(argv.title);

    if (note) {
        console.log('Note found:');
        notes.logNote(note);
    } else {
        console.log('Note not found');
    }
} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);

    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);

} else {
    console.log('Unknown command');
}


