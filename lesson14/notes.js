console.log('Starting notes.js');

let addNote = (title, body) => {
  console.log('Adding Note', title, body);
};

let getAll = () => {
  console.log('Getting all notes');
};

let getNote = (title) => {
  console.log('Reading Note', title);
};

let removeNote = (title) => {
  console.log('Removing Note', title);
};

module.exports = {
  addNote, //equivale a "addNote: addNote"
  getAll,
  getNote,
  removeNote
};
