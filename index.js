#!/usr/bin/env node

const { program } = require('commander');

program
  .name('create-nodecic')
  .description('CLI to scaffold a new Node.js project from a template')
  .version('1.0.0')
  .argument('<project-name>', 'Name of the new project')
  .action(async (projectName) => {
    const currentDir = process.cwd();
    const projectPath = path.join(currentDir, projectName);
    
    if (fs.existsSync(projectPath)) {
      console.error(`❌ The folder "${projectName}" already exists!`);
      process.exit(1);
    }
  });

program.parse();
