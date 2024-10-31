// index.js
import prompt from 'prompt';
import chalk from 'chalk';
import promptSchemaMain from './prompts-schema/schema-main.js';
import createQRCode from './services/qrcode/create.js';
import createPassword from './services/password/create.js';
import { config } from './config/env.js';

async function main() {
  console.log(chalk.cyan.bold('Bem-vindo ao Gerador de Ferramentas!'));
  prompt.start();

  prompt.get(promptSchemaMain, async (err, choose) => {
    if (err) return console.log(chalk.red.bold('Erro:', err));

    switch (choose.select) {
      case '1':
        await createQRCode();
        break;
      case '2':
        await createPassword(config.PASSWORD_LENGTH);
        break;
      default:
        console.log(chalk.red('Escolha inválida.'));
    }
  });
}

main();
