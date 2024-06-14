import mysql from 'mysql2'

const connection = mysql.createConnection('mysql://Tasks_greatestmy:9f135c80f363c08389a1f408811f9655aa84406a@41c.h.filess.io:3307/Tasks_greatestmy')


connection.connect(err => {
    if (err) throw err
    console.log('Connected to the MySQL server.')
})


export default connection;