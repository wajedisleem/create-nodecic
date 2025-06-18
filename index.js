#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const execa = require('execa');
const { program } = require('commander');

program
  .name('create-nodecic')
  .description('CLI to scaffold a new Node.js project from a template')
  .version('1.0.0')
  .argument('<project-name>', 'Name of the new project')
  .action(async (projectName) => {
    const currentDir = process.cwd();
    const projectPath = path.join(currentDir, projectName);
    const templatePath = path.join(__dirname, 'template');

    if (fs.existsSync(projectPath)) {
      console.error(`❌ The folder "${projectName}" already exists!`);
      process.exit(1);
    }

    try {
      console.log(`📂 Creating project directory at ${projectPath} ...`);
      await fs.copy(templatePath, projectPath);

      console.log(`\n📄 Initializing package.json ...`);
      await execa('npm', ['init', '-y'], { cwd: projectPath, stdio: 'inherit' });
      
      console.log(`📦 Installing dependencies ...`);
      await execa('npm', ['install', 'express'], { cwd: projectPath, stdio: 'inherit' });

      console.log(`\n✅ Project "${projectName}" created successfully!`);
      console.log(`\nTo get started:\n  cd ${projectName}\n  node index.js\n`);
    } catch (err) {
      console.error('❌ An error occurred while creating the project:', err);
    }
  });

program.parse();
