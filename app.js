const chalk = require('chalk');
const notes = require('./notes');
const yargs = require('yargs');
//console.log(chalk.red.bgYellow('WARNING!!!!'));

yargs.version('1.1.1');
yargs.command({
  command: 'add',
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
    //notes.addNote( argv.title,argv.body);
    console.log(notes.loadNotes());
  }
})

yargs.command({
  command: 'Remove',
  describe: 'Remove notes',
  handler: ()=> console.log('Removeing notes..')
})

yargs.command({
  command: 'List',
  describe: 'List notes',
  handler: ()=> console.log('Listing notes..')
})

yargs.command({
  command: 'Read',
  describe: 'Read notes',
  handler: ()=> console.log('Reading notes..')
})

yargs.parse();