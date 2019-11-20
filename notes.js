const fs = require('fs');

const getNotes = function(){
  return 'your notes';
}

const addNote = function(title, body){
  let notes = loadNotes();
  let note = {title,body }
  fs.writeFileSync('notes.json',JSON.stringify(note))
}

const loadNotes = function (){
  try{
    let dataBuffer = fs.readFileSync('notes.json');
    return JSON.parse(dataBuffer.toString());
  } catch (e){
    return [];
  }


}
module.exports = {
  getNotes,
  addNote,
  loadNotes
};