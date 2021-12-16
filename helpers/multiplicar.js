const fs = require('fs');
require('colors');

const crearArchivoTabla = async(base=5, listar=false, hasta=10) =>{
    try {
        let salida = '';
        let consola = '';
        for (let i = 1; i <= hasta; i++) {
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base*i}\n`;
            salida += `${base} x ${i} = ${base*i}\n`;
        }
        if(listar)
            console.log(consola);
        const nombreArchivo = `tabla-${base}.txt`;
        fs.writeFileSync(`./salida/${nombreArchivo}`, salida);
        return  nombreArchivo;   
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivoTabla
}