import mysql from 'mysql2'

const connection = mysql.createConnection('mysql://ucxttemrhliebvr4:JyEG7YSMbZD3zmbOpHtM@btcsbtlxu8fxtyyveetu-mysql.services.clever-cloud.com:3306/btcsbtlxu8fxtyyveetu')
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'tasks'
// })

connection.connect(err => {
    if (err) throw err
    console.log('Connected to the MySQL server.')
})


export default connection;