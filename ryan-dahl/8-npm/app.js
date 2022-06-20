const validator = require('validator');
const chalk = require('chalk');

console.log(validator.isEmail("andisaputra@gmail.com"));
console.log(validator.isMobilePhone("081939292929", "id-ID"));
console.log(validator.isNumeric("081939292929"));
console.log("nodemon nyala");

console.log(chalk.black.italic.bgBlue("Hello World!!"));
const pesan = chalk`Lorem ipsum dolor {bgRed.italic sit amet} consectetur adipisicing elit. Iusto, nesciunt?`;
console.log(pesan);