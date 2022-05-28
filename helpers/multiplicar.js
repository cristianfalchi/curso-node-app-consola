require('colors');
const fs = require("fs");
const { dirname } = require("path");


const crearArchivo = async (base = 5, listar = true, hasta) => { // por defecto regresa una promesa

    try {

        let salida, consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} X ${i} = ${base * i}\n`;
            consola += `${base}` +  ' X '.blue + `${i} = ${base * i}\n`;
        }

        if(listar){
            console.log("==================".grey);
            console.log('Tabla del '.grey, `${base}`.blue);
            console.log("==================".grey);
            console.log(consola);
        }


        fs.writeFileSync(`salida/tablaDel${base}.txt`, salida);
        
        return `tablaDel${base}.txt`.america;

    } catch (error) {
        throw error
    }

}

module.exports = {
    crearArchivo
};