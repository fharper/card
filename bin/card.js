#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk');
const boxen = require('boxen');
const fs = require('fs');
const path = require('path');

const avatarFilePath = path.join(
  './assets',
  process.argv.includes('--fg') ? 'avatar-fg.txt' : 'avatar.txt'
);

// Define options for Boxen
const boxenOptions = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
};

// Text + chalk definitions
const data = {
  name: chalk.green.bold('   Frédéric Harper'),
  work: chalk.white.italic.bold('Senior Developer Advocate @ npm'),
  email: chalk.cyan('fharper@npmjs.com'),
  twitter: chalk.cyan('https://twitter.com/fharper'),
  github: chalk.cyan('https://github.com/fharper'),
  linkedin: chalk.cyan('https://linkedin.com/in/fredericharper'),
  labelEmail: chalk.white.bold('   Email:'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelGitHub: chalk.white.bold('   GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
};

// Actual strings we're going to output
const heading = `${data.name}`;
const working = `   ${data.work}`;
const emailing = `${data.labelEmail}     ${data.email}`;
const twittering = `${data.labelTwitter}   ${data.twitter}`;
const githubing = `${data.labelGitHub}    ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;

// Convert image to ascii and then print the card
const output = fs.readFileSync(avatarFilePath, 'utf8').split(/\n/);

output[1] += heading;
output[3] += working;
output[7] += emailing;
output[9] += twittering;
output[11] += githubing;
output[13] += linkedining;

console.log(chalk.green(boxen(output.join('\n'), boxenOptions)));
