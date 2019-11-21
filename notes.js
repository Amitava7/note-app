const fs = require('fs');
const chalk = require('chalk');

const getNotes = function(){
  return 'your notes';
}
chalk.random = str =>chalk.hex(Math.floor(Math.random() * 16777215).toString(16))(str);

const addNote = function(title, body){
  let notes = loadNotes();
  debugger
  if(!(notes.find(n=> n.title==title))){
  notes.push({title,body })
  fs.writeFileSync('notes.json',JSON.stringify(notes,null,2));
}else
console.log(chalk.red('exists!!!!!!'));
}

const loadNotes = function (){
  try{
    let dataBuffer = fs.readFileSync('notes.json');
    return JSON.parse(dataBuffer.toString());
  } catch (e){
    return [];
  }
}
const removeNote = function (title){
  let notes = loadNotes();
  notes = notes.filter(n=>n.title!=title);
  fs.writeFileSync('notes.json',JSON.stringify(notes,null,2));
}

const listNote = function (title){
  let notes = loadNotes();
  for ( let n of notes)
  console.log(chalk.random(JSON.stringify(n,null,2)));
}

const readNote = function (title){
  let notes = loadNotes();
  console.log(chalk.random(JSON.stringify(notes.find(n=> n.title==title),null,2)));
}

module.exports = {
  getNotes,
  addNote,
  loadNotes,
  removeNote,
  listNote,
  readNote
};