import connection from "../DB/connectionDB.js";

export const addTask = (req, res) => {
    const { title, description } = req.body
    const sql = `INSERT INTO tasks (title, description) VALUES ('${title}', '${description}')`
    connection.execute(sql, (err, result) => {
        if (err) console.log(err);
        return res.send(result)
    })
}


export const getTasks = (req, res) => {
    let query = `SELECT * FROM tasks`
    connection.execute(query, (err, result) => {
        if (err) console.log(err);
        return res.json({ result })
    })
}

export const deleteTask = (req, res) => {
    const { id } = req.params
    let query = `DELETE FROM tasks WHERE id = ${id}`
    connection.execute(query, (err, result) => {
        if (err) console.log(err);
        return res.json({ result })
    })
}

export const doneTask = (req, res) => {
    const { id } = req.params
    let query = `UPDATE tasks SET status ='Done' WHERE id = '${id}' `
    connection.execute(query, (err, result) => {
        if (err) console.log(err);
        return res.json({ result })
    })
}