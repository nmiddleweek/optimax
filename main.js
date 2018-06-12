const program = require('commander'),
    packageJSON = require('./package.json');

program
    .version(packageJSON.version)
    .option('-p, --project [name]', 'Create a new Project')
    .option('-e, --experiment [name]', 'Create a new Experiment')
    .option('-v, --variant [name]', 'Create a new Variant')
    .parse(process.argv);

console.log("hello");
