import childProcess from 'child_process';

import test from 'ava';

test.cb(t => {
	childProcess.execFile('./cli.js', ['--version'], {
		cwd: __dirname
	}, (err, stdout) => {
		t.ifError(err);
		t.true(stdout === '1.0.0');
		t.end();
	});
});
