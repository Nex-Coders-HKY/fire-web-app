import { spawn } from 'node:child_process';

const args = process.argv.slice(2);
const nextArgs = ['dev'];

for (let i = 0; i < args.length; i++) {
  const arg = args[i];
  if (arg === '--host') {
    nextArgs.push('-H', args[++i] || '0.0.0.0');
  } else if (arg.startsWith('--host=')) {
    nextArgs.push('-H', arg.split('=')[1]);
  } else if (arg === '--port') {
    nextArgs.push('-p', args[++i] || '3000');
  } else if (arg.startsWith('--port=')) {
    nextArgs.push('-p', arg.split('=')[1]);
  } else {
    nextArgs.push(arg);
  }
}

if (!nextArgs.includes('-p')) {
  nextArgs.push('-p', '3000');
}
if (!nextArgs.includes('-H')) {
  nextArgs.push('-H', '0.0.0.0');
}

const child = spawn('npx', ['next', ...nextArgs], {
  stdio: 'inherit',
  env: { ...process.env, PORT: '3000' },
});

child.on('exit', (code) => {
  process.exit(code ?? 0);
});
