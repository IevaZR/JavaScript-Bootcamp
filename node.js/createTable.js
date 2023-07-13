import pool from './db-creating-database.js'

// CREATING TABLE FROM SCRATCH ___________________________

pool.getConnection((err, connection) => {
    if (err) { //if there is an error, we send this message
        console.error('Heyy, there is an error with establishing your DB: ', err)
        return
    }
    //if connection is successfull

    const createTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL
    )
    `;

    connection.query(createTableQuery, (err, response) => {
        if (err) {
            console.error('There is a problem creating table', err)
            return
        }

        //if no error
        console.log('Your table has been created successfully', response)
    })
})

// END OF CREATING TABLE FROM SCRATCH ___________________