const chalk = require('chalk');
const notes = require('./notes');
const yargs = require('yargs');
//console.log(chalk.red.bgYellow('WARNING!!!!'));

yargs.version('1.1.1');
yargs.command({
  command: 'Add',
  describe: 'Add notes',
  builder:{
    title:{
      'describe':'title of note',
      'demandOption':true,
      'type': 'string'
    },
    body:{
      'describe':'body of note',
      'demandOption':true,
      'type': 'string'
    }
  },
  handler: function (argv){
    notes.addNote( argv.title,argv.body);
  }
})

yargs.command({
  command: 'Remove',
  describe: 'Remove a note',
  builder:{
    title:{
      'describe': 'title to delete a note',
      'demandOption': true,
      'type': 'string'
    }
  },
  handler: (argv)=> notes.removeNote(argv.title)
})

yargs.command({
  command: 'List',
  describe: 'List all notes',
  handler: ()=> notes.listNote()
})

yargs.command({
  command: 'Read',
  describe: 'Read notes',
  builder:{
    title:{
      'describe': 'title to find a note ',
      'demandOption': true,
      'type': 'string'
    }
  },
  handler: (argv)=> notes.readNote(argv.title)
})

yargs.parse();