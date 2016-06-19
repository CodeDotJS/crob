#!/usr/bin/env node

'use strict';

const argument = require('path').resolve(process.cwd(), process.argv[2] || '');
const colors = require('colors/safe');

const execute = 'chromium-browser ';
const arg = process.argv[2];
const dotTemplate = colors.cyan.bold('⚬');
const arrowTemplate = colors.green.bold('➠');
const siteTemp = colors.green('github.com facebook.com quora.com');

if (arg === '--help' || arg === '-h') {
	console.log(colors.cyan(
`
 Usage:
    ${dotTemplate} crob                 ${arrowTemplate}  open chromium browser
    ${dotTemplate} crob /path/to/file   ${arrowTemplate}  open file under chromium
    ${dotTemplate} crob -s sitename     ${arrowTemplate}  open any website

 Open Multiple Sites:
    ${dotTemplate} crob -s ${siteTemp}
`
  ));
	process.exit(1);
}

if (arg === '-s') {
	const site1 = process.argv[3];
	const site2 = process.argv[4];
	const site3 = process.argv[5];
	if (site1 && site2 && site3 !== undefined) {
		require('child_process').exec(`${execute} ${site1} ${site2} ${site3}`);

		process.exit(1);
	}

	if (site1 && site2 !== undefined && site3 === undefined) {
		require('child_process').exec(`${execute} ${site1} ${site2}`);

		process.exit(1);
	}

	if (site1) {
		require('child_process').exec(`${execute} ${site1}`);
	}
	process.exit(1);
}

if (process.argv[2]) {
	require('child_process').exec(`${execute} ${argument}`);
} else {
	require('child_process').exec('chromium-browser');
}
