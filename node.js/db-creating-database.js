import mysql from "mysql"

//we create a database
const pool = mysql.createPool({
    host: 'hostname1',
    user: 'ieva',
    password: '123',
    database: 'ieva-db',
})

//we export it so it is available outside this file
export default pool