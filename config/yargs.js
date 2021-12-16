const argv = require('yargs')
                    .option('b',{
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Es la base de la tabla de multiplicar'
                    })
                    .option('l',{
                        alias: 'lista',
                        type: 'boolean',
                        default: false,
                        describe: 'Mostrar la tabla en consola'
                    })
                    .option('h',{
                        alias: 'hasta',
                        type: 'number',
                        default: 10,
                        describe: 'Hasta que numero ira la tabla'
                    })
                    .check( (argv, options) => {
                        if( isNaN(argv.b) ) {
                                throw 'La base tiene que ser un numero';
                        }
                        if( isNaN(argv.h) ) {
                            throw 'Este parametro tiene que ser un numero';
                        }
                        return true;
                    })
                    .argv;

module.exports = argv;