import {Sequelize} from 'sequelize';

function createDatabaseInstance(){
    const db= 'node_assignment';
    const user='root';
    const password='1234';
    const host='localhost';
    const port=3306;

if(!db ||!user ||! !password ||!host){
    console.log("database configuration missing")
}
const database= new Sequelize({
    database: db,
    username: user,
    password: password,
    host: host,
    port:port,
    ssl:true,
    dialect:'mysql',
    dialectOptions:{
        ssl:{
            require:true,
            rejectUnauthorized: false,
        },
    }

});
}
export default createDatabaseInstance