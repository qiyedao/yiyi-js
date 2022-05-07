#!/usr/bin/env node
const { Command } = require('commander');
const program = new Command();
const chalk = require('chalk');
const pkg = require('../package.json');
const { checkFile } = require('../index');
program
    // .command('g')
    .version(pkg.version)
    .description('cp file to dir and rename or cp dir ,if exists override')
    .usage(`${chalk.green('<origin-path dest-path >')} [options]`)
    .arguments('<origin-path> <dest-path>', 'copy files')
    .option('-r, --rename <new name>', 'rename file')

    .action((origin, dest, options) => {
        checkFile(origin, dest, options);
    });
program.parse();
