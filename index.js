const { prompt } = require('enquirer');
const chalk = require('chalk');
const figlet = require('figlet');
const boxen = require('boxen');

function bin2Dec(valor) {
  const binario = valor.value;
  const tam = binario.length;

  let decimal = 0;
  for (let i = tam - 1; i >= 0; i -= 1) {
    if (binario[i] === '1') {
      decimal += 2 ** (tam - 1 - i);
    }
  }

  console.log();
  console.log('');
  console.log(
    `${chalk.green(
      boxen(decimal.toString(), { padding: 2, borderStyle: 'double' }),
    )}`,
  );
  console.log('');
  console.log('');
}

async function startCli() {
  console.log('');
  console.log('');

  console.log(
    chalk.green(
      figlet.textSync('Bin2Dec', {
        font: 'Ghost',
        horizontalLayout: 'default',
        verticalLayout: 'default',
      }),
    ),
  );

  console.log('');
  console.log('');
  console.log('');
  console.log('');

  const response = await prompt({
    type: 'input',
    name: 'value',
    message: 'Qual número binário deseja converter?',
    validate(value) {
      if (value.length === 0) {
        return 'Você deve inserir ao menos um digito decimal para prosseguir';
      }
      const re = new RegExp('[^0-1]');
      const notValid = re.test(value);
      return notValid ? 'Você só pode inserir 0 e 1' : true;
    },
  });
  bin2Dec(response);
}

startCli();
