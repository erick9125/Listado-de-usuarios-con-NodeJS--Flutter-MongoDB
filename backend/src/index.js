const app = require('./app');
const { connect } = require('./database');

async function  main() {
    //conexion base de datos
    await connect();
    //express
   await app.listen(4000);
   console.log('Server en puerto 4000: Conectado');
}

main();