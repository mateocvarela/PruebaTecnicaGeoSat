const { error } = require('console');
const { Pool} = require('pg');


const config = {

user :'postgres',
host:'localhost',
password:'inicio.123',
database: 'GEOSAT'

};

const conexion = new Pool(config);

conexion.connect((error)=> {

    if (error) {



        console.error('el error de conexion  es : ' + error);
        return
    }
    console.log('conectado a la bd postgres')


})
module.exports = conexion;
