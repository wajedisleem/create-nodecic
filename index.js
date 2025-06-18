#!/usr/bin/env node

const { program } = require('commander');

program
  .name('create-nodecic')
  .description('CLI to scaffold a new Node.js project from a template')
  .version('1.0.0')
  .argument('<project-name>', 'Name of the new project')
  .action(async (projectName) => {
    console.log(`Creating project: ${projectName}`);
  });

program.parse();