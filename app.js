//const { argv } = require('process');
const { crearArchivoTabla } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');

//console.log(process.argv);
console.clear();
/*const [,,arg3 = 'base=5'] = process.argv;
const [,base=5] = arg3.split('=');*/
//const base = 1;
crearArchivoTabla(argv.b, argv.l, argv.h)
.then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado') )
.catch( err => console.log(err) );