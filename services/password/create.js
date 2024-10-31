// password/create.js
import chalk from 'chalk';
import prompt from 'prompt';
import handle from './handle.js';

const promptSchemaPassword = {
  name: 'strength',
  description: chalk.yellow(
    'Escolha a força da senha (1 - Fraca, 2 - Média, 3 - Forte)',
  ),
  pattern: /^[1-3]$/,
  message: 'Escolha apenas entre 1 e 3',
  required: true,
};

async function createPassword(passwordLength) {
  console.log(chalk.green('Geração de Senha Iniciada!'));

  const { strength } = await prompt.get(promptSchemaPassword);
  const length = strength === '1' ? 6 : strength === '2' ? 8 : passwordLength;

  const password = await handle(length);
  console.log(chalk.green.bold('Senha Gerada:'), password);
}

export default createPassword;
